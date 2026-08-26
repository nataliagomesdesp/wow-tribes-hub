import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Tabs from '@/components/Tabs'
import Accordion from '@/components/Accordion'

describe('Tabs Component', () => {
  const mockTabs = [
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>Content 3</div> },
  ]

  it('renders all tab buttons', () => {
    render(<Tabs tabs={mockTabs} />)

    mockTabs.forEach((tab) => {
      expect(screen.getByText(tab.label)).toBeInTheDocument()
    })
  })

  it('shows first tab content by default', () => {
    render(<Tabs tabs={mockTabs} />)

    expect(screen.getByText('Content 1')).toBeInTheDocument()
  })

  it('switches tabs on click', async () => {
    const user = userEvent.setup()
    render(<Tabs tabs={mockTabs} />)

    const tab2Button = screen.getByText('Tab 2')
    await user.click(tab2Button)

    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })

  it('uses default tab parameter', () => {
    render(<Tabs tabs={mockTabs} defaultTab="tab2" />)

    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })
})

describe('Accordion Component', () => {
  const mockItems = [
    { id: 'item1', title: 'Item 1', content: <div>Details 1</div> },
    { id: 'item2', title: 'Item 2', content: <div>Details 2</div> },
    { id: 'item3', title: 'Item 3', content: <div>Details 3</div> },
  ]

  it('renders all accordion titles', () => {
    render(<Accordion items={mockItems} />)

    mockItems.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
    })
  })

  it('shows default open item', () => {
    render(<Accordion items={mockItems} defaultOpenId="item1" />)

    expect(screen.getByText('Details 1')).toBeInTheDocument()
  })

  it('opens accordion item on click', async () => {
    const user = userEvent.setup()
    render(<Accordion items={mockItems} />)

    const item2Title = screen.getByText('Item 2')
    await user.click(item2Title)

    expect(screen.getByText('Details 2')).toBeInTheDocument()
  })
})
