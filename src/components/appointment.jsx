import '../css/appointment.css'
const Appointment =()=>{
    return(
        <>
        <section class="appointment-form">
            <div class="appointment-content">
                <h2>BOOK <span class="highlight">APPOINTMENT</span></h2>
                <form>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="patient-name">Patient Name</label>
                            <input type="text" id="patient-name" placeholder="Please enter your full name."/>
                        </div>
                        <div class="form-group">
                            <label for="phone-number">Phone Number</label>
                            <input type="text" id="phone-number" placeholder="Please enter your 10-digit phone number."/>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="phone-number">Age</label>
                            <input type="text" id="phone-number" placeholder="Please enter Age."/>
                        </div>
                        <div class="form-group">
                            <label for="doctor-name">Doctor's Name</label>
                            <select id="doctor-name">
                                {/*<option>select the doctor</option> */}
                                <option>Dr. Smith</option>
                                <option>Dr. Johnson</option>
                                <option>Dr. Lee</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label for="symptoms">Symptoms</label>
                            <input type="text" id="symptoms" placeholder="Describe the symptoms you are experiencing."/>
                        </div>
                        <div class="form-group">
                            <label for="appointment-date">Choose Date</label>
                            <input type="date" id="appointment-date" placeholder='Pick a suitable date for your appointment.' />
                        </div>
                    </div>

                    <div class="form-row submit-btn">
                        <button type="submit">SUBMIT NOW</button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}
export default Appointment;