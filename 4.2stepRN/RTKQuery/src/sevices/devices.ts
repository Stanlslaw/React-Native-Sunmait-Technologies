// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import type {Device} from '../types/index.ts';

// Define a service using a base URL and expected endpoints
export const devicesApi = createApi({
  reducerPath: 'devicesApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.restful-api.dev/objects'}),
  endpoints: builder => ({
    getDevices: builder.query<Device[], null>({
      query: () => '',
    }),
    addDevice: builder.mutation<Device, Partial<Device>>({
      query: ({data}) => ({
        method: 'POST',
        url: '',
        body: data,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetDevicesQuery, useAddDeviceMutation} = devicesApi;
