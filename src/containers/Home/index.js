import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BitcoinActions } from '../../actions';
import PageBanner from '../../components/common/PageBanner';
import InfoBlock from '../../components/Bitcoin/InfoBlock';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'AUD',
      serverError: null,
      serverResponse: null
    };
  }

  componentWillMount() {
    this.props.loadBitcoinInfo(this.state.currency, () => {
      this.setState({
        serverError: this.props.serverError,
        serverResponse: this.props.serverResponse
      });
    });
  }

  render() {
    const { serverResponse } = this.props;
    if (this.props.serverResponse === null || this.props.serverResponse === undefined) {
      return null;
    } else {
      return (
        <div className="page home">
          <PageBanner/>
          <div className="container">
            <InfoBlock
              title="Bitcoin Exchange - AUD"
              data={ serverResponse.data } />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    serverResponse: state.BitcoinReducer.data,
    serverError: state.BitcoinReducer.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadBitcoinInfo: (currency, cb) => {
      dispatch(BitcoinActions.loadBitcoinAPI(currency, cb));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);