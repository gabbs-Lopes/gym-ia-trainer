import React, { useRef, useState } from 'react';
import styles from './PopUpPerfil.module.scss';
import axios from 'axios';

import fechar from '../../assets/icones/fecharPopUp.png'
const PopUpPerfil = ({ alterarEstado, id }) => {
    const inputRef = useRef(null);
    const [img, setImg] = useState({
        imagem: ''
    })

    const handleImageUpload = (event) => {
        event.preventDefault()
        /* const selectedImage = inputRef.current.files[0]; */
        console.log('Imagem selecionada:', img.imagem);

       /*  setImg(selectedImage) */

        //aqui
        const formdata = new FormData();
        formdata.append("imagem", img.imagem); 
        axios.post('http://localhost:3001/api/upload/'+ id ,formdata)
        .then(res=>{
            console.log(res);
            console.log('Formulário enviado!');
        })
        
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
                 {/*    <form action="" onSubmit={handleImageUpload}> */}
                    <input type="file" ref={inputRef} id='imagem' style={{ display: 'none' }} onChange={e => setImg({ ...img, imagem: e.target.files[0]})} />

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
                    <button className={styles.enviarButton} onClick={handleImageUpload}>
                        Enviar
                    </button>
                  {/*   </form> */}
                </div>
            </div>
        </div>
    );
};

export default PopUpPerfil;