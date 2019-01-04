import {Fetcher, FetchOptions, FetchResult, MinimalFetchOptions} from '@berry/core';
import {Locator}                                                 from '@berry/core';
import {structUtils}                                             from '@berry/core';
import {JailFS, NodeFS}                                          from '@berry/zipfs';
import {posix}                                                   from 'path';
import querystring                                               from 'querystring';

import {RAW_LINK_PROTOCOL}                                       from './constants';

export class RawLinkFetcher implements Fetcher {
  public mountPoint: string = `virtual-fetchers`;

  supports(locator: Locator, opts: MinimalFetchOptions) {
    if (!locator.reference.startsWith(RAW_LINK_PROTOCOL))
      return false;

    return true;
  }

  async fetch(locator: Locator, opts: FetchOptions) {
    const {parentLocator, linkPath} = this.parseLocator(locator);

    const [baseFs, release] = posix.isAbsolute(linkPath)
      ? [new NodeFS(), async () => {}]
      : await opts.fetcher.fetch(parentLocator, opts);

    return [new JailFS(linkPath, {baseFs}), release] as FetchResult;
  }

  private parseLocator(locator: Locator) {
    const qsIndex = locator.reference.indexOf(`?`);

    if (qsIndex === -1)
      throw new Error(`Invalid link-type locator`);

    const linkPath = locator.reference.slice(RAW_LINK_PROTOCOL.length, qsIndex);
    const queryString = querystring.parse(locator.reference.slice(qsIndex + 1));

    if (typeof queryString.locator !== `string`)
      throw new Error(`Invalid link-type locator`);

    const parentLocator = structUtils.parseLocator(queryString.locator);

    return {parentLocator, linkPath};
  }
}
