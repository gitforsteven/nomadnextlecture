import Link from "next/link";
import { API_URL } from "../../../variable"
export const metadata = {
    title : "CSS Module",
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
        <p>1. global.css 생성 및 루트 레이아웃에 붙인다.// import "주소" //</p>
        <p>2. 모듈 CSS 는 이름 생성 시 "XXXXXXXX.module.css" 이런 식으로 이름 지어야 함</p>
        <p>3. 해당 모듈을 // import style from "주소"// 이런 식으로 가져옴</p>
        <p>4. 모든 컴포넌트는 클래스로 해야 모듈화가 됨</p>
        <p>4. 클래스네임을 style.xxx 로 가져와서 변수화 함</p>
        
        </div>
    );
} 