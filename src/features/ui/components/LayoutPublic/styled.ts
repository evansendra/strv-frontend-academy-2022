import styled from 'styled-components'

import { queries } from '~/features/ui/theme/queries'

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100%;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  padding: 8rem 2rem;

  ${queries.medium} {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    flex: 3;
  }

  &::after {
    flex: 4;
  }
`
