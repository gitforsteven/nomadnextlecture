export const metadata = {
    title : "라우트 그룹, 메타데이터"
}

export default function mainPage () {
    return (
        <div>
            <h1>lecture 2.8 {metadata.title}</h1>
                <h2>라우트 그룹과 메타데이터</h2>

                <h3>라우트 그룹이란?</h3>
                    <p>이름을 소괄호로 묶은 폴더를 만듦 - 논리적으로 같은 역할</p>
                    <p>로지컬 그룹으로 사용 가능함.</p>
                    <p>URL에 영향가지 않음</p>
                    <p>레이아웃을 적용할 것을 묶거나 일부만 사용하도록 만들 수 있음</p>
                        

                <h3>메타데이터란?</h3>
                    <p>꼭 내보내야 하는 데이터</p>
                    <p>head , title, desc...</p>
                    <p>서버 컴포넌트에만 있음</p>
                    <p>중첩이 아닌 병합됨</p>
                    <p>메타데이터 프레임도 만들 수 있음</p>
                    

          </div>
     );
}
