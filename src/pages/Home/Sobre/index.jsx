import style from './Sobre.module.css';

export default function Sobre() {
  return (
    <div className={style.container}>
      <div className={style.container_imagem}>
        <img
          src="https://images.unsplash.com/photo-1543860586-b06c9b92f7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="Carrinho de lanches na praça"
          className={style.imagem}
        />
      </div>
      <div className={style.container_texto}>
        <h2 className={style.titulo}>QUEM SOMOS</h2>
        <p className={style.paragrafo}>
          Somos uma Hamburgueria sobre rodas, estamos sempre no mesmo lugar de<mark> segunda-feira a sábado das 18hrs as 23hrs.</mark> O nome Beikão veio por nossa paixão por bacon, e pode ter certeza que nosso lanche são caprichados!
        </p> <br />
        <p className={style.paragrafo}>
          <mark>Em breve</mark> estaremos abrindo nossa hamburgueria, mas por enquanto vai provar nossos<mark> deliciosos lanches e tomas chopp gelatino!</mark>
        </p>
        <div className={style.divBotao}>
          <button className={style.botao}>
            Conhecer
          </button>
        </div>
      </div>
    </div>
  )
}
