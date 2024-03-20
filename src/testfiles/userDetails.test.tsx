// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import { UserDetails } from '../components/UserDetails';
 
// describe('UserDetails component', () => {
//   it('renders user details correctly', async () => {
//     // Mock user data
//     const userData = [
//       {
//         id: 1,
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'john@example.com',
//         birthday: '1990-01-01',
//         skills: ['React', 'JavaScript'],
// avatar: [{ name: 'avatar1', percent: 100, size: 100, url: 'https://example.com/avatar1.jpg' }],
//       }
//     ];
 
//     // Render UserDetails component with mocked data
//     render(
//         <MemoryRouter initialEntries={['/user/1']}>
//         <Routes>
//           <Route path="/user/:userId" element={<UserDetails />} />
//         </Routes>
//       </MemoryRouter>
//     );
 
//     // Wait for the data to be loaded and displayed
//     await screen.findByText('Personal Information');
 
//     // Check if the user details are displayed correctly
//     expect(screen.getByText('Personal Information')).toBeInTheDocument();
//     expect(screen.getByText('John Doe')).toBeInTheDocument();
//     expect(screen.getByText('john@example.com')).toBeInTheDocument();
//     expect(screen.getByText('1990-01-01')).toBeInTheDocument();
//     expect(screen.getByText('Skill sets')).toBeInTheDocument();
//     expect(screen.getByText('Skill1: React')).toBeInTheDocument();
//     expect(screen.getByText('Skill2: JavaScript')).toBeInTheDocument();
//   });
// });
