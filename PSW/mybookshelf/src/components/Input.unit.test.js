import Input from "./Input";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Componente Input', () => {
    test('Input contendo um valor válido.', () => {
        render(<Input 
            className="full-box"
            label="Nome do Livro"
            placeholder="Digite o nome do livro"
            id="titulo"
            value={"fakeValue"}
            />);
        
        expect(screen.getByText("Nome do Livro")).toBeInTheDocument();
    })
})