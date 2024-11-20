import '../css/treatment.css'
const Treatment = ()=>{
    return(
        <>
        <section class="treatment-section">
            <h2>Hospital <span class="highlight">Treatment</span></h2>

            <div class="treatment-container">
                {/* <!-- Nephrologist Care --> */}
                <div class="treatment-box">
                    <img src="../../images/t1.png" alt="Nephrologist Care"/>
                    <h3>Nephrologist Care</h3>
                    <p>Alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                    <a href="#" class="read-more">READ MORE</a>
                </div>

                {/* <!-- Eye Care --> */}
                <div class="treatment-box">
                    <img src="../../images/t2.png" alt="Eye Care"/>
                    <h3>Eye Care</h3>
                    <p>Alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                    <a href="#" class="read-more">READ MORE</a>
                </div>

                {/* <!-- Pediatrician Clinic --> */}
                <div class="treatment-box">
                    <img src="../../images/t3.png" alt="Pediatrician Clinic"/>
                    <h3>Pediatrician Clinic</h3>
                    <p>Alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                    <a href="#" class="read-more">READ MORE</a>
                </div>

                {/* <!-- Parental Care --> */}
                <div class="treatment-box">
                    <img src="../../images/t4.png" alt="Parental Care"/>
                    <h3>Parental Care</h3>
                    <p>Alteration in some form, by injected humour, or randomised words which don't look even slightly...</p>
                    <a href="#" class="read-more">READ MORE</a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Treatment;