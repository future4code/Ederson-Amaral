import React from 'react'
import styled from 'styled-components'
import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;  
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0
  }

  // Se alterar quaisquer das propriedades inciais do componente Post identificado acima, o navegador irá refletir, modificando a quantidade de curtidas, comentários e exibindo ou não os comentários postados.

  onClickCurtida = () => {
    console.log('Curtiu!')
    // não estava configurado a linha abaixo, e como está configurado um console.log, no console do navegador é possível ver que foi clicado no botão, mesmo que não tenha sido configurada a exibição dessa ação com a linha abaixo.
    let novoNumeroCurtidas
    if(this.state.curtido){ 
      novoNumeroCurtidas = this.state.numeroCurtidas - 1
    } else {
      novoNumeroCurtidas = this.state.numeroCurtidas + 1
    // this.setState({numeroCurtidas: this.state.numeroCurtidas - 1})
  }

  this.setState({
    curtido: !this.state.curtido,
    numeroCurtidas: novoNumeroCurtidas
  })
}

  onClickComentario = () => {
    
    this.setState({ comentando: !this.state.comentando })
  }
  // a função "onClickComentario" habilita no navegador a caixa de dialogo para que o usuário possa inserir o comentário em si.

  aoEnviarComentario = () => {
    
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}               
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  }
}

export default Post

// Comentários:

// Na linha de código abaixo, faltava definir a alteração de Estado do componente

// onClickCurtida = () => {
  // console.log('Curtiu!')
  // não estava configurado a linha abaixo com **
  // ** this.setState({
  // ** curtido: !this.state.numeroCurtidas
  // })
// }

// O componente IconeComContador lê 3 valores para determinar a ação que está sendo realizada.
// O "icone" identifica se é uma curtida ou comentário, o "onClickIcone" se foi clicado e o "valorContador" quantas vezes foi realizada a ação.
// Essas informações estão indo lá para a seção "Post" do componente "App.js" vindo do componente "Post.js"

