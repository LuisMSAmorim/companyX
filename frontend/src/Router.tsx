import { Routes, Route, useNavigate } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { DepartmentsLayout } from './layouts/Departments/DepartmentsLayout'
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

        <Route path="/departments" element={<DepartmentsLayout />}>
          <Route path="/departments/list" element={<ListDepartments />} />
        </Route>
      </Route>
    </Routes>
  )
}
