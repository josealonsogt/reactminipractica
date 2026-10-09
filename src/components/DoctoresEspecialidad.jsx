import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';


export default class DoctoresEspecialidad extends Component {

selectIdEspecialidad = React.createRef();

urlDoctores = Global.urlDoctores;



    state = {

        
        especialidades: [],
        doctores: []

    }

   buscarDoctor = (event) =>{
        event.preventDefault();


        let selectIdEspecialidad = this.selectIdEspecialidad.current.value;
        let request = "api/Doctores/DoctoresEspecialidad/" + selectIdEspecialidad;
        axios.get(this.urlDoctores + request).then((response)=>{
            console.log("leyendo doctores")
            this.setState({
                doctores: response.data
            })
            console.log(response.data)
        })

    }



    loadEspecialidades = () => {
        let request = "api/doctores";
        console.log("aun no traidos")
        axios.get(this.urlDoctores + request).then((response) => {
            console.log("Leyendo especialidades")
            this.setState({
                especialidades: response.data
            })
        })
    }

 componentDidMount = () => {
        this.loadEspecialidades();
    }


  render() {
    return (
      <div>
        
        <h1> DoctoresEspecialidad</h1>

        <form>
                <label>Seleccione especialidad: </label>
                <select ref={this.selectIdEspecialidad}>
                    {
                        this.state.especialidades.map((doc, index) => {
                            return (<option key={index} value={doc.especialidad}>
                                {doc.especialidad}
                            </option>)
                        })
                    }
                </select>
                <button onClick={this.buscarDoctor}>
                    Buscar doctor
                </button>

                
            <ul>
                {
                    this.state.doctores.map((doc, index) => {
                        return (<li key={index}>
                            {doc.idDoctor}, apellido: {doc.apellido}
                        </li>)
                    })
                }
            </ul>
            </form>


            

            


        
        
        
        </div>
    )
  }
}
