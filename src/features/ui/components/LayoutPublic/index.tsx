import type { ReactNode, FC } from 'react'

import { Header } from '~/features/ui/components/Header'

import { AsideCover } from './parts/AsideCover'
import { Layout, Main } from './styled'

type Props = {
  children: NonNullable<ReactNode>
}

export const LayoutPublic: FC<Props> = ({ children }) => (
  <Layout>
    <Header isPublic />
    <AsideCover />
    <Main>{children}</Main>
  </Layout>
)
