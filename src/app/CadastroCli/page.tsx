

import styles from "./cadastro.module.css"
import Image from "next/image";
import Link from "next/link"

export default function Cadastro() {



  return(
    
    
    <form className={styles.main}>

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
       
      <h1> nome completo </h1>

      <input className={styles.inf}
             type="text"
             value="Nome completo"
             id="nome"
             
             /> <br/>
      <input className={styles.inf}
             type="text"
             value="E-mail"
             id="e-mail"
             /> <br/>
      <input className={styles.inf}
             type="text"
             value="Senha"
             id="senha"
             /> <br/>             
      <input className={styles.inf}
             type="text"
             value="CPF"
             id="cpf"
             /> <br/>
      <input className={styles.inf}
             type="text"
             value="Numero de telefone"
             id="numero de telefone"
             /> <br/>
      <input className={styles.inf}
             type="text"
             value="Cidade"
             id="cidade"
             /> <br/>
      <input className={styles.inf}
             type="text"
             value="Estado"
             id="estado"
             /> <br/>

      <h1>Data de Nascimento</h1>

      <label>Dia:</label>
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>  

      <label>Mês:</label>
            <select>
              <option value="Janeiro">Janeiro</option>
              <option value="Fevereiro">Fevereiro</option>
              <option value="Março">Março</option>
              <option value="Abril">Abril</option>
              <option value="Maio">Maio</option>
              <option value="Junho">Junho</option>
              <option value="Julho">Julho</option>
              <option value="Agosto">Agosto</option>
              <option value="Setembro">Setembro</option>
              <option value="Outubro">Outubro</option>
              <option value="Novembro">Novembro</option>
              <option value="Dezembro">Dezembro</option>
            </select>
      <label>Ano:</label>

      <input className={styles.inf}
             type="text"
             id="ano"
             />       

    <br/>

      <Link href="/">Voltar</Link>
    </form>

    
  );
}