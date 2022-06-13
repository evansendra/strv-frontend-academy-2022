import styled, { css } from 'styled-components'

import { StyleReset } from '~/features/ui/components/StyleReset'
import { colors } from '~/features/ui/theme/colors'
import { typography } from '~/features/ui/theme/typography'

type ButtonProps = {
  size?: 'small' | 'medium'
  accent?: 'normal' | 'primary' | 'destructive'
}

export const Button = styled.button<ButtonProps>`
  --background-color: ${colors.background.dark};
  --background-color-hover: ${colors.background.dark};
  ${StyleReset}
  ${typography.label.large}
  padding: 0.8em 5.4em;
  color: ${colors.text.inverse};
  border-radius: 4px;
  transition: background-color 0.3s;
  background-color: var(--background-color);
  &:not(:disabled) {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    background-color: var(--background-color-hover);
  }
  ${(props) =>
    props.accent === 'primary' &&
    css`
      --background-color: ${colors.accent.primary};
      --background-color-hover: ${colors.accent.primaryHover};
    `}
  ${(props) =>
    props.accent === 'destructive' &&
    css`
      --background-color: ${colors.accent.danger};
      --background-color-hover: ${colors.accent.danger};
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      ${typography.label.medium}
      padding: 0.3em 2em 0.2em;
    `}
`
