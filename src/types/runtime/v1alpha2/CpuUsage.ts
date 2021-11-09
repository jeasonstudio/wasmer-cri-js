// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { UInt64Value as _runtime_v1alpha2_UInt64Value, UInt64Value__Output as _runtime_v1alpha2_UInt64Value__Output } from './UInt64Value';
import type { Long } from '@grpc/proto-loader';

export interface CpuUsage {
  'timestamp'?: (number | string | Long);
  'usageCoreNanoSeconds'?: (_runtime_v1alpha2_UInt64Value | null);
  'usageNanoCores'?: (_runtime_v1alpha2_UInt64Value | null);
}

export interface CpuUsage__Output {
  'timestamp'?: (Long);
  'usageCoreNanoSeconds'?: (_runtime_v1alpha2_UInt64Value__Output);
  'usageNanoCores'?: (_runtime_v1alpha2_UInt64Value__Output);
}
