import React, { PropTypes, Component } from 'react'

export default class Header extends Component {
  render() {
    const { user } = this.props
    
    return(
      <header className="header">
        <h4>User information for '{ user.userName }':</h4>
        <table>
          <tbody>
            <tr>
              <td>Join Date</td>
              <td>{ user.joinDate }</td>
            </tr>
            <tr>
              <td>Number of Posts</td>
              <td>{ user.postCount }</td>
            </tr>
          </tbody>
        </table>
      </header>
    )
  }
}