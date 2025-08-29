import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <section className="hero">
        <h1>Welcome to Our App</h1>
        <p>Join us today and discover a world of possibilities</p>
      </section>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}

export default App;
}, {"filename.css": * {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.hero {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.5rem;
  color: white;
}

.form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form input[type="email"],
.form input[type="password"] {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}

.form button[type="submit"] {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}
}]