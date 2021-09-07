// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as betaanalyticsdataModule from '../src';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta.BetaAnalyticsDataClient', () => {
  it('has servicePath', () => {
    const servicePath =
      betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.betaAnalyticsDataStub, undefined);
    await client.initialize();
    assert(client.betaAnalyticsDataStub);
  });

  it('has close method', () => {
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
    const result = await client.getProjectId();
    assert.strictEqual(result, fakeProjectId);
    assert((client.auth.getProjectId as SinonStub).calledWithExactly());
  });

  it('has getProjectId method with callback', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.auth.getProjectId = sinon
      .stub()
      .callsArgWith(0, null, fakeProjectId);
    const promise = new Promise((resolve, reject) => {
      client.getProjectId((err?: Error | null, projectId?: string | null) => {
        if (err) {
          reject(err);
        } else {
          resolve(projectId);
        }
      });
    });
    const result = await promise;
    assert.strictEqual(result, fakeProjectId);
  });

  describe('runReport', () => {
    it('invokes runReport without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunReportResponse()
      );
      client.innerApiCalls.runReport = stubSimpleCall(expectedResponse);
      const [response] = await client.runReport(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes runReport without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunReportResponse()
      );
      client.innerApiCalls.runReport =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.runReport(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IRunReportResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes runReport with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.runReport = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.runReport(request), expectedError);
      assert(
        (client.innerApiCalls.runReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('runPivotReport', () => {
    it('invokes runPivotReport without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunPivotReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunPivotReportResponse()
      );
      client.innerApiCalls.runPivotReport = stubSimpleCall(expectedResponse);
      const [response] = await client.runPivotReport(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runPivotReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes runPivotReport without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunPivotReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunPivotReportResponse()
      );
      client.innerApiCalls.runPivotReport =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.runPivotReport(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IRunPivotReportResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runPivotReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes runPivotReport with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunPivotReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.runPivotReport = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.runPivotReport(request), expectedError);
      assert(
        (client.innerApiCalls.runPivotReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('batchRunReports', () => {
    it('invokes batchRunReports without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunReportsResponse()
      );
      client.innerApiCalls.batchRunReports = stubSimpleCall(expectedResponse);
      const [response] = await client.batchRunReports(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchRunReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes batchRunReports without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunReportsResponse()
      );
      client.innerApiCalls.batchRunReports =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.batchRunReports(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IBatchRunReportsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchRunReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes batchRunReports with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.batchRunReports = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.batchRunReports(request), expectedError);
      assert(
        (client.innerApiCalls.batchRunReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('batchRunPivotReports', () => {
    it('invokes batchRunPivotReports without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunPivotReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunPivotReportsResponse()
      );
      client.innerApiCalls.batchRunPivotReports =
        stubSimpleCall(expectedResponse);
      const [response] = await client.batchRunPivotReports(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchRunPivotReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes batchRunPivotReports without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunPivotReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunPivotReportsResponse()
      );
      client.innerApiCalls.batchRunPivotReports =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.batchRunPivotReports(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IBatchRunPivotReportsResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.batchRunPivotReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes batchRunPivotReports with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.BatchRunPivotReportsRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.batchRunPivotReports = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.batchRunPivotReports(request), expectedError);
      assert(
        (client.innerApiCalls.batchRunPivotReports as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('getMetadata', () => {
    it('invokes getMetadata without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.GetMetadataRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.Metadata()
      );
      client.innerApiCalls.getMetadata = stubSimpleCall(expectedResponse);
      const [response] = await client.getMetadata(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getMetadata as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getMetadata without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.GetMetadataRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.Metadata()
      );
      client.innerApiCalls.getMetadata =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getMetadata(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IMetadata | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getMetadata as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getMetadata with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.GetMetadataRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getMetadata = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getMetadata(request), expectedError);
      assert(
        (client.innerApiCalls.getMetadata as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('runRealtimeReport', () => {
    it('invokes runRealtimeReport without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunRealtimeReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunRealtimeReportResponse()
      );
      client.innerApiCalls.runRealtimeReport = stubSimpleCall(expectedResponse);
      const [response] = await client.runRealtimeReport(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runRealtimeReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes runRealtimeReport without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunRealtimeReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunRealtimeReportResponse()
      );
      client.innerApiCalls.runRealtimeReport =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.runRealtimeReport(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.IRunRealtimeReportResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.runRealtimeReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes runRealtimeReport with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.RunRealtimeReportRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.runRealtimeReport = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.runRealtimeReport(request), expectedError);
      assert(
        (client.innerApiCalls.runRealtimeReport as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('checkCompatibility', () => {
    it('invokes checkCompatibility without error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.CheckCompatibilityRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.CheckCompatibilityResponse()
      );
      client.innerApiCalls.checkCompatibility =
        stubSimpleCall(expectedResponse);
      const [response] = await client.checkCompatibility(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.checkCompatibility as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes checkCompatibility without error using callback', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.CheckCompatibilityRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.analytics.data.v1beta.CheckCompatibilityResponse()
      );
      client.innerApiCalls.checkCompatibility =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.checkCompatibility(
          request,
          (
            err?: Error | null,
            result?: protos.google.analytics.data.v1beta.ICheckCompatibilityResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.checkCompatibility as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes checkCompatibility with error', async () => {
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.analytics.data.v1beta.CheckCompatibilityRequest()
      );
      request.property = '';
      const expectedHeaderRequestParams = 'property=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.checkCompatibility = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.checkCompatibility(request), expectedError);
      assert(
        (client.innerApiCalls.checkCompatibility as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('Path templates', () => {
    describe('metadata', () => {
      const fakePath = '/rendered/path/metadata';
      const expectedParameters = {
        property: 'propertyValue',
      };
      const client = new betaanalyticsdataModule.v1beta.BetaAnalyticsDataClient(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
      client.initialize();
      client.pathTemplates.metadataPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.metadataPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('metadataPath', () => {
        const result = client.metadataPath('propertyValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.metadataPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchPropertyFromMetadataName', () => {
        const result = client.matchPropertyFromMetadataName(fakePath);
        assert.strictEqual(result, 'propertyValue');
        assert(
          (client.pathTemplates.metadataPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
