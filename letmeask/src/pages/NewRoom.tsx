import {Link} from 'react-router-dom'

// images 
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

// componenets 
import { Button } from '../components/Button';

// hoooks
// import { useAuth } from '../hooks/useAuth';

// style 
import '../styles/auth.scss'

export function NewRoom() {

  // const { user } = useAuth(); 

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo Letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}