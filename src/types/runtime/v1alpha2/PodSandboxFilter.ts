// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { PodSandboxStateValue as _runtime_v1alpha2_PodSandboxStateValue, PodSandboxStateValue__Output as _runtime_v1alpha2_PodSandboxStateValue__Output } from './PodSandboxStateValue';

export interface PodSandboxFilter {
  'id'?: (string);
  'state'?: (_runtime_v1alpha2_PodSandboxStateValue | null);
  'labelSelector'?: ({[key: string]: string});
}

export interface PodSandboxFilter__Output {
  'id'?: (string);
  'state'?: (_runtime_v1alpha2_PodSandboxStateValue__Output);
  'labelSelector'?: ({[key: string]: string});
}
