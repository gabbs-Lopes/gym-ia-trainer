import NavBar from 'componentes/NavBar'
import React from 'react'
import styles from './PoliticaDePrivacidade.module.scss'
import RodapeWeb from 'componentes/RodapeWeb'

export default function PoliticaDePrivacidade() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.main__titulo}>Política de Privacidade</h1>

        <section className={styles.politica}>
          <div className={styles.politica__texto}>
            <p>Data de Entrada em Vigor: 07/12/2023</p>

            <p>O GymIA Trainer valoriza a privacidade de seus usuários e se 
              compromete a proteger as informações pessoais coletadas durante 
              o uso de nosso site. Esta Política de Privacidade destina-se a 
              informar nossos usuários sobre como coletamos, usamos, 
              compartilhamos e protegemos suas informações.</p>

            <p>1. Informações Coletadas</p>
            <p>Ao utilizar o GymIA Trainer, podemos coletar as seguintes 
              categorias de informações:</p>

            <p>1.1 Informações Pessoais: Podemos solicitar e coletar 
              informações pessoais, como nome, endereço de e-mail, idade, 
              sexo, e outras informações relevantes para fornecer serviços 
              personalizados.</p>

            <p>1.2 Informações de Conta: Coletamos informações relacionadas 
              à sua conta, incluindo nome de usuário, senha e preferências 
              de conta.</p>

            <p>1.3 Informações de Pagamento: Ao realizar transações no site, 
              podemos coletar informações financeiras, como detalhes de 
              cartão de crédito, para processar pagamentos.</p>

            <p>1.4 Informações de Uso: Registramos informações sobre como 
              você utiliza o GymIA Trainer, incluindo páginas visitadas, 
              tempo de permanência no site, interações com conteúdo e outros 
              dados de uso.</p>

            <p>2. Uso de Informações</p>
            <p>2.1 Fornecimento de Serviços: Utilizamos as informações 
              coletadas para fornecer e personalizar os serviços do GymIA 
              Trainer, incluindo o acompanhamento do progresso do usuário, 
              sugestões de treinos e outras funcionalidades relacionadas à 
              saúde e fitness.</p>

            <p>2.2 Comunicação: Podemos utilizar suas informações para 
              enviar comunicações, como atualizações do site, notificações 
              sobre sua conta e informações relacionadas aos serviços 
              oferecidos.</p>

            <p>2.3 Análises e Melhorias: Analisamos dados de uso para 
              melhorar a qualidade de nossos serviços, identificar 
              tendências de uso e otimizar a experiência do usuário.</p>

            <p>3. Compartilhamento de Informações</p>
            <p>Não compartilhamos suas informações pessoais com terceiros 
              sem o seu consentimento, exceto nas seguintes circunstâncias:</p>

            <p>3.1 Parceiros de Serviços: Podemos compartilhar informações 
              com prestadores de serviços terceirizados que nos auxiliam 
              na prestação de serviços, como processamento de pagamentos 
              e análise de dados.</p>

            <p>3.2 Requisitos Legais: Podemos divulgar informações
               pessoais em resposta a processos legais, por exemplo, em 
               cumprimento de mandados judiciais.</p>

            <p>4. Segurança das Informações</p>
            <p>Implementamos medidas de segurança para proteger suas 
              informações contra acesso não autorizado, uso indevido ou 
              divulgação. No entanto, nenhum sistema é totalmente seguro, 
              e não podemos garantir a segurança absoluta das informações.</p>

            <p>5. Seus Direitos</p>
            <p>Você tem o direito de acessar, corrigir ou excluir suas 
              informações pessoais a qualquer momento. Entre em contato 
              conosco para exercer esses direitos.</p>

            <p>6. Alterações na Política de Privacidade</p>
            <p>Reservamo-nos o direito de modificar esta Política de 
              Privacidade a qualquer momento. Notificaremos os usuários 
              sobre alterações significativas.</p>

            <p>Ao utilizar o GymIA Trainer, você concorda com os termos 
              desta Política de Privacidade. Se não concordar com estes 
              termos, recomendamos que não utilize nossos serviços.</p>

            <p>Para quaisquer dúvidas ou preocupações relacionadas à política 
              de privacidade, entre em contato conosco através do email 
              GymIATrainer@gmail.com</p>

            <p>Obrigado por escolher o GymIA Trainer!</p>

          </div>
        </section>
      </main>

      <RodapeWeb />
    </>
  )
}
