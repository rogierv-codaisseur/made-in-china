import request from 'superagent';

export const ADS_FETCHED = 'ADS_FETCHED';

const baseUrl = 'http://localhost:4000';

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

export const loadAds = () => (dispatch, getState) => {
  if (getState().ads) return;

  request(`${baseUrl}/ads`)
    .then(response => {
      dispatch(adsFetched(response.body.ads));
    })
    .catch(console.error);
};
