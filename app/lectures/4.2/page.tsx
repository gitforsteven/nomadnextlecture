import Link from "next/link";
export const metadata = {
    title : "Movie Style",
};


export default async function HomePage () {

    return (
        <div>
        <h1>{metadata.title}</h1>
        <p>1. 단순히 페이지에 error.tsx 생성</p>
        <p>2. 하위에만 생성됨</p>
        <Link href={'4.2/movie'}>movie 링크에서 내용 확인</Link>
        </div>
    );
} 