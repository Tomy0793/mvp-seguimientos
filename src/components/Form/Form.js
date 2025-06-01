import React from 'react';
import { useParams } from 'react-router-dom';
import FormFields from './FormFields';

const Form = () => {
  const { closerId } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Formulario de contacto</h2>
      <p>Estás completando este formulario por invitación de: <strong>{closerId}</strong></p>
      <FormFields closerId={closerId} />
    </div>
  );
};

export default Form;
