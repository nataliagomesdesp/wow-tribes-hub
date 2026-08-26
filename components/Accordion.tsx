'use client'

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpenId?: string
}

export default function Accordion({ items, defaultOpenId }: AccordionProps) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <details
          key={item.id}
          defaultOpen={item.id === defaultOpenId}
          className="group border border-wow-line rounded-lg overflow-hidden"
        >
          <summary className="px-6 py-4 cursor-pointer hover:bg-wow-surface-soft transition font-semibold text-wow-purple">
            {item.title}
          </summary>
          <div className="px-6 py-4 border-t border-wow-line bg-wow-surface-soft">
            {item.content}
          </div>
        </details>
      ))}
    </div>
  )
}
