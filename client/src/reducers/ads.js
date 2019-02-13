import { ADS_FETCHED } from '../actions/ads';

export default (state = null, action = {}) => {
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;
    default:
      return state;
  }
};
