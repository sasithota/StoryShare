import React, { useState, useEffect } from "react";
import { useParams, useLocation, withRouter } from "react-router-dom";
import styles from "./Profile.module.css";
import Feed from "../../utils/Feed/Feed.js";
import ProfileTemplate from "./ProfileTemplate/ProfileTemplate.js";
import { profileValidation } from "../../utils/functions.js";
function Profile(props) {
	const { id } = props.location.state;
	const [details, setDetails] = useState(null);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		(async () => {
			try {
				const { cards, profile } = await profileValidation(id);
				setDetails({ cards, profile });
				setLoading(false);
			} catch (e) {
				console.log(e);
			}
		})();
	}, []);
	if (isLoading) return <div>Loading...</div>;
	if (details == null) return <div>No user found</div>;
	return (
		<React.Fragment>
			<Feed card={details.cards} />
			<ProfileTemplate data={details.profile} />
		</React.Fragment>
	);
}

export default withRouter(Profile);
