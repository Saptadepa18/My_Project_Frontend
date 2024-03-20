import React from 'react';
import { render,screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuExampleInvertedSecondary from '../components/Headers';


test("should render menu items correctly",()=>{
  const {getByText}=render(
  <MemoryRouter>
  <MenuExampleInvertedSecondary/>
  </MemoryRouter>
  );
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('About Us')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
  expect(getByText('Log Out')).toBeInTheDocument();
})
 
