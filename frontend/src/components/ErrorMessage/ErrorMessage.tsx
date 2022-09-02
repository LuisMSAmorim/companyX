import { ErrorMessageContainer } from './styles'

interface ErrorMessageProps {
  message: string
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <ErrorMessageContainer>
      <p>{message}</p>
    </ErrorMessageContainer>
  )
}
