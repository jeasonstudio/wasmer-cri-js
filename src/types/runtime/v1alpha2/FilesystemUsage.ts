// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { FilesystemIdentifier as _runtime_v1alpha2_FilesystemIdentifier, FilesystemIdentifier__Output as _runtime_v1alpha2_FilesystemIdentifier__Output } from './FilesystemIdentifier';
import type { UInt64Value as _runtime_v1alpha2_UInt64Value, UInt64Value__Output as _runtime_v1alpha2_UInt64Value__Output } from './UInt64Value';
import type { Long } from '@grpc/proto-loader';

export interface FilesystemUsage {
  'timestamp'?: (number | string | Long);
  'fsId'?: (_runtime_v1alpha2_FilesystemIdentifier | null);
  'usedBytes'?: (_runtime_v1alpha2_UInt64Value | null);
  'inodesUsed'?: (_runtime_v1alpha2_UInt64Value | null);
}

export interface FilesystemUsage__Output {
  'timestamp'?: (Long);
  'fsId'?: (_runtime_v1alpha2_FilesystemIdentifier__Output);
  'usedBytes'?: (_runtime_v1alpha2_UInt64Value__Output);
  'inodesUsed'?: (_runtime_v1alpha2_UInt64Value__Output);
}
