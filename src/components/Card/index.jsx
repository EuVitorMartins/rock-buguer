import React from 'react';
import style from './Card.module.css';

export default function Card({ item }) {
    return (
        <li key={item.id} className={style.card_item}>
            <div className={style.card_container_img}>
                <img src={item.imagem} alt={item.titulo} className={style.card_imagem} />
            </div>
            <h1 className={style.card_titulo}>{item.titulo}</h1>
            <p className={style.card_descricao}>{item.descricao}</p>
            <div className={style.card_sub_pre}>
                <p className={style.card_sub}><small>{item.tag}</small></p>
                <p className={style.card_preco}>R${item.preco}</p>
            </div>
        </li>
    )
}
