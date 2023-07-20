import React, { useState } from 'react'
import MenuHamburguer from './MenuHamburguer'
import MenuLateral from 'componentes/MenuLateral'

export default function Menu() {

    const [menu, setMenu] = useState(false)

    function mudaEstadoMenu() {
        setMenu(!menu)
    }

    return (
        <div>
            <MenuHamburguer mudaEstadoMenu={mudaEstadoMenu} />
            <MenuLateral mudaEstadoMenu={mudaEstadoMenu} estado={menu} />
        </div>
    )
}
