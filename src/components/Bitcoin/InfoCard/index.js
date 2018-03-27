import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_infoCard.scss';

const bitCoinImg = require('./../../../assets/images/logo_512.png');

class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.formatRate = this.formatRate.bind(this);
  }

  formatRate(val) {
    return val.slice(0, -2);
  }

  render() {
    const { data } = this.props;

    if (!this.props) {
      return null;
    }

    return (
      <div className="info-card">
        <img src={bitCoinImg} width="64" alt="coin-logo" />
        <h3 id="currency-rate">$ { this.formatRate(data.rate) }</h3>
      </div>
    );
  }
}

InfoCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default InfoCard;