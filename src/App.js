import "./style.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="TIL Logo" height="68" width="68"></img>
          <h1>Today I Learned</h1>
        </div>
        <button className="btn btn-large btn-share">Share a fact</button>
      </header>

      <NewFactForm />

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
      <select name="" id="category">
        <option value="">Choose Category:</option>
        <option value="technology">Technoloy</option>
        <option value="science">Science</option>
        <option value="finance">Finance</option>
      </select>
      <button className="btn btn-large btn-post">Post</button>
    </form>
  );
}

function CategoryFilter() {
  return <aside>Category filter</aside>;
}

function FactList() {
  return <section>Fact List</section>;
}

export default App;
