// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { ContainerMetadata as _runtime_v1alpha2_ContainerMetadata, ContainerMetadata__Output as _runtime_v1alpha2_ContainerMetadata__Output } from './ContainerMetadata';
import type { ContainerState as _runtime_v1alpha2_ContainerState } from './ContainerState';
import type { ImageSpec as _runtime_v1alpha2_ImageSpec, ImageSpec__Output as _runtime_v1alpha2_ImageSpec__Output } from './ImageSpec';
import type { Mount as _runtime_v1alpha2_Mount, Mount__Output as _runtime_v1alpha2_Mount__Output } from './Mount';
import type { Long } from '@grpc/proto-loader';

export interface ContainerStatus {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata | null);
  'state'?: (_runtime_v1alpha2_ContainerState | keyof typeof _runtime_v1alpha2_ContainerState);
  'createdAt'?: (number | string | Long);
  'startedAt'?: (number | string | Long);
  'finishedAt'?: (number | string | Long);
  'exitCode'?: (number);
  'image'?: (_runtime_v1alpha2_ImageSpec | null);
  'imageRef'?: (string);
  'reason'?: (string);
  'message'?: (string);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'mounts'?: (_runtime_v1alpha2_Mount)[];
  'logPath'?: (string);
}

export interface ContainerStatus__Output {
  'id'?: (string);
  'metadata'?: (_runtime_v1alpha2_ContainerMetadata__Output);
  'state'?: (_runtime_v1alpha2_ContainerState);
  'createdAt'?: (Long);
  'startedAt'?: (Long);
  'finishedAt'?: (Long);
  'exitCode'?: (number);
  'image'?: (_runtime_v1alpha2_ImageSpec__Output);
  'imageRef'?: (string);
  'reason'?: (string);
  'message'?: (string);
  'labels'?: ({[key: string]: string});
  'annotations'?: ({[key: string]: string});
  'mounts'?: (_runtime_v1alpha2_Mount__Output)[];
  'logPath'?: (string);
}
