import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_header.scss';

import Navigator from './../Navigator';

const bitCoinImg = require('./../../../assets/images/logo_512.png');

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          title: 'Home',
          href: '/'
        },
        {
          title: 'About',
          href: '/about'
        },
        {
          title: 'Contact',
          href: '/contact'
        }
      ]
    };
  }

  render() {
    const { title } = this.props;
    return (
      <header id="header">
        <div className="container">
          <div className="logo-wrapper">
            <img id="logo" src={bitCoinImg} width={32} alt="logo" />
            <h1>{title}</h1>
          </div>
          <Navigator links={this.state.links}/>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;