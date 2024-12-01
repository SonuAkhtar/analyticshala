import { useState } from "react";

// import CSS
import "./download.css";

const Download = ({ showDownload, setShowDownload }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const fileUrl = "../AnalyticShala Booklet.pdf";
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "analyticShala-brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`download_container ${showDownload ? "show" : ""}`}>
      <div className="download_wrapper">
        <button className="close_btn" onClick={() => setShowDownload(false)}>
          <i className="fas fa-times" />
        </button>

        <div className="download_header">
          <h1>Download Brochure</h1>
          <h3>Please fill the form to download the Brochure</h3>
        </div>

        <form>
          <div className="input_area">
            <input
              type="text"
              name="name"
              placeholder="Please enter your name"
              value={form.name}
              onChange={handleFormChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Please enter your email"
              value={form.email}
              onChange={handleFormChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Please enter your phone"
              value={form.phone}
              onChange={handleFormChange}
              required
            />
          </div>

          <button type="submit" onClick={handleFormSubmit}>
            Download
          </button>
        </form>
      </div>
    </div>
  );
};

export default Download;
