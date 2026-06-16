import { Link } from "react-router";
import { PlusIcon, NotebookPen } from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          
          <Link
            to="/"
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-lg">
              <NotebookPen className="size-6 text-primary-content" />
            </div>

            <div>
              <h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
                ThinkBoard
              </h1>
              <p className="text-xs font-medium tracking-wide text-base-content/60">
                Capture • Organize • Create
              </p>
            </div>
          </Link>

          <Link
            to="/create"
            className="btn btn-primary rounded-2xl px-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            <PlusIcon className="size-5" />
            <span>New Note</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;