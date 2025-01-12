
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './Home/Header';
import HomePage from './Home/Homepage';
import NowPlaying,{NowPlayingProps} from './ComponentLinks/NowPlaying';
import Popular,{PopularProps} from './ComponentLinks/Popular';
import TopRated ,{TopRatedProps} from './ComponentLinks/TopRated';

import Upcomming, { UpcommingProps }from './ComponentLinks/Upcomming';

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