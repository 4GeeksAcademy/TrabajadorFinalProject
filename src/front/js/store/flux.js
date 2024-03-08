const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token:null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				};

					const resp = await fetch(process.env.BACKEND_URL + '/api/token/', opts)

					const data = await resp.json();
					console.log("this came from the backend", data);
					sessionStorage.setItem("token", data.acces_token);
					setStore({ token: data.access_token })
					return true;
		},

		getMessage: async () => {
			try {
				// fetching data from the backend
				const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
				const data = await resp.json()
				setStore({ message: data.message })
				// don't forget to return something, that is how the async resolves
				return data;
			} catch (error) {
				console.log("Error loading message from backend", error)
			}
		},
		// changeColor: (index, color) => {
		// 	//get the store
		// 	const store = getStore();

		// 	//we have to loop the entire demo array to look for the respective index
		// 	//and change its color
		// 	const demo = store.demo.map((elm, i) => {
		// 		if (i === index) elm.background = color;
		// 		return elm;
		// 	});

		// 	//reset the global store
		// 	setStore({ demo: demo });
		// },
		// logout: () => {
		// 	const cf_url = getStore().cf_url
		// 	const token = sessionStorage.removeItem("token");
		// 	setStore({ token: null });
		// 	window.location.href = cf_url + "/";
		// },

		// login: async (email, password) => {
		// 	console.log(email, password);
		// 	const opts = {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			email: email,
		// 			password: password,
		// 		}),
		// 	};
		// 	const res = await fetch(process.env.BACKEND_URL + "/api/login", opts);
		// 	if (res.status < 200 || res.status >= 300) {
		// 		throw new Error("There was an error signing in");
		// 	}
		// 	const data = await res.json();

		// 	sessionStorage.setItem("token", data.access_token);
		// 	console.log("USER INFO HERE", data)
		// 	setStore({ token: data.access_token, favorites: data.user.favorites, user: data.id, user_name: data.user.name });
		// 	return true;
		// },

		// changePassword: async (token, password) => {
		// 	console.log(token, password);
		// 	const opts = {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			"Authorization": "Bearer " + token
		// 		},
		// 		body: JSON.stringify({
		// 			password: password,
		// 		}),
		// 	};
		// 	const res = await fetch(process.env.BACKEND_URL + "/api/recover-password", opts);
		// 	if (res.status < 200 || res.status >= 300) {
		// 		throw new Error("There was an error changing password");
		// 	}
		// 	const data = await res.json();

		// 	console.log("USER INFO HERE", data)
		// 	return true;
		// },

		// getUser: async () => {
		// 	const token = sessionStorage.getItem("token");
		// 	const opts = {
		// 		method: "GET",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 			'Authorization': "Bearer " + token,
		// 		},
		// 	};
		// 	const res = await fetch(process.env.BACKEND_URL + "/api/user", opts);
		// 	if (res.status < 200 || res.status >= 300) {
		// 		throw new Error("There was an error signing in");
		// 	}
		// 	const data = await res.json();
		// 	console.log("DATA", data)
		// 	setStore({ user: data, favorites: data.favorites, user_name: data.name });
		// 	return true;
		// },

		// createUser: async (name, email, password) => {
		// 	const cb_url = getStore().cb_url;
		// 	const cf_url = getStore().cf_url;
		// 	const opts = {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			name: name,
		// 			email: email,
		// 			password: password,
		// 		}),
		// 	};
		// 	const res = await fetch(
		// 		process.env.BACKEND_URL + "/api/signup",
		// 		opts
		// 	);
		// 	if (res.status < 200 || res.status >= 300) {
		// 		throw new Error("There was an error signing up the user");
		// 	}
		// 	const data = await res.json();
		// 	setStore({ user: data });
		// 	// console.log(data);
		// 	return true;
		// }
	}
};
}

export default getState;
