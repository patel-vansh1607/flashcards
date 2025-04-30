import React from "react";
import Flashcard from "./components/Flashcard";
import flashcards from "./data/flashcards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Flashcards</h1>
      <div className="flashcards-container">
        {flashcards.map(card => (
          <Flashcard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default App;


