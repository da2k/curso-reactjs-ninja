import styled from 'styled-components'
import { ReactComponent as MainLogo } from 'images/logo-react-zzaria.svg'

const Logo = styled(MainLogo)`
  height: 50px;
  width: 200px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }
`

export default Logo
