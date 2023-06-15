import * as S from "./styles";

const Main = ({
  title = "Next - Boilerplate",
  description = "TypeScript, ReactJS, NextJS, Styled Components, Jest e Storybook",
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default Main;
