import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { incrementPostCount, editUserName, editJoinDate } from '../actions/index'

class AdminSection extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired
  }

  render() {
    const { increment, changeName, changeJoinDate } = this.props
    //console.log(this.refs.textInput)
    return (
      <form>
        <input id="multipurpose-input" type="text" ref="textInput"/>
        <br /><br />
        <input type="button" onClick={ changeName } value="edit UserName" />
        { " " }
        <input type="button" onClick={ increment } value="postCount++" />
        { " " }
        <input type="button" onClick={ changeJoinDate } value="edit joinDate" />
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.user,
    actions: ownProps.actions
  });
}

const mapDispatchToProps = (dispatch) => {
  //console.log(ownProps.user)
  return ({
    increment: () => dispatch(incrementPostCount()),
    changeName: () => dispatch(editUserName("Hello world")),
    changeJoinDate: () => dispatch(editJoinDate("Mar-12-2020"))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)