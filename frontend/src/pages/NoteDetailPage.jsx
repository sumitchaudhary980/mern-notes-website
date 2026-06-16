import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import {
  ArrowLeftIcon,
  LoaderIcon,
  SaveIcon,
  Trash2Icon,
} from "lucide-react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

import api from "../lib/axios";
import Navbar from "../components/Navbar";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Error fetching note:", error);
        toast.error("Failed to fetch note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete this note?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#ef4444",
      background: "var(--fallback-b1,oklch(var(--b1)))",
      color: "var(--fallback-bc,oklch(var(--bc)))",
    });

    if (!result.isConfirmed) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and content are required");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully");
      navigate("/");
    } catch (error) {
      console.log("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200/30">
        <Navbar />

        <div className="flex flex-col items-center justify-center py-32">
          <LoaderIcon className="size-10 animate-spin text-primary" />
          <p className="mt-4 text-base-content/60">
            Loading note...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200/30">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost rounded-xl">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-outline btn-error rounded-xl"
          >
            <Trash2Icon className="size-5" />
            Delete
          </button>
        </div>

        <div className="rounded-2xl border border-base-content/10 bg-base-100/70 backdrop-blur-xl shadow-lg overflow-hidden">
          
          {/* Accent Bar */}
          <div className="h-1 bg-primary" />

          <div className="p-8">
            <h1 className="text-3xl font-bold">
              Edit Note
            </h1>

            <p className="mt-2 text-base-content/60">
              Update your note and save your changes.
            </p>

            <div className="mt-8 space-y-6">
              
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Title
                  </span>
                </label>

                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered w-full rounded-xl focus:input-primary"
                  value={note.title}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Content
                  </span>
                </label>

                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-48 rounded-xl resize-none focus:textarea-primary"
                  value={note.content}
                  onChange={(e) =>
                    setNote({
                      ...note,
                      content: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="btn btn-primary rounded-2xl min-w-40"
                >
                  {saving ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <SaveIcon className="size-4" />
                      Save Changes
                    </>
                  )}
                </button>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NoteDetailPage;