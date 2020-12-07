import React from 'react';
import Card from './Card';




const Cardlist = ({ friends }) => {

    const cardComponent = friends.map((user, id) => {
        return <
            Card key = { id }
        id = { friends[id].id }
        name = { friends[id].name }
        username = { friends[id].username }
        email = { friends[id].email }
        / >

    })
    return ( <
        div > { cardComponent } <
        /div>
    );
}

export default Cardlist