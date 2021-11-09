// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Image as _runtime_v1alpha2_Image, Image__Output as _runtime_v1alpha2_Image__Output } from './Image';

export interface ImageStatusResponse {
  'image'?: (_runtime_v1alpha2_Image | null);
  'info'?: ({[key: string]: string});
}

export interface ImageStatusResponse__Output {
  'image'?: (_runtime_v1alpha2_Image__Output);
  'info'?: ({[key: string]: string});
}
