import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setnumeroCurtidas] = useState(0)
  const [comentando, setcomentando] = useState(false)
  const [numeroComentarios, setnumeroComentarios] = useState(0)
  const [comentarios, setcomentarios] = useState([])

  const onClickCurtida = () => {
    if (curtido) {

      // se for true, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      
        setCurtido (!curtido)
        setnumeroCurtidas (numeroCurtidas - 1)
      
    } else {

      // se for false, entra nesse caso, e o estado é modificado de acordo com esses comandos:
      
        setCurtido (!curtido)
        setnumeroCurtidas (numeroCurtidas + 1)
     
    }
  };
  
  // método chamado quando o ícone de comentário é clicado. O método apenas muda o valor de 
  // comentando no estado, de true para false ou de false para true.
  const onClickComentario = () => {
      setcomentando (!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]

    
      setcomentarios (listaDeComentarios)
      setcomentando (false)
      setnumeroComentarios (numeroComentarios + 1)
    
  };

  const caixaDeComentario = comentando ? (
    // Componente com o input e botão de enviar novo comentario. Import dele na linha 5.
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    // Funcao map sendo feita na propriedade comentarios do estado. Ou seja, está sendo pego todos os
    // comentários do estado para serem renderizados na tela, dentro do componente CommentContainer 
    comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  );

  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post