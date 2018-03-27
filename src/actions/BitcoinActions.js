import BitcoinConstants from './../constants/BitcoinConstants';
import axios from 'axios';

const envObj = process.env;
console.warn('env: ', envObj);

const BitcoinActions = {
  loadBitcoinRequest: function() {
    return {
      type: BitcoinConstants.LOAD_BITCOIN_INFO
    }
  },

  loadBitcoinError: function(error) {
    return {
      error,
      type: BitcoinConstants.LOAD_BITCOIN_INFO_ERROR
    };
  },

  loadBitcoinSuccess: function(response) {
    return {
      response,
      type: BitcoinConstants.LOAD_BITCOIN_INFO_SUCCESS
    };
  },

  loadBitcoinAPI: (currency, cb) => {
    const _obj = this;

    return (dispatch) => {
      dispatch(_obj.a.loadBitcoinRequest());

      return axios({
        method: 'get',
        url: `${envObj.PUBLIC_URL}/api/rates/${currency}`
      })
        .then((response) => {
          dispatch(_obj.a.loadBitcoinSuccess(response));

          if (cb !== null) {
            cb();
          }
        })
        .catch((error) => {
          dispatch(_obj.a.loadBitcoinError(error));
          console.warn(error);
        });
    }
  }
};

export default BitcoinActions;