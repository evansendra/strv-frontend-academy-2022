import type { NextPage } from 'next'

import { Header } from '~/features/ui/components/Header'

export const Login: NextPage = () => (
  <>
    <Header hasLogin={false} />
    <h1>Login here</h1>
  </>
)
