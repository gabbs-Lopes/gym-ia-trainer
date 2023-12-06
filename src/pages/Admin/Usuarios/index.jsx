import React, { useEffect, useState } from 'react'
import styles from './Usuarios.module.scss'
import axios from 'axios'
import TrUsuario from 'componentes/TrUsuario'


export default function Usuarios({ alterarEstado }) {

    const [usuarios, setUsuarios] = useState('')
    const [updateTrigger, setUpdateTrigger] = useState(false);

    axios.defaults.withCredentials = true;

    useEffect(() => {
        fetchUsuarios();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateTrigger])

    const fetchUsuarios = () => {
        axios.get('http://localhost:3001/api/usuario')
            .then((response) => {
                const dados = {
                    objeto: response.data.result,
                }
                setUsuarios(dados);
            }).catch((err) => {
                console.log(err.response);
            });
    };

    function excluirUsuario(id) {
        console.log("excluir id:", id)

        deleteUser(id)
    }

    const deleteUser = (id) => {
        axios.defaults.withCredentials = true;
        axios.delete('http://localhost:3001/api/usuario_unit/' + id)
          .then(res => {
            console.log(res);
            setUpdateTrigger(prevTrigger => !prevTrigger);
            fetchUsuarios(); // Chama a função para buscar os usuários novamente após a exclusão
          })
          .catch(err => {
            console.error('Erro ao excluir usuário:', err);
            // Lidar com erros, se necessário
          });
      };

    return (
        <div className={styles.container}>
            <h2>Geral | Usuários</h2>
            <div className={styles.container__pesquisar}>
                <label htmlFor="search">Pesquise:</label>
                <input id='search' type="search" />
            </div>
            <table className={styles.container__table}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                        <th>Telefone</th>
                        <th>Função</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Gabriel Lopes</td>
                        <td>gabriel@gmail.com</td>
                        <td>12345678</td>
                        <td>11998077190</td>
                        <td>Excluir</td>
                    </tr>

                    {/* {usuarios.map((user) => {
                        <div className={styles.container__table_TrUsuario}>
                            <TrUsuario />
                        </div>
                        return console.log(user)
                    })} */}

                    {usuarios.objeto?.map((dado) => (
                        <tr key={dado.id} className={styles.container__table_TrUsuario}>
                            <TrUsuario
                                id={dado.id}
                                nome={dado.nome}
                                email={dado.email}
                                senha={dado.senha}
                                telefone={dado.telefone}
                                excluir={excluirUsuario}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
