import React from 'react';
import { render } from 'enzyme';
import FormComponent from 'components/FormComponent';
import * as Yup from 'yup';

describe('<FormComponent />', () => {
  const config = {
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Invalid email address.')
        .required('This field is required.'),
      password: Yup.string().required('This field is required'),
    }),
    fields: [
      {
        type: 'input',
        options: {
          type: 'email',
          label: 'Email Address',
          name: 'email',
        },
      },
      {
        type: 'input',
        options: {
          type: 'password',
          label: 'Password',
          name: 'password',
        },
      },
      {
        type: 'checkbox',
        options: {
          label: 'Remember me',
          name: 'checkbox',
        },
      },
      {
        type: 'button',
        options: {
          text: 'SIGN IN',
          name: 'submitButton',
        },
      },
      {
        type: 'wrongtype',
        options: {},
      },
    ],
  };

  it('Should not regress', () => {
    const tree = render(
      <FormComponent
        {...config}
        onSubmit={() => null}
        errorMessage="test error message"
      />,
    );
    expect(tree).toMatchSnapshot();
  });
});
