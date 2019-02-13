import request from 'superagent';

export const ADS_FETCHED = 'ADS_FETCHED';
export const AD_FETCHED = 'AD_FETCHED';

const baseUrl = 'http://localhost:4000';

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

const adFetched = ad => ({
  type: AD_FETCHED,
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
