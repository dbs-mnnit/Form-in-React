import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    emailAddress: '',
    contact: '',
    gender: '',
    bestSubject: [],
    resume: null,
    url: '',
    about: '',
    choice: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        bestSubject: checked
          ? [...prevData.bestSubject, value]
          : prevData.bestSubject.filter(subject => subject !== value),
      }));
    } else if (type === 'file') {
      setFormData(prevData => ({
        ...prevData,
        [name]: files[0],
      }));
    } else if(type === 'reset'){
      setFormData(prevData => ({
        firstName: '',
        middleName: '',
        lastName: '',
        emailAddress: '',
        contact: '',
        gender: '',
        bestSubject: [],
        resume: null,
        url: '',
        about: '',
        choice: ''
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form>
      <label htmlFor="firstName">First Name<span>*</span></label><br/>
      <input type="text" id='firstName' name='firstName' value={formData.firstName} placeholder='Enter First Name' onChange={handleChange} required/><br/>

      <label htmlFor="middleName">Middle Name</label><br/>
      <input type="text" id='middleName' name='middleName' value={formData.middleName} placeholder='Enter Middle Name' onChange={handleChange} /><br/>

      <label htmlFor="lastName">Last Name<span>*</span></label><br/>
      <input type="text" id='lastName' name='lastName' value={formData.lastName} placeholder='Enter Last Name' onChange={handleChange} required/><br/>

      <label htmlFor="emailAddress">Enter Email<span>*</span></label><br/>
      <input type="email" id="emailAddress" name='emailAddress' value={formData.emailAddress} placeholder='Enter Email Address' onChange={handleChange} required/><br/>

      <label htmlFor="contact">Contact<span>*</span></label><br/>
      <input type="tel" id="contact" name="contact" value={formData.contact} placeholder="Enter contact number" onChange={handleChange} required/><br/>

      <label htmlFor="gender">Gender<span>*</span></label><br/>
      <div className="gender-group">
        <input type="radio" name="gender" id="male" value='Male' checked={formData.gender === 'Male'} onChange={handleChange} />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value='Female' checked={formData.gender === 'Female'} onChange={handleChange} />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="other" value='Other' checked={formData.gender === 'Other'} onChange={handleChange} />
        <label htmlFor="other">Other</label>
      </div><br/>

      <label htmlFor="bestSubject">Your Best Subject<span>*</span></label><br/>
      <div className="best-subject-group">
        <input type="checkbox" name="bestSubject" id="bestSubjectEnglish" value='English' checked={formData.bestSubject.includes('English')} onChange={handleChange} />
        <label htmlFor="bestSubjectEnglish">English</label>
        <input type="checkbox" name="bestSubject" id="bestSubjectMaths" value='Maths' checked={formData.bestSubject.includes('Maths')} onChange={handleChange} />
        <label htmlFor="bestSubjectMaths">Maths</label>
        <input type="checkbox" name="bestSubject" id="bestSubjectPhysics" value='Physics' checked={formData.bestSubject.includes('Physics')} onChange={handleChange} />
        <label htmlFor="bestSubjectPhysics">Physics</label>
      </div><br/>

      <label htmlFor="resume">Upload Resume<span>*</span></label><br/>
      <input type="file" name="resume" id="resume" onChange={handleChange} /><br/>

      <label htmlFor="url">Enter URL</label><br/>
      <input type="url" name="url" id="url" value={formData.url} onChange={handleChange} /><br/>

      <label htmlFor="choice">Select your single choice</label><br/>
      <select name="choice" id="choice" value={formData.choice} onChange={handleChange}>
        <option value="choice1">Choice 1</option>
        <option value="choice2">Choice 2</option>
        <option value="choice3">Choice 3</option>
        <option value="choice4">Choice 4</option>
        <option value="choice5">Choice 5</option>
      </select><br/>

      <label htmlFor="about">About</label><br/>
      <input type="text" id='about' name='about' value={formData.about} placeholder='Enter About Yourself' onChange={handleChange} /><br/>

      
      <input type="reset" id='reset' value="RESET" onClick={handleChange}/>
      <input type="submit" id='submit' value="SUBMIT" />
    </form>
  );
}

export default Form;
