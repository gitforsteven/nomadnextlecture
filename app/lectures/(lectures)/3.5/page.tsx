import Link from "next/link";
import { API_URL } from "../../../variable"
export const metadata = {
    title : "MOVIE",
};


async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    return json;
}

export default async function HomePage () {

    const movies = await getMovies();
    return (
        <div>
        <h1>Suspense</h1>
        <p>1. Promise.all 은 데이터가 패칭 되기를 기다려야 함 (UI기다림)</p>
        <p>2. Suspense는 무려 UI를 먼저 생성함.</p>
        <Link href={'/lectures/3.5/movie/'}>movie 링크에서 내용 확인</Link>
        </div>
    );
} 