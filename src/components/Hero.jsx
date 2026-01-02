import React, { useState } from "react";

const Hero = () => {
  const [name, setName] = useState("vivek");
  const [email, setEmail] = useState("vivek@gmail.com");
  const [text, setText] = useState("Hello Buddy");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>CONTACT US</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
      </div>

      <div className="info">
        <div className="form">
          <div className="btn">
            <button>VIA SUPPORT CHAT</button>
            <button>VIA CALL</button>
          </div>
          <button className="one-btn">VIA EMAIL FORM</button>

          <form action="" onSubmit={onSubmit}>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <input className="same" type="text" id="name" />
              <br />
            </div>

            <div className="form-control">
              <label htmlFor="email">Email</label>
              <input className="same" type="text" id="email" />
              <br />
            </div>

            <div className="form-text">
              <label htmlFor="textarea">Name</label>
              <textarea
                name="textarea"
                id="textarea"
                rows={10}
                cols={39}
              ></textarea>
            </div>

            <div className="form-btn">
              <button>submit</button>
            </div>

            <div>{name + " " + email + " " + text}</div>
          </form>
        </div>
        <div className="photo">
          <img src="/public/images/contact.svg" alt="contact" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
