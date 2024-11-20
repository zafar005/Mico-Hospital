import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../css/dashbord.css'
import { useNavigate } from 'react-router-dom'

const Dashbord =()=>{

    const [dateTime, setDate] = useState('');
    const emaillocalstorage = localStorage.getItem('id')
   
    useEffect(() => {
        if(emaillocalstorage == ""){
            console.log("hello");
            navigate('/login')
        }

        patientDatalist();

        document.querySelector('#patientlist').style.display = 'none';
        document.querySelector('#appointment').style.display = 'none';
        document.querySelector('#records').style.display = 'none';
        document.querySelector('#prescription').style.display = 'none';
        document.querySelector('#patient-form').style.display = 'none';

      const updateDate = () => {
        const now = new Date();
        setDate(now.toLocaleDateString());
      };
      updateDate();
      const intervalId = setInterval(updateDate, 1000 * 60 * 60 * 24);
      return () => clearInterval(intervalId);
    }, []);

    // patientlists
    const [patientdata, getpatientdata] = useState("");
    useEffect(()=>{
        // patientDatalist();
    },[])
    const patientDatalist = () => {
        axios.get("http://localhost:5050/users/patientlist").then((response) => {
            getpatientdata(response.data.message);
        });
      };

    // logout
    
    
    const handleLogOut =()=>{
        localStorage.clear();
        navigate("/login");
    }



    const navigate = useNavigate();
    const [fullname ,getfullname] = useState('');
    const [age ,getage] = useState('');
    const [gender ,getgender] = useState('');
    const [contact ,getcontact] = useState('');
    const [address ,getaddress] = useState('');
    const [email ,getemail] = useState('');
    const [height ,getheight] = useState('');
    const [weight ,getweight] = useState('');
    const[showerror , getshowerror] = useState('')

    const fullnamehandler =(event)=>{
        getfullname(event.target.value)
    }
    const agehandler =(event)=>{
        getage(event.target.value)
    }
    const genderhandler =(event)=>{
        getgender(event.target.value)
    }
    const contacthandler =(event)=>{
        getcontact(event.target.value)
    }
    const addresshandler =(event)=>{
        getaddress(event.target.value)
    }
    const emailhandler =(event)=>{
        getemail(event.target.value)
    }
    const heighthandler =(event)=>{
        getheight(event.target.value)
    }
    const weighthandler =(event)=>{
        getweight(event.target.value)
    }
    const submithandler =()=>{
        if(fullname == ''){
            getshowerror("please enter full name !")
        }else if(age==''){
            getshowerror("please enter age !")
        }else if(gender==''){
            getshowerror("please slect gender !")
        }else if(contact==''){
            getshowerror("please enter contact no !")
        }else if(address==''){
            getshowerror("please enter address !")
        }else if(height==''){
            getshowerror("please enter height of patient !")
        }else if(weight==''){
            getshowerror("please enter weight of patient !")
        }else{
            const RegistrationData = {fullname:fullname,age:age,gender:gender,contact:contact,address:address,email:email,height:height,weight:weight};
            axios.post('http://localhost:5050/users/patientregistration',RegistrationData).then((respone)=>{
            console.log(respone);
            navigate('/dashbord');
            });
        }
    }

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setIsPopupVisible(true);
      getfullname('');
      getage('');
      getgender('');
      getcontact('');
      getaddress('');
      getemail('');
      getheight('');
      getweight('');
    };
  
    const closePopup = () => {
      setIsPopupVisible(false);
    };


    
    // useEffect(()=>{
    //     document.querySelector('#patientlist').style.display = 'none';
    //     document.querySelector('#appointment').style.display = 'none';
    //     document.querySelector('#records').style.display = 'none';
    //     document.querySelector('#prescription').style.display = 'none';
    //     document.querySelector('#patient-form').style.display = 'none';
    // },[])

   const showHome =()=>{
    const hideelement= document.querySelectorAll('#patientlist , #appointment, #records , #prescription , #patient-form');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#home');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addBG = document.querySelector('#home_');
    addBG.classList.add('active-button');
    const removeBG = document.querySelectorAll('#patient_ , #appointment_ , #records_, #prescription_');
    removeBG.forEach((element) => {
        element.classList.remove('active-button');
    });
   }

   const showPatientlist =()=>{
    const hideelement= document.querySelectorAll('#home , #appointment , #records, #prescription , #patient-form');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#patientlist');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addBG = document.querySelector('#patient_');
    addBG.classList.add('active-button');
    const removeBG = document.querySelectorAll('#home_ , #appointment_ #records_, #prescription_');
    removeBG.forEach((element) => {
        element.classList.remove('active-button');
    });
   }

   const showAppointment =()=>{
    const hideelement= document.querySelectorAll('#home , #patientlist , #records, #prescription , #patient-form');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#appointment');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addBG = document.querySelector('#appointment_');
    addBG.classList.add('active-button');
    const removeBG = document.querySelectorAll('#home_ , #patient_, #records_, #prescription_');
    removeBG.forEach((element) => {
        element.classList.remove('active-button');
    });
   }
   
   const showRecords =()=>{
    const hideelement= document.querySelectorAll('#home , #patientlist , #appointment, #prescription , #patient-form');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#records');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addBG = document.querySelector('#records_');
    addBG.classList.add('active-button');
    const removeBG = document.querySelectorAll('#home_ , #patient_ , #appointment_ , #prescription_');
    removeBG.forEach((element) => {
        element.classList.remove('active-button');
    });
   }

   const showPrescription =()=>{
    const hideelement= document.querySelectorAll('#home , #patientlist , #appointment , #records , #patient-form');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#prescription');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
    const addBG = document.querySelector('#prescription_');
    addBG.classList.add('active-button');
    const removeBG = document.querySelectorAll('#home_ , #patient_ , #appointment_ , #records_');
    removeBG.forEach((element) => {
        element.classList.remove('active-button');
    });
   }

   const showPatientForm =()=>{
    const hideelement= document.querySelectorAll('#home , #patientlist , #appointment , #records , #prescription');
    hideelement.forEach((element)=>{
        element.style.display = "none"
    })
    const showlement= document.querySelectorAll('#patient-form');
    showlement.forEach((element2)=>{
        element2.style.display = "block"
    })
   }

    return(
        <>
            <div class="header">
                <div class="profile">
                    <img src="doctor-profile.jpg" alt="Doctor's Profile" class="profile-img"/>
                    <div class="profile-info">
                        <h2>Dr. John Smith, MD</h2>
                    </div>
                </div>
                <div class="header-right">
                    <span>{dateTime}</span>
                    <div class="icons">
                    <button class="icon">🔔</button>
                    </div>
                </div>
                
            </div>
            <aside>
                <ul>
                    <li><a id='home_' onClick={showHome}>Home</a></li>
                    <li><a id='patient_' onClick={showPatientlist}>Patient List</a></li>
                    <li><a id='appointment_' onClick={showAppointment}>Appointments</a></li>
                    <li><a id='records_' onClick={showRecords}>Medical Records</a></li>
                    <li><a id='prescription_' onClick={showPrescription}>Prescriptions</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Support</a></li>
                    <li><a onClick={handleLogOut}>Logout</a></li>
                </ul>
            </aside>

            <main id='home'>
                <p>Welcome to your dashboard! Here you can manage your patient records, appointments, and prescriptions.</p>
                {/* <!-- Quick Actions Section --> */}
                <div class="quick-actions">
                    <div class="card">
                        <h3>Register a Patient</h3>
                        <p>Quickly add new patients to the system.</p>
                        <a class="btns" onClick={showPatientForm}>Register</a>
                    </div>
                    <div class="card">
                        <h3>Schedule an Appointment</h3>
                        <p>Book appointments with ease.</p>
                        <a href="#" class="btns">Schedule</a>
                    </div>
                    <div class="card">
                        <h3>View Today's Appointments</h3>
                        <p>Check your schedule for the day.</p>
                        <a onClick={showAppointment} class="btns">View</a>
                    </div>
                </div>
                
                {/* <!-- Patient Overview Section --> */}
                <div class="overview">
                    <div class="card">
                        <h3>Recent Patients</h3>
                        <p>Access profiles of recently added or viewed patients.</p>
                        <a onClick={showPatientlist} class="btns">View Patients</a>
                    </div>
                    <div class="card">
                        <h3>Patient Stats</h3>
                        <p>Total Patients: 120</p>
                        <p>Appointments Today: 5</p>
                        <a href="#" class="btns">View Details</a>
                    </div>
                </div>
                
                {/* <!-- Notifications Section --> */}
                <div class="notifications">
                    <div class="card">
                        <h3>Upcoming Appointments</h3>
                        <p>You have 5 upcoming appointments.</p>
                        <a href="#" class="btns">View Appointments</a>
                    </div>
                    <div class="card">
                        <h3>Pending Tasks</h3>
                        <p>2 prescription renewals and 3 unreviewed records.</p>
                        <a href="#" class="btns">View Tasks</a>
                    </div>
                </div>
                
                {/* <!-- Recommendations Section --> */}
                <div class="recommendations">
                    <div class="card">
                        <h3>Follow-Up Suggestions</h3>
                        <p>5 patients are due for follow-up visits.</p>
                        <a href="#" class="btns">View Follow-Ups</a>
                    </div>
                    <div class="card">
                        <h3>Prescription Refills</h3>
                        <p>2 patients need prescription refills.</p>
                        <a href="#" class="btns">Manage Refills</a>
                    </div>
                </div>
                
                
            </main>
            <main id='patientlist'>
                <h2>Patient List</h2>
                <div class="search-bar">
                    <input type="text" id="search" placeholder="Search by name or ID"/>
                    <select id="filter">
                        <option value="all">All Patients</option>
                        <option value="age">Sort by Age</option>
                        <option value="visit">Sort by Last Visit</option>
                    </select>
                </div>

                <table>
                    <tr>
                        <th>Patient ID</th>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Contact Number</th>
                        <th>Action</th>
                    </tr>
                    {patientdata &&
                        patientdata.map((user) =>(
                            <tr className="" >
                                <td>{user._id}</td>
                                <td>{user.fullname}</td>
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.contact}</td>
                                <td>
                                    <input type="button" className='action-btn' value="view" onClick={() => {navigate('/edit/'+user._id)}} />
                                </td>
                            </tr>
                        ))}
                    <tbody id="patient-list">
                    </tbody>
                </table>
            </main>
            <main id='appointment'>
                <h2>Manage Appointments</h2>
                <p>Here is a list of upcoming appointments:</p>

                {/* <!-- Appointment Table --> */}
                <table>
                    <thead>
                        <tr>
                            <th>Appointment ID</th>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>101</td>
                            <td>John Doe</td>
                            <td>Aug 25, 2024</td>
                            <td>10:00 AM</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Jane Smith</td>
                            <td>Aug 26, 2024</td>
                            <td>11:30 AM</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                        <tr>
                            <td>102</td>
                            <td>Jane Smith</td>
                            <td>Aug 26, 2024</td>
                            <td>11:30 AM</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <main id='records'>
                <h2>Patient Medical Records</h2>
                <p>Access and update patient medical records here:</p>

                {/* <!-- Medical Records Table --> */}
                <table>
                    <thead>
                        <tr>
                            <th>Record ID</th>
                            <th>Patient Name</th>
                            <th>Condition</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>301</td>
                            <td>John Doe</td>
                            <td>Diabetes</td>
                            <td>Aug 24, 2024</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                        <tr>
                            <td>302</td>
                            <td>Jane Smith</td>
                            <td>Hypertension</td>
                            <td>Aug 20, 2024</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <main id='prescription'>
                <h2>Manage Prescriptions</h2>
                <p>Here is a list of patient prescriptions:</p>

                {/* <!-- Prescriptions Table --> */}
                <table>
                    <thead>
                        <tr>
                            <th>Prescription ID</th>
                            <th>Patient Name</th>
                            <th>Medication</th>
                            <th>Date Issued</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>501</td>
                            <td>John Doe</td>
                            <td>Metformin</td>
                            <td>Aug 23, 2024</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                        <tr>
                            <td>502</td>
                            <td>Jane Smith</td>
                            <td>Lisinopril</td>
                            <td>Aug 22, 2024</td>
                            <td><input type="button" className='action-btn' value="View" /></td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <main id='patient-form'>
                <div class="form-container">
                    <h2>Patient Registration Form</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div style={{color:"red",fontWeight:"600",textAlign:"center",paddingBottom:"10px"}}>{showerror}</div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Name:</label>
                                <input type="text" id="name" value={fullname} onChange={fullnamehandler} required/>
                            </div>
                            <div class="form-group">
                                <label for="age">Age:</label>
                                <input type="number" id="age" value={age} onChange={agehandler} required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="gender">Gender:</label>
                                <select id="gender" value={gender} onChange={genderhandler} name="gender" required>
                                    <option value="">Select</option>
                                    <option value='male'>Male</option>
                                    <option value='female'>Female</option>
                                    <option value='others'>Other</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="contact">Contact:</label>
                                <input type="text" id="contact" value={contact} onChange={contacthandler} required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="address">Address:</label>
                                <input type="text" id="address" value={address} onChange={addresshandler} required/>
                            </div>
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input type="email" id="email" value={email} onChange={emailhandler} required/>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="height">Height (cm):</label>
                                <input type="number" id="height" value={height} onChange={heighthandler} required/>
                            </div>
                            <div class="form-group">
                                <label for="weight">Weight (kg):</label>
                                <input type="number" id="weight" value={weight} onChange={weighthandler} required/>
                            </div>
                        </div>
                        <button type="submit" class="submit-button" id='submit-btn' onClick={submithandler}>Register</button>
                    </form>
                </div>
                {isPopupVisible && (
                    <>
                    <div className="overlay" onClick={closePopup}></div>
                    <div className="popup">
                        <button id="closeButton" title='close' onClick={closePopup}>×</button>
                        <h3 class="same">Patient registered successfully!</h3>
                        <p class="same">Proceed to:</p>
                        <div id='pop-btns'>
                            <button id="patientListBtn" onClick={showPatientlist}>Patient List</button>
                            <button id="addNewPatientBtn" onClick={closePopup}>Add a New Patient</button>
                        </div>
                    </div>
                    </>
                )}
            </main>

        </>
    );
}
export default Dashbord;