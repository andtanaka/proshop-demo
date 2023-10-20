import { useRouteError } from 'react-router-dom';
import Footer from '../components/Footer';
import PageContent from '../components/PageContent';
import Header from '../components/Header';

function ErrorPage() {
  const error = useRouteError();

  let title = 'Ocorreu um erro';
  let message = 'Alguma coisa deu errado.';

  //handlers error status

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Não encontrado!';
    message = 'Fonte ou página não encontrada.';
  }

  return (
    <>
      <Header />
      <main>
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
