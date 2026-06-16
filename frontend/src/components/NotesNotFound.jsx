import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
      
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-base-100/70 backdrop-blur-xl border border-base-content/10 shadow-md">
        <NotebookIcon className="size-10 text-primary" />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-base-content">
        No notes yet
      </h3>

      {/* Description */}
      <p className="mt-2 max-w-md text-base-content/60">
        Ready to organize your thoughts? Create your first note and start building your ideas in one place.
      </p>

      {/* Button */}
      <Link
        to="/create"
        className="mt-6 btn btn-primary rounded-2xl px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
      >
        Create Your First Note
      </Link>
    </div>
  );
};

export default NotesNotFound;