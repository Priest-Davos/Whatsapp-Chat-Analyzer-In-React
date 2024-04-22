import React from 'react'
import Form from '../components/Form'
import Background from '../components/Background'
type Props = {}

const Register = (props: Props) => {
  return (
   
   <Background>
        <Form route="/ChatAnalyzerApi/user/register/" method="register" />
    </Background>
    
  )
}

export default Register