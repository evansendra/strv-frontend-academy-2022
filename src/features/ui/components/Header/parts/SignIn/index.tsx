import Link from 'next/link'
import type { FC } from 'react'

import { Routes } from '~/features/core/constants/routes'

import { Anchor } from './styled'

export const SignIn: FC = () => (
  <Link href={Routes.LOGIN} passHref>
    <Anchor>
      Already have an account? <b>sign in</b>
    </Anchor>
  </Link>
)
