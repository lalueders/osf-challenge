import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Form() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = formData => {
    console.log(formData);
    setIsFormSubmit(true);
    setTimeout(() => setIsFormSubmit(false), 2000);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledSelectWrapper>
        <label htmlFor="country">
          Land <span>*</span>
        </label>
        <select {...register('country', { required: 'Bitte wählen Sie ein Land aus' })} name="country" id="country">
          <option value="">Bitte wählen</option>
          <option value="germany">Deutschland</option>
        </select>
      </StyledSelectWrapper>
      {errors.country && <ErrorMessage>{errors.country.message}</ErrorMessage>}
      <StyledSelectWrapper>
        <label htmlFor="interest">
          Interesse <span>*</span>
        </label>
        <select
          {...register('interest', { required: 'Bitte wählen Sie ein Interesse aus' })}
          name="interest"
          id="interest"
        >
          <option value="">Bitte wählen</option>
          <option value="ecommerce">ecommerce</option>
        </select>
      </StyledSelectWrapper>
      {errors.interest && <ErrorMessage>{errors.interest.message}</ErrorMessage>}
      <StyledSelectWrapper>
        <label htmlFor="title">
          Anrede <span>*</span>
        </label>
        <select {...register('title', { required: 'Wie dürfen wir Sie ansprechen?' })} name="title" id="title">
          <option value="">Bitte wählen</option>
          <option value="male">Herr</option>
          <option value="female">Frau</option>
        </select>
      </StyledSelectWrapper>
      {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="firstName">
          Vorname <span>*</span>
        </label>
        <input
          {...register('firstName', { required: 'Bitte geben Sie Ihren Vornamen an' })}
          type="text"
          id="firstName"
          name="firstName"
        ></input>
      </StyledInputWrapper>
      {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="lastName">
          Nachname <span>*</span>
        </label>
        <input
          {...register('lastName', { required: 'Bitte geben Sie Ihren Nachnamen an' })}
          type="text"
          id="lastName"
          name="lastName"
        ></input>
      </StyledInputWrapper>
      {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="email">
          E-Mail <span>*</span>
        </label>
        <input
          {...register('email', {
            required: 'Bitte geben Sie eine gültige E-Mail-Adresse an',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Bitte geben Sie eine gültige E-Mail-Adresse an im Format beispiel@beispiel.com',
            },
          })}
          type="text"
          id="email"
          name="email"
        ></input>
      </StyledInputWrapper>
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="phone">
          Telefonnummer <span>*</span>
        </label>
        <input
          {...register('phone', { required: 'Bitte geben Sie eine Telefonnnumer an' })}
          type="tel"
          id="phone"
          name="phone"
        ></input>
      </StyledInputWrapper>
      {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="company">
          Unternehmen <span>*</span>
        </label>
        <input
          {...register('company', { required: 'Bitte geben Sie Ihr Unternehmen an' })}
          type="text"
          id="company"
          name="company"
        ></input>
      </StyledInputWrapper>
      {errors.company && <ErrorMessage>{errors.company.message}</ErrorMessage>}
      <StyledInputWrapper>
        <label htmlFor="jobTitle">
          Berufsbezeichnung <span>*</span>
        </label>
        <input
          {...register('jobTitle', { required: 'Bitte geben Sie eine Berufsbezeichnung an' })}
          type="text"
          id="jobTitle"
          name="jobTitle"
        ></input>
      </StyledInputWrapper>
      {errors.jobTitle && <ErrorMessage>{errors.jobTitle.message}</ErrorMessage>}
      <StyledCheckboxWrapper>
        <input {...register('newsletter')} type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter">
          Ja, ich möchte von der Hermes über ihre Paket- und Serviceleistungen für Geschäftskunden (Newsletter,
          Gutscheine, Aktionen, Kundenzufriedenheitsumfragen) sowie über geschäftliche Vertragsangebote informiert
          werden.
        </label>
      </StyledCheckboxWrapper>
      <StyledFormFooter>
        <p>
          <span>* </span>Pflichtfeld
        </p>
        <p>
          Bei Fragen erreichen Sie uns per E-Mail unter{' '}
          <a href="mailto:marketing@hermesworld.com">marketing@hermesworld.com</a>
        </p>
      </StyledFormFooter>
      <StyledButton type="submit">{isFormSubmit ? 'Thank you!' : 'Absenden'}</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 1rem;
  flex: 2;

  label span {
    color: #0091cd;
  }
`;

const StyledSelectWrapper = styled.div`
  display: grid;
`;

const StyledInputWrapper = styled.div`
  display: grid;
`;

const StyledCheckboxWrapper = styled.div`
  input[type='checkbox'] {
    margin-right: 0.2rem;
  }
`;

const StyledButton = styled.button`
  background: #ea530f;
  color: #ffffff;
  border: none;
  padding: 8px;
  width: 100px;
  justify-self: end;
`;

const StyledFormFooter = styled.div`
  display: grid;
  gap: 1rem;

  span {
    color: #0091cd;
  }

  a {
    color: #0091cd;
  }
`;

const ErrorMessage = styled.p`
  color: red;
`;
