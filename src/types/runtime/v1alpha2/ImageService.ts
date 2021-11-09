// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ImageFsInfoRequest as _runtime_v1alpha2_ImageFsInfoRequest, ImageFsInfoRequest__Output as _runtime_v1alpha2_ImageFsInfoRequest__Output } from './ImageFsInfoRequest';
import type { ImageFsInfoResponse as _runtime_v1alpha2_ImageFsInfoResponse, ImageFsInfoResponse__Output as _runtime_v1alpha2_ImageFsInfoResponse__Output } from './ImageFsInfoResponse';
import type { ImageStatusRequest as _runtime_v1alpha2_ImageStatusRequest, ImageStatusRequest__Output as _runtime_v1alpha2_ImageStatusRequest__Output } from './ImageStatusRequest';
import type { ImageStatusResponse as _runtime_v1alpha2_ImageStatusResponse, ImageStatusResponse__Output as _runtime_v1alpha2_ImageStatusResponse__Output } from './ImageStatusResponse';
import type { ListImagesRequest as _runtime_v1alpha2_ListImagesRequest, ListImagesRequest__Output as _runtime_v1alpha2_ListImagesRequest__Output } from './ListImagesRequest';
import type { ListImagesResponse as _runtime_v1alpha2_ListImagesResponse, ListImagesResponse__Output as _runtime_v1alpha2_ListImagesResponse__Output } from './ListImagesResponse';
import type { PullImageRequest as _runtime_v1alpha2_PullImageRequest, PullImageRequest__Output as _runtime_v1alpha2_PullImageRequest__Output } from './PullImageRequest';
import type { PullImageResponse as _runtime_v1alpha2_PullImageResponse, PullImageResponse__Output as _runtime_v1alpha2_PullImageResponse__Output } from './PullImageResponse';
import type { RemoveImageRequest as _runtime_v1alpha2_RemoveImageRequest, RemoveImageRequest__Output as _runtime_v1alpha2_RemoveImageRequest__Output } from './RemoveImageRequest';
import type { RemoveImageResponse as _runtime_v1alpha2_RemoveImageResponse, RemoveImageResponse__Output as _runtime_v1alpha2_RemoveImageResponse__Output } from './RemoveImageResponse';

export interface ImageServiceClient extends grpc.Client {
  ImageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  ImageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  ImageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  ImageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  imageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  imageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  imageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  imageFsInfo(argument: _runtime_v1alpha2_ImageFsInfoRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageFsInfoResponse__Output) => void): grpc.ClientUnaryCall;
  
  ImageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ImageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ImageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ImageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  imageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  imageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  imageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  imageStatus(argument: _runtime_v1alpha2_ImageStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ImageStatusResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListImages(argument: _runtime_v1alpha2_ListImagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  ListImages(argument: _runtime_v1alpha2_ListImagesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  ListImages(argument: _runtime_v1alpha2_ListImagesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  ListImages(argument: _runtime_v1alpha2_ListImagesRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  listImages(argument: _runtime_v1alpha2_ListImagesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  listImages(argument: _runtime_v1alpha2_ListImagesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  listImages(argument: _runtime_v1alpha2_ListImagesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  listImages(argument: _runtime_v1alpha2_ListImagesRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListImagesResponse__Output) => void): grpc.ClientUnaryCall;
  
  PullImage(argument: _runtime_v1alpha2_PullImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  PullImage(argument: _runtime_v1alpha2_PullImageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  PullImage(argument: _runtime_v1alpha2_PullImageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  PullImage(argument: _runtime_v1alpha2_PullImageRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  pullImage(argument: _runtime_v1alpha2_PullImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  pullImage(argument: _runtime_v1alpha2_PullImageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  pullImage(argument: _runtime_v1alpha2_PullImageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  pullImage(argument: _runtime_v1alpha2_PullImageRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PullImageResponse__Output) => void): grpc.ClientUnaryCall;
  
  RemoveImage(argument: _runtime_v1alpha2_RemoveImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveImage(argument: _runtime_v1alpha2_RemoveImageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveImage(argument: _runtime_v1alpha2_RemoveImageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveImage(argument: _runtime_v1alpha2_RemoveImageRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  removeImage(argument: _runtime_v1alpha2_RemoveImageRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  removeImage(argument: _runtime_v1alpha2_RemoveImageRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  removeImage(argument: _runtime_v1alpha2_RemoveImageRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  removeImage(argument: _runtime_v1alpha2_RemoveImageRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveImageResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ImageServiceHandlers extends grpc.UntypedServiceImplementation {
  ImageFsInfo: grpc.handleUnaryCall<_runtime_v1alpha2_ImageFsInfoRequest__Output, _runtime_v1alpha2_ImageFsInfoResponse>;
  
  ImageStatus: grpc.handleUnaryCall<_runtime_v1alpha2_ImageStatusRequest__Output, _runtime_v1alpha2_ImageStatusResponse>;
  
  ListImages: grpc.handleUnaryCall<_runtime_v1alpha2_ListImagesRequest__Output, _runtime_v1alpha2_ListImagesResponse>;
  
  PullImage: grpc.handleUnaryCall<_runtime_v1alpha2_PullImageRequest__Output, _runtime_v1alpha2_PullImageResponse>;
  
  RemoveImage: grpc.handleUnaryCall<_runtime_v1alpha2_RemoveImageRequest__Output, _runtime_v1alpha2_RemoveImageResponse>;
  
}

export interface ImageServiceDefinition extends grpc.ServiceDefinition {
  ImageFsInfo: MethodDefinition<_runtime_v1alpha2_ImageFsInfoRequest, _runtime_v1alpha2_ImageFsInfoResponse, _runtime_v1alpha2_ImageFsInfoRequest__Output, _runtime_v1alpha2_ImageFsInfoResponse__Output>
  ImageStatus: MethodDefinition<_runtime_v1alpha2_ImageStatusRequest, _runtime_v1alpha2_ImageStatusResponse, _runtime_v1alpha2_ImageStatusRequest__Output, _runtime_v1alpha2_ImageStatusResponse__Output>
  ListImages: MethodDefinition<_runtime_v1alpha2_ListImagesRequest, _runtime_v1alpha2_ListImagesResponse, _runtime_v1alpha2_ListImagesRequest__Output, _runtime_v1alpha2_ListImagesResponse__Output>
  PullImage: MethodDefinition<_runtime_v1alpha2_PullImageRequest, _runtime_v1alpha2_PullImageResponse, _runtime_v1alpha2_PullImageRequest__Output, _runtime_v1alpha2_PullImageResponse__Output>
  RemoveImage: MethodDefinition<_runtime_v1alpha2_RemoveImageRequest, _runtime_v1alpha2_RemoveImageResponse, _runtime_v1alpha2_RemoveImageRequest__Output, _runtime_v1alpha2_RemoveImageResponse__Output>
}
