/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";

const backendUrl = "http://localhost:4882";

export const PageWelcome = () => {
	const [appMessage, setAppMessage] = useState(""); 
	const [appName, setAppName] = useState("");
	const [nodeVersion, setNodeVersion] = useState(0);

	const fetchAppName = async () => {
		try {
			const response = await axios.get(backendUrl);
			console.log('STATUS: ' + response.status);
			setAppName(response.data.appName);
		} catch (e: any) {
			console.log(`ERROR: ${e.message}`);
			setAppMessage(
				`Sorry, we can't retrieve your data at this time. Try again later.`
			);
		}
	};

	useEffect(() => {
		fetchAppName();
	}, []);

	useEffect(() => {
		(async () => {
			const response = await axios.get(`${backendUrl}/node-version`);
			setNodeVersion(response.data);
		})();
	},[])

	return (
		<>
			<h2 className="text-red-600">{appMessage}</h2>
			{appMessage === "" && (
				<>
					<p>APP NAME: {appName}</p>
					<p>NODE-VERSION: {nodeVersion}</p>
				</>
			)}
		</>
	);
};
