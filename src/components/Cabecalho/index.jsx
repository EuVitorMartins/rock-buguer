import React, { useRef, useState } from 'react';
import { AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { ImLocation } from 'react-icons/im';
import { HiOutlineX } from 'react-icons/hi';
import { BiFoodMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import style from './Cabecalho.module.css';

export default function Cabecalho() {
  const dropDownRef = useRef(null);
  const [ativo, setAtivo] = useState(false);
  const onClick = () => setAtivo(!ativo);

  return (
    <>
      <div className={style.menu_container}>
        <button onClick={onClick} className={style.menu_button}>
          { ativo ? <HiOutlineX size={40}/> : <AiOutlineMenu size={40} />}
        </button>
        <h1 className={style.menu_texto}>Baikão</h1>
      </div>

      <nav
        ref={dropDownRef}
        className={`${style.menu} ${ativo ? style.active : style.inactive}`}
      >
        <ul>
          <li className={style.menu_item}>
            <Link
              to="/"
              className={style.menu_link}>
              <span className={style.menu_icone}>
                <AiFillHome />
              </span>Home
            </Link>
          </li>

          <li className={style.menu_item}>
            <Link
              to="/menu"
              className={style.menu_link}>
              <span className={style.menu_icone}>
                <BiFoodMenu />
              </span>Menu
            </Link>
          </li>

          <li className={style.menu_item}>
            <Link
              to="/localizacao"
              className={style.menu_link}>
              <span className={style.menu_icone}>
                <ImLocation />
              </span>Localização
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
