import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, WatchPage } from "src/pages";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${import.meta.env.BASE_URL}/`} element={<HomePage />} />
        <Route path={`${import.meta.env.BASE_URL}/watch/:movieId`} element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}
