import { useFormik } from "formik"
import { ContactUsSchema } from "../schemas";
import MenuExampleInvertedSecondary from "./Headers";
import axios from "axios";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

interface FormValues{
    name: string;
    phone:string;
    email: string;
    subject: string,
    message: string;
}

const initialValues: FormValues={
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
}

export const ContactUs = () => {
    const{
        values,errors,touched,handleBlur,handleChange,handleSubmit
    }=useFormik({
        initialValues: initialValues,
        validationSchema: ContactUsSchema,
        onSubmit:(values,action)=>{
            mutate(values);
            console.log(values)
            action.resetForm();
            toast.success("Form submitted successfully", { position: "top-center" });

        }
    })

    const onSubmit1=async(values:FormValues)=>{
        try{
            const response= await axios.post("http://localhost:3001/contacts",values);
            return response.data;
        }catch(error)
        {
            console.log(error);
        }
    }

    const {mutate,isLoading}=useMutation(onSubmit1);
  return (
    <>
    <MenuExampleInvertedSecondary/>
    <div className="container">
        <h1>Connect With Us</h1>
        <p>We would love to respond to your quries and help you succeed. <br></br>Feel free to get in touch with us</p>
        <div className="contact-box">
            <div className="contact-left">
                <h3>Sent your request</h3>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text"
                             name="name" placeholder="Saptadeepa Mitra"
                             value={values.name}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             ></input>
                             {errors.name && touched.name ?(
                             <p className="validate">{errors.name}</p>
                             ): null}
                        </div>
                        <div className="input-group">
                            <label>Phone</label>
                            <input type="text" name="phone" 
                            placeholder="+91 8240896728"
                            value={values.phone}
                             onChange={handleChange}
                             onBlur={handleBlur}
                            ></input>
                            {errors.phone && touched.phone ?(
                             <p className="validate">{errors.phone}</p>
                             ): null}
                        </div>
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Email</label>
                            <input type="text" name="email"
                             placeholder="saptadeepamitra20@gmail.com"
                             value={values.email}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             ></input>
                             {errors.email && touched.email ?(
                             <p className="validate">{errors.email}</p>
                             ): null}
                        </div>
                        <div className="input-group">
                            <label>Subject</label>
                            <input type="text" name="subject"
                             placeholder="Product Demo"
                             value={values.subject}
                             onChange={handleChange}
                             onBlur={handleBlur}
                             ></input>
                             {errors.subject && touched.subject ?(
                             <p className="validate">{errors.subject}</p>
                             ): null}
                        </div>
                    </div>
                    <label>Message</label>
                    <textarea rows={5} name="message" 
                    placeholder="your message"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    ></textarea>
                    {errors.message && touched.message ?(
                             <p className="validate">{errors.message}</p>
                             ): null}
                    <button type="submit" className="submit">Send</button>
                </form>
            </div>
            <div className="contact-right">
                <h3>Reach us</h3>
                <table>
                    <tr>
                     <td>Email</td>
                    <td>contactus@gmail.com</td>
                    </tr>

                    <tr>
                     <td>Phone</td>
                    <td>+8735681780</td>
                    </tr>

                    <tr>
                     <td>Address</td>
                    <td>@212, Ground floor,7th cross
                        <br></br>
                        Kakurgachi, Kolkata, West Bengal
                    </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    </>
  )
}
export default ContactUs