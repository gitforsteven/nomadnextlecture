import { Suspense } from "react";
import MovieInfo from "../../../../../../../components/movie-info";
import MovieVideos from "../../../../../../../components/movie-videos";
import MovieErrors from "../../../../../../../components/error-generator";


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
        <Suspense fallback = { <h1>loading movie video</h1>}>
        <MovieErrors id = {id}/>
        </Suspense>
    </div>
    );
}
