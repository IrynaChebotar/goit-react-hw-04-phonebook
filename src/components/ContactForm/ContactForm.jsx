import React from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  AddBtn,
  StyledError,
} from './ContactForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  number: Yup.number().min(6).required(''),
});

export const ContactForm = ({ onAddContact }) => {
  const handleAddContact = values => {
    const { name, number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    onAddContact(newContact);
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        handleAddContact(values);
        resetForm();
      }}
    >
      <StyledForm>
        <div>
          <p>Name</p>
          <StyledField
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyledError name="name" component="div" />
        </div>
        <div>
          <p>Phone number</p>
          <StyledField
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledError name="number" component="div" />
        </div>
        <AddBtn type="submit">Add contact</AddBtn>
      </StyledForm>
    </Formik>
  );
};
