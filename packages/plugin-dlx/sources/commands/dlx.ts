import {BaseCommand, WorkspaceRequiredError} from '@yarnpkg/cli';
import {Configuration, Project}              from '@yarnpkg/core';
import {scriptUtils, structUtils}            from '@yarnpkg/core';
import {Filename, ppath, toFilename, xfs}    from '@yarnpkg/fslib';
import {Command, Usage}                      from 'clipanion';

// eslint-disable-next-line arca/no-default-export
export default class DlxCommand extends BaseCommand {
  @Command.String(`-p,--package`)
  pkg: string | undefined;

  @Command.Boolean(`-q,--quiet`)
  quiet: boolean = false;

  @Command.String()
  command!: string;

  @Command.Proxy()
  args: Array<string> = [];

  static usage: Usage = Command.Usage({
    description: `run a package in a temporary environment`,
    details: `
      This command will install a package within a temporary environment, and run its binary script if it contains any. The binary will run within the current cwd.

      By default Yarn will download the package named \`command\`, but this can be changed through the use of the \`-p,--package\` flag which will instruct Yarn to still run the same command but from a different package.

      Also by default Yarn will print the full install logs when installing the given package. This behavior can be disabled by using the \`-q,--quiet\` flag which will instruct Yarn to only report critical errors.

      Using \`yarn dlx\` as a replacement of \`yarn add\` isn't recommended, as it makes your project non-deterministic (Yarn doesn't keep track of the packages installed through \`dlx\` - neither their name, nor their version).
    `,
    examples: [[
      `Use create-react-app to create a new React app`,
      `yarn dlx create-react-app ./my-app`,
    ]],
  });

  @Command.Path(`dlx`)
  async execute() {
    await xfs.mktempPromise(async baseDir => {
      const tmpDir = ppath.join(baseDir, `dlx-${process.pid}` as Filename);
      await xfs.mkdirPromise(tmpDir);

      await xfs.writeFilePromise(ppath.join(tmpDir, toFilename(`package.json`)), `{}\n`);
      await xfs.writeFilePromise(ppath.join(tmpDir, toFilename(`yarn.lock`)), ``);
      await xfs.writeFilePromise(ppath.join(tmpDir, toFilename(`.yarnrc.yml`)), `enableGlobalCache: true\n`);

      const pkgs = typeof this.pkg !== `undefined`
        ? [this.pkg]
        : [this.command];

      const command = structUtils.parseDescriptor(this.command).name;

      const addExitCode = await this.cli.run([`add`, `--`, ...pkgs], {cwd: tmpDir, quiet: this.quiet});
      if (addExitCode !== 0)
        return addExitCode;

      if (!this.quiet)
        this.context.stdout.write(`\n`);

      const configuration = await Configuration.find(tmpDir, this.context.plugins);
      const {project, workspace} = await Project.find(configuration, tmpDir);

      if (workspace === null)
        throw new WorkspaceRequiredError(project.cwd, tmpDir);

      await project.restoreInstallState();

      return await scriptUtils.executeWorkspaceAccessibleBinary(workspace, command, this.args, {
        cwd: this.context.cwd,
        stdin: this.context.stdin,
        stdout: this.context.stdout,
        stderr: this.context.stderr,
      });
    });
  }
}
