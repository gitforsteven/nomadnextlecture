"use client"
import Link from "next/link";
import { API_URL } from "../../../../variable";
import { usePathname } from "next/navigation";


async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    return json;
}

export default async function HomePage () {
    const path = usePathname();
    const movies = await getMovies();
    return (
        <div>
            {movies.map(movie =>    
                <li key={movie.id}>
                    <Link href={`${path}/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    );
} 