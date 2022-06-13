import { css } from 'styled-components'

import { queries } from './queries'

export const font = {
  base: '"Hind", sans-serif',
  headings: '"Hind", sans-serif',
  quotes: '"Playfair Display", sans-serif',
}

const allHeadingsStyle = css`
  font-family: ${font.headings};
  font-weight: inherit;
`

export const heading = {
  all: allHeadingsStyle,
  h1: css`
    ${allHeadingsStyle}
    font-size: 3rem;
    ${queries.medium} {
      font-size: 4.5rem;
    }
  `,
  h2: css`
    ${allHeadingsStyle}
    font-size: 1.8rem;
    ${queries.medium} {
      font-size: 2.8rem;
    }
  `,
}