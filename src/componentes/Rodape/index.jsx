import React from 'react'
import styles from './Rodape.module.scss'

import iconeInsta from 'assets/icones/instagram.png'

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
                    <h3>Sobre Nós</h3>
                    <h3>Serviços</h3>
                    <h3>Experimente</h3>
                    <h3>Apoie o projeto</h3>
                    <h3>Trabalhe conosco</h3>
                </div>
            </section>

            <hr className={styles.linha}/>

            <section className={styles.direitos}>
                <p>Todos os direitos reservados GYM IA TRAINER &reg; - 2023</p>
            </section>
        </footer>
    )
}
