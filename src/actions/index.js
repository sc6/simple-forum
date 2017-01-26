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

function editJoinDate (newJoinDate) {
	return {
		type: 'CHANGE_JOIN_DATE',
		newJoinDate: newJoinDate
	}
}


export { incrementPostCount, editUserName, editJoinDate };