import React, { useState } from "react";

interface Note {
  content: string;
  author: string;
  date: string;
}

interface NotesTabProps {
  notes?: Note[];
  onAddNote?: (content: string) => void;
}

export default function NotesTab({
  notes = [
    {
      content: "Customer prefers wooden frames for all windows. Needs to be dark walnut finish.",
      author: "Priya Sharma",
      date: "Aug 12, 2023"
    },
    {
      content: "Budget is flexible. Customer willing to pay premium for quality hardware.",
      author: "Rahul Verma",
      date: "Aug 10, 2023"
    }
  ],
  onAddNote = (content: string) => console.log("Add note:", content)
}: NotesTabProps) {
  const [noteContent, setNoteContent] = useState("");

  const handleAddNote = () => {
    if (noteContent.trim()) {
      onAddNote(noteContent);
      setNoteContent("");
    }
  };

  return (
    <div>
      <div style={{ 
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }}>
        <div style={{ fontWeight: 600, fontSize: 16 }}>Notes</div>
        <button 
          style={{
            padding: "6px 12px",
            background: "#0284c7",
            border: "none",
            borderRadius: 4,
            color: "#fff",
            fontSize: 14,
            cursor: "pointer"
          }}
          onClick={handleAddNote}
        >
          Add Note
        </button>
      </div>
      
      <div style={{ marginBottom: 16 }}>
        <textarea 
          placeholder="Add a note..." 
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 4,
            border: "1px solid #e2e8f0",
            fontSize: 14,
            minHeight: 80,
            resize: "vertical"
          }}
        />
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {notes.map((note, index) => (
          <div key={index} style={{
            border: "1px solid #e2e8f0",
            borderRadius: 4,
            padding: 16
          }}>
            <div style={{ marginBottom: 8 }}>{note.content}</div>
            <div style={{ 
              display: "flex", 
              justifyContent: "space-between",
              fontSize: 12,
              color: "#64748b"
            }}>
              <div>{note.author}</div>
              <div>{note.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 