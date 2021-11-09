// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Long } from '@grpc/proto-loader';

export interface HugepageLimit {
  'pageSize'?: (string);
  'limit'?: (number | string | Long);
}

export interface HugepageLimit__Output {
  'pageSize'?: (string);
  'limit'?: (Long);
}
