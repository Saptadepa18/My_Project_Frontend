import MenuExampleInvertedSecondary from "./Headers"

export const AboutUs = () => {
  return (
    <>
    <MenuExampleInvertedSecondary/>
    <div className="heading">
        <h1>About Us</h1>
        {/* <p>Who we are</p> */}
        <p>We are a team of passionate individuals dedicated to providing the best user data services available. With years of experience and expertise in data management, we strive to deliver accurate, reliable, and secure user information to empower businesses and individuals alike</p>
    </div>
    <div className="container">
    <section className="about">
        <div className="about-image">
            <img src="https://news.mit.edu/sites/default/files/images/201603/MIT-User-Control.jpg"></img>
        </div>
        <div className="about-content">
            <h2>Our Mission</h2>
            <p>Our mission is to simplify the process of accessing and managing user data. We believe in transparency, privacy, and ethical data practices. By offering comprehensive solutions and cutting-edge technology, we aim to transform the way user data is utilized and safeguarded.</p>
        </div>
    </section>
    </div>
    </>
  )
}
export default AboutUs