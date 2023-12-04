
import React from 'react'
import styles from './Admin.module.scss'

import NavBarLogado from 'componentes/NavBarLogado'

import iconePainel from '../../assets/icones/painel.png'
import iconeUsuarios from '../../assets/icones/usuarios.png'
import iconeTreinos from '../../assets/icones/treinos.png'
import iconeBD from '../../assets/icones/bd.png'
import iconeAutenticacao from '../../assets/icones/autenticacao.png'
import iconeConfig from '../../assets/icones/configRoxo.png'
import Painel from './Painel'

export default function Admin() {
  return (
    <>
        <header>
            <NavBarLogado dark admin />
        </header>

        <main className={styles.main}>
          <section className={styles.menuAdmin}>
            <h2>Geral</h2>

            <table className={styles.menuAdmin__links}>
              <tbody>
                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconePainel} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Painel</td>
                </tr>

                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconeUsuarios} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Usuários</td>
                </tr>

                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconeTreinos} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Treinos</td>
                </tr>

                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconeBD} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Banco de Dados</td>
                </tr>

                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconeAutenticacao} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Autenticação</td>
                </tr>

                <tr>
                  <td className={styles.menuAdmin__links_icone}>
                    <img src={iconeConfig} alt="icone configurações" />
                  </td>
                  <td className={styles.menuAdmin__links_texto}>Configurações</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section className={styles.pages}>
            <Painel />
          </section>
        </main>
    </>
  )
}
