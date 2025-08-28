import React, { useState } from 'react';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  return (
    <div>
      <hero className="hero">
        <div className="hero-body">
          <h1 className="title">Welcome!</h1>
          <p className="subtitle">Sign up to get started</p>
        </div>
      </hero>
      <section className="section">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                className="input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="field">
            <button className="button is-primary" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignupPage;
"""}, {"styles.css": ``
.hero {
  background-color: #1e40af;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero-body {
  max-width: 700px;
  padding: 0 20px;
}

.title {
  font-size: 2.5rem;
}

.subtitle {
  font-size: 1rem;
  color: #999;
}

.field {
  margin-bottom: 20px;
}

.control {
  margin-top: 10px;
}

input {
  padding: 10px;
  font-size: 1rem;
  display: block;
  width: 100%;
}

button {
  font-size: 1rem;
  padding: 10px 20px;
}`}]