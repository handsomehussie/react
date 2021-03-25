/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

import typeof * as FeatureFlagsType from 'shared/ReactFeatureFlags';
import typeof * as ExportsType from './ReactFeatureFlags.www';
import typeof * as DynamicFeatureFlags from './ReactFeatureFlags.www-dynamic';

export const debugRenderPhaseSideEffectsForStrictMode = false;
export const disableInputAttributeSyncing = false;
export const enableTrustedTypesIntegration = false;
export const disableSchedulerTimeoutBasedOnReactExpirationTime = false;
export const warnAboutSpreadingKeyToJSX = false;
export const replayFailedUnitOfWorkWithInvokeGuardedCallback = false;
export const enableFilterEmptyStringAttributesDOM = false;
export const enableLegacyFBSupport = false;
export const deferRenderPhaseUpdateToNextBatch = false;
export const enableDebugTracing = false;
export const skipUnmountedBoundaries = false;
export const enableStrictEffects = false;
export const createRootStrictEffectsByDefault = false;
export const enableUseRefAccessWarning = false;
export const disableNativeComponentFrames = false;
export const disableSchedulerTimeoutInWorkLoop = false;
export const enableLazyContextPropagation = false;
export const deletedTreeCleanUpLevel = false;
export const enableProfilerTimer = false;
export const enableProfilerCommitHooks = false;
export const enableProfilerNestedUpdatePhase = false;
export const enableProfilerNestedUpdateScheduledHook = false;
export const enableSchedulingProfiler = false;
export const enableSchedulerTracing = false;
export const enableSchedulerDebugging = false;
export const warnAboutDeprecatedLifecycles = false;
export const disableLegacyContext = false;
export const warnAboutStringRefs = false;
export const warnAboutDefaultPropsOnFunctionComponents = false;
export const enableSuspenseServerRenderer = true; /// This flag is needed to repro the problem
export const enableSelectiveHydration = false;
export const enableLazyElements = false;
export const enableCache = false;
export const disableJavaScriptURLs = false;
export const disableModulePatternComponents = false;
export const enableCreateEventHandleAPI = false;
export const enableScopeAPI = false;
export const warnAboutUnmockedScheduler = false;
export const enableSuspenseCallback = false;
export const enableComponentStackLocations = false;
export const disableTextareaChildren = false;
export const warnUnstableRenderSubtreeIntoContainer = false;
export const enableDiscreteEventFlushingChange = false;
export const enableNewReconciler = false;
export const enableRecursiveCommitTraversal = false;

// Flow magic to verify the exports of this file match the original version.
// eslint-disable-next-line no-unused-vars
type Check<_X, Y: _X, X: Y = _X> = null;
// eslint-disable-next-line no-unused-expressions
(null: Check<ExportsType, FeatureFlagsType>);
