import { Outlet } from 'react-router-dom'
import { DepartmentsContainer } from './Styles'

export function DepartmentsLayout() {
  return (
    <DepartmentsContainer>
      <header>
        <h1>Departamentos</h1>
      </header>
      <Outlet />
    </DepartmentsContainer>
  )
}
