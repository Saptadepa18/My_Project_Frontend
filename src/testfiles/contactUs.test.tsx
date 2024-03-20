import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactUs } from "../components/ContactUs";
import axios from "axios"; 
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";
 

jest.mock("axios");
 
const queryClient=new QueryClient();

const mockResponse = { message: "Request sent successfully" };
 
test("contact form submission", async () => {

(axios.post as jest.Mock).mockResolvedValueOnce({ data: { success: true } });
 
  render(
    <MemoryRouter>
    <QueryClientProvider client={queryClient}>
  <ContactUs />
  </QueryClientProvider>
  </MemoryRouter>
  );
 
  // Fill in the form (assuming placeholders are unique)
  fireEvent.change(screen.getByPlaceholderText("Saptadeepa Mitra"), {
    target: { value: "testuser" },
  });
  fireEvent.change(screen.getByPlaceholderText("+91 8240896728"), {
    target: { value: "1234567890" },
  });
  fireEvent.change(screen.getByPlaceholderText("saptadeepamitra20@gmail.com"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Product Demo"), {
    target: { value: "Test Subject" },
  });
  fireEvent.change(screen.getByPlaceholderText("your message"), {
    target: { value: "Test Message" },
  });
 
fireEvent.click(screen.getByText("Send"));

});


