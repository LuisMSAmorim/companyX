import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout/DefaultLayout'
import { Create } from './pages/Departments/Create/Create'
import { List } from './pages/Departments/List/List'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/departments" element={<List />} />
        <Route path="/departments/new" element={<Create />} />
      </Route>
    </Routes>
  )
}
