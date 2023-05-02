import React from 'react';
import erro from './404-Error-pana.svg';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';
import {FiArrowLeft} from 'react-icons/fi';

export default function Error() {
  return (
    <div className={styles.container}>
        <img src={erro} alt="imagem de erro 404"  className={styles.imagem}/>
        <h2 className={styles.texto}>Pagina não encontrada</h2>
        <button className={styles.botao}>
          <Link to={-1} className={styles.link}>
           <span className={styles.icone}><FiArrowLeft/></span> Voltar
          </Link>
        </button>
    </div>
  )
}
