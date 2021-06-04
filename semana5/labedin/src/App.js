import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaImagem from './components/CardGrande/Img/MinhaImagem.jpg';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`;

const AppConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;

const DadosGerais = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

function App() {
  return (
    <div>
      <GlobalStyle/>      
      <AppConfig>
      <div className="App">
        <PageSectionContainer>
        <div className="page-section-container">
          <DadosGerais>Dados pessoais</DadosGerais>
          <CardGrande 
            imagem={MinhaImagem} 
            nome="Ederson Amaral" 
            descricao="Oi, eu sou o Ederson Amaral. Atualmente sou estudante da Labenu no curso Web FullStack. Minha intenção é adquirir novos conhecimentos e aplicá-los na minha área de formação de origem que é Engenharia Elétrica."        
          />
        
          <ImagemButton 
            imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
            texto="Ver mais"
          />
          
          <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          nome="Email"
          descricao=": ederson@labenu.com"
          />
          
          <CardPequeno
          imagem="https://cdn.iconscout.com/icon/premium/png-256-thumb/home-location-1582682-1344016.png"
          nome="Endereço"
          descricao=": Rua Labenu"
          />
        </div>
      
        <div className="page-section-container">
          <DadosGerais>Experiências profissionais</DadosGerais>
          <CardGrande 
            imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
            nome="Labenu" 
            descricao="Estudante no curso Web FullStack Developer" 
          />

          <CardGrande 
            imagem="https://www.elektro.com.br/Themes/ElektroTheme/Content/image/LogoElektro.png" 
            nome="Elektro Redes S.A" 
            descricao="Analista de Operações" 
          />
        
          <CardGrande 
            imagem="https://static.wixstatic.com/media/765851_bec521bae8cd4eaa836a82475a5e6183~mv2.png/v1/fill/w_251,h_132,al_c,q_85,usm_0.66_1.00_0.01/logo_maringa_roger.webp" 
            nome="Grupo Maringá" 
            descricao="Estagiário" 
          />
        </div>

        <div className="page-section-container">
          <DadosGerais>Minhas redes sociais</DadosGerais>
          <ImagemButton 
            imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
            texto="Facebook" 
          />        

          <ImagemButton 
            imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
            texto="Twitter" 
          />        
        </div>
        </PageSectionContainer>
      </div>
      </AppConfig>
      </div>      
  );
}

export default App;
