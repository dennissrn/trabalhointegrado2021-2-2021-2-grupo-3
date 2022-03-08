import CardInfoAluguel from "./CardInfoAluguel";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom'

var mockedProp = {
    descricao : "descricao",
    title : "title",
    dataAluguel : "01/01/2000"
}

describe('Componente CardInfoAluguel', () => {
    test('Sucesso se todas as props são exibidas.', () => {
        render(<CardInfoAluguel 
            livro={mockedProp}
            />);
        
        expect(screen.getByText("descricao")).toBeInTheDocument();
        expect(screen.getByText("title")).toBeInTheDocument();
        expect(screen.getByText("01/01/2000")).toBeInTheDocument();
    })
})