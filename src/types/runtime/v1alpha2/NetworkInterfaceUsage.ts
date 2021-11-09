// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { UInt64Value as _runtime_v1alpha2_UInt64Value, UInt64Value__Output as _runtime_v1alpha2_UInt64Value__Output } from './UInt64Value';
import type { Long } from '@grpc/proto-loader';

export interface NetworkInterfaceUsage {
  'name'?: (string);
  'rxBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'rxErrors'?: (_runtime_v1alpha2_UInt64Value | null);
  'txBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'txErrors'?: (_runtime_v1alpha2_UInt64Value | null);
}

export interface NetworkInterfaceUsage__Output {
  'name'?: (string);
  'rxBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'rxErrors'?: (_runtime_v1alpha2_UInt64Value__Output);
  'txBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'txErrors'?: (_runtime_v1alpha2_UInt64Value__Output);
}
