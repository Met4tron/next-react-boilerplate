import * as C from './styles';
const Main = ({
  title = 'React Boilerplate',
  description = 'Typescript, ReactJS, NextJS e Styled Components'
}) => (
  <C.Wrapper>
    <C.Logo
      src="/img/logo.png"
      alt="Imagem contendo a palavra Boilerplate"
    ></C.Logo>
    <C.Title>{title}</C.Title>
    <C.Description>{description}</C.Description>
  </C.Wrapper>
);

export default Main;
