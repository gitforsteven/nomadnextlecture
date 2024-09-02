"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LectureList from "./lectureList";




export default function Navigation () {
   const path = usePathname();
   const [count, setCount] = useState(0)

   console.log(path);
   return (
     <nav>
       <button onClick={() => setCount(c => c+1)}>{count}</button>
      <ul>
         <li>
            <Link key="refhome" href="/">Home</Link> {path === "/" ? "◀" : ""}
         </li>

         <li>
            <h3>Lectures</h3>
            <LectureList/>
         </li>
         <li>
            <h3>appendix</h3>
            <ul>
               <li>
               <Link href="/appendix/linkforhelp">Link for help</Link> {path === "/appendix/linkforhelp" ? "◀" : ""}
               </li>
            </ul>
         </li>
      </ul>
     </nav>
   );
}