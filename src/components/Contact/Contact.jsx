import React from "react";

// imported Data
import { contactData } from "../../../appData";

// imported CSS
import "./contact.css";

// icons
import callIcon from "/assets/contact/call.gif";
import emailIcon from "/assets/contact/email.gif";
import locationIcon from "/assets/contact/location.gif";
import userIcon from "/assets/contact/user.gif";
import userEmailIcon from "/assets/contact/user_email.gif";
import messageIcon from "/assets/contact/message.gif";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section_title">Contact me</h2>
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

            {/* <div className="contact_form">
              <form id="contact_form" autoComplete="off">
                <div className="contact_inputs">
                  <div className="contact_name_email">
                    <div className="input_wrapper">
                      <img src={userIcon} alt="user" />
                      <input
                        type="text"
                        id="contact_name"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="input_wrapper">
                      <img src={userEmailIcon} alt="user email" />
                      <input
                        type="email"
                        id="contact_email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="textarea_wrapper">
                    <img src={messageIcon} alt="user message" />
                    <textarea
                      name=""
                      id="contact_msg"
                      cols="0"
                      rows="4"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>
                  <div className="contact_button">
                    <button>
                      Send Message
                      <i className="fas fa-paper-plane" />
                    </button>
                  </div>
                </div>
              </form>
            </div> */}
          </main>
        </div>
      </section>
    </>
  );
};

export default Contact;
