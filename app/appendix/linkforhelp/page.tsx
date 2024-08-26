import Link from "next/link"
import Navigation from "../../../components/navigation"

export default function HelloWorld () {
    return (
        <div>
        <Navigation/>
        <h1>Links for Help</h1>
        <ul>
            <li>
            <Link href="https://taemssssss.tistory.com/23"> 특수문자 출력하기</Link>
            </li>
        </ul>
        </div>
    )
}