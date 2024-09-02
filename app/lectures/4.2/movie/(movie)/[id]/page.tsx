import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../../components/movie-info";
import MovieVideos from "../../../../../../components/movie-videos";
interface Iparams {
    params: {id:string};
}

export async function generateMetadata({params: {id}} : Iparams) {
    const movie = await getMovie(id);
return {
    title: movie.title
 } 
}

export default async function moveDeatil({params: {id}} : Iparams) {

    return (
    <div>    
        <Suspense fallback = { <h1>loading movie info</h1>}>
            <MovieInfo id = {id}/>
        </Suspense>
        <Suspense fallback = { <h1>loading movie video</h1>}>
            <MovieVideos id = {id}/>
        </Suspense>
    </div>
    );
}
