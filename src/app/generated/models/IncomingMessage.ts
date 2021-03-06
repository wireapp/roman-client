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
import {
    Attachment,
    AttachmentFromJSON,
    AttachmentFromJSONTyped,
    AttachmentToJSON,
    Call,
    CallFromJSON,
    CallFromJSONTyped,
    CallToJSON,
    Poll,
    PollFromJSON,
    PollFromJSONTyped,
    PollToJSON,
    Text,
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './';

/**
 * 
 * @export
 * @interface IncomingMessage
 */
export interface IncomingMessage {
    /**
     * 
     * @type {string}
     * @memberof IncomingMessage
     */
    type: string;
    /**
     * 
     * @type {Text}
     * @memberof IncomingMessage
     */
    text?: Text;
    /**
     * 
     * @type {Poll}
     * @memberof IncomingMessage
     */
    poll?: Poll;
    /**
     * 
     * @type {Attachment}
     * @memberof IncomingMessage
     */
    attachment?: Attachment;
    /**
     * 
     * @type {Call}
     * @memberof IncomingMessage
     */
    call?: Call;
}

export function IncomingMessageFromJSON(json: any): IncomingMessage {
    return IncomingMessageFromJSONTyped(json, false);
}

export function IncomingMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncomingMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'text': !exists(json, 'text') ? undefined : TextFromJSON(json['text']),
        'poll': !exists(json, 'poll') ? undefined : PollFromJSON(json['poll']),
        'attachment': !exists(json, 'attachment') ? undefined : AttachmentFromJSON(json['attachment']),
        'call': !exists(json, 'call') ? undefined : CallFromJSON(json['call']),
    };
}

export function IncomingMessageToJSON(value?: IncomingMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'text': TextToJSON(value.text),
        'poll': PollToJSON(value.poll),
        'attachment': AttachmentToJSON(value.attachment),
        'call': CallToJSON(value.call),
    };
}


