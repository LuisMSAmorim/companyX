import axios from 'axios'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Department } from '../../../@types/department'

import {
  DepartmentCard,
  DepartmentHeader,
  DepartmentList,
  DepartmentListBody,
} from './styles'

const apiUrl = 'http://localhost:5000'

export function ListDepartments() {
  const [departments, setDepartments] = useState<Department[]>([])

  useEffect(() => {
    axios.get(`${apiUrl}/departments`).then(({ data }) => setDepartments(data))
  }, [])

  return (
    <DepartmentList>
      <DepartmentHeader>
        <h1>Departamentos</h1>
        <NavLink to="/departments/new">Novo Departamento</NavLink>
      </DepartmentHeader>
      <DepartmentListBody>
        {departments.map((department: Department) => {
          return (
            <DepartmentCard key={department.id}>
              <h2>{department.name}</h2>
              <div>
                <NavLink
                  state={{ departmentName: department.name }}
                  to={`${department.id}/employees`}
                >
                  Colaboradores
                </NavLink>
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
