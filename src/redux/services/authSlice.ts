import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ErrorPopup } from "../../components/popup/Popup";
import { BASE_URL } from "../../constants/api";

export const transformErrorResponse = (error: any) =>
  ErrorPopup(error?.data?.message);

interface LoginBody {
  email: string;
  password: string;
}

interface SignupBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  businessName: string;
}

export const authService = createApi({
  reducerPath: "authService",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body: LoginBody) => ({
        url: "/business/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: any) => response.data,
    }),

    signup: builder.mutation({
      query: (body: SignupBody) => ({
        url: "/business/signup",
        method: "POST",
        body,
      }),
      transformResponse: (response: any) => response.data,
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authService;
