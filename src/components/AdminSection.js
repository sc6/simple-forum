import React, { Component, PropTypes } from 'react'
// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { incrementPostCount, editUserNameDelegate, editJoinDate } from '../actions/index'

class AdminSection extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { textInput: "" };
  }

  handleChange = () => {
    this.setState({ textInput: this.refs.textInput.value }) 
  }

  render() {
    const { increment, changeJoinDate } = this.props
    //console.log(this.refs.textInput)
    return (
      <form>
        <input id="multipurpose-input" type="text" ref="textInput" onChange={this.handleChange} />
        <br /><br />
        <input type="button" onClick={ editUserNameDelegate() } value="edit UserName" />
        { " " }
        <input type="button" onClick={ increment } value="postCount++" />
        { " " }
        <input type="button" onClick={ changeJoinDate } value="edit joinDate" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    user: state.user
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    increment: () => dispatch(incrementPostCount()),
    changeJoinDate: () => dispatch(editJoinDate("Mar-12-2020"))
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)