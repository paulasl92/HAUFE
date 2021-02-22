import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import  Form  from './Form';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});

const props = {
    formInformation : {
        buttonText: "Login",
        buttonEvent: "IN",
        link: "/signup",
        linkText: "Don't have an account?",
        buttonRedirect: "Register!",
        handleClick: async (email, password) => {
          const res = await dispatch(signIn({ email, password }, history));
          setError(res);
        }
      },
    form: {
      email: 'Email',
      password: 'Password',
      emailRequired: 'Email is required',
      emailNotValid: 'Email is not valid',
      passwordRequired: 'Password is required',

    },
    Form: () => {},
   };
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
describe('>>>Form - Shallow Render REACT COMPONENTS', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = itmes => shallow(<Form {...itmes} />);
    });

// Create 'snapshot'
 it('+++ render Form correctly, snapshot', () => {
  const component = wrapper(props);
  expect(toJson(component)).toMatchSnapshot();
 });

// Check render comonent without errors
 it('+++ render the DUMB component', () => {
  expect(wrapper(props).length).toEqual(1);
 });

// Simple behavior for fill in the fields
 it('+++ simulate change email', () => {
  const component = wrapper(props);
  const eventEmail = {
   target: { name: 'email', value: 'test@test.com' }
  };
  component.find('[name="email"]').simulate('change', eventEmail);

  expect(component.find('[name="email"]').prop('value')).toEqual('test@test.com');

 });
 
});
