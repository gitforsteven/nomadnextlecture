"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

let lectures = [1.6,2.1,2.2,2.3,2.4,2.5,2.7,2.8,2.9,"2.10","3.0",3.2,3.3,3.4];


export default function LectureList() {
   const path = usePathname();
   return (    
   <ul key="lectureList">
      {lectures.map((lect,index)=> 
               <li key={lect} >
               <Link href={`/lectures/${lect}`}>{lect}</Link> {path === `/lectures/${lect}` ? "◀" : ""}
               </li>
            )
         }
   </ul>
   )
}