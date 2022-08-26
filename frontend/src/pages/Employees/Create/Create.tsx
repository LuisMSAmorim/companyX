import axios from "axios"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"

import { CreateEmployeeBodyContainer, CreateEmployeeContainer, CreateEmployeeHeaderContainer } from "./styles"
import { Department } from '../../../@types/department'


const apiUrl = 'http://localhost:5000/'

export function CreateEmployee() {
  const [departments, setDepartments] = useState<Department[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${apiUrl}/departments`).then(({ data }) => {
      setDepartments(data)
    })
  }, [])

  function onSubmit(data: any) {
    axios.post(`${apiUrl}/employees`, data).then(() => {
      navigate('/departments')
    })
  }

  return (
    <CreateEmployeeContainer>
      <CreateEmployeeHeaderContainer>
        <h1>Novo Colaborador</h1>
        <NavLink to="/departments/">Voltar</NavLink>
      </CreateEmployeeHeaderContainer>

      <CreateEmployeeBodyContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <span>Digite o nome do colaborador</span>}
          <input
            type="text"
            placeholder="nome"
            {...register('first_name', { required: true })}
          />

          {errors.name && <span>Digite o sobrenomenome do colaborador</span>}
          <input
            type="text"
            placeholder="sobrenome"
            {...register('last_name', { required: true })}
          />

          {errors.name && <span>Digite o email do colaborador</span>}
          <input
            type="email"
            placeholder="email"
            {...register('email', { required: true })}
          />

          {errors.name && <span>Selecione o cargo do colaborador</span>}
          <input
            type="text"
            placeholder="cargo"
            {...register('role', { required: true })}
          />

          {errors.name && <span>Selecione a data de nascimento do colaborador</span>}
          <input
            type="date"
            {...register('birth_date', { required: true })}
          />

          {errors.name && <span>Selecione a data de contratação do colaborador</span>}
          <input
            type="date"
            {...register('start_date', { required: true })}
          />

          <select {...register('department_id', { required: true })}>
            {departments.map(department => {
              return (
                <option key={department.id} value={department.id}>{department.name}</option>
              )
            })}
          </select>

          <h3>Endereço</h3>

          {errors.name && <span>Digite a cidade de residência do colaborador</span>}
          <input
            type="text"
            placeholder="cidade"
            {...register('city', { required: true})}
          />

        {errors.name && <span>Digite o estado de residência do colaborador</span>}
          <input
            type="text"
            placeholder="estado"
            {...register('state', { required: true})}
          />

          {errors.name && <span>Digite o bairo de residência do colaborador</span>}
          <input
            type="text"
            placeholder="bairro"
            {...register('district', { required: true })}
          />

          {errors.name && <span>Digite o CEP de residência do colaborador</span>}
          <input
            type="text"
            placeholder="CEP"
            {...register('zipcode', { required: true })}
          />

          {errors.name && <span>Digite a rua de residência do colaborador</span>}
          <input
            type="text"
            placeholder="rua"
            {...register('street', { required: true })}
          />

          {errors.name && <span>Digite o número de residência do colaborador</span>}
          <input
            type="text"
            placeholder="número"
            {...register('number', { required: true })}
          />

          {errors.name && <span>Digite o país de residência do colaborador</span>}
          <input
            type="text"
            placeholder="país"
            {...register('country', { required: true })}
          />

          <input type="submit" />
        </form>
      </CreateEmployeeBodyContainer>
    </CreateEmployeeContainer>
  )
}
