import React, { Fragment, useEffect } from "react";
import queryString from 'query-string';
import { useAuth0 } from "@auth0/auth0-react";

import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = ({ location }) => {
  const query = queryString.parse(location.search);
  const { invitation, organization } = query;
  
  console.log(query);
  const { loginWithRedirect } = useAuth0();
  
  useEffect(() => {
    if (!!invitation && !!organization) {
      loginWithRedirect({
        organization,
        invitation,
        appState: {
          returnTo: '/external-redirect'
        }
      });
    }
  });

  return (
    <Fragment>
      <Hero />
      <hr />
      <Content />
    </Fragment>
  );
}

export default Home;
