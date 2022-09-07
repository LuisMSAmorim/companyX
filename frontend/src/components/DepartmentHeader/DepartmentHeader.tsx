import { ListDepartmentsHeader } from './styles'

interface ListDepartmentsHeaderProps {
  action: () => void
  title: string
  message: string
  haveSecondButton?: boolean
  secondMessage?: string
  secondAction?: () => void
}

export function DepartmentsHeader({
  action,
  message,
  title,
  haveSecondButton = false,
  secondMessage = '',
  secondAction = () => ''
}: ListDepartmentsHeaderProps) {
  return (
    <ListDepartmentsHeader>
      <h1>{title}</h1>
      <div>
        <a onClick={action}>{message}</a>
        {haveSecondButton ? <a onClick={secondAction}>{secondMessage}</a> : null}
      </div>
    </ListDepartmentsHeader>
  )
}
