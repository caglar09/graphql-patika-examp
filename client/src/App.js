import React, { Suspense, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";

import { HeaderMenu, Spinner } from "components";

const HomePage = React.lazy(() => import("./pages/home"));
const NewPostPage = React.lazy(() => import("./pages/newpost"));
const PostDetailPage = React.lazy(() => import("./pages/post-detail"));

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
                  <HomePage />
                </Suspense>
              }
            />
            <Route
              path="/new"
              element={
                <Suspense fallback={<Spinner />}>
                  <NewPostPage />
                </Suspense>
              }
            />
            <Route
              path="/post/:id"
              element={
                <Suspense fallback={<Spinner />}>
                  <PostDetailPage />
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
