import { render,screen } from "@testing-library/react";
import AboutUs from "../components/AboutUs";
import { MemoryRouter } from "react-router-dom";

test("about us page",()=>{
    render(
    <MemoryRouter>
    <AboutUs/>
    </MemoryRouter>)
    const testElement=screen.getByText("Our mission is to simplify the process of accessing and managing user data. We believe in transparency, privacy, and ethical data practices. By offering comprehensive solutions and cutting-edge technology, we aim to transform the way user data is utilized and safeguarded.");
    expect(testElement).toBeInTheDocument();
})