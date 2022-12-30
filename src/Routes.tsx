import { Route, Routes } from "react-router-dom";
import { CompleteOrder, Home } from "./pages";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/completeOrder" element={<CompleteOrder />} />
  </Routes>
);