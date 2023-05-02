import React from 'react'
import style from './Popular.module.css';
import Card from '../../../components/Card/index';

export default function Popular({children, lanches}) {
  return (
    <div>
        <h2 className={style.texto}>{children}</h2>
        <ul className={style.lista_popular}>
          {lanches.map((item) => {
            return (
              <Card item={item} />
            )
          })}
        </ul>
    </div>
  )
}
