import { Route, Routes } from "react-router-dom";
import { PRIVATE_ROUTES, PUBLIC_PATH } from "./routers";
import PrivateRoutesGuard from "./routers/PrivateRoutesGuard";

function App() {
  return (
    <Routes>
      {PUBLIC_PATH.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}

      <Route element={<PrivateRoutesGuard />}>
        {PRIVATE_ROUTES.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  );
}

export default App;
