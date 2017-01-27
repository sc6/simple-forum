
//action creator
// export const incrementPostCount = () => {
// 	return {
// 		type: 'INCREMENT_POST_COUNT'
// 	}
// }

function incrementPostCount () {
	return {
		type: 'INCREMENT_POST_COUNT'
	}
}

function editUserName (newUserName) {
	console.log("Changed userName to ", newUserName)
	return {
		type: 'CHANGE_USER_NAME',
		newUserName: newUserName
	}
}

export function editUserNameDelegate () {
	// return (dispatch, getState) => {
	// 	const { state } = getState()
	// 	dispatch(editUserName(state.textInput));
	// }
	// console.log("Attempting to change username")
	// return (dispatch, getState) => {
	// 	const { state } = getState()
	// 	dispatch(editUserName(state.textInput))
	// }
	return function (dispatch, getState) {
		return dispatch(editUserName("thunkUser"))
	}
	// return (dispatch, getState) => {
	//   console.log(getState);
	//   const { textInput } = getState;
	//   dispatch(editUserName(textInput));
	// };
}

function editJoinDate (newJoinDate) {
	return {
		type: 'CHANGE_JOIN_DATE',
		newJoinDate: newJoinDate
	}
}


export { incrementPostCount, editUserName, editJoinDate };