/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/streamingJobsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a StreamingJobs. */
export class StreamingJobs {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a StreamingJobs.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new
   * streaming job or replace the existing one.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsCreateOrReplaceResponse>
   */
  createOrReplace(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, options?: Models.StreamingJobsCreateOrReplaceOptionalParams): Promise<Models.StreamingJobsCreateOrReplaceResponse> {
    return this.beginCreateOrReplace(streamingJob,resourceGroupName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.StreamingJobsCreateOrReplaceResponse>;
  }

  /**
   * Updates an existing streaming job. This can be used to partially update (ie. update one or two
   * properties) a streaming job without affecting the rest the job definition.
   * @param streamingJob A streaming job object. The properties specified here will overwrite the
   * corresponding properties in the existing streaming job (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing input will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsUpdateResponse>
   */
  update(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, options?: Models.StreamingJobsUpdateOptionalParams): Promise<Models.StreamingJobsUpdateResponse>;
  /**
   * @param streamingJob A streaming job object. The properties specified here will overwrite the
   * corresponding properties in the existing streaming job (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing input will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param callback The callback
   */
  update(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.StreamingJob>): void;
  /**
   * @param streamingJob A streaming job object. The properties specified here will overwrite the
   * corresponding properties in the existing streaming job (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing input will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, options: Models.StreamingJobsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.StreamingJob>): void;
  update(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, options?: Models.StreamingJobsUpdateOptionalParams, callback?: msRest.ServiceCallback<Models.StreamingJob>): Promise<Models.StreamingJobsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        streamingJob,
        resourceGroupName,
        jobName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.StreamingJobsUpdateResponse>;
  }

  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets details about the specified streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsGetResponse>
   */
  get(resourceGroupName: string, jobName: string, options?: Models.StreamingJobsGetOptionalParams): Promise<Models.StreamingJobsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.StreamingJob>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, options: Models.StreamingJobsGetOptionalParams, callback: msRest.ServiceCallback<Models.StreamingJob>): void;
  get(resourceGroupName: string, jobName: string, options?: Models.StreamingJobsGetOptionalParams, callback?: msRest.ServiceCallback<Models.StreamingJob>): Promise<Models.StreamingJobsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.StreamingJobsGetResponse>;
  }

  /**
   * Lists all of the streaming jobs in the specified resource group.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.StreamingJobsListByResourceGroupOptionalParams): Promise<Models.StreamingJobsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.StreamingJobsListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.StreamingJobsListByResourceGroupOptionalParams, callback?: msRest.ServiceCallback<Models.StreamingJobListResult>): Promise<Models.StreamingJobsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.StreamingJobsListByResourceGroupResponse>;
  }

  /**
   * Lists all of the streaming jobs in the given subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsListResponse>
   */
  list(options?: Models.StreamingJobsListOptionalParams): Promise<Models.StreamingJobsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: Models.StreamingJobsListOptionalParams, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  list(options?: Models.StreamingJobsListOptionalParams, callback?: msRest.ServiceCallback<Models.StreamingJobListResult>): Promise<Models.StreamingJobsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.StreamingJobsListResponse>;
  }

  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  start(resourceGroupName: string, jobName: string, options?: Models.StreamingJobsStartOptionalParams): Promise<msRest.RestResponse> {
    return this.beginStart(resourceGroupName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  stop(resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginStop(resourceGroupName,jobName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates a streaming job or replaces an already existing streaming job.
   * @param streamingJob The definition of the streaming job that will be used to create a new
   * streaming job or replace the existing one.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrReplace(streamingJob: Models.StreamingJob, resourceGroupName: string, jobName: string, options?: Models.StreamingJobsBeginCreateOrReplaceOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        streamingJob,
        resourceGroupName,
        jobName,
        options
      },
      beginCreateOrReplaceOperationSpec,
      options);
  }

  /**
   * Deletes a streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Starts a streaming job. Once a job is started it will start processing input events and produce
   * output.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStart(resourceGroupName: string, jobName: string, options?: Models.StreamingJobsBeginStartOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      beginStartOperationSpec,
      options);
  }

  /**
   * Stops a running streaming job. This will cause a running streaming job to stop processing input
   * events and producing output.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginStop(resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        jobName,
        options
      },
      beginStopOperationSpec,
      options);
  }

  /**
   * Lists all of the streaming jobs in the specified resource group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.StreamingJobsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.StreamingJobListResult>): Promise<Models.StreamingJobsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.StreamingJobsListByResourceGroupNextResponse>;
  }

  /**
   * Lists all of the streaming jobs in the given subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.StreamingJobsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.StreamingJobsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StreamingJobListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.StreamingJobListResult>): Promise<Models.StreamingJobsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.StreamingJobsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "streamingJob",
    mapper: {
      ...Mappers.StreamingJob,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/streamingjobs",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrReplaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "streamingJob",
    mapper: {
      ...Mappers.StreamingJob,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.StreamingJob,
      headersMapper: Mappers.StreamingJobsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStartOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/start",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "startJobParameters"
    ],
    mapper: Mappers.StartStreamingJobParameters
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginStopOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/stop",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StreamingJobListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
