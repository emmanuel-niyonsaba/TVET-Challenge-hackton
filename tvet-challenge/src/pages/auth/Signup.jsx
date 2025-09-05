import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_API_URL } from "../../lib/API";

const Signup = () => {
  const [role, setRole] = useState("graduate");
  const [isStudying, setIsStudying] = useState(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 🔹 NEW
  const navigate = useNavigate();

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
    setIsLoading(true); // 🔹 Start loading

    try {
      const apiUrl =
        role === "graduate"
          ? `${BASE_API_URL}/auth/graduate/signup`
          : `${BASE_API_URL}/auth/company/signup`;

      let payload = {};

      if (role === "graduate") {
        payload.username = formData.username;
        payload.email = formData.email;
        payload.location = formData.location;
        payload.password = formData.password;
        payload.confirmPassword = formData.confirmPassword;
        payload.isCurrentlyStudying = isStudying;

        if (isStudying === "yes") {
          payload.currentEducation = formData.currentEducation;
        } else if (isStudying === "no") {
          payload.pastEducation = formData.pastEducation;
        }
      } else {
        payload.companyName = formData.companyName;
        payload.tinNumber = formData.tinNumber;
        payload.sector = formData.sector;
        payload.email = formData.email;
        payload.password = formData.password;
        payload.confirmPassword = formData.confirmPassword;
        payload.location = formData.location;
        payload.internship = formData.internship;
        payload.description = formData.description;
      }

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      console.log(data);

      if (data.success) {
        setMessage("✅ Signup successful!");
        setIsError(false);

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        window.location.href="/"

      } else {
        setMessage(data.message || "❌ Signup failed, please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Signup error:", error);
      setMessage("⚠️ Error connecting to the server.");
      setIsError(true);
    } finally {
      setIsLoading(false); // 🔹 Stop loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign Up
        </h2>

        {message && (
          <p
            className={`text-sm text-center mt-3 font-medium ${
              isError ? "text-red-500" : "text-green-600"
            }`}
          >
            {message}
          </p>
        )}

 {/* Role Selector */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 rounded-l-lg font-medium cursor-pointer ${
              role === "graduate"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setRole("graduate")}
          >
            Graduate
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg font-medium cursor-pointer ${
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
          {role === "graduate" && (
            <>
              <div className="text-right text-sm">
                <Link
                  to="/reset-password"
                  className="text-green-500 hover:underline"
                >
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

              {/* Password fields under email */}
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

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
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

              {/* Password fields under email */}
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
            disabled={isLoading} // 🔹 Disable button
            className={`w-full py-2 rounded-lg transition text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isLoading
              ? "Submitting..."
              : `Sign Up as ${role === "graduate" ? "Graduate" : "Private Sector"}`}
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
