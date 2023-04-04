import React from "react";
import * as ReactDOM from "react-dom/client";
import "./config";
import { App } from "./App";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: window.SERVER_URL + "/graphql",
  cache: new InMemoryCache(),
});
const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
