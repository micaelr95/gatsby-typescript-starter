import React from 'react';
import { PageProps, Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface DataProps {
  site: {
    buildTime: string;
  };
}

const SecondPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <p>
      You're currently on the page "{path}" which was built on{' '}
      {data.site.buildTime}.
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;

export default SecondPage;
