import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AdsList from './AdsList';
import { loadAds } from '../actions/ads';
import LoginFormContainer from './LoginFormContainer';
import CreateAdButton from './CreateAdButton';

class AdsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadAds();
  }

  render() {
    if (!this.props.ads) return 'Loading';

    // TODO: Make it D.R.Y.
    if (!this.props.currentUser)
      return (
        <div>
          <AdsList ads={this.props.ads} currentUser={this.props.currentUser} />
          {!this.props.currentUser}
          To create advertisements you need to log in.
          <LoginFormContainer />
          Register <Link to='/register'>here</Link>
        </div>
      );

    return (
      <div>
        <AdsList ads={this.props.ads} currentUser={this.props.currentUser} />
        <CreateAdButton />
        <p>You are logged in.</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ads: state.ads,
  currentUser: state.currentUser
});

export default connect(
  mapStateToProps,
  { loadAds }
)(AdsListContainer);
