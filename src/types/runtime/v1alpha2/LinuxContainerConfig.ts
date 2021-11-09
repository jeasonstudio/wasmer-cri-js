// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { LinuxContainerResources as _runtime_v1alpha2_LinuxContainerResources, LinuxContainerResources__Output as _runtime_v1alpha2_LinuxContainerResources__Output } from './LinuxContainerResources';
import type { LinuxContainerSecurityContext as _runtime_v1alpha2_LinuxContainerSecurityContext, LinuxContainerSecurityContext__Output as _runtime_v1alpha2_LinuxContainerSecurityContext__Output } from './LinuxContainerSecurityContext';

export interface LinuxContainerConfig {
  'resources'?: (_runtime_v1alpha2_LinuxContainerResources | null);
  'securityContext'?: (_runtime_v1alpha2_LinuxContainerSecurityContext | null);
}

export interface LinuxContainerConfig__Output {
  'resources'?: (_runtime_v1alpha2_LinuxContainerResources__Output);
  'securityContext'?: (_runtime_v1alpha2_LinuxContainerSecurityContext__Output);
}
