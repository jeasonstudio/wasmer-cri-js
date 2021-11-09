// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { NetworkInterfaceUsage as _runtime_v1alpha2_NetworkInterfaceUsage, NetworkInterfaceUsage__Output as _runtime_v1alpha2_NetworkInterfaceUsage__Output } from './NetworkInterfaceUsage';
import type { Long } from '@grpc/proto-loader';

export interface NetworkUsage {
  'timestamp'?: (number | string | Long);
  'defaultInterface'?: (_runtime_v1alpha2_NetworkInterfaceUsage | null);
  'interfaces'?: (_runtime_v1alpha2_NetworkInterfaceUsage)[];
}

export interface NetworkUsage__Output {
  'timestamp'?: (Long);
  'defaultInterface'?: (_runtime_v1alpha2_NetworkInterfaceUsage__Output);
  'interfaces'?: (_runtime_v1alpha2_NetworkInterfaceUsage__Output)[];
}
