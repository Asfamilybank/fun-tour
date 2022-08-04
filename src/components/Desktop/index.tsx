import React from 'react'

const Desktop = ({
  header,
  footer,
  aside,
  children
}: {
  header?: React.ReactNode
  footer?: React.ReactNode
  aside?: React.ReactNode
  children?: React.ReactNode
}) => {
  return (
    <div className="bg-base-200 w-full">
      <div className="relative mx-auto flex min-h-screen w-full flex-col space-y-4 p-4 lg:max-w-screen-lg">
        <header className="shrink-0">{header}</header>
        <div className="flex grow space-x-4">
          <article className="shrink-0">{aside}</article>
          <main className="grow">{children}</main>
        </div>
        <div className="shrink-0">{footer}</div>
      </div>
    </div>
  )
}

export default Desktop
