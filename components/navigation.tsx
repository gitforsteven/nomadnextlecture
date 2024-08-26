"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation () {
   const path = usePathname();
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
            </ul>
            
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