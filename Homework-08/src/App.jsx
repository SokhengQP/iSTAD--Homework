/* 
          Assignment
     1. Configuration React Router
     2. Get List of Products ( List & Key )
     3. View Detail by ID ( React Router )
     4. Configure Active Menu
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Home/Header';
import HomePage from './Home/HomePage';

import NowPlaying, { NowPlayingProps } from './ComponentLinks/NowPlaying';
import Popular, { PopularProps } from './ComponentLinks/Popular';
import TopRated, { TopRatedProps } from './ComponentLinks/TopRated';
import Upcomming, { UpcommingProps } from './ComponentLinks/Upcomming';

export default function App() {
     return (
          <>
               <BrowserRouter>
                    <Routes>
                         <Route index element={<HomePage />} />
                         
                         <Route to='/header' element={<Header />} />
                         <Route path='/home' element={<HomePage />} />
                         
                         <Route path='/now-playing' element={<NowPlaying />} />
                         <Route path='/*' element={<NowPlayingProps />} />
                         
                         <Route path='/top-rated' element={<TopRated />} />
                         <Route path="/*" element={<TopRatedProps />} />
                         
                         <Route path="popular" element={<Popular />} />
                         <Route path='/*' element={<PopularProps />} />
                         
                         <Route path="/up-comming" element={<Upcomming />} />
                         <Route path='/*' element={<UpcommingProps />} />
                    </Routes>
               </BrowserRouter>
          </>
     );
}