import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

function App(){
    return(
        <div>
            <Header />
            {notes.map(noteDetails => 
                    <Note 
                        key = {noteDetails.key}
                        title = {noteDetails.title}
                        content = {noteDetails.content.substring(0, 50)}
                    />
                )
            }
            <Footer />
        </div>
    )
}

export default App;