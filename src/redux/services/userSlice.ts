import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constants/api';
import { transformErrorResponse } from './authSlice';

export const userSlice = createApi({
    reducerPath: 'userSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL + '/user', credentials: 'include' }),
    tagTypes: ['Profile'],
    refetchOnMountOrArgChange: true,

    endpoints: (builder) => ({
        getMe: builder.query<any, void>({
            query: () => `/profile`,
            transformResponse: (response: any) => response?.data?.user,
            providesTags: ['Profile'],
        }),

        updateProfile: builder.mutation<any, any>({
            query: (data) => ({
                url: `/profile`,
                method: 'PATCH',
                body: data,
            }),
            transformErrorResponse,
            invalidatesTags: ['Profile'],
        }),
    }),
});

export const {
    useGetMeQuery,
    useUpdateProfileMutation,
} = userSlice;
