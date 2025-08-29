<div className="landing-page">
  <div className="hero">
    <h1>Welcome to Our Application!</h1>
    <p>Sign up to start exploring now.</p>
  </div>
  <div className="signup-form">
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>
\`}]

[{"filename.css": ``
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

.hero {
  width: 100%;
  max-width: 600px;
  text-align: center;
  padding: 50px 0;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

.hero p {
  font-size: 1.5rem;
  color: #777;
}

.signup-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.signup-form form {
  display: flex;
  flex-direction: column;
}

.signup-form label {
  font-weight: bold;
  margin-top: 20px;
  display: block;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.signup-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.signup-form button:hover {
  background-color: #0056b3;
}
\`}]