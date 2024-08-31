"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation () {
   const path = usePathname();
   const [count, setCount] = useState(0)
   console.log(path);
   return (
     <nav>
      <ul>
         <li>
            <Link href="/">Home</Link> {path === "/" ? "◀" : ""}
         </li>

         <li>
            <h3>Lectures</h3>
            <ul>
               <li>
                  <Link href="/lectures/1.6">1.6</Link> {path === "/lectures/1.6" ? "◀" : ""}
               </li>
               <li>
                  <Link href="/lectures/2.1">2.1</Link> {path === "/lectures/2.1" ? "◀" : ""}
               </li>
               <li>
                  <Link href="/lectures/2.2">2.2</Link> {path === "/lectures/2.2" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.3">2.3</Link> {path === "/lectures/2.3" ? "◀" : ""}
               </li>
               <li>
                  <Link href="/lectures/2.4">2.4</Link> {path === "/lectures/2.4" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.5">2.5</Link> {path === "/lectures/2.5" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.6">2.6</Link> {path === "/lectures/2.6" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.7">2.7</Link> {path === "/lectures/2.7" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.8">2.8</Link> {path === "/lectures/2.8" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.9">2.9</Link> {path === "/lectures/2.9" ? "◀" : ""}
               </li> 
               <li>
                  <Link href="/lectures/2.10">2.10</Link> {path === "/lectures/2.10" ? "◀" : ""}
               </li> 

            </ul>
            
         </li>
         <li>
            <button onClick={() => setCount(c => c+1)}>{count}</button>
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