import { Logo } from './parts/Logo'
import { SignIn } from './parts/SignIn'

export const Header = ({ login = true }) => (
  <header>
    <Logo />
    {login && <SignIn />}
  </header>
)
