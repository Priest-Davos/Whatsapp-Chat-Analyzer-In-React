import Form from '../components/Form'
import Background from '../components/Background'
type Props = {}

const Login = (props: Props) => {
  return (
    <Background>
    <Form route="/ChatAnalyzerApi/token/" method="login"></Form>
    </Background>
  )
}

export default Login