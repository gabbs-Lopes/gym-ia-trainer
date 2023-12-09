import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import NotFound from 'pages/NotFound';
import ExerciciosPage from 'pages/Exercicios';
import Perfil from 'pages/Perfil';
import ExercicioPage from 'pages/ExercicioPage';
import PoliticaDePrivacidade from 'pages/PoliticaDePrivacidade';
import Admin from 'pages/Admin';
import Supino from 'pages/Exercicios/Supino';
import SupinoInclinado from 'pages/Exercicios/SupinoInclinado';
import Stiff from 'pages/Exercicios/Stiff';
import RoscaComHalter from 'pages/Exercicios/RoscaComHalter';
import RoscaComBarra from 'pages/Exercicios/RoscaComBarra';
import RoscaAlternada from 'pages/Exercicios/RoscaAlternada';
import RemadaMaquina from 'pages/Exercicios/RemadaMaquina';
import RemadaAlta from 'pages/Exercicios/RemadaAlta';
import Prancha from 'pages/Exercicios/Prancha';
import Passada from 'pages/Exercicios/Passada';
import LevantamentoTerra from 'pages/Exercicios/LevantamentoTerra';
import LegPress from 'pages/Exercicios/LegPress';
import Flexao from 'pages/Exercicios/Flexao';
import ElevacaoPelvica from 'pages/Exercicios/ElevacaoPelvica';
import ElevacaoLateral from 'pages/Exercicios/ElevacaoLateral';
import Desenvolvimento from 'pages/Exercicios/Desenvolvimento';
import Crunch from 'pages/Exercicios/Crunch';
import BarraFixa from 'pages/Exercicios/BarraFixa';
import AgachamentoLivre from 'pages/Exercicios/AgachamentoLivre';
import TensorFlowPage from 'pages/TensorFlowPage';
import TFRosca from 'pages/Exercicios/RoscaAlternada/TFRosca';
import TFAgachamento from 'pages/Exercicios/AgachamentoLivre/TFAgachamento';
import TFElevacaoLateral from 'pages/Exercicios/ElevacaoLateral/TFElevacaoLateral';
/* import TensorFlow from 'pages/TensorFLowPage'; */

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/cadastro" element={ <Cadastro /> }/>
        <Route path="/exercicios" element={ <ExerciciosPage /> }/>
        <Route path="/perfil" element={ <Perfil /> }/>
        <Route path='/exercicio' element={<ExercicioPage />}/>
        <Route path='/politicaDePrivacidade' element={<PoliticaDePrivacidade />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/tensorflow' element={<TensorFlowPage />}/>

        {/* Exercicios */}
        <Route path='/exercicios/Supino' element={<Supino />}/>
        <Route path='/exercicios/SupinoInclinado' element={<SupinoInclinado />}/>
        <Route path='/exercicios/Stiff' element={<Stiff />}/>
        <Route path='/exercicios/RoscaComHalter' element={<RoscaComHalter />}/>
        <Route path='/exercicios/RoscaComBarra' element={<RoscaComBarra />}/>
        <Route path='/exercicios/RoscaAlternada' element={<RoscaAlternada />}/>
        <Route path='/exercicios/RemadaMaquina' element={<RemadaMaquina />}/>
        <Route path='/exercicios/RemadaAlta' element={<RemadaAlta />}/>
        <Route path='/exercicios/Prancha' element={<Prancha />}/>
        <Route path='/exercicios/passada' element={<Passada />}/>
        <Route path='/exercicios/LevantamentoTerra' element={<LevantamentoTerra />}/>
        <Route path='/exercicios/LegPress' element={<LegPress />}/>
        <Route path='/exercicios/Flexao' element={<Flexao />}/>
        <Route path='/exercicios/ElevacaoPelvica' element={<ElevacaoPelvica />}/>
        <Route path='/exercicios/ElevacaoLateral' element={<ElevacaoLateral />}/>
        <Route path='/exercicios/Desenvolvimento' element={<Desenvolvimento />}/>
        <Route path='/exercicios/Crunch' element={<Crunch />}/>
        <Route path='/exercicios/BarraFixa' element={<BarraFixa />}/>
        <Route path='/exercicios/AgachamentoLivre' element={<AgachamentoLivre />}/>

        {/* Tensor Flow */}

        <Route path='/tfRosca' element={<TFRosca />}/>
        <Route path='/tfAgachamento' element={<TFAgachamento />}/>
        <Route path='/tfElevacaoLateral' element={<TFElevacaoLateral />}/>

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;