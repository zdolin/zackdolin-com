'use client'

import { Sidebar } from '@/components/sidebar'
import { SidebarLayout } from '@/components/sidebar-layout'
import { getEvents } from '@/data'

export function ApplicationLayout({
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  return <SidebarLayout sidebar={<Sidebar>Testing</Sidebar>}>{children}</SidebarLayout>
}
