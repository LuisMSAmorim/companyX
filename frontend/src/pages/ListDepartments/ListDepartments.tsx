import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, NavLink, Route, useNavigate } from 'react-router-dom'

import { Department } from '../../@types/department'
import { DepartmentsHeader } from '../../components/DepartmentHeader/DepartmentHeader'
import { ListDepartmentEmployees } from '../ListDepartmentEmployees/ListDepartmentEmployees'
import {
  DepartmentCard,
  ListDepartmentsBody,
  ListDepartmentsContainer,
} from './styles'

const apiUrl = 'http://localhost:5000'

export function ListDepartments() {
  const [departments, setDepartments] = useState<Department[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${apiUrl}/departments`).then((response) => {
      setDepartments(response.data)
    })
  }, [])

  function handleAddDepartment() {
    navigate('/departments/new')
  }

  function handleSeeDepartmentEmployees(department: Department) {
    navigate(`/departments/${department.id}/employees`, { state: { departmentName: department.name } })
  }

  return (
    <ListDepartmentsContainer>
      <DepartmentsHeader
        title='Departamentos'
        action={handleAddDepartment}
        message="Novo Departamento"
      />
      <ListDepartmentsBody>
        {departments.map((department) => {
          return (
            <DepartmentCard onClick={() => handleSeeDepartmentEmployees(department)} key={department.id}>
              <h1>{department.name}</h1>
            </DepartmentCard>
          )
        })}
      </ListDepartmentsBody>
    </ListDepartmentsContainer>
  )
}
