// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { UInt64Value as _runtime_v1alpha2_UInt64Value, UInt64Value__Output as _runtime_v1alpha2_UInt64Value__Output } from './UInt64Value';
import type { Long } from '@grpc/proto-loader';

export interface ProcessUsage {
  'timestamp'?: (number | string | Long);
  'processCount'?: (_runtime_v1alpha2_UInt64Value | null);
}

export interface ProcessUsage__Output {
  'timestamp'?: (Long);
  'processCount'?: (_runtime_v1alpha2_UInt64Value__Output);
}
