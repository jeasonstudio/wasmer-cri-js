// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { MountPropagation as _runtime_v1alpha2_MountPropagation } from './MountPropagation';

export interface Mount {
  'containerPath'?: (string);
  'hostPath'?: (string);
  'readonly'?: (boolean);
  'selinuxRelabel'?: (boolean);
  'propagation'?: (_runtime_v1alpha2_MountPropagation | keyof typeof _runtime_v1alpha2_MountPropagation);
}

export interface Mount__Output {
  'containerPath'?: (string);
  'hostPath'?: (string);
  'readonly'?: (boolean);
  'selinuxRelabel'?: (boolean);
  'propagation'?: (_runtime_v1alpha2_MountPropagation);
}
