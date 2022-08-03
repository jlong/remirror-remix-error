import {
  BoldExtension,
  ItalicExtension,
  MarkdownExtension
} from 'remirror/extensions'

import { Remirror, useRemirror } from '@remirror/react'

export const Editor = ({content}) => {

  const { manager, state } = useRemirror({
    extensions: () => [
      new BoldExtension(),
      new ItalicExtension(),
      new MarkdownExtension()
    ],
    content: content,
    stringHandler: 'markdown'
  })

  return (
    <Remirror
      manager={manager}
      initialContent={state}
    />
  )
}



export default function Index() {
  return (
    <Editor content="Hello world!" />
  )
}
