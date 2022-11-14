"use client";

export default function Button() {
  return (
    <button
      onClick={async () => {
        await fetch("/api/examples", { method: "put" });
      }}
    >
      edit
    </button>
  );
}
