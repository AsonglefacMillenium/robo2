import React from 'react';

const Card = ({ name, email, id }) => {
    return ( <
        div className = " tc bg-light-blue dib br3 pa3 ma3 bw2 shadow-5 grow" >

        <
        img src = {
            `https://robohash.org/${id}?200x200`
        }
        / > <
        div >
        <
        h2 > { name } < /h2> <
        p > { email } < /p >  < /
        div > < /
        div >
    );
}

export default Card;