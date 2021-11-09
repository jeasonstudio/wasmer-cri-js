// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';

export interface ImageStatusRequest {
  'image'?: (_runtime_v1alpha2_ImageSpec | null);
  'verbose'?: (boolean);
}

export interface ImageStatusRequest__Output {
  'image'?: (_runtime_v1alpha2_ImageSpec__Output);
  'verbose'?: (boolean);
}
