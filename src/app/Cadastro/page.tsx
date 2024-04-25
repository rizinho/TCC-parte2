import styles from './cadastro.module.css'
import Link from 'next/link';
import React, { useState } from 'react';

export default function Cadastro(){

const CadastroUsuario = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
    console.log('Dados do formulário:', {
      nomeCompleto,
      email,
      cpf,
      telefone,
      cidade,
      estado,
      dataNascimento,
      genero
    });
  
  };

  return (
    <div style={{ backgroundColor: '#72b6a4', opacity:'50%' , minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ backgroundColor: '#72b6a4', padding: '20px', textAlign: 'center' }}>
        <h1>Cadastro de Usuário</h1>
      </header>
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '40px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
          <div>
            <label>Nome Completo:</label>
            <input type="text" value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>CPF:</label>
            <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
          </div>
          <div>
            <label>Telefone:</label>
            <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>
          <div>
            <label>Cidade:</label>
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </div>
          <div>
            <label>Estado:</label>
            <select value={estado} onChange={(e) => setEstado(e.target.value)}>
              <option value="">Selecione o Estado</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="MG">Minas Gerais</option>
              {/* Adicione mais estados conforme necessário */}
            </select>
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
        </form>
      </div>
      <footer style={{ backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
        &copy; 2024 SeuSite.com - Todos os direitos reservados
      </footer>
    </div>
    )
}}