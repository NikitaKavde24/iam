import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { PrivateRoute } from "./Components/Atoms";
import { Base } from "./Components/Templates/";
import { Dashboard } from "./Pages";

const RouterConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route element={<Base />}>
        <Route path="/" element={<Dashboard />}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

function App() {
  return <RouterConfig />;
}

export default App;
