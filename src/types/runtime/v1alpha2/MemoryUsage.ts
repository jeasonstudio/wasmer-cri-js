// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { UInt64Value as _runtime_v1alpha2_UInt64Value, UInt64Value__Output as _runtime_v1alpha2_UInt64Value__Output } from './UInt64Value';
import type { Long } from '@grpc/proto-loader';

export interface MemoryUsage {
  'timestamp'?: (number | string | Long);
  'workingSetBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'availableBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'usageBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'rssBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'pageFaults'?: (_runtime_v1alpha2_UInt64Value | null);
  'majorPageFaults'?: (_runtime_v1alpha2_UInt64Value | null);
}

export interface MemoryUsage__Output {
  'timestamp'?: (Long);
  'workingSetBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'availableBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'usageBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'rssBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'pageFaults'?: (_runtime_v1alpha2_UInt64Value__Output);
  'majorPageFaults'?: (_runtime_v1alpha2_UInt64Value__Output);
}
