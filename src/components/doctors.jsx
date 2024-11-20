import '../css/doctor.css'
const Doctor = ()=>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous"referrerpolicy="no-referrer"/>
        <section class="doctors-section">
            <h1>Our <span class="doctor">Doctors</span></h1>
            <div class="doctors-container">
                <div class="doctor-card">
                    <img src="../../images/team1.jpg" alt="Morco"/>
                    <h3>Morco</h3>
                    <p>MBBS</p>
                    <div class="social-links">
                        <a><i class="fab fa-facebook"></i></a>
                        <a><i class="fab fa-twitter"></i></a>
                        <a><i class="fab fa-linkedin"></i></a>
                        <a><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="doctor-card">
                    <img src="../../images/team2.jpg" alt="Hennry"/>
                    <h3>Hennry</h3>
                    <p>MBBS</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="doctor-card">
                    <img src="../../images/team3.jpg" alt="Jenni"/>
                    <h3>Jenni</h3>
                    <p>MBBS</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Doctor;