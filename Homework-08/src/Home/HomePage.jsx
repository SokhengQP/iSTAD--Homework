import { useEffect } from "react"
import Header from "./Header"

export default function HomePage() {
     useEffect(() => {
          document.title = 'Home Page';
     }, []);
     
     return (
          <>
               <Header />
               <div className="flex flex-col -z-10" >
                    <h2 data-aos="fade-down" className="text-5xl text-center mt-20 font-[700]">Welcome to World of Movies</h2>
                    
                    
                    <div className="flex flex-row justify-evenly mt-20">
                    
                         <div>{/* Empty */}</div>
                         
                         <div className="flex relative z-10 ml-40">
                              <img data-aos="fade-left" id="hover-onme" className="hover:-left-40 absolute -left-20 mt-10 z-10 shadow-xl shadow-gray-600 rounded-3xl" src="https://media.themoviedb.org/t/p/w220_and_h330_face/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg" alt="" />
                    
                              <img className="z-20 shadow-2xl shadow-gray-600 rounded-3xl" src="https://media.themoviedb.org/t/p/w220_and_h330_face/aosm8NMQ3UyoBVpSxyimorCQykC.jpg" alt="" />
                         
                              <img data-aos="fade-right" id="hover-bort" className="hover:ml-20  absolute -mt-10 left-20 z-10 shadow-xl shadow-gray-600 rounded-3xl" src="https://media.themoviedb.org/t/p/w220_and_h330_face/cXzCOx1hUuU9CfmiEv6rXjb6EqU.jpg" alt="" />
                         </div>
                    
               </div>
               
               </div>
               
               <img data-aos="fade-zoom-out" className="h-screen fixed top-0 left-0 w-full -z-10" src="https://img.freepik.com/free-psd/3d-cinema-blank-banner-background_23-2150822400.jpg?t=st=1736588821~exp=1736592421~hmac=bd9e2b25d7e5ec86ce92440f9a9627b48397f939231e2c3ab62a913fd2e2c414&w=1060" alt="movie-together" />
               
               
          </>
     )
}