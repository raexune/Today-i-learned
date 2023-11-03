import { useState } from "react";
import "./style.css";

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015
  }
];

function App() {
  const [showForm, setShowForm] = useState(false);

  const appTitle = "Today I Learned";

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="TIL Logo" height="68" width="68"></img>
          <h1>{appTitle}</h1>
        </div>
        <button
          className="btn btn-large btn-share"
          onClick={() => setShowForm((show) => !show)}
        >
          Share a fact
        </button>
      </header>

      {showForm ? <NewFactForm /> : null}

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function NewFactForm() {
  return (
    <form className="fact-form">
      <input type="text" id="fact" placeholder="Share a fact..."></input>
      <span>200</span>
      <input type="text" id="source" placeholder="Source..."></input>
      <select id="category">
        <option value="">Choose Category:</option>
        <option value="technology">Technoloy</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
      </select>
      <button className="btn btn-large btn-post">Post</button>
    </form>
  );
}

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" }
];

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-all">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name} className="category">
            <button
              className="btn btn-category btn-technology"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactList() {
  //Temporary
  const facts = initialFacts;

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
}

function Fact({ fact }) {
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source" href={fact.source}>
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color
        }}
      >
        {fact.category}
      </span>
      <div className="reactions">
        <button className="btn-vote">👍 {fact.votesInteresting}</button>
        <button className="btn-vote">🤯 {fact.votesMindblowing}</button>
        <button className="btn-vote">⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default App;
