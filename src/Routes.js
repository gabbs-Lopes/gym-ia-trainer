import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Cadastro from 'pages/Cadastro';
import NotFound from 'pages/NotFound';
import ExerciciosPage from 'pages/ExerciciosPage';

function AppRoutes() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/cadastro" element={ <Cadastro /> }/>
        <Route path="/exercicios" element={ <ExerciciosPage /> }/>

        <Route path='*' element={ <NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;