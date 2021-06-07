/* tslint:disable */
/* eslint-disable */
/**
 * Roman Swagger
 * Roman - Wire Bots Proxy
 *
 * The version of the OpenAPI document: 1.14.0
 * Contact: dejan@wire.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Conversation,
    ConversationFromJSON,
    ConversationToJSON,
    ErrorMessage,
    ErrorMessageFromJSON,
    ErrorMessageToJSON,
    IncomingMessage,
    IncomingMessageFromJSON,
    IncomingMessageToJSON,
    NewService,
    NewServiceFromJSON,
    NewServiceToJSON,
    NewUser,
    NewUserFromJSON,
    NewUserToJSON,
    OutgoingMessage,
    OutgoingMessageFromJSON,
    OutgoingMessageToJSON,
    PostMessageResult,
    PostMessageResultFromJSON,
    PostMessageResultToJSON,
    Report,
    ReportFromJSON,
    ReportToJSON,
    Result,
    ResultFromJSON,
    ResultToJSON,
    SignIn,
    SignInFromJSON,
    SignInToJSON,
    UpdateService,
    UpdateServiceFromJSON,
    UpdateServiceToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface CreateRequest {
    body?: NewService;
}

export interface GetRequest {
    appKey?: string;
    id?: string;
}

export interface Get3Request {
    userId: string;
}

export interface LoginRequest {
    body?: SignIn;
}

export interface PostRequest {
    appKey?: string;
    body?: IncomingMessage;
}

export interface Post1Request {
    body?: IncomingMessage;
}

export interface Post2Request {
    body?: OutgoingMessage;
}

export interface RegisterRequest {
    body?: NewUser;
}

export interface UpdateRequest {
    body?: UpdateService;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Delete the Service
     */
    async _deleteRaw(): Promise<runtime.ApiResponse<Result>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/service`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultFromJSON(jsonValue));
    }

    /**
     * Delete the Service
     */
    async _delete(): Promise<Result> {
        const response = await this._deleteRaw();
        return await response.value();
    }

    /**
     * Create new Service
     */
    async createRaw(requestParameters: CreateRequest): Promise<runtime.ApiResponse<Result>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/service`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewServiceToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultFromJSON(jsonValue));
    }

    /**
     * Create new Service
     */
    async create(requestParameters: CreateRequest): Promise<Result> {
        const response = await this.createRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get latest broadcast report
     */
    async getRaw(requestParameters: GetRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.id !== undefined) {
            queryParameters['id'] = requestParameters.id;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.appKey !== undefined && requestParameters.appKey !== null) {
            headerParameters['app-key'] = String(requestParameters.appKey);
        }

        const response = await this.request({
            path: `/broadcast`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get latest broadcast report
     */
    async get(requestParameters: GetRequest): Promise<void> {
        await this.getRaw(requestParameters);
    }

    /**
     * Get conversation data
     */
    async get1Raw(): Promise<runtime.ApiResponse<Conversation>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/conversation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
    }

    /**
     * Get conversation data
     */
    async get1(): Promise<Conversation> {
        const response = await this.get1Raw();
        return await response.value();
    }

    /**
     * Get the Service
     */
    async get2Raw(): Promise<runtime.ApiResponse<Result>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/service`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultFromJSON(jsonValue));
    }

    /**
     * Get the Service
     */
    async get2(): Promise<Result> {
        const response = await this.get2Raw();
        return await response.value();
    }

    /**
     * Get user profile
     */
    async get3Raw(requestParameters: Get3Request): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling get3.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Get user profile
     */
    async get3(requestParameters: Get3Request): Promise<User> {
        const response = await this.get3Raw(requestParameters);
        return await response.value();
    }

    /**
     * Login as Wire Bot Developer
     */
    async loginRaw(requestParameters: LoginRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SignInToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Login as Wire Bot Developer
     */
    async login(requestParameters: LoginRequest): Promise<void> {
        await this.loginRaw(requestParameters);
    }

    /**
     * Broadcast message on Wire
     */
    async postRaw(requestParameters: PostRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.appKey !== undefined && requestParameters.appKey !== null) {
            headerParameters['app-key'] = String(requestParameters.appKey);
        }

        const response = await this.request({
            path: `/broadcast`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IncomingMessageToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Broadcast message on Wire
     */
    async post(requestParameters: PostRequest): Promise<void> {
        await this.postRaw(requestParameters);
    }

    /**
     * Post message on Wire
     */
    async post1Raw(requestParameters: Post1Request): Promise<runtime.ApiResponse<PostMessageResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/conversation`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: IncomingMessageToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => PostMessageResultFromJSON(jsonValue));
    }

    /**
     * Post message on Wire
     */
    async post1(requestParameters: Post1Request): Promise<PostMessageResult> {
        const response = await this.post1Raw(requestParameters);
        return await response.value();
    }

    /**
     * Dummy. Bot developer should implement this
     */
    async post2Raw(requestParameters: Post2Request): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/messages`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OutgoingMessageToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Dummy. Bot developer should implement this
     */
    async post2(requestParameters: Post2Request): Promise<void> {
        await this.post2Raw(requestParameters);
    }

    /**
     * Register as Wire Bot Developer
     */
    async registerRaw(requestParameters: RegisterRequest): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: NewUserToJSON(requestParameters.body),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Register as Wire Bot Developer
     */
    async register(requestParameters: RegisterRequest): Promise<void> {
        await this.registerRaw(requestParameters);
    }

    /**
     * Update Service
     */
    async updateRaw(requestParameters: UpdateRequest): Promise<runtime.ApiResponse<Result>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/service`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateServiceToJSON(requestParameters.body),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ResultFromJSON(jsonValue));
    }

    /**
     * Update Service
     */
    async update(requestParameters: UpdateRequest): Promise<Result> {
        const response = await this.updateRaw(requestParameters);
        return await response.value();
    }

}
