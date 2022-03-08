import BotaoLogout from "./BotaoLogout";
import {render,screen} from "@testing-library/react";

// Mock
jest.mock('react-redux', () => { return { ...jest.requireActual('react-redux'), useSelector: jest.fn(), useDispatch: jest.fn()}})
jest.mock("react-router-dom")

describe('Componente BotaoLogout', () => {
    test('Qualquer título', () => {
        render(< BotaoLogout
        className="botaoLogout" 
        />);
        
        expect(screen.getByText("Logout"))
    })
})