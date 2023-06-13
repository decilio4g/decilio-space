import * as S from "./styles";

const ProductPage = ({
  title = "Página de produto",
  query = 'Nenhum produto de varejo encontrado'
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>Você procurou por este produto: <strong>{query}</strong></S.Description>
    </S.Wrapper>
  );
};

export default ProductPage;
