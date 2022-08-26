import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { CreateDepartment } from './pages/Departments/Create/Create'
import { ListDepartments } from './pages/Departments/List/List'
import { ListDepartmentEmployees } from './pages/Departments/ListEmployees/ListEmployees'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/departments" element={<ListDepartments />} />
        <Route path="/departments/new" element={<CreateDepartment />} />
        <Route
          path="/departments/:id/employees"
          element={<ListDepartmentEmployees />}
        />
      </Route>
    </Routes>
  )
}
