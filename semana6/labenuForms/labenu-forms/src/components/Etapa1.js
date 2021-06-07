import React from 'react';
import { Etapa2 } from './Etapa2';
import { Etapa3 } from './Etapa3';
import { Final } from './Final';

export default class Etapa1 extends React.Component {
  state = {
    pagina: ""
  };

  alternaParaEtapa2 = () => {
    this.setState({ pagina: "Etapa2" });
  };

  alternaParaEtapa3 = () => {
    this.setState({ pagina: "Etapa3" });
  };

  alternaParaFinal = () => {
    this.setState({ pagina: "Final" });
  };

  render() {
    const renderizaPagina = () => {
      switch (this.state.pagina) {
        case 'Final':
          return <Final />;
        case 'Etapa2':
          return <Etapa2 />;
        case 'Etapa3':
          return <Etapa3 />;
        default:
          return <div></div>;
      };
    };

    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        {renderizaPagina()}
      </div>
    );
  }
}


