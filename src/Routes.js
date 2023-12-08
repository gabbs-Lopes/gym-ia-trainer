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
import TensorFlowPage from 'pages/TensorFlowPage';
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

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;