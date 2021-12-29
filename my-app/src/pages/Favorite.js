import { useContext }from 'react';
import MeetupList from '../components/meetups/MeetupList';

import FavoritesContext from '../store/favorite-context';


function FavoritePage(){
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content= <MeetupList meetups = {favoriteCtx.favorites} />
    }

    return (
    <section> 
        <h1>Favorite Page</h1>
        {content}
    </section>
    );
}

export default FavoritePage;