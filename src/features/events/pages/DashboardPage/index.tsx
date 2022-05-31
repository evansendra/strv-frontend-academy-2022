import type { NextPage } from 'next'

import { LayoutPrivate } from '~/features/ui/components/LayoutPrivate'

import { EventsList } from '../../components/EventsList'
import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <LayoutPrivate>
    <h1>Dashboard</h1>
    <section>
      <h2>Events List</h2>
      <EventsList />
      <CreateButton />
    </section>
  </LayoutPrivate>
)
