"use client";

import type React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "Search notes, subjects, or topics...",
  onSearch,
  className = "",
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    onSearch?.(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative flex-grow max-w-xl ${className}`}>
      <input
        name="search"
        type="text"
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="absolute right-3 top-3 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-colors flex items-center gap-2">
        <Search size={16} />
        Search
      </button>
    </form>
  );
}
