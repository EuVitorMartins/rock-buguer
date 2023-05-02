import style from './Banner.module.css'

export default function Banner() {
  return (
    <div className={style.banner}>
        <img src="https://images.unsplash.com/photo-1554306297-0c86e837d24b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136&q=80" alt=" Banner do site" className={style.bannerImage} />
    </div>
  )
}
