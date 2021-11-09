// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { WindowsSandboxSecurityContext as _runtime_v1alpha2_WindowsSandboxSecurityContext, WindowsSandboxSecurityContext__Output as _runtime_v1alpha2_WindowsSandboxSecurityContext__Output } from './WindowsSandboxSecurityContext';

export interface WindowsPodSandboxConfig {
  'securityContext'?: (_runtime_v1alpha2_WindowsSandboxSecurityContext | null);
}

export interface WindowsPodSandboxConfig__Output {
  'securityContext'?: (_runtime_v1alpha2_WindowsSandboxSecurityContext__Output);
}
