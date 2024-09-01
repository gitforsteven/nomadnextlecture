import { Suspense } from "react";
import MovieInfo from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";
import { API_URL } from "../../../../variable";

async function getMovie(id:String) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/movies/${id}`);    
    return response.json();
}

async function getVideos(id:String) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/movies/${id}/videos`);    
    return response.json();
}


export default async function moveDeatil({
    params: {id},
}:{
    params: {id:string};
}) {

    return (
    <div>    
        <img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*AmI9wRbXrfIWGESx6eEiTw.gif' alt="" />
        <Suspense fallback = { <h1>loading movie info</h1>}>
            <MovieInfo id = {id}/>
        </Suspense>
        <Suspense fallback = { <h1>loading movie video</h1>}>
        <MovieVideos id = {id}/>
        </Suspense>
    </div>
    );
}
