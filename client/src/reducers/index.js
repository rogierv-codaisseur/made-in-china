import { combineReducers } from 'redux';

import ads from './ads';
import ad from './ad';
import currentUser from './currentUser';

export default combineReducers({ ads, ad, currentUser });
