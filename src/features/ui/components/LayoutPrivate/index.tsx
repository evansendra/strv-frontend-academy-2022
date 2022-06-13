import type { ReactNode, FC } from 'react'

import { PrivateGlobalStyle } from './styled'

import { Header } from '../Header'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutPrivate: FC<Props> = ({ children }) => (
  <>
    <PrivateGlobalStyle />
    <Header isPublic={false} />
    <main>{children}</main>
  </>
)
