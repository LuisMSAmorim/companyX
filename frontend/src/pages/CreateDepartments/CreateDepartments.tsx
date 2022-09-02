import axios from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { DepartmentsHeader } from '../../components/DepartmentHeader/DepartmentHeader'
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage'
import {
  CreateDepartmentsBody,
  CreateDepartmentsContainer,
  CreateDepartmentsForm,
} from './styles'

type Inputs = {
  name: string
}

const apiUrl = 'http://localhost:5000'

export function CreateDepartments() {
  const [error, setError] = useState('')
  const { register, handleSubmit } = useForm<Inputs>()
  const navigate = useNavigate()

  function handleBackToList() {
    navigate('/departments/')
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios
      .post(`${apiUrl}/departments`, data)
      .then((res) => {
        navigate('/departments')
      })
      .catch((err) => {
        if (err.response.status === 422) {
          setError('Este nome já está em uso...')
        } else {
          setError('Erro interno do servidor...')
        }
      })
  }

  return (
    <CreateDepartmentsContainer>
      <DepartmentsHeader
        title="Novo Departamento"
        action={handleBackToList}
        message="Voltar"
      />
      <CreateDepartmentsBody>
        {error != '' ? <ErrorMessage message={error} /> : null}
        <CreateDepartmentsForm onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name')}
            type="text"
            required
            placeholder="Nome"
          />

          <button type="submit">Enviar</button>
        </CreateDepartmentsForm>
      </CreateDepartmentsBody>
    </CreateDepartmentsContainer>
  )
}
