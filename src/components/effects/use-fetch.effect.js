import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(url);
			const resData = await res.json();
			setData(resData[0]);
		};
		fetchData();
	});

	return data;
};

export default useFetch;
