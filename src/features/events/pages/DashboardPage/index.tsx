import type { NextPage } from 'next'

import { Container } from '~/features/ui/components/Container'
import { LayoutPrivate } from '~/features/ui/components/LayoutPrivate'

import { EventsList } from '../../components/EventsList'
import { CreateButton } from '../../components/EventsList/parts/CreateButton'

export const DashboardPage: NextPage = () => (
  <LayoutPrivate>
    <Container>
      <h1>Dashboard</h1>
      <section>
        <h2>Events List</h2>
        <EventsList />
        <CreateButton />
      </section>
    </Container>
  </LayoutPrivate>
)
