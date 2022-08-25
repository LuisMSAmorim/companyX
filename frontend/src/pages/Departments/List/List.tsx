import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { DepartmentCard, DepartmentList, DepartmentListBody } from './styles'

interface Department {
  id: number
  name: string
}

const apiUrl = 'http://localhost:5000/'

export function List() {
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    axios.get(`${apiUrl}/departments`).then(({ data }) => setDepartments(data))
  })

  return (
    <DepartmentList>
      <h1>Departmentos</h1>
      <DepartmentListBody>
        {departments.map((department: Department) => {
          return (
            <DepartmentCard key={department.id}>
              <h2>{department.name}</h2>
              <div>
                <NavLink to="/">Funcionários</NavLink>
                <NavLink to="/">Deletar</NavLink>
                <NavLink to="/">Atualizar</NavLink>
              </div>
            </DepartmentCard>
          )
        })}
      </DepartmentListBody>
    </DepartmentList>
  )
}
