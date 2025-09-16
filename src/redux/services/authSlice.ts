import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ErrorPopup } from '../../components/popup/Popup';
import { BASE_URL } from '../../constants/api';

export const transformErrorResponse = (error: any) => ErrorPopup(error?.data?.message)

interface LoginBody {
    email: string;
    password: string;
}

export const authSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: 'include' }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body: LoginBody) => ({
                url: "/admin/auth/signin",
                method: "POST",
                body,
            }),
            transformResponse: (response: any) => response.data,
            transformErrorResponse
        }),

        logout: builder.query({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
        }),
    }),
})

export const {
    useLoginMutation,
    useLogoutQuery,
} = authSlice
