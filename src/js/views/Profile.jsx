import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

const Profile = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.bank_data();
	}, []);
	return (
		<div>
			{store.bankData.map((index, key) => {
				return (
					<div className="container" key={key}>
						<p>Loan: {index.loan} </p>
					</div>
				);
			})}
		</div>
	);
};
export default Profile;
