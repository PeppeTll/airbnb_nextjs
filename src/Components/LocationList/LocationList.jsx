import { useEffect, useState } from "react";
import styles from "./index.module.scss";

//Components
import Card from "../Card/Card";

//utils
import GET from "../../utils/HTTPS.js";

const LocationList = () => {
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		GET().then((data) => setLocations(data));
	}, []);

	return (
		<div className={styles.LocationList}>
			<h1 className={styles.LocationList__h1}>Locations</h1>
			<div className={styles.LocationList__wrapList}>
				{locations.map((item) => (
					<Card data={item} />
				))}
			</div>
		</div>
	);
};

export default LocationList;
