export default function mainPage () {
    return (
        <div>
            <h1>lecture 2.2</h1>
            <h3>not found page</h3>
            <p> not found page : root/not-found.tsx </p>
            <p> 파일 경로가 틀렸을 경우 표기됨</p>

            <h3>
                navigation
            </h3>
            <p>컴포넌트에 navigation 만든 후, 해당 컴포넌트를 import 한다</p>
            <p>아마도 공통적인 사용에 필요한 내용으로 layout 표현하기 위함인듯..</p>
            <p>client and server component 에서 배운다 함.</p>\
            
            <h3>
                Hook
            </h3>
            <p>
                리액트 훅은 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을 “연동(hook into)“할 수 있게 해주는 함수
            </p>
            <p>기존 클래스의 생명주기 메서드를 함수형 방식에서 함수로 사용할 수 있도록 한 것이 훅인 것 같습니다.</p>
            <p>상태 값을 초기화 하거나, 변경이 발생했을 때 등의 상황에서 리액트의 훅함수가 호출되는 방식인 듯 합니다.</p>
            <p> const path = usePathname(); 이용하여 현재 페이지 표시 </p>
            <p> ex) &#123; path === "/lectures/1.6" ? "◀" : ""  &#125; </p>
        </div>
     );
}
