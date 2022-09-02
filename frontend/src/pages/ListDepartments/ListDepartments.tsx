import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Department } from '../../@types/department'
import { DepartmentCard, ListDepartmentsBody, ListDepartmentsContainer, ListDepartmentsFooter } from './styles'

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

  return (
    <ListDepartmentsContainer>
      <ListDepartmentsFooter>
        <a onClick={handleAddDepartment}>Novo Departamento</a>
      </ListDepartmentsFooter>
      <ListDepartmentsBody>
      {departments.map((department) => {
        return (
          <DepartmentCard key={department.id}>
            <h1>{department.name}</h1>
          </DepartmentCard>
        )
      })}
      </ListDepartmentsBody>
    </ListDepartmentsContainer>
  )
}
