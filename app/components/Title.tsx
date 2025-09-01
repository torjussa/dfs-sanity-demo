import type {PropsWithChildren} from 'react'

export function Title({children}: PropsWithChildren) {
  return (
    <h1 className="text-bold max-w-4xl text-4xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-8xl text-balance">
      {children}
    </h1>
  )
}

export function Subtitle({children}: PropsWithChildren) {
  return (
    <p className="max-w-4xl text-lg text-muted-foreground md:text-xl lg:text-2xl">
      {children}
    </p>
  )
}
