import {PortableText} from '@portabletext/react'

import {SanityImage} from '~/components/SanityImage'

type ContentProps = {
  value: any[]
}

type ButtonValue = {
  _type: 'button'
  text: string
  url: string
}

function ButtonRenderer(props: {value: ButtonValue}) {
  const {value} = props
  const className =
    'inline-flex no-underline items-center rounded-md outline-1 bg-cyan-100 px-4 py-2 text-white hover:bg-cyan-200 focus:outline-none'

  return (
    <a href={value.url} target="_blank" rel="noreferrer" className={className}>
      {value.text}
    </a>
  )
}

const components = {
  types: {
    image: SanityImage,
    button: ButtonRenderer,
  },
}

export function SanityContent(props: ContentProps) {
  const {value} = props

  return (
    <div className="prose font-serif dark:prose-invert lg:prose-2xl prose-a:text-cyan-700 dark:prose-a:text-cyan-200">
      <PortableText value={value} components={components} />
    </div>
  )
}
