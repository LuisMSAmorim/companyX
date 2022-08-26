import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'

import {
  CreateDepartmentContainer,
  CreateDepartmentHeader,
  CreateDepartmentListBody,
} from './styles'

const apiUrl = 'http://localhost:5000/'

export function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  function onSubmit(data: any) {
    axios.post(`${apiUrl}/departments`, data).then(() => {
      navigate('/departments')
    })
  }

  return (
    <CreateDepartmentContainer>
      <CreateDepartmentHeader>
        <h1>Criar Departamento</h1>
        <NavLink to="/departments/">Voltar</NavLink>
      </CreateDepartmentHeader>
      <CreateDepartmentListBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <span>Digite o nome do departamento</span>}
          <input
            type="text"
            placeholder="Digite o nome do departamento"
            {...register('name', { required: true, min: 2 })}
          />
          <input type="submit" />
        </form>
      </CreateDepartmentListBody>
    </CreateDepartmentContainer>
  )
}
