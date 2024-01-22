/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ProvisionedClusterInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridContainerServiceClient } from "../hybridContainerServiceClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ProvisionedCluster,
  ProvisionedClusterInstancesListNextOptionalParams,
  ProvisionedClusterInstancesListOptionalParams,
  ProvisionedClusterInstancesListResponse,
  ProvisionedClusterInstancesGetOptionalParams,
  ProvisionedClusterInstancesGetResponse,
  ProvisionedClusterInstancesCreateOrUpdateOptionalParams,
  ProvisionedClusterInstancesCreateOrUpdateResponse,
  ProvisionedClusterInstancesDeleteOptionalParams,
  ProvisionedClusterInstancesDeleteResponse,
  ProvisionedClusterInstancesGetUpgradeProfileOptionalParams,
  ProvisionedClusterInstancesGetUpgradeProfileResponse,
  ProvisionedClusterInstancesListUserKubeconfigOptionalParams,
  ProvisionedClusterInstancesListUserKubeconfigResponse,
  ProvisionedClusterInstancesListAdminKubeconfigOptionalParams,
  ProvisionedClusterInstancesListAdminKubeconfigResponse,
  ProvisionedClusterInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProvisionedClusterInstances operations. */
export class ProvisionedClusterInstancesImpl
  implements ProvisionedClusterInstances {
  private readonly client: HybridContainerServiceClient;

  /**
   * Initialize a new instance of the class ProvisionedClusterInstances class.
   * @param client Reference to the service client
   */
  constructor(client: HybridContainerServiceClient) {
    this.client = client;
  }

  /**
   * Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  public list(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListOptionalParams
  ): PagedAsyncIterableIterator<ProvisionedCluster> {
    const iter = this.listPagingAll(connectedClusterResourceUri, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          connectedClusterResourceUri,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ProvisionedCluster[]> {
    let result: ProvisionedClusterInstancesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(connectedClusterResourceUri, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        connectedClusterResourceUri,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListOptionalParams
  ): AsyncIterableIterator<ProvisionedCluster> {
    for await (const page of this.listPagingPage(
      connectedClusterResourceUri,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the provisioned cluster instance
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  get(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesGetOptionalParams
  ): Promise<ProvisionedClusterInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, options },
      getOperationSpec
    );
  }

  /**
   * Creates or updates the provisioned cluster instance
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param provisionedClusterInstance Provisioned Cluster resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    connectedClusterResourceUri: string,
    provisionedClusterInstance: ProvisionedCluster,
    options?: ProvisionedClusterInstancesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProvisionedClusterInstancesCreateOrUpdateResponse>,
      ProvisionedClusterInstancesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProvisionedClusterInstancesCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        connectedClusterResourceUri,
        provisionedClusterInstance,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      ProvisionedClusterInstancesCreateOrUpdateResponse,
      OperationState<ProvisionedClusterInstancesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the provisioned cluster instance
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param provisionedClusterInstance Provisioned Cluster resource definition
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    connectedClusterResourceUri: string,
    provisionedClusterInstance: ProvisionedCluster,
    options?: ProvisionedClusterInstancesCreateOrUpdateOptionalParams
  ): Promise<ProvisionedClusterInstancesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      connectedClusterResourceUri,
      provisionedClusterInstance,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes the provisioned cluster instance
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginDelete(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProvisionedClusterInstancesDeleteResponse>,
      ProvisionedClusterInstancesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProvisionedClusterInstancesDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { connectedClusterResourceUri, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      ProvisionedClusterInstancesDeleteResponse,
      OperationState<ProvisionedClusterInstancesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the provisioned cluster instance
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesDeleteOptionalParams
  ): Promise<ProvisionedClusterInstancesDeleteResponse> {
    const poller = await this.beginDelete(connectedClusterResourceUri, options);
    return poller.pollUntilDone();
  }

  /**
   * Lists the ProvisionedClusterInstance resource associated with the ConnectedCluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  private _list(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListOptionalParams
  ): Promise<ProvisionedClusterInstancesListResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, options },
      listOperationSpec
    );
  }

  /**
   * Gets the upgrade profile of a provisioned cluster
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  getUpgradeProfile(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesGetUpgradeProfileOptionalParams
  ): Promise<ProvisionedClusterInstancesGetUpgradeProfileResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, options },
      getUpgradeProfileOperationSpec
    );
  }

  /**
   * Lists the user credentials of the provisioned cluster (can only be used within private network)
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginListUserKubeconfig(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListUserKubeconfigOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProvisionedClusterInstancesListUserKubeconfigResponse>,
      ProvisionedClusterInstancesListUserKubeconfigResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProvisionedClusterInstancesListUserKubeconfigResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { connectedClusterResourceUri, options },
      spec: listUserKubeconfigOperationSpec
    });
    const poller = await createHttpPoller<
      ProvisionedClusterInstancesListUserKubeconfigResponse,
      OperationState<ProvisionedClusterInstancesListUserKubeconfigResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Lists the user credentials of the provisioned cluster (can only be used within private network)
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginListUserKubeconfigAndWait(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListUserKubeconfigOptionalParams
  ): Promise<ProvisionedClusterInstancesListUserKubeconfigResponse> {
    const poller = await this.beginListUserKubeconfig(
      connectedClusterResourceUri,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the admin credentials of the provisioned cluster (can only be used within private network)
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginListAdminKubeconfig(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListAdminKubeconfigOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProvisionedClusterInstancesListAdminKubeconfigResponse>,
      ProvisionedClusterInstancesListAdminKubeconfigResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProvisionedClusterInstancesListAdminKubeconfigResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { connectedClusterResourceUri, options },
      spec: listAdminKubeconfigOperationSpec
    });
    const poller = await createHttpPoller<
      ProvisionedClusterInstancesListAdminKubeconfigResponse,
      OperationState<ProvisionedClusterInstancesListAdminKubeconfigResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Lists the admin credentials of the provisioned cluster (can only be used within private network)
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param options The options parameters.
   */
  async beginListAdminKubeconfigAndWait(
    connectedClusterResourceUri: string,
    options?: ProvisionedClusterInstancesListAdminKubeconfigOptionalParams
  ): Promise<ProvisionedClusterInstancesListAdminKubeconfigResponse> {
    const poller = await this.beginListAdminKubeconfig(
      connectedClusterResourceUri,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param connectedClusterResourceUri The fully qualified Azure Resource Manager identifier of the
   *                                    connected cluster resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    connectedClusterResourceUri: string,
    nextLink: string,
    options?: ProvisionedClusterInstancesListNextOptionalParams
  ): Promise<ProvisionedClusterInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { connectedClusterResourceUri, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisionedCluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisionedCluster
    },
    201: {
      bodyMapper: Mappers.ProvisionedCluster
    },
    202: {
      bodyMapper: Mappers.ProvisionedCluster
    },
    204: {
      bodyMapper: Mappers.ProvisionedCluster
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.provisionedClusterInstance,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.ProvisionedClusterInstancesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.ProvisionedClusterInstancesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.ProvisionedClusterInstancesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.ProvisionedClusterInstancesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisionedClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const getUpgradeProfileOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/upgradeProfiles/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisionedClusterUpgradeProfile
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listUserKubeconfigOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listUserKubeconfig",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    201: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    202: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    204: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listAdminKubeconfigOperationSpec: coreClient.OperationSpec = {
  path:
    "/{connectedClusterResourceUri}/providers/Microsoft.HybridContainerService/provisionedClusterInstances/default/listAdminKubeconfig",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    201: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    202: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    204: {
      bodyMapper: Mappers.ListCredentialResponse
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.connectedClusterResourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProvisionedClusterListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.connectedClusterResourceUri,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
