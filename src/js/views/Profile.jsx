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
				return <div key={key}>{index.band_account} </div>;
			})}
		</div>
	);
};
export default Profile;
