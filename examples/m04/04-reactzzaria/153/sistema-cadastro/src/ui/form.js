import styled from 'styled-components'
import { Grid } from '@material-ui/core'

export const Form = styled(Grid).attrs({
  item: true,
  container: true,
  xs: 12,
  spacing: 2,
  component: 'form'
})``

export const FormContainer = styled(Grid).attrs({
  container: true,
  spacing: 2
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  }
`
