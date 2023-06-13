import  {
  DocumentContext
} from 'next/document';
import ProductPage from 'components/ProductPage';

interface IDynamicPage {
  title: string;
  description: string;
  query: {
    hash: string[]
  }
}

const DynamicPage = ({ query, title}: IDynamicPage) => {
  return <ProductPage title={title} query={query?.hash[0] || 'Produto não encontrado'}  />
};

// export async function getServerSideProps(ctx: DocumentContext) {
//   const {query } = ctx;

//   return {
//     props: {
//       query,
//       title: 'Página de produto',
//     }
//   }
// }

export default DynamicPage