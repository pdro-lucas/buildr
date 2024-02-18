import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'

import { ModeToggle } from '@/components/global/mode-toggle'
import { Button } from '@/components/ui/button'

type Props = {
  user?: null | User
}

export function Navigation({ user }: Props) {
  return (
    <div className="relative z-50 flex items-center justify-between bg-background/90 p-4 backdrop-blur-sm">
      <aside className="flex items-center gap-2">
        <Image
          src="/assets/buildr-logo.svg"
          alt="buildr logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">Buildr.</span>
      </aside>

      <nav className="tranform absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
        <ul className="flex items-center justify-center gap-8">
          <Link href="#">Pricing</Link>
          <Link href="#">About</Link>
          <Link href="#">Documentation</Link>
          <Link href="#">Features</Link>
        </ul>
      </nav>

      <aside className="flex items-center gap-2">
        <Button variant="outline" asChild>
          <Link href={'/agency'}>Login</Link>
        </Button>

        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  )
}
