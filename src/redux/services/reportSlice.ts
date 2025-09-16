import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';

export const reportSlice = createApi({
    reducerPath: 'reportSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + "/report", credentials: 'include' }),
    tagTypes: ['Report'],
    endpoints: (builder) => ({
        getProjectInfo: builder.query({
            query: () => `/info`,
            transformResponse: (response) => response?.data
        }),
    }),
})

export const {
    useGetProjectInfoQuery,
} = reportSlice
