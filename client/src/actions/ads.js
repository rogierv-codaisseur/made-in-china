import request from 'superagent';

export const ADS_FETCHED = 'ADS_FETCHED';
export const AD_FETCHED = 'AD_FETCHED';
export const AD_CREATE_SUCCESS = 'AD_CREATE_SUCCESS';

const baseUrl = 'http://localhost:4000';

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

const adFetched = ad => ({
  type: AD_FETCHED,
  ad
});

const adCreateSuccess = ad => ({
  type: AD_CREATE_SUCCESS,
  ad
});

export const loadAds = () => (dispatch, getState) => {
  if (getState().ads) return;

  request(`${baseUrl}/ads`)
    .then(response => {
      dispatch(adsFetched(response.body.ads));
    })
    .catch(console.error);
};

export const loadAd = id => dispatch => {
  request(`${baseUrl}/ads/${id}`)
    .then(response => {
      dispatch(adFetched(response.body));
    })
    .catch(console.error);
};

export const createAd = data => dispatch => {
  request
    .post(`${baseUrl}/ads`)
    .send(data)
    .then(response => {
      dispatch(adCreateSuccess(response.body));
    })
    .catch(console.error);
};
