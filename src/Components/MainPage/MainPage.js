import React, { useState } from 'react'
import { MainContainer } from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [formFlow, setFormFlow] = useState(1)
  const [confirmaEmail, setConfirmaEmail]= useState("") //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangeConfirmaEmail = (event) => {
    setConfirmaEmail(event.target.value)
  }

  const sendData = () => {
   if(age>=18 && name.length >=10 && name.length<=30 && email.includes("@") && email===confirmaEmail){

    setFormFlow(2)
   }else{
    alert("Não respondeu o formulario")
   }
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm 
      name={name}
      age={age}
      email={email}
      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      onChangeConfirmaEmail={onChangeConfirmaEmail}
      sendData={sendData}  
      /> : <ConfirmationForm />}
    </MainContainer>
  )
}

export default MainPage