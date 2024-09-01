import { API_URL } from "../../../../../variable";

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
    params: {id:String};
}) {
    const [movie, video] = await Promise.all([ getMovie(id), getVideos(id)]);

    return <div>
        <h1>{movie.title}</h1>
        <p>{movie.original_title}</p>
        <img src={movie.backdrop_path} alt="" />
        <p>{movie.overview}</p>
    </div>;
}
