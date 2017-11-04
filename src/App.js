import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Resultado from './Resultado';
import datos from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      nombre:"",
      encontrado: false,
    }
    this.buscarCodigo= this.buscarCodigo.bind(this);
  }

  buscarCodigo(codigo){
    this.setState({encontrado: false});
    for (var dato in datos){
      if (datos[dato].codigo == codigo.target.value) {
        this.setState({encontrado: true});
        this.setState({nombre: datos[dato].nombre});
      }
    }
  }

  render() {
    let show="";
    if (this.state.encontrado) {
      show="El código se encontró y el nombre es "+this.state.nombre;
    }else{
      show="El código no se encontró ";
    }
    return (
      <div className="App">
        <div className="App-header">
        <p> Que Quiero? </p>
          <input type="text" placeholder="Texto" onChange={this.buscarCodigo} onFocus={this.value=""}/>
        <p>{show}</p>
        </div>
      </div>
    );
  }

}
export default App;
