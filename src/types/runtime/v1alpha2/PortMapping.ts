// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type { Protocol as _runtime_v1alpha2_Protocol } from './Protocol';

export interface PortMapping {
  'protocol'?: (_runtime_v1alpha2_Protocol | keyof typeof _runtime_v1alpha2_Protocol);
  'containerPort'?: (number);
  'hostPort'?: (number);
  'hostIp'?: (string);
}

export interface PortMapping__Output {
  'protocol'?: (_runtime_v1alpha2_Protocol);
  'containerPort'?: (number);
  'hostPort'?: (number);
  'hostIp'?: (string);
}
