import OuterLayoutRouter from "next/dist/client/components/layout-router";
export const metadata = {
    title : "라우트 그룹, 메타데이터"
}

export default function MovieDeatil({
    params : { id },
} : {
    params : {id : string };
}) {
    return (
        <div>
            <h1>MOVIE</h1>
                <h2>{id}</h2>

          </div>
     );
}
