import React from 'react';
import '../../css/Post.css';

class Post extends React.Component {

  renderPost(_id) {
    return null;
  }

  render() {
    return (
      <div className="post">
        <div className="head">
          <span className="user">{ 'sampleUser' } </span>
          <span className="datetime">{ '11/11/2011' }</span>
        </div>
        <div className="body">
          { 'This is the content of the post, generated thru the renderPost function' }
        </div>
      </div>
    );
  }
}

Post.defaultProps = {
	id: -1
};

export default Post;
