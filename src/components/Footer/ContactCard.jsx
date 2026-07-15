export function ContactCard({ role, name, email, phone }) {
  return (
    <article className="contact-card">
      <span className="role">{role}</span>

      <h3>{name}</h3>

      <p>{email}</p>

      <p>{phone}</p>
    </article>
  );
}
