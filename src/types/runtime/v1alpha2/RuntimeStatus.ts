// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { RuntimeCondition as _runtime_v1alpha2_RuntimeCondition, RuntimeCondition__Output as _runtime_v1alpha2_RuntimeCondition__Output } from './RuntimeCondition';

export interface RuntimeStatus {
  'conditions'?: (_runtime_v1alpha2_RuntimeCondition)[];
}

export interface RuntimeStatus__Output {
  'conditions'?: (_runtime_v1alpha2_RuntimeCondition__Output)[];
}
