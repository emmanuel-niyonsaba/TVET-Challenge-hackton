import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("graduate");
  const [isStudying, setIsStudying] = useState(null);

  // Form data state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    location: "",
    password: "",
    confirmPassword: "",
    currentEducation: "",
    pastEducation: "",
    companyName: "",
    tinNumber: "",
    sector: "",
    internship: false,
    companyLogo: null,
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl =
        role === "graduate"
          ? "https://yourapi.com/graduate/signup"
          : "https://yourapi.com/company/signup";

      const payload = new FormData();

      // Add shared + role-specific fields
      if (role === "graduate") {
        payload.append("username", formData.username);
        payload.append("email", formData.email);
        payload.append("location", formData.location);
        payload.append("password", formData.password);
        payload.append("confirmPassword", formData.confirmPassword);
        if (isStudying === "yes") {
          payload.append("currentEducation", formData.currentEducation);
        } else if (isStudying === "no") {
          payload.append("pastEducation", formData.pastEducation);
        }
      } else {
        payload.append("companyName", formData.companyName);
        payload.append("tinNumber", formData.tinNumber);
        payload.append("sector", formData.sector);
        payload.append("email", formData.email);
        payload.append("location", formData.location);
        payload.append("internship", formData.internship);
        payload.append("description", formData.description);
        if (formData.companyLogo) {
          payload.append("companyLogo", formData.companyLogo);
        }
      }

      const res = await fetch(apiUrl, {
        method: "POST",
        body: payload, // FormData handles headers automatically
      });

      const data = await res.json();
      if (res.ok) {
        alert(`Signup successful as ${role}`);
        console.log("Response:", data);
      } else {
        alert(data.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error connecting to the server.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg font-medium ${
              role === "graduate"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRole("graduate")}
          >
            Graduate
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg font-medium ${
              role === "company"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRole("company")}
          >
            Private Sector
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Graduate Signup */}
          {role === "graduate" && (
            <>
              <div className="text-right text-sm">
                <Link to="/reset-password" className="text-green-500 hover:underline">
                  Forgot Password?
                </Link>
              </div>

              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              {/* Studying toggle */}
              <div>
                <p className="text-gray-600 mb-2">Are you currently studying?</p>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="studying"
                      checked={isStudying === "yes"}
                      onChange={() => setIsStudying("yes")}
                      className="h-4 w-4 text-green-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="studying"
                      checked={isStudying === "no"}
                      onChange={() => setIsStudying("no")}
                      className="h-4 w-4 text-green-500"
                    />
                    No
                  </label>
                </div>
              </div>

              {isStudying === "yes" && (
                <input
                  type="text"
                  name="currentEducation"
                  placeholder="Current Education"
                  value={formData.currentEducation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              )}

              {isStudying === "no" && (
                <input
                  type="text"
                  name="pastEducation"
                  placeholder="Where you studied"
                  value={formData.pastEducation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                />
              )}
            </>
          )}

          {/* Company Signup */}
          {role === "company" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="tinNumber"
                placeholder="TIN Number"
                value={formData.tinNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Sector</option>
                <option value="IT">Information Technology</option>
                <option value="Finance">Finance</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Other">Other</option>
              </select>

              <input
                type="email"
                name="email"
                placeholder="Company Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <input
                type="text"
                name="location"
                placeholder="Company Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="internship"
                  checked={formData.internship}
                  onChange={handleChange}
                  className="h-4 w-4 text-green-500"
                />
                Open to give internships
              </label>

              <input
                type="file"
                name="companyLogo"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />

              <textarea
                name="description"
                placeholder="Company Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                rows="3"
              ></textarea>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up as {role === "graduate" ? "Graduate" : "Private Sector"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
