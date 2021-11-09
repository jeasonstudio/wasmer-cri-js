// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxStatus as _runtime_v1alpha2_PodSandboxStatus, PodSandboxStatus__Output as _runtime_v1alpha2_PodSandboxStatus__Output } from './PodSandboxStatus';

export interface PodSandboxStatusResponse {
  'status'?: (_runtime_v1alpha2_PodSandboxStatus | null);
  'info'?: ({[key: string]: string});
}

export interface PodSandboxStatusResponse__Output {
  'status'?: (_runtime_v1alpha2_PodSandboxStatus__Output);
  'info'?: ({[key: string]: string});
}
