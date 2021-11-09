// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Int64Value as _runtime_v1alpha2_Int64Value, Int64Value__Output as _runtime_v1alpha2_Int64Value__Output } from './Int64Value';
import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';
import type { Long } from '@grpc/proto-loader';

export interface Image {
  'id'?: (string);
  'repoTags'?: (string)[];
  'repoDigests'?: (string)[];
  'size'?: (number | string | Long);
  'uid'?: (_runtime_v1alpha2_Int64Value | null);
  'username'?: (string);
  'spec'?: (_runtime_v1alpha2_ImageSpec | null);
}

export interface Image__Output {
  'id'?: (string);
  'repoTags'?: (string)[];
  'repoDigests'?: (string)[];
  'size'?: (Long);
  'uid'?: (_runtime_v1alpha2_Int64Value__Output);
  'username'?: (string);
  'spec'?: (_runtime_v1alpha2_ImageSpec__Output);
}
