import React from "react";

// imported Data
import { contactData } from "../../../appData";

// imported CSS
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section_title">Contact Us</h2>
        <span className="section_subtitle">Get in touch</span>

        <main className="contact_main">
          <div className="contact_info">
            {contactData.map((data, i) => (
              <div key={i} className="contact_sub_info">
                <div className="contact_info_title">
                  <img src={data.icon} alt={data.alt} />
                  <h3>{data.name}</h3>
                </div>
                {data.href ? (
                  <a href={data.href}>{data.info}</a>
                ) : (
                  <span>{data.info}</span>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
};

export default Contact;
