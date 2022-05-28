import type { FC } from 'react'

import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'

type Props = {
  hasLogin?: boolean
}

export const Header: FC<Props> = ({ hasLogin }) => (
  <header>
    <Logo />
    {hasLogin && <SignIn />}
  </header>
)

Header.defaultProps = {
  hasLogin: true,
}
