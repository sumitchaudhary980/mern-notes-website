/* eslint-disable no-unused-vars */
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import api from "../lib/axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Delete this note?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it",
      background: "var(--fallback-b1,oklch(var(--b1)))",
      color: "var(--fallback-bc,oklch(var(--bc)))",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link
      to={`/note/${note._id}`}
      className="group relative block overflow-hidden rounded-2xl border border-base-content/10 bg-base-100/70 backdrop-blur-xl p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* TOP GLOW BAR */}
      <div className="absolute left-0 top-0 h-1 w-full bg-primary opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Content */}
      <h3 className="text-lg font-semibold text-base-content group-hover:text-primary transition-colors">
        {note.title}
      </h3>

      <p className="mt-2 text-sm text-base-content/70 line-clamp-3">
        {note.content}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-base-content/50">
          {formatDate(new Date(note.createdAt))}
        </span>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-xs">
            <PenSquareIcon className="size-4 text-base-content/70 group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={(e) => handleDelete(e, note._id)}
            className="btn btn-ghost btn-xs hover:bg-error/10"
          >
            <Trash2Icon className="size-4 text-base-content/60 hover:text-error transition-colors" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;