//PascalCase
//App
//HeaderHeading
//ExemploDeComponente
//toda primeira letra de palavra no nome de functions maiuscula
import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';


export function App(){
    return (
    // sempre tem que ter uma <div> por fora de todo o código
    // ou usar <> (React fragmant)
    <>
        <Heading attr = {123} attr2='String'>Olá Mundo 1</Heading>
        <Heading>Olá Mundo 2</Heading>
        <Heading>Olá Mundo 3</Heading>
        <p>Teste diferente ok</p>
        <p>Testando a porta agora git</p>
    </>
    );

}
