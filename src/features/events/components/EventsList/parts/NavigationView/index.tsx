import type { FC } from 'react'

enum ViewType {
  GRID = 'GRID',
  LIST = 'LIST',
}

type Props = {
  onChange: (viewType: ViewType) => void
}

export const NavigationView: FC<Props> = ({ onChange }) => (
  <ul>
    <li>
      <button
        type="button"
        aria-label="Grid view"
        onClick={() => onChange(ViewType.GRID)}
      >
        #
      </button>
    </li>
    <li>
      <button
        type="button"
        aria-label="List view"
        onClick={() => onChange(ViewType.LIST)}
      >
        =
      </button>
    </li>
  </ul>
)
