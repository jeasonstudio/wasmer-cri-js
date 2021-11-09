// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerStateValue as _runtime_v1alpha2_ContainerStateValue, ContainerStateValue__Output as _runtime_v1alpha2_ContainerStateValue__Output } from './ContainerStateValue';

export interface ContainerFilter {
  'id'?: (string);
  'state'?: (_runtime_v1alpha2_ContainerStateValue | null);
  'podSandboxId'?: (string);
  'labelSelector'?: ({[key: string]: string});
}

export interface ContainerFilter__Output {
  'id'?: (string);
  'state'?: (_runtime_v1alpha2_ContainerStateValue__Output);
  'podSandboxId'?: (string);
  'labelSelector'?: ({[key: string]: string});
}
