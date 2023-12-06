
import React, { useState, useEffect } from 'react'
import styles from './Admin.module.scss'

import axios from 'axios'

import NavBarLogado from 'componentes/NavBarLogado'

import iconePainel from '../../assets/icones/painel.png'
import iconeUsuarios from '../../assets/icones/usuarios.png'
import iconeTreinos from '../../assets/icones/treinos.png'
import iconeBD from '../../assets/icones/bd.png'
import iconeAutenticacao from '../../assets/icones/autenticacao.png'
import iconeConfig from '../../assets/icones/configRoxo.png'
import Painel from './Painel'
import Usuarios from './Usuarios'

export default function Admin() {

  const [routeAdmin, setRouteAdmin] = useState("Painel")

  const [contagem, setContagem] = useState(0)


  useEffect(() => {
    axios.get('http://localhost:3001/api/usuario')
      .then((response) => {
        const dados = {
          objeto: response.data.result,
        };
  
        console.log("Dados recebidos:", dados);
  
        if (dados.objeto) {
          // Se 'dados.objeto' existe e é uma lista/array de usuários, atualize a contagem
          setContagem(dados.objeto.length);
        }
  
      }).catch((err) => {
        console.log(err.response);
      });
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(routeAdmin)

  return (
    <>
      <header>
        <NavBarLogado dark perfil admin />
      </header>

      <main className={styles.main}>
        <section className={styles.menuAdmin}>
          <h2>Geral</h2>

          <table className={styles.menuAdmin__links}>
            <tbody>
              <tr onClick={() => setRouteAdmin("Painel")}>{ }
                <td className={styles.menuAdmin__links_icone}>
                  <img src={iconePainel} alt="icone configurações" />
                </td>
                <td className={styles.menuAdmin__links_texto}>Painel</td>
              </tr>

              <tr onClick={() => setRouteAdmin("Usuarios")}>
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
          {routeAdmin === "Painel"
            ? <Painel 
                alterarEstado={setRouteAdmin} 
                contagemUsuario={contagem}
              />
            : routeAdmin === "Usuarios"
              ? <Usuarios alterarEstado={setRouteAdmin} />
              : ''
          }

        </section>
      </main>
    </>
  )
}
