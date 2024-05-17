const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
			],
			allCategory: [],
			auth: false
		},
		
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			authFalse: () => {
				setStore({auth : false})
			},
			categorys: () => {	
					try{
						fetch(process.env.BACKEND_URL + "category")
						.then(resp => {
							if(!resp.ok){
								throw new Error('The application was unsuccessful')
							}
							return resp.json()
						})
						.then(data => {
							setStore({allCategory: data})
						})
					}
					catch{
						console.error('Something wrong', error)
					}
			},
			addCategory: async (inputChange) => {
				try{
					const actions = getActions()
					const response = await fetch(process.env.BACKEND_URL + "category/new", {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({name:inputChange})
					})
					if (!response.ok){
						throw new Error('Error adding category')
					}
					actions.categorys();
					setStore({ auth: true })

				} catch (error){
					console.error('Errod adding category:', error)
				}
			},
			editCategory: async (inputChange, id) => {
				try{
					const response = await fetch(process.env.BACKEND_URL + "category/update/" + id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({name:inputChange})
					})
					if (!response.ok){
						throw new Error('Error adding category')
					}
					const actions = getActions()
					actions.categorys()
					

				} catch (error){
					console.error('Error adding category:', error)
				}
			},
			deleteCategory: async (id) => {
				try{
					const actions = getActions()
					const response = await fetch(process.env.BACKEND_URL + "category/delete/" + id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json'
						}
					})
					if (!response.ok){
						throw new Error('Error adding category')
					}
					actions.categorys();

				} catch (error){
					console.error('Error adding category:', error)
				}
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
