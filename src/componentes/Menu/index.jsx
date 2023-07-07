import React, { useState } from 'react'
import styles from './Menu.module.scss'

import Button from 'componentes/Button'
import Menuhamburguer from './MenuHamburguer'

import logo from 'assets/logo.png'
import MenuLateral from 'componentes/MenuLateral'

export default function Menu( ) {

  const[menuAtivo, setMenuAtivo] = useState(false)

  function abrirMenu() {
    const btn = document.getElementById("btn")

    setMenuAtivo(true)

    /* btn.animate([
      {transform: 'translate(0,0)'},
      {transform: 'translate(-200px,0)'}
    ], 500) */

    btn.style.transition = "all 1s ease 0s"
    btn.style.transform = 'translate(-300px,0)'
    btn.style.display = 'block'

    console.log("oi")
  }

  function fecharMenu() {
    const btn = document.getElementById("btn")

    btn.style.transition = "all 1s ease 0s"
    btn.style.transform = 'translate(300px,0)'
    btn.style.display = 'none'

    console.log("tchau")
  }

  return (
    <nav className={styles.menu}>
      <img src={logo} className={styles.menu__logo} alt='logo Gym IA Trainer'/>
      <Button texto='Entrar' to='/login'/>
      <Menuhamburguer abrirMenu={abrirMenu}/>
      <MenuLateral fecharMenu={fecharMenu} />
    </nav>
  )
}


