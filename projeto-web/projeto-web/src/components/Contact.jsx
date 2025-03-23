import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>📬 Entre em Contato</h2>
      <input type="text" name="name" placeholder="Nome" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Sua mensagem" onChange={handleChange} required></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Contact;
