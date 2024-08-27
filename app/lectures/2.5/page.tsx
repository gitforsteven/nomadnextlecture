import OuterLayoutRouter from "next/dist/client/components/layout-router";
import Navigation from "../../../components/navigation"

export default function mainPage () {
    return (
        <div>
            <h1>lecture 2.5</h1>
                <h2>use client</h2>
                <h3>use client 의미</h3>

                    <p>리액트가 적용됨을 의미 (Hydration) </p>
                    <p>클라이언트 랜더링 사용해야 하는 위치에서 사용됨 -- 인터렉티브</p>

                <h3>서버 컴포넌트</h3>
                    <p>서버 컴포넌트는 해당 컴포넌트가 아닌 경우를 의미</p>
          </div>
     );
}
