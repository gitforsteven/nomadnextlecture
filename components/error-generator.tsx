import { API_URL } from "../app/variable";

async function getError(id:String) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("니가 에러 만들라며!!");
}

export default async function MovieInfo({id}:{id:string}) {
    const movie = await getError(id);
    return <h6>{JSON.stringify(movie)}</h6>
};
