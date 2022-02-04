import React from "react";

export interface IInfo {
    Nama: String;
    Kelas: String;
    Pagi: String;
}

export class Info extends React.Component <any,IInfo>{
    render() {
        return (
          <div>
            <h3>Nama: {this.state.Nama}</h3>
            <p>Kelas: {this.state.Kelas}</p>
            <p>Pagi: {this.state.Pagi}</p>
          </div>
          
          )
        }
    }
    
    export default Info
    // export interface IInfo {
        //     Nama: string;
//     Kelas: string;
//     Pagi: boolean;
// }
// export class Info extends React.Component <any, IInfo>{
//     constructor(state: any) {
//         super(state);

//         this.state = {
//         Nama: "Theodorus Bagas Eko Prasetyo",
//         Kelas: "XI MIPA 2",
//         Pagi: false
//         };
//     }
// }