import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {incrementPostCount, editUserName} from '../actions/index'

class AdminSection extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    changeName: PropTypes.func.isRequired
  }

  render() {
    const { user, increment, changeName } = this.props

    return (
      <div>
        <input id="multipurpose-input" type="text" />
        <br /><br />
        <button onClick={ changeName }>
          edit userName
        </button>
        { " " }
        <button onClick={ increment }>
          postCount++
        </button>
        { " " }
        <button>
          edit joinDate
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(incrementPostCount);
  return ({
    user: state.user,
    actions: ownProps.actions
  });
}

const mapDispatchToProps = dispatch => ({
  increment: (text) => dispatch(incrementPostCount(text)),
  changeName: () => dispatch(editUserName())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection)