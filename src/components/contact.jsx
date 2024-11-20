import '../css/contact.css'
const Contact =()=>{
    return(
        <>
        <section class="contact-section">
            <div class="contact-container">
                <div class="contact-form">
                    <h2>Get in Touch</h2>
                    <form action="#">
                        <input type="text" placeholder="Full Name" required/>
                        <input type="email" placeholder="Email" required/>
                        <input type="text" placeholder="Phone Number" required/>
                        <textarea placeholder="Message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
            </div>
                <div class="contact-image">
                    <img src="../../images/contact-img.jpg" alt="Doctor Consultation"/>
                </div>
            </div>
         </section>
        </>
    )
}
export default Contact;