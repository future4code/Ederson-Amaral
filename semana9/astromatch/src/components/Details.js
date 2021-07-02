import React from 'react';
import {DetalhesDiv, Perfil, Blur, FotoPerfil, Dados, NomePerfil, IdadePerfil, Descricao} from './DetailsStyled.js'

const Detalhes = (props) => {
  return (
    <DetalhesDiv>
        <Perfil>
            <Blur imagem={props.perfil.photo} />
            <FotoPerfil src={props.perfil.photo} />
        </Perfil>
        <Dados>
            <NomePerfil>{props.perfil.name},</NomePerfil>
            <IdadePerfil>{props.perfil.age}</IdadePerfil>
            <Descricao>{props.perfil.bio}</Descricao>
        </Dados>
    </DetalhesDiv>
  );
}

export default Detalhes;