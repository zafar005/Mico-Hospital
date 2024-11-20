import '../css/patientform.css'
const PatientForm =()=>{
    return(
        <>
        <div className="patient-form-body">
            <form class="registration-form">
                <h2>Patient Registration Form</h2>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required/>

                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="" disabled selected>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>

                <label for="contact">Contact:</label>
                <input type="text" id="contact" name="contact" required />

                <label for="address">Address:</label>
                <input type="text" id="address" name="address" required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label for="height">Height (cm):</label>
                <input type="number" id="height" name="height" step="0.1" required />

                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" step="0.1" required />

                <input type="submit" value="Register" />
            </form>
        </div>
        </>
    )
}
export default PatientForm