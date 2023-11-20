import { MainRoute } from "./main.routes";
import { BrowserRouter } from "react-router-dom";
export function Routes(){
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  )
}