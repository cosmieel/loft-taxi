import {
    fetchLoginRequest,
    fetchLoginSuccess,
    fetchLoginFailure,
    fetchLogout
} from './actions'

export const loginFetchMiddleware = store => next => action => {
	if (action.type === fetchLoginRequest.toString()) {
		fetch("https://loft-taxi.glitch.me/auth", {
			method: "POST",
			body: JSON.stringify(action.payload),
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(response => response.json())
			.then(data => {
				if (!data.success) {
					console.log(data);
					throw Error(data);
				}
				console.log(data);
				return data;
			})
			.then(data => {
				store.dispatch(fetchLoginSuccess(data));
				window.localStorage.setItem("token", data.token);
			})
			.catch(error => {
				store.dispatch(fetchLoginFailure(error));
			});
	} else if (action.type === fetchLogout.toString()) {
		window.localStorage.removeItem("token", null);
	}
	return next(action);
};

// export const registerFetchMiddleware = store => next => action => {
// 	if (action.type === fetchRegisterRequest.toString()) {
// 		fetch("https://loft-taxi.glitch.me/register", {
// 			method: "POST",
// 			body: JSON.stringify(action.payload),
// 			headers: {
// 				Accept: "application/json",
// 				"Content-Type": "application/json"
// 			}
// 		})
// 			.then(response => response.json())
// 			.then(data => {
// 				if (!data.success) {
// 					console.log(data);
// 					throw Error(data);
// 				}
// 				console.log(data);
// 				return data;
// 			})
// 			.then(data => {
// 				store.dispatch(fetchRegisterSuccess(data));
// 				window.localStorage.setItem("token", data.token);
// 				return data;
// 			})
// 			.catch(error => {
// 				store.dispatch(fetchRegisterFailure(error));
// 			});
// 	}
// 	return next(action);
// };