import { PRODUCTS_URL } from '../../constants';
import { apiSlice } from './apiSlice';

// *Quando um data é fetched do server, o RTK Query vai armazenar o data no Redux store como um "cache". Quando um request adicional for feito para o mesmo data, o RTK Query vai fornecer o data do cache ao invés de mandar um novo request para o server.

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, //tempo segundos que permanece no *cache
    }),
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductDetailsQuery } =
  productsApiSlice;
