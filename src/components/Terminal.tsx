"use client";
import React, { useState, useEffect, useRef } from "react";
import { executeCommand } from "@/utils/commands";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "Welcome to the Web Terminal!",
    "Type 'help' to see available commands.",
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [output]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim()) {
        const result = executeCommand(input);
        setOutput((prev) => [...prev, `$ ${input}`, result]);
        setHistory((prev) => [...prev, input]);
        setHistoryIndex(null);
        setInput("");
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const index = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(index);
        setInput(history[index]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== null) {
        const index = Math.min(history.length - 1, historyIndex + 1);
        setHistoryIndex(index);
        setInput(history[index]);
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col p-4 text-green-400 font-mono">
      <div className="flex-grow overflow-auto">
        {output.map((line, index) => (
          <p key={index} className="whitespace-pre-wrap">{line}</p>
        ))}
      </div>
      <div className="flex">
        <span className="mr-2">$</span>
        <input
          ref={inputRef}
          type="text"
          className="bg-black text-green-400 outline-none flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
