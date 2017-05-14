import React from 'react';
import Post from './Post.js';
import '../../css/Thread.css';

class Thread extends React.Component {

	getThread(threadId) {
		return <div>Title of the Sample Thread</div>;
	}

	getPosts(threadId) {
		let posts = [];
		posts.push(<Post id={1} />);

		return posts;
	}

  render() {
    return (
      <div className="thread">
      	{this.getThread(this.props.id)}
      	<br /><br />
      	{this.getPosts(this.props.id)}
      </div>
    );
  }
}

Thread.defaultProps = {
	id: -1
};

export default Thread;
