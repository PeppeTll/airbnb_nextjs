import styles from "./index.module.scss";

//Components
import Header from "../Header";

const Layout = ({ children }) => {
	return (
		<div className={styles.Layout}>
			<Header />
			<div className={styles.Layout__children}>{children}</div>
			{/* <Footer /> */}
		</div>
	);
};

export default Layout;
