import React from 'react'
import { Form } from '../MainPage/styles'


// const ConfirmationForm = () => {
//   const [data, setData] = useState("");
//   const onChangeData = (event) => {
//   console.log(event.target.value)
//   }

// }

const ConfirmationForm = (props) => {

  const enviarDados=()=>{
    alert("Dados Enviados")
  }

  return (
    <Form>
      <h2>exercicio 3</h2>

      <label>
        Front-End:
        <input type="radio" />
      </label>
      <label>
        Back-End:
        <input type="radio" />   
      </label>

      <label>
      Data de nascimento:
        <input  type="date"/>
      </label>

      <label>
     
        <select>
        <option selected value="Genero">Genero</option>
          <option>Homem</option>
          <option>Mulher</option>
        </select>
      </label>
      <label>
      <select>
      <option selected value="Raça">Raça</option>
        <option value="Raça Negra">Negro</option>
        <option value="Raça Amarela">Amarelão</option>
        <option value="Raça Branca">Branco</option>
        <option value="Raça Vermelha">Vermelho</option>
      </select>
      </label>

      <label for="vehicle1">Tem ensino médio completo
      <input type="checkbox"/><br></br>
      </label>

      <label for="vehicle1">Tem disponibilidade para participar das atividades
      <input type="checkbox"/><br></br>
      </label>
      <button onClick={enviarDados}>Enviar dados</button>

    </Form>
  )
}

export default ConfirmationForm