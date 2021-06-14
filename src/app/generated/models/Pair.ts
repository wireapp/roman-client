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
 * @interface Pair
 */
export interface Pair {
    /**
     * 
     * @type {string}
     * @memberof Pair
     */
    type?: PairTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof Pair
     */
    count?: number;
}

/**
* @export
* @enum {string}
*/
export enum PairTypeEnum {
    Sent = 'SENT',
    Delivered = 'DELIVERED',
    Read = 'READ',
    Failed = 'FAILED'
}

export function PairFromJSON(json: any): Pair {
    return PairFromJSONTyped(json, false);
}

export function PairFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pair {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'count': !exists(json, 'count') ? undefined : json['count'],
    };
}

export function PairToJSON(value?: Pair | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'count': value.count,
    };
}

