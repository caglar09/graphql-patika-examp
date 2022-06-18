import React, { Suspense, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";

import { HeaderMenu, Spinner } from "components";

const HomeComponent = React.lazy(() => import("./pages/home"));
const NewPostComponent = React.lazy(() => import("./pages/newpost"));

function App() {
  return (
    <Fragment>
      <HeaderMenu />
      <section>
        <Container>
          <Routes>
            <Route
              index
              path="/"
              element={
                <Suspense fallback={<Spinner />}>
                  <HomeComponent />
                </Suspense>
              }
            />
            <Route
              path="/new"
              element={
                <Suspense fallback={<Spinner />}>
                  <NewPostComponent />
                </Suspense>
              }
            />
          </Routes>
        </Container>
      </section>
    </Fragment>
  );
}

export default App;
