import ThemeButton from './themeButton'
import UserProfile from './userProfile'

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100 rounded-lg shadow">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl normal-case" href="/home">
          FunTour
        </a>
      </div>
      <div className="flex-none space-x-2">
        <UserProfile />
        <Other />
        <ThemeButton />
      </div>
    </nav>
  )
}

const Other = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
