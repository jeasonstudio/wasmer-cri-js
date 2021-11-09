// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto


export interface ExecSyncResponse {
  'stdout'?: (Buffer | Uint8Array | string);
  'stderr'?: (Buffer | Uint8Array | string);
  'exitCode'?: (number);
}

export interface ExecSyncResponse__Output {
  'stdout'?: (Buffer);
  'stderr'?: (Buffer);
  'exitCode'?: (number);
}
