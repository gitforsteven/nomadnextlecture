import { API_URL } from "../../../variable"

export const metadata = {
    title : "HOME",
};



async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    return json;
}

export default async function HomePagE () {

    const movies = await getMovies();
    return (
        <div>
        <p>데이터가 오기 전까지 페이지도 못보는 문제 발생</p>
        <p>컴포넌트라도 볼 수 있는 방법은?</p>

        <p>{JSON.stringify(movies)}</p> 
        </div>
    );
}