import React from 'react';

const Searchbox = ({
    searchfield,
    searchChange
}) => {
    return ( < div className = 'ma5' >
        <
        input type = 'search'
        placeholder = 'Search Friends'
        className = 'bg-light-blue pa3 br3 f4 grow'
        onChange = { searchChange }
        / > < /
        div >
    );
}


export default Searchbox;