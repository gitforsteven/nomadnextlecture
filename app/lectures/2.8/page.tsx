import OuterLayoutRouter from "next/dist/client/components/layout-router";
import Navigation from "../../../components/navigation"

export default function mainPage () {
    return (
        <div>
            <Navigation/>
            <h1>lecture 2.7</h1>
                <h2>Layout</h2>

                    <p>레이아웃시스템은 반복되는 레이아웃을 먼저 잡아줄 수 있음</p>
                    <p>특별한 페이지에 대한 레이아웃이 필요하면?</p>

                <h3>특별한 페이지에 대한 레이아웃이 필요하면?</h3>
                    <p>특정 폴더에 layout.tsx 만들어서 사용</p>
                    <p>레이아웃은 대체되는 게 아닌 중첩  예 - 메인 + 렉쳐 + 2.7 중첩</p>
          </div>
     );
}
