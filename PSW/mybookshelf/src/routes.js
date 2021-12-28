import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AluguelLivros from './pages/AluguelLivros';
import CadastroUsuario from './pages/CadastroUsuario';
import DevoluçãoLivro from './pages/DevoluçãoLivro';
import LivrosAlugados from './pages/LivrosAlugados';
import Chat from './pages/Chat';
import CadastroLivro from './pages/CadastroLivro';


export default function MainRoutes () {

    return (
        <Routes>
            <Route path="/" element={<AluguelLivros/>} />
            <Route path="/CadastroUsuario" element={<CadastroUsuario/>}/>
            <Route path="/DevolverLivro" element={<DevoluçãoLivro/>}/>
            <Route path="/Chat" element={<Chat/>}/>
            <Route path="/LivrosAlugados" element={<LivrosAlugados/>}/>
            <Route path="/AlugarLivro" element={<CadastroLivro/>}/>
        </Routes>
    );
};