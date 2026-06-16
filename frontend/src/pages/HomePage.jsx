import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/notes");

        if (response.status === 429) {
          setIsRateLimited(true);
          return;
        }

        setNotes(response.data);
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to fetch notes. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen bg-base-200/30">
      <Navbar />

      {isRateLimited && (
        <div className="px-4 mt-6">
          <RateLimitedUI />
        </div>
      )}

      <main className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="loading loading-spinner text-primary loading-lg" />
            <p className="mt-4 text-base-content/60">
              Loading your notes...
            </p>
          </div>
        )}

        {/* Empty State */}
        {!loading && notes.length === 0 && !isRateLimited && (
          <NotesNotFound />
        )}

        {/* Notes Grid */}
        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes}
              />
            ))}
          </div>
        )}

      </main>
    </div>
  );
};

export default HomePage;