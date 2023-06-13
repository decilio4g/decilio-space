import * as S from "./styles";

const ProductPage = ({
  title = "Página de Ajuda",
  description = "Pagina de ajuda ao usuário",
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};

export default ProductPage;
