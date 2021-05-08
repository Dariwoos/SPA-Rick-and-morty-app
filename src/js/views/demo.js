import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	const [state, setState] = useState();

	useEffect(() => {
		actions.charecter("character");
		console.log("profil");
	}, []);

	return (
		<div className="container">
			{store.character.map((character, key) => {
				return (
					<div className="card mb-3" key={key}>
						<div className="row ">
							<img src={character.image} alt="" />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{character.name} </h5>
								<p className="card-text">{character.episode.length}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
