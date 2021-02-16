import { request } from './generic.service';

const getProduct = id => request({ url: `products/${id}`, method: 'get' });

const getProducts = () => request({ url: `products`, method: 'get' });

export { getProduct, getProducts };
