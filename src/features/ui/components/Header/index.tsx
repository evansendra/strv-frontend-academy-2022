import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'
import { StyledHeader } from './styled'

type Props = {
  isPublic: boolean
}

export const Header: FC<Props> = ({ isPublic }) => (
  <StyledHeader isAbsolute={isPublic}>
    <Logo />
    <SignIn />
  </StyledHeader>
)
