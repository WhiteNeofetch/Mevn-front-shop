import { request } from './generic.service';

const getPaymentIntent = data => request({ url: `payment`, method: 'post', data });


export { getPaymentIntent,  };
