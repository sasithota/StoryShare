import React, { useContext } from "react";
import { isAuthCon } from "../../context/isAuth.js";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { isAuth } = useContext(isAuthCon);
	return (
		<Route
			{...rest}
			render={(props) =>
				isAuth ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};
export default ProtectedRoute;
