import React from 'react';
import '../../css/Sidebar.css';

class Sidebar extends React.Component {

  addPost() {
    
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-section">
          <span>This thread was started by john_sample on March 25th, 2017.</span>
        </div>

      	<div className="sidebar-section">
          <span>Add a post:</span>
      		<textarea placeholder="Add to the conversation..."></textarea>
          <button>Submit</button>
      	</div>
      </div>
    );
  }
}

export default Sidebar;
