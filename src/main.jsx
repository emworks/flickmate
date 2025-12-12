import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "src/styles/common.css"
import "src/styles/utils.css"
import "src/styles/form.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
