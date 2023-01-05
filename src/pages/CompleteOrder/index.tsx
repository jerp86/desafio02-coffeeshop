import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './style'

export const CompleteOrder = () => (
  <CompleteOrderContainer className="container">
    <CompleteOrderForm />

    <SelectedCoffees />
  </CompleteOrderContainer>
)
