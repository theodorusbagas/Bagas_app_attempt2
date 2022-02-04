import React from 'react';
import './App.css';
// import {IState, Info, } from './components/Info';


// render() {
  
//   return(
//     <>
//       Nama: {this.state.Nama}
//       Kelas: {this.state.Kelas}
//       Pagi: {this.state.Pagi}
//     </>
//   )
// }

interface IInfo {
  Nama: String;
  Kelas: String;
  Pagi: String;
  Count: number;
}

class Info extends React.Component <any,IInfo>{
constructor (state: any) {
  super(state)
  this.state = {
    Nama: "Theodorus Bagas Eko Prasetyo",
    Kelas: "XI MIPA 2",
    Pagi: "false",
    Count: 0
  }
}

  plusOne = () => {
    this.setState ({
      Count: this.state.Count + 1,
    })
  }

  
  render() {
    if (this.state.Count%3==0 && this.state.Count !== 0) {
      return (
        <div className="INFO">
          <h4>Nama: {this.state.Nama}</h4>
          <p>Kelas: {this.state.Kelas}</p>
          <p>Pagi: {this.state.Pagi}</p>

          <h1>{this.state.Count}</h1>

          <button type="button" onClick={this.plusOne}>
            click me
          </button>
          
          <br></br>
          <img src="https://internalgroup.id/frontend/assets/img/150x150.jpg"></img>

        </div>
    )
  }
  else {
    return (
      <div className="INFO">
          <h4>Nama: {this.state.Nama}</h4>
          <p>Kelas: {this.state.Kelas}</p>
          <p>Pagi: {this.state.Pagi}</p>

          <h1>{this.state.Count}</h1>

          <button type="button" onClick={this.plusOne}>
            click me
          </button>
          
          <br></br>
        </div>
      )
    }
  }
}
export default Info