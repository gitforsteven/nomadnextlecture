"use client"
import Link from "next/link";
import { API_URL } from "../../../variable"
import { usePathname } from "next/navigation";


async function getMovies(){
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/movies`);
    const json = await response.json();
    return json;
}

export default async function HomePage () {
    const path = usePathname();
    const movies = await getMovies();
    return (
        <div>
        <h1>Parallel Request</h1>
        <p>1. 다이나믹 라우트에서 id에 따라 데이터 가져오기</p>
        <p>2. 프로미스 병렬 처리 : Promise.all 을 사용</p>
        <Link href={'/lectures/3.4/movie/'}>movie 링크에서 내용 확인</Link>
        </div>
    );
} 