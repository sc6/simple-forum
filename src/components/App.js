import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import GuestSection from '../components/GuestSection'
import AdminSection from '../components/AdminSection'
import * as AdminActions from '../actions'

const App = ({user, actions}) => (
  <div>
  	<GuestSection user={user} />
  	<br />
  	<AdminSection user={user} actions={actions} />
  </div>
)

App.propTypes = {
	user: PropTypes.object.isRequired,
	actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	actions: (bindActionCreators(AdminActions, dispatch))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)