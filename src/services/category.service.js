import { request } from './generic.service';

const getCategory = id => request({ url: `categories/${id}`, method: 'get' });

const getCategories = () => request({ url: `categories`, method: 'get' });

export { getCategory, getCategories };
