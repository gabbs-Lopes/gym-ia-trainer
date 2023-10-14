import React from 'react'
import styles from './Rodape.module.scss'

import iconeInsta from 'assets/icones/instagram.png'
import LinkDefault from 'componentes/LinkDefault'
import { Link } from 'react-scroll';

export default function Rodape() {
    return (
        <footer className={styles.footer}>
            <section className={styles.contato}>
                <h2>Entre em contato</h2>

                <table>
                    <tbody>
                        <tr className={styles.contato__row}>
                            <td>
                                <img className={styles.contato__icone} src={iconeInsta} alt="" />
                            </td>
                            <td className={styles.contato__rowTexto} >instagram</td>
                        </tr>

                        <tr className={styles.contato__row}>
                            <td>
                                <img className={styles.contato__icone} src={iconeInsta} alt="" />
                            </td>
                            <td className={styles.contato__rowTexto} >e-mail</td>
                        </tr>

                        <tr className={styles.contato__row}>
                            <td>
                                <img className={styles.contato__icone} src={iconeInsta} alt="" />
                            </td>
                            <td className={styles.contato__rowTexto} >tiktok</td>
                        </tr>

                        <tr className={styles.contato__row}>
                            <td>
                                <img className={styles.contato__icone} src={iconeInsta} alt="" />
                            </td>
                            <td className={styles.contato__rowTexto} >youtube</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className={styles.navFooter}>
                <h2>Links</h2>
                <div>
                    <Link
                        className={styles.linkFooter}
                        to="sobreNos"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Sobre Nós
                    </Link>
                    <LinkDefault texto="Serviços" to="/?" />
                    <LinkDefault texto="Experimente" to="/exercicios" />
                    <LinkDefault texto="Trabalhe conosco" to="/?" />
                    <LinkDefault texto="Política de Privacidade" to="/politicaDePrivacidade" />
                </div>
            </section>

            <hr className={styles.linha} />

            <section className={styles.direitos}>
                <p>Todos os direitos reservados GYM IA TRAINER &reg; - 2023</p>
            </section>
        </footer>
    )
}
