import React, { useContext } from "react";
import styles from "./ProfileTemplate.module.css";
import { isAuthCon } from "../../../context/isAuth.js";
const ProfileTemplate = ({ data }) => {
	const { setAuth } = useContext(isAuthCon);
	const logout = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");
		setAuth(false);
	};
	return (
		<div className={styles.profileContainer}>
			<div className={styles.container}>
				<div className={styles.profileHeader}>
					<img
						src={`http://localhost:5000/uploads/default.png`}
						alt="profile"
						className={styles.pic}
					/>
					<div>
						<p className={styles.username}>{data.username}</p>
					</div>
				</div>
				<div className={styles.socialContainer}>
					<div className={styles.followContainer}>
						<p className={styles.followText}>followers</p>
						<button className={styles.follow}>
							{data.followers}
						</button>
					</div>
					<div className={styles.followContainer}>
						<p className={styles.followText}>following</p>
						<button className={styles.follow}>
							{data.following}
						</button>
					</div>
				</div>
				<div className={styles.logoutContainer}>
					{data.isUser ? (
						<button className={styles.logout} onClick={logout}>
							Logout
						</button>
					) : data.isFollower && !data.isUser ? (
						<button className={styles.logout}>Unfollow</button>
					) : (
						<button className={styles.logout}>Follow</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfileTemplate;
