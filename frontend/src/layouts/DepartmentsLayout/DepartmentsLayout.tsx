import { Outlet } from 'react-router-dom'
import { DepartmentsContainer } from './Styles'

export function DepartmentsLayout() {
  return (
    <DepartmentsContainer>
      <Outlet />
    </DepartmentsContainer>
  )
}
