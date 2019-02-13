import React from 'react';
import { connect } from 'react-redux';

import AdDetails from './AdDetails';
import { loadAd } from '../actions/ads';

class AdDetailsContainer extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.loadAd(id);
  }

  render() {
    return (
      <div>
        {!this.props.ad && 'Loading'}
        {this.props.ad && <AdDetails ad={this.props.ad} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ad: state.ad });

export default connect(
  mapStateToProps,
  { loadAd }
)(AdDetailsContainer);
