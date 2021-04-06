import React from 'react';
import './TourCards.css';
import CardItem from './CardItem';

function ToursCards() {
    return (

        <div className='tour-cards'>
            <h1>Check out these Epic Adventures!</h1>
                <div className='tour-cards-container'>
                    <div className='tour-cards-wrapper'>
                        <ul className='cards-items'>
                            <CardItem
                                title='Far East'
                                src='http://things-to-do-in-jamaica.com/wp-content/uploads/2016/02/blue-lagoon-4.jpg'
                                description='Explore the hidden lagoon deep inside the hills'
                                duration='8-12 hours'
                                price='$150 per person'
                                label='Adventure'
                                path='/tours'
                            />
                            <CardItem
                                title='City'
                                src='https://images.squarespace-cdn.com/content/v1/5a4fdbe37131a5ea02befd06/1519785844137-U30N00ATVCE32X0ZZKT1/ke17ZwdGBToddI8pDm48kA0wePVlgOGM5yNNrADThjYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc3f5rMIUspMOT17T3MGHdS3s1KwpjdUupKJDR9JNb8i8O932tY93Uq43o4DcCmt6U/Bob+Marley+Museum+-+Lion+Order+Mural.jpg?format=1000w'
                                description='Explore the City and visit Bob Marley Museum'
                                duration='8-12 hours'
                                price='$110 per person'
                                label='Culture'
                                path='/tours'
                            />
                        </ul>
                    </div>
                </div>
        </div>            
    )
}

export default ToursCards;
