import axios from 'axios'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { CreateDepartmentContainer, CreateDepartmentHeader, CreateDepartmentListBody } from './styles'

const apiUrl = 'http://localhost:5000/'

export function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function onSubmit(data: any) {
    axios.post(`${apiUrl}/departments`, data)
    console.log(errors)
    console.log(data)
  }

  return (
    <CreateDepartmentContainer>
      <CreateDepartmentHeader>
        <h1>Criar Departamento</h1>
        <NavLink to="/departments/">Voltar</NavLink>
      </CreateDepartmentHeader>
      <CreateDepartmentListBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Digite o nome do departamento"
            required
            {...register('name', { required: true, min: 2 })}
          />

          <input type="submit" />
        </form>
      </CreateDepartmentListBody>
    </CreateDepartmentContainer>
  )
}
