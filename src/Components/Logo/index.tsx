import { IconLogo } from 'Icons'

const Logo = ({ isShowName, ...svgProps }: React.SVGAttributes<SVGSVGElement> & { isShowName?: boolean }) => {
  return (
    <a className="btn btn-ghost" href="/home">
      <div className="text-primary flex items-center space-x-0.5">
        <IconLogo width={36} height={36} {...svgProps} />
        {isShowName && (
          <span className="text-2xl font-bold normal-case" style={{ fontFamily: 'Roboto' }}>
            FunTour
          </span>
        )}
      </div>
    </a>
  )
}

export default Logo
