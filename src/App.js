import { Routes, Route} from "react-router-dom"
import { HomePage, PriceListPage } from "./pages"


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricelist" element={<PriceListPage />} />
    </Routes>
  )
}

export default App
