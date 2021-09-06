// @flow

import {createContext} from 'react';
import type {
  FetchFileWithCaching,
  LoadHookNamesModuleLoaderFunction,
} from '../DevTools';

export type Context = {
  // TODO Move this function into its own, non-hooks-specific context once hooks code is in shared.
  fetchFileWithCaching: FetchFileWithCaching | null,
  loadHookNamesModuleLoaderFunction: LoadHookNamesModuleLoaderFunction | null,
};

const HookNamesContext = createContext<Context>({
  fetchFileWithCaching: null,
  loadHookNamesModuleLoaderFunction: null,
});
HookNamesContext.displayName = 'HookNamesContext';

export default HookNamesContext;
