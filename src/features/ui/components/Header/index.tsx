import type { FC } from 'react'

import { SignIn } from './parts/SignIn'
import { StyledHeader, StyledLogo } from './styled'

type Props = {
  isPublic: boolean
}

export const Header: FC<Props> = ({ isPublic }) => (
  <StyledHeader isAbsolute={isPublic}>
    <StyledLogo />
    <SignIn />
  </StyledHeader>
)
