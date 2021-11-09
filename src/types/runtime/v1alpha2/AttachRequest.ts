// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto


export interface AttachRequest {
  'containerId'?: (string);
  'stdin'?: (boolean);
  'tty'?: (boolean);
  'stdout'?: (boolean);
  'stderr'?: (boolean);
}

export interface AttachRequest__Output {
  'containerId'?: (string);
  'stdin'?: (boolean);
  'tty'?: (boolean);
  'stdout'?: (boolean);
  'stderr'?: (boolean);
}
