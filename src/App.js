import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from '~/routes/routes';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Layout;
          Layout = route.layout || Fragment;
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
