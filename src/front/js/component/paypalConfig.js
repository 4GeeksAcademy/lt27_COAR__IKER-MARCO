import paypal, { configure } from 'paypal-rest-sdk';

configure({
  'mode': 'sandbox', // 'sandbox' or 'live'
  'client_id': 'YOUR_CLIENT_ID',
  'client_secret': 'YOUR_CLIENT_SECRET'
});

export default paypal;
