// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxState as _runtime_v1alpha2_PodSandboxState } from './PodSandboxState';

export interface PodSandboxStateValue {
  'state'?: (_runtime_v1alpha2_PodSandboxState | keyof typeof _runtime_v1alpha2_PodSandboxState);
}

export interface PodSandboxStateValue__Output {
  'state'?: (_runtime_v1alpha2_PodSandboxState);
}
