import paypal, { configure } from 'paypal-rest-sdk';

configure({
  'mode': 'sandbox', // 'sandbox' or 'live'
  'client_id': 'AUmVvVtMmjOG1_oYnEC0SkOXI07qoNtDv-qXUx5iTlpQjNwZysTiOGY9iHUJWa3OPVXOtjhjE2p28NKR',
  'client_secret': 'ENHLYqOxEYb_7Co-n9KH2FaFmBw-xrFLW_vBqkdfUDmadnG8Sbv-SDCt63RBRWv2oKTULU6gnsGjtbuh'
});

export default paypal;
