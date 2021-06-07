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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NewService
 */
export interface NewService {
    /**
     * 
     * @type {string}
     * @memberof NewService
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof NewService
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof NewService
     */
    avatar?: string;
    /**
     * 
     * @type {string}
     * @memberof NewService
     */
    summary?: string;
}

export function NewServiceFromJSON(json: any): NewService {
    return NewServiceFromJSONTyped(json, false);
}

export function NewServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'avatar': !exists(json, 'avatar') ? undefined : json['avatar'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
    };
}

export function NewServiceToJSON(value?: NewService | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'avatar': value.avatar,
        'summary': value.summary,
    };
}


