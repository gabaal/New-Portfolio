import contactCSS from "./../Contact/Contact.module.css";

function Contact() {
  return (
    <div className={`${contactCSS.ContactWrapper} section`}>
      <h3 className="sectionheading">
        <i className="ri-shining-fill"></i> Contact
      </h3>
      <h1 className="section_Title">
        Lets Make
        <br />
        Awesome Together
      </h1>
      <form>
        <div className={contactCSS.inputWrapper}>
          <div className={contactCSS.input_Container}>
            <input type="text" placeholder="Your name" />
          </div>
          <div className={contactCSS.input_Container}>
            <input type="text" placeholder="Company name" />
          </div>
        </div>

        <div className={contactCSS.inputWrapper}>
          <div className={contactCSS.input_Container}>
            <input type="email" placeholder="Your email" />
          </div>
          <div className={contactCSS.input_Container}>
            <input type="text" placeholder="Your phone number" />
          </div>
        </div>
        <textarea placeholder="Your message"></textarea>
        <button>Submit</button>
      </form>

      <div className={contactCSS.contactDetails}>
        <div className={contactCSS.card}>
          <h3>
            Location <span>Bury St Edmunds</span>
          </h3>
        </div>
        <div className={contactCSS.card}>
          <h3>
            Phone <span>+44 1284 705994</span>
          </h3>
        </div>
        <div className={contactCSS.card}>
          <h3>
            Email <span>contact@email.co.uk</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
