// Original file: protobuf/kubernetes/cri-api/pkg/apis/runtime/v1alpha2/api.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AttachRequest as _runtime_v1alpha2_AttachRequest, AttachRequest__Output as _runtime_v1alpha2_AttachRequest__Output } from './AttachRequest';
import type { AttachResponse as _runtime_v1alpha2_AttachResponse, AttachResponse__Output as _runtime_v1alpha2_AttachResponse__Output } from './AttachResponse';
import type { ContainerStatsRequest as _runtime_v1alpha2_ContainerStatsRequest, ContainerStatsRequest__Output as _runtime_v1alpha2_ContainerStatsRequest__Output } from './ContainerStatsRequest';
import type { ContainerStatsResponse as _runtime_v1alpha2_ContainerStatsResponse, ContainerStatsResponse__Output as _runtime_v1alpha2_ContainerStatsResponse__Output } from './ContainerStatsResponse';
import type { ContainerStatusRequest as _runtime_v1alpha2_ContainerStatusRequest, ContainerStatusRequest__Output as _runtime_v1alpha2_ContainerStatusRequest__Output } from './ContainerStatusRequest';
import type { ContainerStatusResponse as _runtime_v1alpha2_ContainerStatusResponse, ContainerStatusResponse__Output as _runtime_v1alpha2_ContainerStatusResponse__Output } from './ContainerStatusResponse';
import type { CreateContainerRequest as _runtime_v1alpha2_CreateContainerRequest, CreateContainerRequest__Output as _runtime_v1alpha2_CreateContainerRequest__Output } from './CreateContainerRequest';
import type { CreateContainerResponse as _runtime_v1alpha2_CreateContainerResponse, CreateContainerResponse__Output as _runtime_v1alpha2_CreateContainerResponse__Output } from './CreateContainerResponse';
import type { ExecRequest as _runtime_v1alpha2_ExecRequest, ExecRequest__Output as _runtime_v1alpha2_ExecRequest__Output } from './ExecRequest';
import type { ExecResponse as _runtime_v1alpha2_ExecResponse, ExecResponse__Output as _runtime_v1alpha2_ExecResponse__Output } from './ExecResponse';
import type { ExecSyncRequest as _runtime_v1alpha2_ExecSyncRequest, ExecSyncRequest__Output as _runtime_v1alpha2_ExecSyncRequest__Output } from './ExecSyncRequest';
import type { ExecSyncResponse as _runtime_v1alpha2_ExecSyncResponse, ExecSyncResponse__Output as _runtime_v1alpha2_ExecSyncResponse__Output } from './ExecSyncResponse';
import type { ListContainerStatsRequest as _runtime_v1alpha2_ListContainerStatsRequest, ListContainerStatsRequest__Output as _runtime_v1alpha2_ListContainerStatsRequest__Output } from './ListContainerStatsRequest';
import type { ListContainerStatsResponse as _runtime_v1alpha2_ListContainerStatsResponse, ListContainerStatsResponse__Output as _runtime_v1alpha2_ListContainerStatsResponse__Output } from './ListContainerStatsResponse';
import type { ListContainersRequest as _runtime_v1alpha2_ListContainersRequest, ListContainersRequest__Output as _runtime_v1alpha2_ListContainersRequest__Output } from './ListContainersRequest';
import type { ListContainersResponse as _runtime_v1alpha2_ListContainersResponse, ListContainersResponse__Output as _runtime_v1alpha2_ListContainersResponse__Output } from './ListContainersResponse';
import type { ListPodSandboxRequest as _runtime_v1alpha2_ListPodSandboxRequest, ListPodSandboxRequest__Output as _runtime_v1alpha2_ListPodSandboxRequest__Output } from './ListPodSandboxRequest';
import type { ListPodSandboxResponse as _runtime_v1alpha2_ListPodSandboxResponse, ListPodSandboxResponse__Output as _runtime_v1alpha2_ListPodSandboxResponse__Output } from './ListPodSandboxResponse';
import type { ListPodSandboxStatsRequest as _runtime_v1alpha2_ListPodSandboxStatsRequest, ListPodSandboxStatsRequest__Output as _runtime_v1alpha2_ListPodSandboxStatsRequest__Output } from './ListPodSandboxStatsRequest';
import type { ListPodSandboxStatsResponse as _runtime_v1alpha2_ListPodSandboxStatsResponse, ListPodSandboxStatsResponse__Output as _runtime_v1alpha2_ListPodSandboxStatsResponse__Output } from './ListPodSandboxStatsResponse';
import type { PodSandboxStatsRequest as _runtime_v1alpha2_PodSandboxStatsRequest, PodSandboxStatsRequest__Output as _runtime_v1alpha2_PodSandboxStatsRequest__Output } from './PodSandboxStatsRequest';
import type { PodSandboxStatsResponse as _runtime_v1alpha2_PodSandboxStatsResponse, PodSandboxStatsResponse__Output as _runtime_v1alpha2_PodSandboxStatsResponse__Output } from './PodSandboxStatsResponse';
import type { PodSandboxStatusRequest as _runtime_v1alpha2_PodSandboxStatusRequest, PodSandboxStatusRequest__Output as _runtime_v1alpha2_PodSandboxStatusRequest__Output } from './PodSandboxStatusRequest';
import type { PodSandboxStatusResponse as _runtime_v1alpha2_PodSandboxStatusResponse, PodSandboxStatusResponse__Output as _runtime_v1alpha2_PodSandboxStatusResponse__Output } from './PodSandboxStatusResponse';
import type { PortForwardRequest as _runtime_v1alpha2_PortForwardRequest, PortForwardRequest__Output as _runtime_v1alpha2_PortForwardRequest__Output } from './PortForwardRequest';
import type { PortForwardResponse as _runtime_v1alpha2_PortForwardResponse, PortForwardResponse__Output as _runtime_v1alpha2_PortForwardResponse__Output } from './PortForwardResponse';
import type { RemoveContainerRequest as _runtime_v1alpha2_RemoveContainerRequest, RemoveContainerRequest__Output as _runtime_v1alpha2_RemoveContainerRequest__Output } from './RemoveContainerRequest';
import type { RemoveContainerResponse as _runtime_v1alpha2_RemoveContainerResponse, RemoveContainerResponse__Output as _runtime_v1alpha2_RemoveContainerResponse__Output } from './RemoveContainerResponse';
import type { RemovePodSandboxRequest as _runtime_v1alpha2_RemovePodSandboxRequest, RemovePodSandboxRequest__Output as _runtime_v1alpha2_RemovePodSandboxRequest__Output } from './RemovePodSandboxRequest';
import type { RemovePodSandboxResponse as _runtime_v1alpha2_RemovePodSandboxResponse, RemovePodSandboxResponse__Output as _runtime_v1alpha2_RemovePodSandboxResponse__Output } from './RemovePodSandboxResponse';
import type { ReopenContainerLogRequest as _runtime_v1alpha2_ReopenContainerLogRequest, ReopenContainerLogRequest__Output as _runtime_v1alpha2_ReopenContainerLogRequest__Output } from './ReopenContainerLogRequest';
import type { ReopenContainerLogResponse as _runtime_v1alpha2_ReopenContainerLogResponse, ReopenContainerLogResponse__Output as _runtime_v1alpha2_ReopenContainerLogResponse__Output } from './ReopenContainerLogResponse';
import type { RunPodSandboxRequest as _runtime_v1alpha2_RunPodSandboxRequest, RunPodSandboxRequest__Output as _runtime_v1alpha2_RunPodSandboxRequest__Output } from './RunPodSandboxRequest';
import type { RunPodSandboxResponse as _runtime_v1alpha2_RunPodSandboxResponse, RunPodSandboxResponse__Output as _runtime_v1alpha2_RunPodSandboxResponse__Output } from './RunPodSandboxResponse';
import type { StartContainerRequest as _runtime_v1alpha2_StartContainerRequest, StartContainerRequest__Output as _runtime_v1alpha2_StartContainerRequest__Output } from './StartContainerRequest';
import type { StartContainerResponse as _runtime_v1alpha2_StartContainerResponse, StartContainerResponse__Output as _runtime_v1alpha2_StartContainerResponse__Output } from './StartContainerResponse';
import type { StatusRequest as _runtime_v1alpha2_StatusRequest, StatusRequest__Output as _runtime_v1alpha2_StatusRequest__Output } from './StatusRequest';
import type { StatusResponse as _runtime_v1alpha2_StatusResponse, StatusResponse__Output as _runtime_v1alpha2_StatusResponse__Output } from './StatusResponse';
import type { StopContainerRequest as _runtime_v1alpha2_StopContainerRequest, StopContainerRequest__Output as _runtime_v1alpha2_StopContainerRequest__Output } from './StopContainerRequest';
import type { StopContainerResponse as _runtime_v1alpha2_StopContainerResponse, StopContainerResponse__Output as _runtime_v1alpha2_StopContainerResponse__Output } from './StopContainerResponse';
import type { StopPodSandboxRequest as _runtime_v1alpha2_StopPodSandboxRequest, StopPodSandboxRequest__Output as _runtime_v1alpha2_StopPodSandboxRequest__Output } from './StopPodSandboxRequest';
import type { StopPodSandboxResponse as _runtime_v1alpha2_StopPodSandboxResponse, StopPodSandboxResponse__Output as _runtime_v1alpha2_StopPodSandboxResponse__Output } from './StopPodSandboxResponse';
import type { UpdateContainerResourcesRequest as _runtime_v1alpha2_UpdateContainerResourcesRequest, UpdateContainerResourcesRequest__Output as _runtime_v1alpha2_UpdateContainerResourcesRequest__Output } from './UpdateContainerResourcesRequest';
import type { UpdateContainerResourcesResponse as _runtime_v1alpha2_UpdateContainerResourcesResponse, UpdateContainerResourcesResponse__Output as _runtime_v1alpha2_UpdateContainerResourcesResponse__Output } from './UpdateContainerResourcesResponse';
import type { UpdateRuntimeConfigRequest as _runtime_v1alpha2_UpdateRuntimeConfigRequest, UpdateRuntimeConfigRequest__Output as _runtime_v1alpha2_UpdateRuntimeConfigRequest__Output } from './UpdateRuntimeConfigRequest';
import type { UpdateRuntimeConfigResponse as _runtime_v1alpha2_UpdateRuntimeConfigResponse, UpdateRuntimeConfigResponse__Output as _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output } from './UpdateRuntimeConfigResponse';
import type { VersionRequest as _runtime_v1alpha2_VersionRequest, VersionRequest__Output as _runtime_v1alpha2_VersionRequest__Output } from './VersionRequest';
import type { VersionResponse as _runtime_v1alpha2_VersionResponse, VersionResponse__Output as _runtime_v1alpha2_VersionResponse__Output } from './VersionResponse';

export interface RuntimeServiceClient extends grpc.Client {
  Attach(argument: _runtime_v1alpha2_AttachRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  Attach(argument: _runtime_v1alpha2_AttachRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  Attach(argument: _runtime_v1alpha2_AttachRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  Attach(argument: _runtime_v1alpha2_AttachRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  attach(argument: _runtime_v1alpha2_AttachRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  attach(argument: _runtime_v1alpha2_AttachRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  attach(argument: _runtime_v1alpha2_AttachRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  attach(argument: _runtime_v1alpha2_AttachRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_AttachResponse__Output) => void): grpc.ClientUnaryCall;
  
  ContainerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  containerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  containerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  containerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  containerStats(argument: _runtime_v1alpha2_ContainerStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ContainerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  ContainerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  containerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  containerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  containerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  containerStatus(argument: _runtime_v1alpha2_ContainerStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ContainerStatusResponse__Output) => void): grpc.ClientUnaryCall;
  
  CreateContainer(argument: _runtime_v1alpha2_CreateContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  CreateContainer(argument: _runtime_v1alpha2_CreateContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  CreateContainer(argument: _runtime_v1alpha2_CreateContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  CreateContainer(argument: _runtime_v1alpha2_CreateContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  createContainer(argument: _runtime_v1alpha2_CreateContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  createContainer(argument: _runtime_v1alpha2_CreateContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  createContainer(argument: _runtime_v1alpha2_CreateContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  createContainer(argument: _runtime_v1alpha2_CreateContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_CreateContainerResponse__Output) => void): grpc.ClientUnaryCall;
  
  Exec(argument: _runtime_v1alpha2_ExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  Exec(argument: _runtime_v1alpha2_ExecRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  Exec(argument: _runtime_v1alpha2_ExecRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  Exec(argument: _runtime_v1alpha2_ExecRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  exec(argument: _runtime_v1alpha2_ExecRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  exec(argument: _runtime_v1alpha2_ExecRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  exec(argument: _runtime_v1alpha2_ExecRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  exec(argument: _runtime_v1alpha2_ExecRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecResponse__Output) => void): grpc.ClientUnaryCall;
  
  ExecSync(argument: _runtime_v1alpha2_ExecSyncRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  ExecSync(argument: _runtime_v1alpha2_ExecSyncRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  ExecSync(argument: _runtime_v1alpha2_ExecSyncRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  ExecSync(argument: _runtime_v1alpha2_ExecSyncRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  execSync(argument: _runtime_v1alpha2_ExecSyncRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  execSync(argument: _runtime_v1alpha2_ExecSyncRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  execSync(argument: _runtime_v1alpha2_ExecSyncRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  execSync(argument: _runtime_v1alpha2_ExecSyncRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ExecSyncResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listContainerStats(argument: _runtime_v1alpha2_ListContainerStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainerStatsResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListContainers(argument: _runtime_v1alpha2_ListContainersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainers(argument: _runtime_v1alpha2_ListContainersRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainers(argument: _runtime_v1alpha2_ListContainersRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  ListContainers(argument: _runtime_v1alpha2_ListContainersRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  listContainers(argument: _runtime_v1alpha2_ListContainersRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  listContainers(argument: _runtime_v1alpha2_ListContainersRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  listContainers(argument: _runtime_v1alpha2_ListContainersRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  listContainers(argument: _runtime_v1alpha2_ListContainersRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListContainersResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandbox(argument: _runtime_v1alpha2_ListPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  
  ListPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  ListPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  listPodSandboxStats(argument: _runtime_v1alpha2_ListPodSandboxStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ListPodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  
  PodSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStats(argument: _runtime_v1alpha2_PodSandboxStatsRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatsResponse__Output) => void): grpc.ClientUnaryCall;
  
  PodSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  PodSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  podSandboxStatus(argument: _runtime_v1alpha2_PodSandboxStatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PodSandboxStatusResponse__Output) => void): grpc.ClientUnaryCall;
  
  PortForward(argument: _runtime_v1alpha2_PortForwardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  PortForward(argument: _runtime_v1alpha2_PortForwardRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  PortForward(argument: _runtime_v1alpha2_PortForwardRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  PortForward(argument: _runtime_v1alpha2_PortForwardRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  portForward(argument: _runtime_v1alpha2_PortForwardRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  portForward(argument: _runtime_v1alpha2_PortForwardRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  portForward(argument: _runtime_v1alpha2_PortForwardRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  portForward(argument: _runtime_v1alpha2_PortForwardRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_PortForwardResponse__Output) => void): grpc.ClientUnaryCall;
  
  RemoveContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  RemoveContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  removeContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  removeContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  removeContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  removeContainer(argument: _runtime_v1alpha2_RemoveContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemoveContainerResponse__Output) => void): grpc.ClientUnaryCall;
  
  RemovePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RemovePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RemovePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RemovePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  removePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  removePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  removePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  removePodSandbox(argument: _runtime_v1alpha2_RemovePodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RemovePodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  
  ReopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  ReopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  ReopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  ReopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  reopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  reopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  reopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  reopenContainerLog(argument: _runtime_v1alpha2_ReopenContainerLogRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_ReopenContainerLogResponse__Output) => void): grpc.ClientUnaryCall;
  
  RunPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RunPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RunPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  RunPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  runPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  runPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  runPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  runPodSandbox(argument: _runtime_v1alpha2_RunPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_RunPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  
  StartContainer(argument: _runtime_v1alpha2_StartContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StartContainer(argument: _runtime_v1alpha2_StartContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StartContainer(argument: _runtime_v1alpha2_StartContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StartContainer(argument: _runtime_v1alpha2_StartContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  startContainer(argument: _runtime_v1alpha2_StartContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  startContainer(argument: _runtime_v1alpha2_StartContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  startContainer(argument: _runtime_v1alpha2_StartContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  startContainer(argument: _runtime_v1alpha2_StartContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StartContainerResponse__Output) => void): grpc.ClientUnaryCall;
  
  Status(argument: _runtime_v1alpha2_StatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  Status(argument: _runtime_v1alpha2_StatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  Status(argument: _runtime_v1alpha2_StatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  Status(argument: _runtime_v1alpha2_StatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  status(argument: _runtime_v1alpha2_StatusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  status(argument: _runtime_v1alpha2_StatusRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  status(argument: _runtime_v1alpha2_StatusRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  status(argument: _runtime_v1alpha2_StatusRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StatusResponse__Output) => void): grpc.ClientUnaryCall;
  
  StopContainer(argument: _runtime_v1alpha2_StopContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StopContainer(argument: _runtime_v1alpha2_StopContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StopContainer(argument: _runtime_v1alpha2_StopContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  StopContainer(argument: _runtime_v1alpha2_StopContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  stopContainer(argument: _runtime_v1alpha2_StopContainerRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  stopContainer(argument: _runtime_v1alpha2_StopContainerRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  stopContainer(argument: _runtime_v1alpha2_StopContainerRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  stopContainer(argument: _runtime_v1alpha2_StopContainerRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopContainerResponse__Output) => void): grpc.ClientUnaryCall;
  
  StopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  StopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  StopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  StopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  stopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  stopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  stopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  stopPodSandbox(argument: _runtime_v1alpha2_StopPodSandboxRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_StopPodSandboxResponse__Output) => void): grpc.ClientUnaryCall;
  
  UpdateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  updateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  updateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  updateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  updateContainerResources(argument: _runtime_v1alpha2_UpdateContainerResourcesRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateContainerResourcesResponse__Output) => void): grpc.ClientUnaryCall;
  
  UpdateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  UpdateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  updateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  updateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  updateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  updateRuntimeConfig(argument: _runtime_v1alpha2_UpdateRuntimeConfigRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output) => void): grpc.ClientUnaryCall;
  
  Version(argument: _runtime_v1alpha2_VersionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  Version(argument: _runtime_v1alpha2_VersionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  Version(argument: _runtime_v1alpha2_VersionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  Version(argument: _runtime_v1alpha2_VersionRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  version(argument: _runtime_v1alpha2_VersionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  version(argument: _runtime_v1alpha2_VersionRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  version(argument: _runtime_v1alpha2_VersionRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  version(argument: _runtime_v1alpha2_VersionRequest, callback: (error?: grpc.ServiceError, result?: _runtime_v1alpha2_VersionResponse__Output) => void): grpc.ClientUnaryCall;
  
}

export interface RuntimeServiceHandlers extends grpc.UntypedServiceImplementation {
  Attach: grpc.handleUnaryCall<_runtime_v1alpha2_AttachRequest__Output, _runtime_v1alpha2_AttachResponse>;
  
  ContainerStats: grpc.handleUnaryCall<_runtime_v1alpha2_ContainerStatsRequest__Output, _runtime_v1alpha2_ContainerStatsResponse>;
  
  ContainerStatus: grpc.handleUnaryCall<_runtime_v1alpha2_ContainerStatusRequest__Output, _runtime_v1alpha2_ContainerStatusResponse>;
  
  CreateContainer: grpc.handleUnaryCall<_runtime_v1alpha2_CreateContainerRequest__Output, _runtime_v1alpha2_CreateContainerResponse>;
  
  Exec: grpc.handleUnaryCall<_runtime_v1alpha2_ExecRequest__Output, _runtime_v1alpha2_ExecResponse>;
  
  ExecSync: grpc.handleUnaryCall<_runtime_v1alpha2_ExecSyncRequest__Output, _runtime_v1alpha2_ExecSyncResponse>;
  
  ListContainerStats: grpc.handleUnaryCall<_runtime_v1alpha2_ListContainerStatsRequest__Output, _runtime_v1alpha2_ListContainerStatsResponse>;
  
  ListContainers: grpc.handleUnaryCall<_runtime_v1alpha2_ListContainersRequest__Output, _runtime_v1alpha2_ListContainersResponse>;
  
  ListPodSandbox: grpc.handleUnaryCall<_runtime_v1alpha2_ListPodSandboxRequest__Output, _runtime_v1alpha2_ListPodSandboxResponse>;
  
  ListPodSandboxStats: grpc.handleUnaryCall<_runtime_v1alpha2_ListPodSandboxStatsRequest__Output, _runtime_v1alpha2_ListPodSandboxStatsResponse>;
  
  PodSandboxStats: grpc.handleUnaryCall<_runtime_v1alpha2_PodSandboxStatsRequest__Output, _runtime_v1alpha2_PodSandboxStatsResponse>;
  
  PodSandboxStatus: grpc.handleUnaryCall<_runtime_v1alpha2_PodSandboxStatusRequest__Output, _runtime_v1alpha2_PodSandboxStatusResponse>;
  
  PortForward: grpc.handleUnaryCall<_runtime_v1alpha2_PortForwardRequest__Output, _runtime_v1alpha2_PortForwardResponse>;
  
  RemoveContainer: grpc.handleUnaryCall<_runtime_v1alpha2_RemoveContainerRequest__Output, _runtime_v1alpha2_RemoveContainerResponse>;
  
  RemovePodSandbox: grpc.handleUnaryCall<_runtime_v1alpha2_RemovePodSandboxRequest__Output, _runtime_v1alpha2_RemovePodSandboxResponse>;
  
  ReopenContainerLog: grpc.handleUnaryCall<_runtime_v1alpha2_ReopenContainerLogRequest__Output, _runtime_v1alpha2_ReopenContainerLogResponse>;
  
  RunPodSandbox: grpc.handleUnaryCall<_runtime_v1alpha2_RunPodSandboxRequest__Output, _runtime_v1alpha2_RunPodSandboxResponse>;
  
  StartContainer: grpc.handleUnaryCall<_runtime_v1alpha2_StartContainerRequest__Output, _runtime_v1alpha2_StartContainerResponse>;
  
  Status: grpc.handleUnaryCall<_runtime_v1alpha2_StatusRequest__Output, _runtime_v1alpha2_StatusResponse>;
  
  StopContainer: grpc.handleUnaryCall<_runtime_v1alpha2_StopContainerRequest__Output, _runtime_v1alpha2_StopContainerResponse>;
  
  StopPodSandbox: grpc.handleUnaryCall<_runtime_v1alpha2_StopPodSandboxRequest__Output, _runtime_v1alpha2_StopPodSandboxResponse>;
  
  UpdateContainerResources: grpc.handleUnaryCall<_runtime_v1alpha2_UpdateContainerResourcesRequest__Output, _runtime_v1alpha2_UpdateContainerResourcesResponse>;
  
  UpdateRuntimeConfig: grpc.handleUnaryCall<_runtime_v1alpha2_UpdateRuntimeConfigRequest__Output, _runtime_v1alpha2_UpdateRuntimeConfigResponse>;
  
  Version: grpc.handleUnaryCall<_runtime_v1alpha2_VersionRequest__Output, _runtime_v1alpha2_VersionResponse>;
  
}

export interface RuntimeServiceDefinition extends grpc.ServiceDefinition {
  Attach: MethodDefinition<_runtime_v1alpha2_AttachRequest, _runtime_v1alpha2_AttachResponse, _runtime_v1alpha2_AttachRequest__Output, _runtime_v1alpha2_AttachResponse__Output>
  ContainerStats: MethodDefinition<_runtime_v1alpha2_ContainerStatsRequest, _runtime_v1alpha2_ContainerStatsResponse, _runtime_v1alpha2_ContainerStatsRequest__Output, _runtime_v1alpha2_ContainerStatsResponse__Output>
  ContainerStatus: MethodDefinition<_runtime_v1alpha2_ContainerStatusRequest, _runtime_v1alpha2_ContainerStatusResponse, _runtime_v1alpha2_ContainerStatusRequest__Output, _runtime_v1alpha2_ContainerStatusResponse__Output>
  CreateContainer: MethodDefinition<_runtime_v1alpha2_CreateContainerRequest, _runtime_v1alpha2_CreateContainerResponse, _runtime_v1alpha2_CreateContainerRequest__Output, _runtime_v1alpha2_CreateContainerResponse__Output>
  Exec: MethodDefinition<_runtime_v1alpha2_ExecRequest, _runtime_v1alpha2_ExecResponse, _runtime_v1alpha2_ExecRequest__Output, _runtime_v1alpha2_ExecResponse__Output>
  ExecSync: MethodDefinition<_runtime_v1alpha2_ExecSyncRequest, _runtime_v1alpha2_ExecSyncResponse, _runtime_v1alpha2_ExecSyncRequest__Output, _runtime_v1alpha2_ExecSyncResponse__Output>
  ListContainerStats: MethodDefinition<_runtime_v1alpha2_ListContainerStatsRequest, _runtime_v1alpha2_ListContainerStatsResponse, _runtime_v1alpha2_ListContainerStatsRequest__Output, _runtime_v1alpha2_ListContainerStatsResponse__Output>
  ListContainers: MethodDefinition<_runtime_v1alpha2_ListContainersRequest, _runtime_v1alpha2_ListContainersResponse, _runtime_v1alpha2_ListContainersRequest__Output, _runtime_v1alpha2_ListContainersResponse__Output>
  ListPodSandbox: MethodDefinition<_runtime_v1alpha2_ListPodSandboxRequest, _runtime_v1alpha2_ListPodSandboxResponse, _runtime_v1alpha2_ListPodSandboxRequest__Output, _runtime_v1alpha2_ListPodSandboxResponse__Output>
  ListPodSandboxStats: MethodDefinition<_runtime_v1alpha2_ListPodSandboxStatsRequest, _runtime_v1alpha2_ListPodSandboxStatsResponse, _runtime_v1alpha2_ListPodSandboxStatsRequest__Output, _runtime_v1alpha2_ListPodSandboxStatsResponse__Output>
  PodSandboxStats: MethodDefinition<_runtime_v1alpha2_PodSandboxStatsRequest, _runtime_v1alpha2_PodSandboxStatsResponse, _runtime_v1alpha2_PodSandboxStatsRequest__Output, _runtime_v1alpha2_PodSandboxStatsResponse__Output>
  PodSandboxStatus: MethodDefinition<_runtime_v1alpha2_PodSandboxStatusRequest, _runtime_v1alpha2_PodSandboxStatusResponse, _runtime_v1alpha2_PodSandboxStatusRequest__Output, _runtime_v1alpha2_PodSandboxStatusResponse__Output>
  PortForward: MethodDefinition<_runtime_v1alpha2_PortForwardRequest, _runtime_v1alpha2_PortForwardResponse, _runtime_v1alpha2_PortForwardRequest__Output, _runtime_v1alpha2_PortForwardResponse__Output>
  RemoveContainer: MethodDefinition<_runtime_v1alpha2_RemoveContainerRequest, _runtime_v1alpha2_RemoveContainerResponse, _runtime_v1alpha2_RemoveContainerRequest__Output, _runtime_v1alpha2_RemoveContainerResponse__Output>
  RemovePodSandbox: MethodDefinition<_runtime_v1alpha2_RemovePodSandboxRequest, _runtime_v1alpha2_RemovePodSandboxResponse, _runtime_v1alpha2_RemovePodSandboxRequest__Output, _runtime_v1alpha2_RemovePodSandboxResponse__Output>
  ReopenContainerLog: MethodDefinition<_runtime_v1alpha2_ReopenContainerLogRequest, _runtime_v1alpha2_ReopenContainerLogResponse, _runtime_v1alpha2_ReopenContainerLogRequest__Output, _runtime_v1alpha2_ReopenContainerLogResponse__Output>
  RunPodSandbox: MethodDefinition<_runtime_v1alpha2_RunPodSandboxRequest, _runtime_v1alpha2_RunPodSandboxResponse, _runtime_v1alpha2_RunPodSandboxRequest__Output, _runtime_v1alpha2_RunPodSandboxResponse__Output>
  StartContainer: MethodDefinition<_runtime_v1alpha2_StartContainerRequest, _runtime_v1alpha2_StartContainerResponse, _runtime_v1alpha2_StartContainerRequest__Output, _runtime_v1alpha2_StartContainerResponse__Output>
  Status: MethodDefinition<_runtime_v1alpha2_StatusRequest, _runtime_v1alpha2_StatusResponse, _runtime_v1alpha2_StatusRequest__Output, _runtime_v1alpha2_StatusResponse__Output>
  StopContainer: MethodDefinition<_runtime_v1alpha2_StopContainerRequest, _runtime_v1alpha2_StopContainerResponse, _runtime_v1alpha2_StopContainerRequest__Output, _runtime_v1alpha2_StopContainerResponse__Output>
  StopPodSandbox: MethodDefinition<_runtime_v1alpha2_StopPodSandboxRequest, _runtime_v1alpha2_StopPodSandboxResponse, _runtime_v1alpha2_StopPodSandboxRequest__Output, _runtime_v1alpha2_StopPodSandboxResponse__Output>
  UpdateContainerResources: MethodDefinition<_runtime_v1alpha2_UpdateContainerResourcesRequest, _runtime_v1alpha2_UpdateContainerResourcesResponse, _runtime_v1alpha2_UpdateContainerResourcesRequest__Output, _runtime_v1alpha2_UpdateContainerResourcesResponse__Output>
  UpdateRuntimeConfig: MethodDefinition<_runtime_v1alpha2_UpdateRuntimeConfigRequest, _runtime_v1alpha2_UpdateRuntimeConfigResponse, _runtime_v1alpha2_UpdateRuntimeConfigRequest__Output, _runtime_v1alpha2_UpdateRuntimeConfigResponse__Output>
  Version: MethodDefinition<_runtime_v1alpha2_VersionRequest, _runtime_v1alpha2_VersionResponse, _runtime_v1alpha2_VersionRequest__Output, _runtime_v1alpha2_VersionResponse__Output>
}
