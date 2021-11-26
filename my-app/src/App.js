import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritePage from './pages/Favorite';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />}/>
        <Route path='/new-meetup' element={<NewMeetupPage />}/>
        <Route path='/favorites' element ={<FavoritePage />}/>
      </Routes>
    </div>
  );
}

export default App;
