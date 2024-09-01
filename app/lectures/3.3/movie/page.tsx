import Link from "next/link";
import { API_URL } from "../../../variable";

export const metadata = {
    title : "MOVIE",
};


async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    return json;
}

export default async function HomePage () {

    const movies = await getMovies();
    return (
        <div>
            {movies.map(movie =>    
                <li key={movie.id}>
                    <Link href={`movie/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    );
} 