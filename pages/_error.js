import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error">
    {statusCode 
      ? `Could not load your user data: Status Code ${statusCode}.`
      : `Cound not get that page.`}

  </Layout>
)