import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from '../Cabecalho'
import Rodape from '../Rodape'

export default function BasePagina() {
  return (
    <div>
        <Cabecalho/>
            <Outlet/>
        <Rodape/>
    </div>
  )
}
