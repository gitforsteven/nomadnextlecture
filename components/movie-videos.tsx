import { API_URL } from "../app/variable";

async function getVideos(id:String) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/movies/${id}/videos`);    
    return response.json();
}

export default async function MovieVideos({id}:{id:string}) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>
};
