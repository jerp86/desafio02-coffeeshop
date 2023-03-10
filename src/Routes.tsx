import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrder, Home, OrderConfirmed } from './pages'

export const Router = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/completeOrder" element={<CompleteOrder />} />
      <Route path="/orderConfirmed" element={<OrderConfirmed />} />
    </Route>
  </Routes>
)
