import { USERS_URL } from '../../constants';
import { apiSlice } from './apiSlice';

// *Quando um data é fetched do server, o RTK Query vai armazenar o data no Redux store como um "cache". Quando um request adicional for feito para o mesmo data, o RTK Query vai fornecer o data do cache ao invés de mandar um novo request para o server.

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      //logout no backend
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
