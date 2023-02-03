/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  SetTriggerStateActionDefinition,
  LogicManagementClient
} from "@azure/arm-logic";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Sets the state of a workflow trigger.
 *
 * @summary Sets the state of a workflow trigger.
 * x-ms-original-file: specification/logic/resource-manager/Microsoft.Logic/stable/2019-05-01/examples/WorkflowTriggers_SetState.json
 */
async function setTriggerState() {
  const subscriptionId =
    process.env["LOGIC_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["LOGIC_RESOURCE_GROUP"] || "testResourceGroup";
  const workflowName = "testWorkflow";
  const triggerName = "testTrigger";
  const setState: SetTriggerStateActionDefinition = {
    source: {
      id:
        "subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/sourceResGroup/providers/Microsoft.Logic/workflows/sourceWorkflow/triggers/sourceTrigger"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new LogicManagementClient(credential, subscriptionId);
  const result = await client.workflowTriggers.setState(
    resourceGroupName,
    workflowName,
    triggerName,
    setState
  );
  console.log(result);
}

async function main() {
  setTriggerState();
}

main().catch(console.error);