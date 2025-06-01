import React, { useState } from 'react';

const FormFields = ({ closerId }) => {
  const [formData, setFormData] = useState({
    empresa: '',
    rubro: ''
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Datos enviados:', {
      ...formData,
      enviadoPor: closerId
    });

    setEnviado(true);
  };

  return enviado ? (
    <div>
      <h4>Gracias por completar el formulario 🙌</h4>
      <p>Nos pondremos en contacto pronto.</p>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre de la empresa</label><br />
        <input
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          required
        />
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>¿A qué se dedica?</label><br />
        <input
          type="text"
          name="rubro"
          value={formData.rubro}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>
        Enviar
      </button>
    </form>
  );
};

export default FormFields;
