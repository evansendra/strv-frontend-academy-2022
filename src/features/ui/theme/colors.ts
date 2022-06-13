import { palette } from './palette'

export const colors = {
  text: {
    base: palette.gray[100],
    dim: palette.gray[500],
    light: palette.gray[800],
    inverse: palette.white,
  },
  background: {
    light: palette.white,
    slight: palette.gray[100],
    dim: palette.gray[600],
    dark: palette.gray[900],
  },
  accent: {
    primary: palette.green.light,
    primaryHover: palette.green.dark,
    danger: palette.red.light,
    dangerHover: palette.red.dark,
  },
}
