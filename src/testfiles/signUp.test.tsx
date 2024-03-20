
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios'; // Import axios for mocking
import { MemoryRouter } from 'react-router-dom';
import { SignUpPage } from '../components/SignUp';
 // Import the component to be tested
 
jest.mock('axios'); // Mock axios
 
describe('SignUp component', () => {
  it('renders sign up form correctly and submits successfully', async () => {
    // Mock the successful axios post request
(axios.post as jest.Mock).mockResolvedValueOnce({ data: { success: true } });
 
    // Render the SignUp component
    render(
        <MemoryRouter>
    <SignUpPage />
    </MemoryRouter>
    );
 
    // Fill in the form fields
    userEvent.type(screen.getByPlaceholderText('User Name'), 'testUser');
    userEvent.type(screen.getByPlaceholderText('Email Id'), 'test@example.com');
    userEvent.type(screen.getByPlaceholderText('role'), 'testRole');
    userEvent.type(screen.getByPlaceholderText('Enter Password'), 'testPassword');
 
    // Submit the form
fireEvent.click(screen.getByText('Register'));
 
    // Wait for the submit request to complete
await waitFor(() => expect(axios.post).toHaveBeenCalledTimes(1));
 
    // Ensure that the component navigates to the login page after successful submission
    expect(window.location.pathname).toBe('/');
  });
});