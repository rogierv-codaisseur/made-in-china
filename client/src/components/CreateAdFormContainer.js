import React from 'react';
import { connect } from 'react-redux';

import { createAd } from '../actions/ads';
import AdForm from './AdForm';

class CreateAdFormContainer extends React.Component {
  state = {
    title: '',
    price: '',
    emailAddress: ''
  };

  onChange = ad => {
    this.setState({
      [ad.target.name]: ad.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      title: '',
      price: '',
      emailAddress: ''
    });
    this.props.createAd(this.state);
  };

  render() {
    return (
      <AdForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(
  null,
  { createAd }
)(CreateAdFormContainer);
