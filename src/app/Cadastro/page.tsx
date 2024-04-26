import styles from "./cadastro.module.css"
import Image from "next/image";
import Link from "next/link"

export default function Cadastro() {


  return(
    
    
    <form>

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
             id="nome"
             
             /> <br/>
      <input className={styles.inf}
             type="text"
             id="e-mail"
             /> <br/>
      <input className={styles.inf}
             type="text"
             id="senha"
             /> <br/>             
      <input className={styles.inf}
             type="text"
             id="cpf"
             /> <br/>
      <input className={styles.inf}
             type="text"
             id="numero de telefone"
             /> <br/>
      <input className={styles.inf}
             type="text"
             id="cidade"
             /> <br/>
      <input className={styles.inf}
             type="text"
             id="estado"
             /> <br/>

      <h1>Data de Nascimento</h1>

      <input className={styles.inf}
             type="text"
             id="dia"
             />
      <input className={styles.inf}
             type="text"
             id="mês"
             />
      <input className={styles.inf}
             type="text"
             id="ano"
             />       


      <Link href="/">Voltar</Link>
    </form>

    
  );
}