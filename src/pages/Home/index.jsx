import React from 'react';
import Banner from '../../components/Banner';
import style from './Home.module.css';
import Popular from './Popular';
import Sobre from './Sobre';
import lanches from '../../json/lanches.json';

export default function Home() {
  const popularFilter = lanches.filter(item => item.label === "popular");
  return (
    <>
      <div className={style.container}>
        <Banner />
        <Popular children={"MAIS PEDIDOS"} lanches={popularFilter} />
        <Sobre/>
      </div>
    </>
  )
}
