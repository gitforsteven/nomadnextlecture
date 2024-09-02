"use client"
import Link from "next/link"
import style from "../styles/movie.module.css"
import { useRouter } from "next/navigation";

interface IMovieProps {
    title:string;
    id:string;
    poster_path:string
}

export default function Movie({title, id, poster_path}:IMovieProps) {
    const router = useRouter();
    const onClick = () => {
        router.push(`/lectures/4.2/movie/${id}`);
    }
    return (  
        <div className={style.movie}>
            <img src={poster_path} alt={title} onClick={onClick} />
            <Link prefetch href={`/lectures/4.2/movie/${id}`}>{title}</Link>
        </div>
    );
};
