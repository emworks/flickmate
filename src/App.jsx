import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, WatchPage } from "src/pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watch/:movieId" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
