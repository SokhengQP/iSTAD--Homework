import { Link } from "react-router";
import { RiMovieAiLine } from "react-icons/ri";
import { BiMenuAltRight } from "react-icons/bi";

export default function Header() {
     function showMenu(event) {
          event = document.querySelector('#menus');
          event.classList.toggle('showMenu');
     }
     
     return (
          <>
               <div className="flex items-center justify-between px-4 py-1
               md:flex md:justify-between md:items-center md:px-8 md:py-2 fixed w-full top-0 md:fixed md:w-full md:top-0">
                    
                    <div data-aos="fade-right" className="">
                         <RiMovieAiLine size={'50px'} className="hover:rotate-12 transition-all duration-100"/>
                    </div>
                    
                    <div data-aos="fade-left" id="menus" className="hidden gap-4 cursor-pointer
                    md:flex md:gap-4 md:items-center">
                         <Link to="/home" data-aos="fade-down"> Home </Link>
                         <Link to="/now-playing" data-aos="fade-down">Now Playing</Link>
                         <Link to="/popular" data-aos="fade-down">Popular</Link>
                         <Link to="/top-rated" data-aos="fade-down">Top Rated</Link>
                         <Link to="/up-comming" data-aos="fade-down">Upcomming</Link>
                    </div>
                    
                    <BiMenuAltRight onClick={showMenu} size={'24px'} className="md:hidden" />
               </div>
               

          </>
     )
}

