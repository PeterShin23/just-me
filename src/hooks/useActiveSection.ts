import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting)
        if (visible?.target.id) {
          setActiveId(visible.target.id)
        }
      },
      { threshold: 0.5 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
