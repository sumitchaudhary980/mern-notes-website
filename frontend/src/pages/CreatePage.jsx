import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);

    try {
      await api.post("/notes", {
        title,
        content,
      });

      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);

      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "⚡",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200/30">

      <main className="max-w-3xl mx-auto px-4 py-10">
        <Link to="/" className="btn btn-ghost rounded-xl mb-6">
          <ArrowLeftIcon className="size-5" />
          Back to Notes
        </Link>

        <div className="rounded-2xl border border-base-content/10 bg-base-100/70 backdrop-blur-xl shadow-lg overflow-hidden">
          
          {/* Accent Bar */}
          <div className="h-1 bg-primary" />

          <div className="p-8">
            <h1 className="text-3xl font-bold">Create New Note</h1>

            <p className="mt-2 text-base-content/60">
              Capture your ideas, thoughts, and important information.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              
              <div>
                <label className="label">
                  <span className="label-text font-medium">Title</span>
                </label>

                <input
                  type="text"
                  placeholder="Enter note title..."
                  className="input input-bordered w-full rounded-xl focus:input-primary"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text font-medium">Content</span>
                </label>

                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-40 rounded-xl resize-none focus:textarea-primary"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary rounded-2xl min-w-40"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm" />
                      Creating...
                    </>
                  ) : (
                    "Create Note"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePage;