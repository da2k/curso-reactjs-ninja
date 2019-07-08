import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CardActionArea } from '@material-ui/core'

const CardLink = styled(CardActionArea).attrs({
  component: Link
})`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  padding: 20px 0;
`

export default CardLink
