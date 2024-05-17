import { Carousel } from 'react-responsive-carousel';

import styles from './inicio.module.css';
import Image from "next/image";


export default function Inicio() {
    return (
        <div className={styles.main}>
            <div className={styles.carrosel}>
             <Image src='/carrosel1.jpg'
                    width={500}
                    height={500}
                    alt='carrosel 1'/>

            </div>
        </div>
    )

}
