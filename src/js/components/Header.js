import React from 'react';
import '../../css/Header.css';


class Header extends React.Component {
  render() {
    return (
      <header>
       	<div className="left">
        Simple-Forum
	      </div>
	      <div className="right">
	        {this.props.userName}
	      </div>
      </header>
    );
  }
}

Header.defaultProps = {
  userName: "missing_username"
};

export default Header;
