// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { WindowsContainerResources as _runtime_v1alpha2_WindowsContainerResources, WindowsContainerResources__Output as _runtime_v1alpha2_WindowsContainerResources__Output } from './WindowsContainerResources';
import type { WindowsContainerSecurityContext as _runtime_v1alpha2_WindowsContainerSecurityContext, WindowsContainerSecurityContext__Output as _runtime_v1alpha2_WindowsContainerSecurityContext__Output } from './WindowsContainerSecurityContext';

export interface WindowsContainerConfig {
  'resources'?: (_runtime_v1alpha2_WindowsContainerResources | null);
  'securityContext'?: (_runtime_v1alpha2_WindowsContainerSecurityContext | null);
}

export interface WindowsContainerConfig__Output {
  'resources'?: (_runtime_v1alpha2_WindowsContainerResources__Output);
  'securityContext'?: (_runtime_v1alpha2_WindowsContainerSecurityContext__Output);
}
