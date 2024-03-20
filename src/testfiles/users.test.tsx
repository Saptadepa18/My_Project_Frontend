
import axios from "axios";
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { User } from "../components/User";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

jest.mock('axios');

describe('User component', () => {
    let queryClient: QueryClient;
   
    beforeAll(() => {
      queryClient = new QueryClient();
    });
   
    afterEach(() => {
      jest.clearAllMocks();
    });
   
    it('renders user data correctly when data is available', async () => {
        const userData = [{
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john@example.com',
          status: true,
          birthday: '1990-01-01',
          skills: ['React', 'JavaScript'],
          avatar: [{
            name: 'avatar1',
            percent: 100,
            size: 100,
      url: 'https://example.com/avatar1.jpg'
          }]
        }];
       
        (axios.create as jest.Mock).mockReturnValueOnce({
          get: jest.fn().mockResolvedValueOnce({ data: userData })
        });
       
        await act(async () => { 
          render(
            <MemoryRouter>
              <QueryClientProvider client={queryClient}>
                <User />
              </QueryClientProvider>
            </MemoryRouter>
          );
        });
        await screen.findByText('John Doe');
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
        expect(screen.getByAltText('avatar1')).toBeInTheDocument();
      });
       
      it('renders loading state correctly while fetching data', async () => {
        (axios.create as jest.Mock).mockReturnValueOnce({
          get: jest.fn().mockResolvedValueOnce({ data: [] })
        });
       
        await act(async () => { // Wrap the code inside an async function
          render(
            <MemoryRouter>
              <QueryClientProvider client={queryClient}>
                <User />
              </QueryClientProvider>
            </MemoryRouter>
          );
        });
      });
    });
   
    