<div className="landing-page">
  <div className="hero">
    <h1>Welcome to Our App</h1>
    <p>Sign up to start using our amazing features</p>
  </div>
  <div className="signup-form">
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>
}, {"filename.css": ``
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.hero {
  margin-top: 50px;
  text-align: center;
}

.signup-form {
  margin-top: 50px;
  width: 400px;
}

.signup-form form {
  display: flex;
  flex-direction: column;
}

.signup-form input[type="text"],
.signup-form input[type="email"],
.signup-form input[type="password"] {
  margin-bottom: 10px;
  padding: 5px;
}

.signup-form button[type="submit"] {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
}]