import { ThemeToggle } from "./ThemeToggle"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn-ghost btn text-xl normal-case">Wine App</a>
      </div>
      <div className="flex-none">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Navbar
