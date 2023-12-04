import React, { useState } from 'react'
import MenuLateral from 'componentes/MenuLateral'
import AbrirMenu from './AbrirMenu'

export default function Menu({ config, blue }) {

    const [menu, setMenu] = useState(false)

    function mudaEstadoMenu() {
        setMenu(!menu)
    }

    return (
        <div>
            <AbrirMenu config={config} blue={blue} mudaEstadoMenu={mudaEstadoMenu} />
            <MenuLateral mudaEstadoMenu={mudaEstadoMenu} estado={menu} />
        </div>
    )
}
