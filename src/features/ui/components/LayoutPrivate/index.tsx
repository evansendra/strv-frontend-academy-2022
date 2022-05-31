import type { ReactNode, FC } from 'react'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutPrivate: FC<Props> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
)
