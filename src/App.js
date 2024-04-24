import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          if (route.isIndex) {
            return <Route key={index} index element={<route.component />} />;
          }
          if (route.childrenRoutes) {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.component />}
              >
                {route.childrenRoutes.map((childRoute, childIndex) => (
                  <Route
                    key={childIndex}
                    path={childRoute.path}
                    element={<childRoute.component />}
                  />
                ))}
              </Route>
            );
          }
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
