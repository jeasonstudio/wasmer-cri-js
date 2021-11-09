// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Container as _runtime_v1alpha2_Container, Container__Output as _runtime_v1alpha2_Container__Output } from './Container';

export interface ListContainersResponse {
  'containers'?: (_runtime_v1alpha2_Container)[];
}

export interface ListContainersResponse__Output {
  'containers'?: (_runtime_v1alpha2_Container__Output)[];
}
