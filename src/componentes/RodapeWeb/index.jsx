import Logo from 'componentes/Logo'
import React from 'react'
import styles from './RodapeWeb.module.scss'

import iconeInsta from '../../assets/icones/instaBranco.png'
import iconeFace from '../../assets/icones/faceBranco.png'
import iconeYT from '../../assets/icones/youtubeBranco.png'
import iconeTikTok from '../../assets/icones/tiktokBranco.png'
import iconeSpotify from '../../assets/icones/spotifyBranco.png'
import iconeTT from '../../assets/icones/ttBranco.png'

export default function RodapeWeb() {
  return (
    <footer className={styles.rodapeWeb}>
        <div className={styles.rodapeWeb__logo}>
            <Logo brancoCiano/>
        </div>
        <div className={styles.linhaHorizontal}></div>
        <div className={styles.rodapeWeb__redesSociais}>
            <h3>Nos siga nas redes sociais:</h3>
            <div className={styles.rodapeWeb__redesSociais_icones}>
                <img src={iconeInsta} alt="icone Instagram" />
                <img src={iconeFace} alt="icone Facebook" />
                <img src={iconeYT} alt="icone Youtube" />
                <img src={iconeTikTok} alt="icone Tiktok" />
                <img src={iconeSpotify} alt="icone Spotify" />
                <img src={iconeTT} alt="icone Twitter" />
            </div>
        </div>

        <div className={styles.linhaHorizontal}></div>

        <div className={styles.rodapeWeb__info}>
            <div className={styles.rodapeWeb__info_links}>
                <h2>Links</h2>
                <h4>Sobre Nós</h4>
                <h4>Serviços</h4>
                <h4>Experimente</h4>
                <h4>Apoie o projeto</h4>
                <h4>Trabalhe conosco</h4>
            </div>

            <div className={styles.rodapeWeb__info_links}>
                <h2>Equipe</h2>
                <h4>Fidel Castro Mendes</h4>
                <h4>Gabriel Lopes Pereira</h4>
                <h4>Wellington Ferreira dos Santos</h4>
            </div>

            <div className={styles.rodapeWeb__info_links}>
                <h2>Contate-nos</h2>
                <h4><u>gymiatrainer@gmail.com</u></h4>
                <h4><u>(11) 4156-1435</u></h4>
            </div>
        </div>

        <div className={styles.linhaHorizontal}></div>

        <div className={styles.rodapeWeb__bottom}>
            <p>Av. Ten. Marques, s/n - Fazendinha, Santana de Parnaíba - SP, 
                06529-001</p>
            <h4>GymIATrainer@gmail.com</h4>
            <p>Copyright © 2023 GYMIA Trainer - Todos os direitos reservados</p>
        </div>
    </footer>
  )
}
