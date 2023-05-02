import style from './Rodape.module.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export default function Rodape() {
  return (
    <div className={style.rodape}>
        <ul className={style.contatos}>
          <li className={style.contato}><BsFacebook/></li>
          <li className={style.contato}><BsInstagram/></li>
          <li className={style.contato}><BsWhatsapp/></li>
        </ul>
        <p className={style.copy}> © Vitor Martins </p>
    </div>
  )
}
