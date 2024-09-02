export default function mainPage () {
    return (
        <div>
            <h1>lecture 2.3</h1>
                <h2>SSR VS CSR</h2>
                <h3>what is client component - CSR </h3>

                    <p>클라이언트가 랜더링을 함 - 리액트 </p>
                    <p>단점 : 파일 내용을 다 받아서 랜더해줘야 함 </p>
                    <p>자바스크립트 비활성화 시 앱을 실행시킬 수 없음</p>
                    <p>서버가 파일을 받는 데 오래걸림 -- 모두 받아야 하기 때문</p>
                    <p>검색 엔진에서 잘 나오지 않음 -- 랜더 전에는 HTML 데이터에 볼 수 있는 게 없음</p>
                        
                <h3>SSR</h3>
                    <p>서버가 랜더하기 때문에 HTML을 이미 가지고 있음 </p>
                    <p>자바스크립트에 의존하지 않음</p>
        </div>
     );
}
