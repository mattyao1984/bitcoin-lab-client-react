import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './_infoBlock.scss';

import InfoCard from './../InfoCard';

class InfoBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localTime: null
    };
  }

  componentDidMount() {
    const { data } = this.props;
    this.setState({
      localTime: moment.utc(data.updated).local().format('YYYY-MM-DD HH:mm:ss')
    })
  }

  render() {
    const { title, data } = this.props;

    if (!this.props) {
      return null;
    }

    return (
      <section className="info-block">
        <h2>{ title }</h2>
        <h5>Last update: { this.state.localTime }</h5>
        <InfoCard data={ data } />
      </section>
    );
  }
}

InfoBlock.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default InfoBlock;