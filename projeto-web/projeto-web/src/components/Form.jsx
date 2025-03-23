import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email.includes("@")) {
      setMessage("Preencha os campos corretamente!");
      return;
    }
    setMessage("Enviado com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Enviar</button>
      <p>{message}</p>
    </form>
  );
};

export default Form;
