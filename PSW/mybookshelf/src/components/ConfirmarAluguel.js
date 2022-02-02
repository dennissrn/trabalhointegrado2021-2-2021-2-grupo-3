import React from "react";
import { Link } from "react-router-dom";
import { livroAlugar } from "../store/slices/livrosAlugarSlice"; 
import { removerLivro } from "../store/slices/cadastroLivroSlice";
import { useDispatch } from 'react-redux';

export default ({livro}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <p class="confirmarAluguel">Confirmar Aluguel</p>
          <div class="card-img">
              <img src={livro.img} class="book-img"/>
          </div>
          <div class="card-body">
            <h3 class="card-title">{livro.title}</h3>
            <div class="card-description">
              <h5>Descrição:</h5>
              <p>
                {livro.descricao}
              </p>
            </div>
                  
            <div class="rent-information">
              <p><strong>Editora:</strong> {livro.editora}</p>
              <p><strong>Autor(a):</strong> {livro.escritor}</p>
              <p><strong>Edição:</strong> {livro.edicao}</p>
              <p><strong>Valor do Aluguel:</strong> R$ {livro.valorAluguel}</p>
            </div>
            <table>
                <tr>
                    <Link to="/LivrosAlugados" className= "btn btn-primary btnConfirmarAluguel" 
                    onClick={()=> {
                      dispatch(livroAlugar(livro))
                      dispatch(removerLivro(livro))
                    }}>Confirmar Aluguel</Link>
                </tr>
            </table> 
          </div>
        </div> 
    );
}