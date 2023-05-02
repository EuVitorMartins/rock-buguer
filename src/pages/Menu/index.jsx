import React from 'react'
import Card from '../../components/Card';
import lanches from '../../json/lanches.json';
import styles from './Menu.module.css'

export default function Menu() {
    const lanchesArtesanal = lanches.filter(item => item.tag === "artesanal");
    const lanchesTradicionais = lanches.filter(item => item.tag === "tradicional");
    const porções = lanches.filter(item => item.tag === "porções");
    return (
        <div className={styles.container}>
            <h2 className={styles.subTitulo}>Artesanal</h2>
            <ul className={styles.lista_popular}>
                {lanchesArtesanal.map(item => {
                    return (
                        <Card item={item} />
                    )
                })}
            </ul>
            <h2 className={styles.subTitulo}>Tradicional</h2>
            <ul className={styles.lista_popular}>
                {lanchesTradicionais.map(item => {
                    return (
                        <Card item={item} />
                    )
                })}
            </ul>
            <h2 className={styles.subTitulo} >Porções</h2>
            <ul className={styles.lista_popular}>
                {porções.map(item => {
                    return (
                        <Card item={item} />
                    )
                })}
            </ul>
        </div>

    )
}
