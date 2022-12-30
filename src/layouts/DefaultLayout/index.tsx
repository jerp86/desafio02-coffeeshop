import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export const DefaultLayout = () => (
  <LayoutContainer>
    <h2>Header</h2>
    <Outlet />
  </LayoutContainer>
)
