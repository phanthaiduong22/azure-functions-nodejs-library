// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import {
    CosmosDBFunctionOptions,
    CosmosDBInput,
    CosmosDBInputOptions,
    CosmosDBOutput,
    CosmosDBOutputOptions,
    CosmosDBTrigger,
    CosmosDBTriggerOptions,
} from './cosmosDB';
import {
    EventHubFunctionOptions,
    EventHubOutput,
    EventHubOutputOptions,
    EventHubTrigger,
    EventHubTriggerOptions,
} from './eventHub';
import { GenericInputOptions, GenericOutputOptions, GenericTriggerOptions } from './generic';
import {
    HttpFunctionOptions,
    HttpHandler,
    HttpOutput,
    HttpOutputOptions,
    HttpTrigger,
    HttpTriggerOptions,
} from './http';
import { InvocationContext } from './InvocationContext';
import {
    ServiceBusQueueFunctionOptions,
    ServiceBusQueueOutput,
    ServiceBusQueueOutputOptions,
    ServiceBusQueueTrigger,
    ServiceBusQueueTriggerOptions,
    ServiceBusTopicFunctionOptions,
    ServiceBusTopicOutput,
    ServiceBusTopicOutputOptions,
    ServiceBusTopicTrigger,
    ServiceBusTopicTriggerOptions,
} from './serviceBus';
import {
    StorageBlobFunctionOptions,
    StorageBlobInput,
    StorageBlobInputOptions,
    StorageBlobOutput,
    StorageBlobOutputOptions,
    StorageBlobTrigger,
    StorageBlobTriggerOptions,
    StorageQueueFunctionOptions,
    StorageQueueOutput,
    StorageQueueOutputOptions,
    StorageQueueTrigger,
    StorageQueueTriggerOptions,
} from './storage';
import { TimerFunctionOptions, TimerTrigger, TimerTriggerOptions } from './timer';

export * from './cosmosDB';
export * from './eventHub';
export * from './generic';
export * from './http';
export * from './InvocationContext';
export * from './serviceBus';
export * from './storage';
export * from './timer';

/**
 * The root namespace for performing operations on your Azure Function App
 */
export namespace app {
    /**
     * Registers an http function in your app that will be triggered by making a request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function http(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'GET' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param handler The handler for this function
     */
    export function get(name: string, handler: HttpHandler): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'GET' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function get(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'PUT' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param handler The handler for this function
     */
    export function put(name: string, handler: HttpHandler): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'PUT' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function put(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'POST' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param handler The handler for this function
     */
    export function post(name: string, handler: HttpHandler): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'POST' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function post(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'PATCH' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param handler The handler for this function
     */
    export function patch(name: string, handler: HttpHandler): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'PATCH' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function patch(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'DELETE' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param handler The handler for this function
     */
    export function deleteRequest(name: string, handler: HttpHandler): void;

    /**
     * Registers an http function in your app that will be triggered by making a 'DELETE' request to the function url
     * @param name The name of the function. This will be the route unless a route is explicitly configured in the `HttpTriggerOptions`
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function deleteRequest(name: string, options: HttpFunctionOptions): void;

    /**
     * Registers a timer function in your app that will be triggered on a schedule
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function timer(name: string, options: TimerFunctionOptions): void;

    /**
     * Registers a function in your app that will be triggered whenever an item is added to a storage blob path
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function storageBlob(name: string, options: StorageBlobFunctionOptions): void;

    /**
     * Registers a function in your app that will be triggered whenever an item is added to a storage queue
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function storageQueue(name: string, options: StorageQueueFunctionOptions): void;

    /**
     * Registers a function in your app that will be triggered whenever a message is added to a service bus queue
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function serviceBusQueue(name: string, options: ServiceBusQueueFunctionOptions): void;

    /**
     * Registers a function in your app that will be triggered whenever a message is added to a service bus topic
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function serviceBusTopic(name: string, options: ServiceBusTopicFunctionOptions): void;

    /**
     * Registers a function in your app that will be triggered whenever a message is added to an event hub
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function eventHub(name: string, options: EventHubFunctionOptions): void;

    /**
     * Registers a Cosmos DB function in your app that will be triggered whenever inserts and updates occur (not deletions)
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function cosmosDB(name: string, options: CosmosDBFunctionOptions): void;

    /**
     * Registers a generic function in your app that will be triggered based on the type specified in `options.trigger.type`
     * Use this method if your desired trigger type does not already have its own method
     * @param name The name of the function. The name must be unique within your app and will mostly be used for your own tracking purposes
     * @param options Configuration options describing the inputs, outputs, and handler for this function
     */
    export function generic(name: string, options: FunctionOptions): void;
}

/**
 * The root namespace used to help create trigger configuration (the primary input)
 * You can create trigger config without this namespace, but it provides features like autocomplete, better build errors, and it will set the `name` property for you
 */
export namespace trigger {
    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-http-webhook-trigger?&pivots=programming-language-javascript)
     */
    export function http(options: HttpTriggerOptions): HttpTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-timer?pivots=programming-language-javascript)
     */
    export function timer(options: TimerTriggerOptions): TimerTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob-trigger?pivots=programming-language-javascript)
     */
    export function storageBlob(options: StorageBlobTriggerOptions): StorageBlobTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue-trigger?pivots=programming-language-javascript)
     */
    export function storageQueue(options: StorageQueueTriggerOptions): StorageQueueTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus-trigger?pivots=programming-language-javascript)
     */
    export function serviceBusQueue(options: ServiceBusQueueTriggerOptions): ServiceBusQueueTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus-trigger?pivots=programming-language-javascript)
     */
    export function serviceBusTopic(options: ServiceBusTopicTriggerOptions): ServiceBusTopicTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-event-hubs-trigger?pivots=programming-language-javascript)
     */
    export function eventHub(options: EventHubTriggerOptions): EventHubTrigger;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2-trigger?pivots=programming-language-javascript)
     */
    export function cosmosDB(options: CosmosDBTriggerOptions): CosmosDBTrigger;

    /**
     * A generic option that can be used for any trigger type
     * Use this method if your desired trigger type does not already have its own method
     */
    export function generic(options: GenericTriggerOptions): FunctionTrigger;
}

/**
 * The root namespace used to help create secondary input configuration ("trigger" is the primary input)
 * You can create input config without this namespace, but it provides features like autocomplete, better build errors, and it will set the `name` property for you
 * NOTE: Not all triggers can be used as secondary inputs
 */
export namespace input {
    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob-input?pivots=programming-language-javascript)
     */
    export function storageBlob(options: StorageBlobInputOptions): StorageBlobInput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2-input?pivots=programming-language-javascript)
     */
    export function cosmosDB(options: CosmosDBInputOptions): CosmosDBInput;

    /**
     * A generic option that can be used for any input type
     * Use this method if your desired input type does not already have its own method
     */
    export function generic(options: GenericInputOptions): FunctionInput;
}

/**
 * The root namespace used to help create output configuration
 * You can create output config without this namespace, but it provides features like autocomplete, better build errors, and it will set the `name` property for you
 */
export namespace output {
    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-http-webhook-output?&pivots=programming-language-javascript)
     */
    export function http(options: HttpOutputOptions): HttpOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-blob-output?pivots=programming-language-javascript)
     */
    export function storageBlob(options: StorageBlobOutputOptions): StorageBlobOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-storage-queue-output?pivots=programming-language-javascript)
     */
    export function storageQueue(options: StorageQueueOutputOptions): StorageQueueOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus-output?pivots=programming-language-javascript)
     */
    export function serviceBusQueue(options: ServiceBusQueueOutputOptions): ServiceBusQueueOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-service-bus-output?pivots=programming-language-javascript)
     */
    export function serviceBusTopic(options: ServiceBusTopicOutputOptions): ServiceBusTopicOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-event-hubs-output?pivots=programming-language-javascript)
     */
    export function eventHub(options: EventHubOutputOptions): EventHubOutput;

    /**
     * [Link to docs and examples](https://docs.microsoft.com/azure/azure-functions/functions-bindings-cosmosdb-v2-output?pivots=programming-language-javascript)
     */
    export function cosmosDB(options: CosmosDBOutputOptions): CosmosDBOutput;

    /**
     * A generic option that can be used for any output type
     * Use this method if your desired output type does not already have its own method
     */
    export function generic(options: GenericOutputOptions): FunctionOutput;
}

/**
 * Void if no `return` output is registered
 * Otherwise, the registered `return` output
 */
export type FunctionResult<T = unknown> = T | Promise<T>;

export type FunctionHandler = (context: InvocationContext, triggerInput: any) => FunctionResult<any>;

/**
 * Configures the inputs, outputs, and handler for an Azure Function
 */
export interface FunctionOptions {
    /**
     * The code that will be executed when your function is triggered
     */
    handler: FunctionHandler;

    /**
     * Configuration for the primary input to the function, aka the reason it will be triggered
     * This is the only input that is passed as an argument to the function handler during invocation
     */
    trigger: FunctionTrigger;

    /**
     * Configuration for the optional primary output of the function
     * This is the main output that you should set as the return value of the function handler during invocation
     */
    return?: FunctionOutput;

    /**
     * Configuration for an optional set of secondary inputs
     * During invocation, get these values with `context.extraInputs.get()`
     */
    extraInputs?: FunctionInput[];

    /**
     * Configuration for an optional set of secondary outputs
     * During invocation, set these values with `context.extraOutputs.set()`
     */
    extraOutputs?: FunctionOutput[];
}

/**
 * Full configuration for the primary input to a function
 */
export interface FunctionTrigger extends Record<string, unknown> {
    /**
     * The type for this trigger ('httpTrigger', 'timerTrigger', etc.)
     * If using the `trigger` namespace to create this object, the type will be set for you
     */
    type: string;

    /**
     * Must be unique within this function.
     * If using the `trigger` namespace to create this object, the name will be auto-generated for you
     */
    name: string;
}

/**
 * Full configuration for the secondary input to a function ("trigger" is the primary input)
 * NOTE: Not all triggers can be used as secondary inputs
 */
export interface FunctionInput extends Record<string, unknown> {
    /**
     * The type for this trigger ('blob', 'cosmosDB', etc.)
     * If using the `input` namespace to create this object, the type will be set for you
     */
    type: string;

    /**
     * Must be unique within this function.
     * If using the `input` namespace to create this object, the name will be auto-generated for you
     */
    name: string;
}

/**
 * Full configuration for the output to a function
 */
export interface FunctionOutput extends Record<string, unknown> {
    /**
     * The type for this output ('http', 'blob', 'queue', etc.)
     * If using the `output` namespace to create this object, the type will be set for you
     */
    type: string;

    /**
     * Must be unique within this function.
     * If using the `output` namespace to create this object, the name will be auto-generated for you
     */
    name: string;
}
