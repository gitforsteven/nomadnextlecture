import Link from "next/link";
import { API_URL } from "../../../variable"
export const metadata = {
    title : "Error Handling",
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
        <h1>{metadata.title}</h1>
        <p>1. 단순히 페이지에 error.tsx 생성</p>
        <p>2. 하위에만 생성됨</p>
        <Link href={'3.7/movie'}>movie 링크에서 내용 확인</Link>
        </div>
    );
} 