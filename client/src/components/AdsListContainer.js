import React from 'react';
import { connect } from 'react-redux';

import AdsList from './AdsList';
import { loadAds } from '../actions/ads';

class AdsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    return (
      <div>
        {!this.props.ads && 'Loading'}
        {this.props.ads && <AdsList ads={this.props.ads} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ads: state.ads });

export default connect(
  mapStateToProps,
  { loadAds }
)(AdsListContainer);
