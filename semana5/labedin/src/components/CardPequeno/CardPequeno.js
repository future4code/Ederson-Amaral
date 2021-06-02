import React from 'react';
import styled from 'styled-components';
// import './CardPequeno.css'

const CardPequenoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid black;
    margin-bottom: 10px;
    height: 100px;
`;

const LineContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const CardPequenoImagem = styled.img`
    width: 40px;
    margin-right: 10px;
`;

const CardPequenoH4 = styled.h4`
`;

const CardPequenoP = styled.p`
`;

function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <LineContainer>
                <CardPequenoImagem src={ props.imagem } />           
                <CardPequenoH4>{ props.nome }</CardPequenoH4>            
                <CardPequenoP>{ props.descricao }</CardPequenoP>
            </LineContainer>
        </CardPequenoContainer>
    )
}

export default CardPequeno;