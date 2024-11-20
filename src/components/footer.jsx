import '../css/footer.css'
const Footer =()=>{
    return(
        <>
        <footer>
            <div class="footer-logo">
                <img src="../../images/logo.png" alt="Mico Logo"/>
                <input type="email" class="subscribe-input" placeholder="Your email"/>
                <button class="subscribe-btn">Subscribe</button>
            </div>
            <div class="footer-container">
                <div class="footer-section">
                    <h3>ADDRESS</h3>
                    <ul>
                        <li>Location</li>
                        <li>Call +01 1234567890</li>
                        <li>Email: demo@gmail.com</li>
                    </ul>
                    <div class="social-links">
                        <a href="#">&#xf09a;</a> 
                        <a href="#">&#xf099;</a>
                        <a href="#">&#xf08c;</a> 
                        <a href="#">&#xf16d;</a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Treatment</a></li>
                        <li><a href="#">Doctors</a></li>
                        <li><a href="#">Testimonial</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                <h3>LATEST POSTS</h3>
                    <ul>
                        <li><a href="#">Normal distribution</a></li>
                        <li><a href="#">Normal distribution</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>NEWS</h3>
                    <ul>
                        <li><a href="#">Normal distribution</a></li>
                        <li><a href="#">Normal distribution</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2024 All Rights Reserved By Mico Hospital</p>
            </div>
        </footer>
        </>
    )
}
export default Footer;