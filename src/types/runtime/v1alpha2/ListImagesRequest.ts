// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ImageFilter as _runtime_v1alpha2_ImageFilter, ImageFilter__Output as _runtime_v1alpha2_ImageFilter__Output } from './ImageFilter';

export interface ListImagesRequest {
  'filter'?: (_runtime_v1alpha2_ImageFilter | null);
}

export interface ListImagesRequest__Output {
  'filter'?: (_runtime_v1alpha2_ImageFilter__Output);
}
