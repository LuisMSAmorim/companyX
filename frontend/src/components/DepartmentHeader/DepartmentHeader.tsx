import { ListDepartmentsHeader } from './styles'

interface ListDepartmentsHeaderProps {
  action: () => void
  title: string
  message: string
}

export function DepartmentsHeader({
  action,
  message,
  title,
}: ListDepartmentsHeaderProps) {
  return (
    <ListDepartmentsHeader>
      <h1>{title}</h1>
      <a onClick={action}>{message}</a>
    </ListDepartmentsHeader>
  )
}
