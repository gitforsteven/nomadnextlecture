"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Movie from "../../../../components/movie";
import styles from "../../../../styles/home.module.css";

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage () {
    const path = usePathname();
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map(movie =>    
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
            )}
        </div>
    );
} 