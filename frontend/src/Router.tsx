import { Routes, Route, useNavigate } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { DepartmentsLayout } from './layouts/DepartmentsLayout/DepartmentsLayout'
import { CreateDepartments } from './pages/CreateDepartments/CreateDepartments'
import { ListDepartmentEmployees } from './pages/ListDepartmentEmployees/ListDepartmentEmployees'
import { ListDepartments } from './pages/ListDepartments/ListDepartments'
import { Login } from './pages/Login/Login'

function isAuthenticated() {
  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  if (token) {
    return true
  }
  return navigate('/login')
}

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/login" element={<Login />} />

        <Route element={<DepartmentsLayout />}>
          <Route path="/departments" element={<ListDepartments />} />
          <Route path="/departments/new" element={<CreateDepartments />} />
          <Route
            path="departments/:id/employees"
            element={<ListDepartmentEmployees />}
          />
        </Route>
      </Route>
    </Routes>
  )
}
