// export const BASE_URL =
//   process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : '';

//Com o uso do proxy no frontend não é preciso "autorizar" no backend os requests do frontend por causa do "Access-Control-Allow-Origin"
//Como estamos usando um proxy, não precisamos especificar o base_url. O base_url já está especificado no proxy:
export const BASE_URL = '';

export const PRODUCTS_URL = '/api/products';
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
export const UPLOAD_URL = '/api/upload';
