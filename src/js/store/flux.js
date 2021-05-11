import DataBank from "./bankData.json";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			bankData: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			charecter: str => {
				fetch("https://rickandmortyapi.com/api/" + str)
					.then(response => response.json())
					.then(result => {
						setStore({ character: result.results });
						console.log(result);
					})
					.catch(error => console.log("error", error));
			},
			bank_data: () => {
				setStore({ bankData: DataBank.Data_bank });
			}
		}
	};
};

export default getState;
