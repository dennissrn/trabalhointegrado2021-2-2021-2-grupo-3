import CadastroLivroForm from "./CadastroLivroForm";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom'

// mocked useSelector and useDispatch.
jest.mock('react-redux', () => { return { ...jest.requireActual('react-redux'), useSelector: jest.fn(), useDispatch: jest.fn()}})

// mocked useNavigate.
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), useNavigate: jest.fn()
 }));

describe('Componente CadastroLivroForm', () => {
    test('Sucesso quando todas os inputs estão no form.', () => {
        render(<CadastroLivroForm/>);
        
        expect(screen.getByText("Nome do Livro")).toBeInTheDocument();
        expect(screen.getByText("Descrição")).toBeInTheDocument();
        expect(screen.getByText("Editora")).toBeInTheDocument();
        expect(screen.getByText("Data de publicação")).toBeInTheDocument();
        expect(screen.getByText("Escritor(a)")).toBeInTheDocument();
    })
})