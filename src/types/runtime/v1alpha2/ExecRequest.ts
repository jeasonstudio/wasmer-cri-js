// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto


export interface ExecRequest {
  'containerId'?: (string);
  'cmd'?: (string)[];
  'tty'?: (boolean);
  'stdin'?: (boolean);
  'stdout'?: (boolean);
  'stderr'?: (boolean);
}

export interface ExecRequest__Output {
  'containerId'?: (string);
  'cmd'?: (string)[];
  'tty'?: (boolean);
  'stdin'?: (boolean);
  'stdout'?: (boolean);
  'stderr'?: (boolean);
}
