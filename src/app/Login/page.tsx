
import styles from "./login.module.css"
import Image from "next/image";

export default function Login() {
    return (
        <div className={styles.main}>

            <header>
                <div className={styles.header}>
                    <div className={styles.logo}>

                        <Image className={styles.icon}
                            src="/logotcc.png"
                            width={500}
                            height={500}
                            alt="Imagem do logo"
                        />
                        <h1 className={styles.txtLog}>Consult Doctor</h1>
                        <div className={styles.form}>
                          <form className={styles.form1}>

                            <input className={styles.inp}
                                   type="text" />

                          </form>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}
