import Navigation from "../../components/navigation"
export const metadata = {
    title : "HOME",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 100));
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}


export default async function mainPage () {
    const movies = await getMovies();
    return (
        <div>
            <h1>Hello World!</h1>
            <p>넥스트의 세계에 오신 것을 환영합니다.</p>
            <img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*AmI9wRbXrfIWGESx6eEiTw.gif' alt="" />
        </div>
        
    );
}