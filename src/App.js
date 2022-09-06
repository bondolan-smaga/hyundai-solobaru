import "./App.scss";
import { Routes, Route} from "react-router-dom"

import { HomePage, CataloguePage } from "./pages"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
    </Routes>
  )
}

export default App
