import ClientOnly from '@/components/client-only'
import Home from '@/components/home'

export default function Page() {
  return (
    <ClientOnly>
      <Home />
    </ClientOnly>
  )
}
