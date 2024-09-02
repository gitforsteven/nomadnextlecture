export const metadata = {
    title : "Dynamic Route"
}

export default function mainPage () {
    return (
        <div>
            <h1>lecture 2.9 {metadata.title}</h1>
                <h2>다이나믹라우트</h2>

                <h3>다이나믹 라우트란?</h3>
                    <p>API 뒤에 ID 가 붙는 등 API에 따라 달라질 수 있는 라우트</p>
                    <p>예 : movies/:id</p>

                <h3>만드는 방법</h3>
                    <p>하위에 &#91;id&#93; 와 같은 식으로 표시 </p>
                    <p>parameter, searchparameter 받을 수 있음</p>
                    <p>서버 컴포넌트에만 있음</p>
                    <p>중첩이 아닌 병합됨</p>
                    <p>메타데이터 프레임도 만들 수 있음</p>
                    

          </div>
     );
}
