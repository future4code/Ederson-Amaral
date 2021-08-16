import React, { useState } from "react"
import ReactDOM from 'react-dom';

import { Link, useHistory } from "react-router-dom";
// import pokemon from "./images/pokemon"


import './Header.css'
const li = [
    {
      link: '/lista',
      text:'Lista de Pokemons'
    },
{
      link: '/pokedex',
      text:'Pokedex'
    }]


// this is the sidebar file //

const SideDraw = props =>{
 const history = useHistory()

let drawClasses = 'sidebar';
if(props.show){
drawClasses =  'sidebar active';
}



return(
<nav className={drawClasses}> 
<button className="close-btn" onClick={props.click}>X</button>
<ul className="sidebar-ul-top">
</ul>
<ul className="sidebar-ul">
{
  li.map((objLink, i ) => {
    return (<li key={i} onClick={() => history.push(objLink.link)} >{objLink.text}</li>)
  })
}

</ul>
</nav>
) 
}

// this is the backdrop file //

const BackDrop = props => (
<div className="backDrop" /> 
)

//  this is the sidebar button file //

const SideDrawBtn = props =>(
<button className="toggle-Btn" onClick={props.click}> 
<div className="btn-line"></div>
<div className="btn-line2"></div>
<div className="btn-line3"></div>
<div className="btn-line4"></div>

</button>
)

// this is the top nav file //

const Toolbar = props =>(
<header className="toolbar">
<nav className="toolbar-nav">
<div>
  <SideDrawBtn  click={props.drawClickHandler}/>
</div><div className="spacer"></div>
    <div className="logo"><img src={'https://logosmarcas.net/wp-content/uploads/2020/05/Pokemon-Logo.png'} alt={'Pokedex'}/></div>
     
      <div>
        <ul>
   
        </ul>
      </div>
</nav>
</header>
)

// main app file //
// which handles the state//

export function Header (){

const [sideDrawOpen,setSideDrawOpen] = useState(false)
const drawToggleHandler = () =>{
  setSideDrawOpen(!sideDrawOpen)
};

const backDropClickHandler = () =>{
  setSideDrawOpen(false);
}

let backDrop;

if(sideDrawOpen){
backDrop = <BackDrop />;
}
return(
<div style={{height:'100%'}}>
  <Toolbar drawClickHandler={drawToggleHandler} /> 
 <SideDraw click={backDropClickHandler} show={sideDrawOpen} />
 {backDrop}
  <main></main>

</div>
)

}
