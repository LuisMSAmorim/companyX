import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'

import { BodyContainer, LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <BodyContainer>
        <Sidebar />
        <Outlet />
      </BodyContainer>
    </LayoutContainer>
  )
}
