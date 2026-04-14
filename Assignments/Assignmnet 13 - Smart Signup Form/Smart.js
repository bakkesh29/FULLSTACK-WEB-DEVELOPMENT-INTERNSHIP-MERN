import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  
  const validatePassword = (password) => {
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/.test(password);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!validatePassword(form.password)) {
      newErrors.password =
        "Password must contain 6+ chars, uppercase, number & special character";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Signup Successful!");
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        
        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Password */}
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;

/*
Validation Rules Explained
Email Regex
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

Checks:

Contains @
Has domain (like .com)

Password Regex
/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/

Requires:

At least 6 characters
One uppercase letter
One number
One special character*/

