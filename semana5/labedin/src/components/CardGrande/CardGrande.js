import React from 'react';
import styled from 'styled-components';
// import './CardGrande.css'

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const CardGrandeImg = styled.img`
    width: 70px;
    margin-right: 10px;
`;

const CardGrandeH4 = styled.h4`
    margin-bottom: 15px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

function CardGrande(props) {
    return (
        <BigCardContainer>
            <CardGrandeImg src={ props.imagem } />
            <ContentContainer>
                <CardGrandeH4>{ props.nome }</CardGrandeH4>
                <p>{ props.descricao }</p>
            </ContentContainer>
        </BigCardContainer>        
    );
}

export default CardGrande;