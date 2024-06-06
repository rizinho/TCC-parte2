'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import styles from './inicio.module.css'

export default function inicio () { 
		return ( 
			<div className={styles.main}> 
			<Carousel> 
<div className=""></div>
				<div className={styles.mainCarr}> 
        <Image
            className={styles.carr}
            src="/carrosel1.jpg"
            width={500}
            height={500}
            alt="Imagem do logo" />
				</div> 

				<div> 
        <Image
            className={styles.carr}
            src="/carrosel2.jpg"
            width={500}
            height={500}
            alt="Imagem do logo" />
				</div> 

				<div> 
        <Image
            className={styles.carr}
            src="/carrosel3.jpg"
            width={500}
            height={500}
            alt="Imagem do logo" />
				</div>  
			</Carousel> 
			</div> 
		); 

};
