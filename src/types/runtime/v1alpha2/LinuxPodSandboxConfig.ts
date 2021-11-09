// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { LinuxSandboxSecurityContext as _runtime_v1alpha2_LinuxSandboxSecurityContext, LinuxSandboxSecurityContext__Output as _runtime_v1alpha2_LinuxSandboxSecurityContext__Output } from './LinuxSandboxSecurityContext';

export interface LinuxPodSandboxConfig {
  'cgroupParent'?: (string);
  'securityContext'?: (_runtime_v1alpha2_LinuxSandboxSecurityContext | null);
  'sysctls'?: ({[key: string]: string});
}

export interface LinuxPodSandboxConfig__Output {
  'cgroupParent'?: (string);
  'securityContext'?: (_runtime_v1alpha2_LinuxSandboxSecurityContext__Output);
  'sysctls'?: ({[key: string]: string});
}
