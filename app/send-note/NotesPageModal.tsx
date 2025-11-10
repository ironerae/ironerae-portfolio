import { useEffect, useState } from "react";
import { auth } from "@/firebase/auth";

interface Note {
  nickname: string;
  message: string;
  timestamp: string;
}

interface NotesResponse {
  success: boolean;
  data: Note[];
}

export default function NotesPageModal() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchNotes = async () => {
    try {
      const token = await auth.currentUser?.getIdToken();

      const response = await fetch("api/note", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 403) {
        return setError(
          "Unauthorized access. You do not have permission to view these notes."
        );
      }

      const { data }: NotesResponse = await response.json();

      setNotes(data);
    } catch (error) {
      setError("Failed to fetch notes. Please try again later.");
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          const modalElement = document.getElementById(
            "notes-page-modal"
          ) as HTMLDialogElement;
          modalElement.showModal();
        }}
      >
        All Notes
      </button>
      <dialog id="notes-page-modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mt-8">
              <button
                className="btn btn-sm absolute left-8 top-2"
                onClick={fetchNotes}
              >
                Refresh
              </button>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Nickname</th>
                    <th>Message</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  {notes.map((note, i) => (
                    <tr key={i}>
                      <td>{note.nickname}</td>
                      <td>{note.message}</td>
                      <td>{new Date(note.timestamp).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </dialog>
    </div>
  );
}
