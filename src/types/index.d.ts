declare module 'assets/svg/*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module 'lax.js' {
  const Lax: any
  export default Lax
}
