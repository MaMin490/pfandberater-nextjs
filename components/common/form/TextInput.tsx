import React from 'react';
import { useField } from 'formik';
import FormItem from 'antd/lib/form/FormItem';

interface IProps {
  label: string;
  props: any;
}

export default function TextInput({ label, ...props }: IProps): JSX.Element {
  const [field, meta] = useField(props);

  return (
    <>
      <FormItem validateStatus={meta.touched && !!meta.error ? 'error' : ''}>
        <label>{label}</label>
        <input {...field} {...props} />
        {meta.touched && meta.error ? <p>{meta.error}</p> : null}
      </FormItem>
    </>
  );
}
