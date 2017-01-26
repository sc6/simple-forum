const initialState = 
  {
    userName: "DefaultReducerUser",
    postCount: 0,
    joinDate: "Jan-10-2013"
  }

export default function (state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT_POST_COUNT':
        	console.log("Post count incremented");
            return {
            	userName: state.userName,
            	postCount: state.postCount + 1,
            	joinDate: state.joinDate
            };
        default:
        	return state;
    }
}