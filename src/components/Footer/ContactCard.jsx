import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const contacts = [
  {
    role: "Chapter Chair",
    name: "Prince Ryamwar",
    email: "princeryamwar@gmail.com",
    phone: "+91 8999208579",
  },
  {
    role: "Vice Chair",
    name: "Shravani Satarkar",
    email: "shravanisatarkarkar00@gmail.com",
    phone: "+91 8767726202",
  },
  {
    role: "Secretary",
    name: "Priyanshu Mishra",
    email: "priuanshumishra@gmail.com",
    phone: "+91 9403973552",
  },
];

export function ContactCard() {
  return (
    <section className="footer-section">
      <h2 className="footer-heading">FIELD OPERATIVES</h2>

      <div className="contact-grid">
        {contacts.map((contact) => (
          <article key={contact.role} className="contact-card">
            <div className="contact-role">{contact.role}</div>

            <div className="contact-name">{contact.name}</div>

            <div className="contact-line">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{contact.email}</span>
            </div>

            <div className="contact-line">
              <FontAwesomeIcon icon={faPhone} />
              <span>{contact.phone}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
