import Link from "next/link";

export const metadata = {
    title : "MOVIE",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage () {

    const movies = await getMovies();
    return (
        <div>
            {movies.map(movie =>    
                <li key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    );
} 