import React from 'react';
import { Formik, Field } from 'formik';
import { Row, Col } from 'antd';
import { Select, Input, DatePicker, Form, FormItem } from 'formik-antd';
import * as Yup from 'yup';
import moment from 'moment';

const validDates = ['20 December, 2019', '15 January, 2020', '1 February, 2020'];

const validationSchema = Yup.object({
  lastName: Yup.string()
    .min(2, 'der nachnahme muss mindestens 2 zeichen lang sein')
    .max(50, 'der nachnahme darf maximal 50 zeichen lang sein')
    .required('bitte einen nachnamen eingeben.'),
  firstName: Yup.string()
    .min(2, 'der vornahme muss mindestens 2 zeichen lang sein')
    .max(50, 'der vornahme darf maximal 50 zeichen lang sein')
    .required('bitte einen vornamen eingeben'),
  birthDate: Yup.date()
    .required('You must specificy a start date')
    .test(
      'startDate',
      'Your selected course and subject is not offered beginning from your selected date',
      value => value.toString.length === 0
    ),
  // birthDate: Yup.string()
  //   .required('Required')
  //   .test('length', 'Date should be in format DD.MM.YYYY, ex: 02121998', (date: string) => date.length < 1),
  gender: Yup.string().required('bitte ein geschlecht eingeben'),
  street: Yup.string()
    .min(2, 'der straßenname muss mindestens 2 zeichen lang sein')
    .max(80, 'der straßennamen darf maximal 80 zeichen lang sein')
    .required('bitte eine straße eingeben'),
  houseNumber: Yup.string()
    .max(6, 'die hausnummer darf maximal 6 zeichen lang sein')
    .required('bitte eine hausnummer eingeben'),
  postcode: Yup.number()
    .test('len', 'die postleitzahl muss exact 5 zeichen enthalten', (val: number) => val && val.toString().length === 5)
    .required('bitte eine postleitzahl eingeben'),
  city: Yup.string()
    .min(2, 'die stadt muss mindestens 2 zeichen lang sein')
    .max(50, 'die stadt darf maximal 50 zeichen lang sein')
    .required('bitte einen ort eingeben'),
  phone: Yup.string()
    .max(18, 'die telefonnummer darf maximal 18 zeichen lang sein')
    .required('bitte eine telefonnummer eingeben'),
  email: Yup.string()
    .email('bitte eine gültige email adresse angeben')
    .required('bitte eine email adresse eingeben'),
});

const initialValues = {
  lastName: '',
  firstName: '',
  birthDate: null,
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
            <Row>
              <Col span={10}>
                <FormItem name="firstName">
                  <Input name="firstName" placeholder="vorname" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem name="lastName">
                  <Input name="lastName" placeholder="nachname" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <FormItem name="birthDate">
                  <DatePicker name="birthDate" style={{ width: '100%' }} format="DD.MM.YYYY" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem name="gender">
                  <Select name="gender" placeholder="geschlecht">
                    <Select.Option value={1}>weiblich</Select.Option>
                    <Select.Option value={2}>männlich</Select.Option>
                    <Select.Option value={3}>divers</Select.Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <FormItem name="street">
                  <Input name="street" placeholder="strasse" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem name="houseNumber">
                  <Input name="houseNumber" placeholder="hausnummer" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <FormItem name="postcode">
                  <Input name="postcode" placeholder="postleitzahl" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem name="city">
                  <Input name="city" placeholder="stadt" />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <FormItem name="phone">
                  <Input name="phone" placeholder="telefon" />
                </FormItem>
              </Col>
              <Col span={10}>
                <FormItem name="email">
                  <Input name="email" placeholder="email" />
                </FormItem>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}
