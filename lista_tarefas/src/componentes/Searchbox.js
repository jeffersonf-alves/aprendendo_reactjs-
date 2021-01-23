import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
    border:2px solid #000;
    border-radius: 5px;
    padding:15px;
    font-size: 17px;
    widht: 300px;
`;

function SearchBox(props) {

    const [ texto, setTexto ] = useState('');

    function inputChangeText() {
        setTexto( e.target.texto );
    }

    return (
        <InputText 
            type="text" 
            placeholder={props.frasePadrao ?? 'Use uma frase' }
            onChange={inputChangeText}
            value={texto}
            />


    );
}


export default SearchBox;