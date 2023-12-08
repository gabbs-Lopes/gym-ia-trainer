import React, { useRef, useState } from 'react';
import styles from './PopUpPerfil.module.scss';
import axios from 'axios';

import fechar from '../../assets/icones/fecharPopUp.png'

const PopUpPerfil = ({ alterarEstado }) => {
    const inputRef = useRef(null);

    const [img, setImg] = useState('')

    const handleImageUpload = () => {
        const selectedImage = inputRef.current.files[0];
        console.log('Imagem selecionada:', selectedImage);

        setImg(selectedImage)

        //aqui
        axios.post('http://localhost:3001/api/upload-img')
        .then(res=>{
            console.log(res);
        })
        
    };

    const handleSubmit = () => {
        handleImageUpload(); // Chama a função para lidar com o upload da imagem
        console.log('Formulário enviado!');
    };

    return (
        <div className={styles.container}>
            <div className={styles.background} onClick={alterarEstado}></div>

            <div className={styles.popUp}>
                <div className={styles.div}
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: '1px solid #ccc',
                        padding: '20px',
                        backgroundColor: '#fff',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <button
                        className={styles.botaoFechar}
                        onClick={alterarEstado}>
                        <img src={fechar} alt="botao fechar" />
                    </button>
                    {/* <h2>Carregar Imagem de Perfil</h2> */}

                    {/* Referência ao input de arquivo */}
                    <input name='imagem' type="file" ref={inputRef} style={{ display: 'none' }} />

                    {/* Botão para disparar a seleção de arquivo */}    
                    <div className={styles.div2}>
                        <button
                            className={styles.selectImagem}
                            onClick={() => inputRef.current.click()}
                        >
                            Selecionar Imagem
                        </button>
                        <p>caminho</p>
                    </div>              

                    {/* Botão "Enviar" com funcionalidade */}
                    <button className={styles.enviarButton} onClick={handleSubmit}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopUpPerfil;