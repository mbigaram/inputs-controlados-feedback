import React from 'react'
import { Form, Input} from '../MainPage/styles'

const NameForm = (props) => {

  


 
  return (
    <Form>
        <label>
          Nome:
          <Input type="text" placeholder="Nome" value={props.name} onChange={props.onChangeName}/>
        </label>
        <label>
          Idade:
          <Input type="number" min="18" placeholder="Idade" value={props.age} onChange={props.onChangeAge}/>
        </label>
        <label>
          E-mail:
          <Input  placeholder="usuario@usuario.com" value={props.email} onChange={props.onChangeEmail}/>
        </label>
        <label>
          Confirmação de e-mail:
          <Input  placeholder="usuario@usuario.com" value={props.confirmaEmail} onChange={props.onChangeConfirmaEmail}/>
        </label>
      <button onClick={props.sendData}>Enviar dados</button>
      </Form>
  )
}

export default NameForm