/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-misused-new */
/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable @typescript-eslint/no-unused-vars */

// This file was automatically generated by elastic/elastic-client-generator-js
// DO NOT MODIFY IT BY HAND. Instead, modify the source open api file,
// and elastic/elastic-client-generator-js to regenerate this file again.

import {
  Transport,
  TransportRequestOptions,
  TransportRequestOptionsWithMeta,
  TransportRequestOptionsWithOutMeta,
  TransportResult
} from '@elastic/transport'
import * as T from '../types'
import * as TB from '../typesWithBodyKey'
interface That { transport: Transport }

export default class QueryRuleset {
  transport: Transport
  constructor (transport: Transport) {
    this.transport = transport
  }

  /**
    * Deletes a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/delete-query-ruleset.html | Elasticsearch API documentation}
    */
  async delete (this: That, params: T.QueryRulesetDeleteRequest | TB.QueryRulesetDeleteRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesetDeleteResponse>
  async delete (this: That, params: T.QueryRulesetDeleteRequest | TB.QueryRulesetDeleteRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesetDeleteResponse, unknown>>
  async delete (this: That, params: T.QueryRulesetDeleteRequest | TB.QueryRulesetDeleteRequest, options?: TransportRequestOptions): Promise<T.QueryRulesetDeleteResponse>
  async delete (this: That, params: T.QueryRulesetDeleteRequest | TB.QueryRulesetDeleteRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'DELETE'
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Returns the details about a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/get-query-ruleset.html | Elasticsearch API documentation}
    */
  async get (this: That, params: T.QueryRulesetGetRequest | TB.QueryRulesetGetRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesetGetResponse>
  async get (this: That, params: T.QueryRulesetGetRequest | TB.QueryRulesetGetRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesetGetResponse, unknown>>
  async get (this: That, params: T.QueryRulesetGetRequest | TB.QueryRulesetGetRequest, options?: TransportRequestOptions): Promise<T.QueryRulesetGetResponse>
  async get (this: That, params: T.QueryRulesetGetRequest | TB.QueryRulesetGetRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const querystring: Record<string, any> = {}
    const body = undefined

    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Lists query rulesets.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/list-query-rulesets.html | Elasticsearch API documentation}
    */
  async list (this: That, params?: T.QueryRulesetListRequest | TB.QueryRulesetListRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesetListResponse>
  async list (this: That, params?: T.QueryRulesetListRequest | TB.QueryRulesetListRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesetListResponse, unknown>>
  async list (this: That, params?: T.QueryRulesetListRequest | TB.QueryRulesetListRequest, options?: TransportRequestOptions): Promise<T.QueryRulesetListResponse>
  async list (this: That, params?: T.QueryRulesetListRequest | TB.QueryRulesetListRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = []
    const querystring: Record<string, any> = {}
    const body = undefined

    params = params ?? {}
    for (const key in params) {
      if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'GET'
    const path = '/_query_rules'
    return await this.transport.request({ path, method, querystring, body }, options)
  }

  /**
    * Creates or updates a query ruleset.
    * @see {@link https://www.elastic.co/guide/en/elasticsearch/reference/master/put-query-ruleset.html | Elasticsearch API documentation}
    */
  async put (this: That, params: T.QueryRulesetPutRequest | TB.QueryRulesetPutRequest, options?: TransportRequestOptionsWithOutMeta): Promise<T.QueryRulesetPutResponse>
  async put (this: That, params: T.QueryRulesetPutRequest | TB.QueryRulesetPutRequest, options?: TransportRequestOptionsWithMeta): Promise<TransportResult<T.QueryRulesetPutResponse, unknown>>
  async put (this: That, params: T.QueryRulesetPutRequest | TB.QueryRulesetPutRequest, options?: TransportRequestOptions): Promise<T.QueryRulesetPutResponse>
  async put (this: That, params: T.QueryRulesetPutRequest | TB.QueryRulesetPutRequest, options?: TransportRequestOptions): Promise<any> {
    const acceptedPath: string[] = ['ruleset_id']
    const acceptedBody: string[] = ['query_ruleset']
    const querystring: Record<string, any> = {}
    // @ts-expect-error
    let body: any = params.body ?? undefined

    for (const key in params) {
      if (acceptedBody.includes(key)) {
        // @ts-expect-error
        body = params[key]
      } else if (acceptedPath.includes(key)) {
        continue
      } else if (key !== 'body') {
        // @ts-expect-error
        querystring[key] = params[key]
      }
    }

    const method = 'PUT'
    const path = `/_query_rules/${encodeURIComponent(params.ruleset_id.toString())}`
    return await this.transport.request({ path, method, querystring, body }, options)
  }
}
