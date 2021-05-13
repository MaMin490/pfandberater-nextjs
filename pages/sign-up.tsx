import React from 'react';
import { Formik } from 'formik';
import { SubmitButton, Input, Checkbox, ResetButton, FormikDebug, Form, FormItem } from 'formik-antd';
import * as Yup from 'yup';


const validationSchema = Yup.object({
  lastName: Yup.string()
    .min(2, 'Der Nachnahme muss mindestens 2 Zeichen lang sein')
    .max(50, 'Der Nachnahme darf maximal 50 Zeichen lang sein')
    .required('Bitte einen Nachnamen eingeben.'),
  firstName: Yup.string()
    .min(2, 'Der Vornahme muss mindestens 2 Zeichen lang sein')
    .max(50, 'Der Vornahme darf maximal 50 Zeichen lang sein')
    .required('Bitte einen Vornamen eingeben.'),
  birthDate: Yup.string().required('Bitte ein Geburtsdatum eingeben.'),
  gender: Yup.string().required('Bitte ein Geschlecht eingeben.'),
  street: Yup.string()
    .min(2, 'Der Straßennamen muss mindestens 2 Zeichen lang sein')
    .max(80, 'Der Straßennamen darf maximal 80 Zeichen lang sein')
    .required('Bitte eine Straße eingeben.'),
  houseNumber: Yup.string()
    .max(6, 'Die Hausnummer darf maximal 6 Zeichen lang sein')
    .required('Bitte eine Hausnummer eingeben.'),
  postcode: Yup.number()
    .test('len', 'Die Postleitzahl muss exact 5 Zeichen enthalten', (val: any) => val && val.toString().length === 5)
    .required('Bitte eine Postleitzahl eingeben.'),
  city: Yup.string()
    .min(2, 'Die Stadt muss mindestens 2 Zeichen lang sein')
    .max(50, 'Die Stadt darf maximal 50 Zeichen lang sein')
    .required('Bitte einen Ort eingeben.'),
  phone: Yup.string()
    .max(18, 'Die Telefonnummer darf maximal 18 Zeichen lang sein')
    .required('Bitte eine Telefonnummer eingeben.'),
  email: Yup.string()
    .email('Bitte eine gültige Email Adresse angeben')
    .required('Bitte eine Email Adresse eingeben.'),
});

const initialValues = {
  lastName: '',
  firstName: '',
  birthDate: '',
  gender: '',
  street: '',
  houseNumber: '',
  postcode: '',
  city: '',
  phone: '',
  email: '',
};

export default function SignUpForm() {
  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}>
        {() => (
          <Form>
            <FormItem name="firstName" label="Vorname" required={true} >
              <Input name="firstName" placeholder="Firstname" />
            </FormItem>
          </Form>
        )}
      </Formik>
    </>
  );
}
