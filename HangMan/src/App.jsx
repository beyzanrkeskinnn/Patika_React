import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]); // Listeyi tutmak için state
  const [inputValue, setInputValue] = useState(""); // Input değerini tutmak için state

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log(items);
      if (inputValue.trim() !== "") {
        // Boş girişi engelle
        setItems([...items, { text: inputValue, completed: false }]); // Yeni öğeyi listeye ekle
        setInputValue(""); // Input alanını temizle
        console.log(items);
      }
    }
  };

  const handleToggle = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed; // Tamamlanma durumunu tersine çevir
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Tıklanan öğeyi listeden çıkar
    setItems(newItems);
  };

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Input değerini güncelle
              onKeyDown={handleKeyDown} // Enter tuşuna basıldığında çalışacak fonksiyon
            />
          </form>
        </header>

        <section className="main">
          <ul className="todo-list">
            {items.map((item, index) => (
              <li key={index}>
                <div
                  className={`view ${item.completed ? "completed" : ""}`} // Dinamik className
                >
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(index)} // Durumu değiştir
                  />
                  <label>{item.text}</label> {/* Burada hatayı düzelttik */}
                  <button
                    className="destroy"
                    onClick={() => handleDelete(index)}
                  ></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>{items.filter((item) => !item.completed).length}</strong>{" "}
            items left
          </span>

          <ul className="filters">
            <li>
              <a href="#/" className="selected">
                All
              </a>
            </li>
            <li>
              <a href="#/">Active</a>
            </li>
            <li>
              <a href="#/">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://d12n.me/">Dmitry Sharabin</a>
        </p>
        <p>
          Part of <a href="http://todomvc.com">TodoMVC</a>
        </p>
      </footer>
    </>
  );
}

export default App;
