import React, { useState, useEffect } from 'react';
import logo from './img/logo.png';
import Inicio from './components/Index';
import Matches from './components/Matches';
import Detalhes from './components/Details';
import axios from 'axios';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import {AppDiv, Interna, Header, Espaco, Logo, IconeCurtidas, IconeVoltar} from './components/AppStyled'

const App = () => {
  const [secao, setSecao] = useState("inicio")
  const [perfilCarregado, setPerfilCarregado] = useState(undefined)
  const [listaDeMatches, setListaDeMatches] = useState(undefined)
  const [perfilSelecionado, setPerfilSelecionado] = useState(undefined)

  const mudaSecao = (event) => {
    setSecao(event.currentTarget.getAttribute("value"))
  }

  useEffect(()=>{
    carregaPerfil();
    carregaLista();
  }, [])

  const carregaPerfil = () => {
    setPerfilCarregado(undefined);
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ederson/person")
    .then(res=>{
      return setPerfilCarregado(res.data.profile)
    })
    .catch(err => {
      return alert("Falha ao carregar perfil, tente novamente")
    })
  }

  const carregaLista = () =>{
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ederson/matches")
    .then(res =>{
      return setListaDeMatches(res.data.matches)
    })
    .catch(err => {
      return alert(`Falha ao carregar lista, tente novamente`)
    })
  }

  const recarrega = () => {
    carregaPerfil();
    carregaLista();
  }

  const recebeInfo = (perfil) => {
    setPerfilSelecionado(perfil)
    setSecao("detalhes")
  }

  const limparSwipes = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ederson/clear")
      .then(res =>{
        return (alert("Lista de swipes apagada com sucesso!"), carregaLista(), carregaPerfil())
      })
      .catch(err => {
        return alert("Falha ao apagar lista, tente novamente")
      })
  }

  let secaoCarregada = undefined;

  switch(secao){
    case "matches":
      secaoCarregada = (
        <Interna>
            <Header>
              <IconeVoltar onClick={mudaSecao} value="inicio" />
              <Logo src={logo} />
              <Espaco />
            </Header>
            <Matches recebeInfo={recebeInfo} lista={listaDeMatches} />
          </Interna>
      )
      break;
    case "detalhes":
        secaoCarregada = (
          <Interna>
            <Header>
              <IconeVoltar onClick={mudaSecao} value="matches" />
              <Logo src={logo} />
              <Espaco />
            </Header>
            <Detalhes perfil={perfilSelecionado} />
          </Interna>
        )
      break;
    default:
      secaoCarregada = (
        <Interna>
            <Header>
              <Espaco />
              <Logo src={logo} />
              {listaDeMatches 
                ? <Badge badgeContent={listaDeMatches.length} color="secondary">
                      <IconeCurtidas onClick={mudaSecao} value="matches" />
                  </Badge>
                : <IconeCurtidas onClick={mudaSecao} value="matches" />
              }
            </Header>
            <Inicio perfil={perfilCarregado} recarrega={recarrega} />
          </Interna>
        )
    break;
  }

  return (
    <AppDiv>
      <Button variant="contained" color="primary" onClick={limparSwipes}>Limpar perfis e matches</Button>
      {secaoCarregada}
    </AppDiv>
  );
}

export default App;
