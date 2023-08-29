import Seo from "@/components/Seo"
import { useEffect, useState } from "react";

const API_KEY = "a1c0b7260827aab50906fc07d361934b";

export default function Home() {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		(async () => {
			const response = await fetch(
				`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
			);
			const json = await response.json();
		})();
	}, []);
	return (
		<div>
			<Seo title="Home" />
			<h1>Hello</h1>
		</div>
	)
};