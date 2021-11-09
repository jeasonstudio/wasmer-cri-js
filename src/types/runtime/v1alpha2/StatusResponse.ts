// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { RuntimeStatus as _runtime_v1alpha2_RuntimeStatus, RuntimeStatus__Output as _runtime_v1alpha2_RuntimeStatus__Output } from './RuntimeStatus';

export interface StatusResponse {
  'status'?: (_runtime_v1alpha2_RuntimeStatus | null);
  'info'?: ({[key: string]: string});
}

export interface StatusResponse__Output {
  'status'?: (_runtime_v1alpha2_RuntimeStatus__Output);
  'info'?: ({[key: string]: string});
}
