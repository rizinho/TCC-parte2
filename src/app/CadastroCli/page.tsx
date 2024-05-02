'use client'
 
import { useState } from 'react'

import styles from "./cadastro.module.css"
import Image from "next/image";
import Link from "next/link"

export default function Cadastro() {

  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');


  return(
    
    <div style={{ backgroundColor: '#72b6a4', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
      <div className={styles.header}>
          <div className={styles.logo}>
            <Image
            className={styles.icon}
            src="/logotcc.png"
            width={500}
            height={500}
            alt="Imagem do logo"
            />
            <h1 className={styles.txtLog}>Consult Doctor</h1>
          </div>
         
        </div>
      </header>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>

          <div>
            <input className={styles.inp}
                   type='text' value={nomeCompleto} 
                   placeholder='Nome Completo:' 
                   onChange={(e) => setNomeCompleto(e.target.value)}
                    />
          </div>

          <div>
            <input className={styles.inp}
                   type="email" value={email} 
                   placeholder='E-mail:' 
                   onChange={(e) => setEmail(e.target.value)} 
                   />
          </div>

          <div>

            <input className={styles.inp}
                   type="password" value={senha} 
                   placeholder='Senha:' 
                   onChange={(e) => setSenha(e.target.value)} 
                   />
          </div>

          <div>
            <input className={styles.inp}
                   type="text" value={cpf} 
                   placeholder='CPF:' 
                   onChange={(e) => setCpf(e.target.value)} 
                   />
          </div>

          <div>
              <input className={styles.inp}
                     type="tel" value={telefone} 
                     placeholder='Telefone:' 
                     onChange={(e) => setTelefone(e.target.value)} />
          </div>

          <div>
            <input type="text" value={cidade} placeholder='Cidade:' onChange={(e) => setCidade(e.target.value)} />
            <input type="text" value={estado} placeholder='Estado:' onChange={(e) => setEstado(e.target.value)} />
          </div>

          <div>
            <label>Data de Nascimento:</label>
            <input type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
          </div>

          <div>
            <label>Gênero:</label>
            <select value={genero} onChange={(e) => setGenero(e.target.value)}>
              <option value="">Selecione o Gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <button type="submit">Cadastrar</button>
          <Link href="/" className={styles.botVoltar}>Voltar</Link>

        </form>
      </div>

      <footer style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
        &copy; 2024 ConsultDoctor.com - Todos os direitos reservados
      </footer>

    </div>
  );
};