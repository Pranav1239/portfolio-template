import React, {useState} from 'react'
import '../styles/contac.css'

const Contact = () => {
    const [formData , setformData] = useState("");
    
      const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name] : e.target.value
        })
        console.log(formData)
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3040/contact' , {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                  "Content-Type": "application/json",
                },
            })
            const data = res.json()
            console.log(data);
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      };
  return (
    <div className="contact-form">
    <h2>Contact Us</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <textarea
        name="reason"
        placeholder="Reason for Contact"
        value={formData.reason}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Contact