import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ScrollToTopLink extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.scrollTo(0, 0);
  }

  render() {
    const { to, children } = this.props;
    return (
      <Link style={{color: 'black'}} to={to} onClick={this.handleClick}>
        {children}
      </Link>
    );
  }
}

export default ScrollToTopLink;
