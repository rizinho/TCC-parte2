import styles from './cadastro.module.css'

export default function Cadastro(){
    return(
        <div>
        <h2>Página de Cadastro</h2>
        <form>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
          <br />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    )
}