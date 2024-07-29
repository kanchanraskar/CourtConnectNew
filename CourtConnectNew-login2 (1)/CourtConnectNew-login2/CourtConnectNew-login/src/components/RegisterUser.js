import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './RegisterUser.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation or submission logic here
    console.log('Form submitted with:', formData);
  };

  return (
    <Container className="mt-5 formcontainer">
      <Form onSubmit={handleSubmit}>
        <h3>Register Form</h3>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUserFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your Name"
            name="fullname"
            value={formData.formUserFullName}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUserDateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            name="dateOfBirth"
            value={formData.formUserDateOfBirth}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUserMobileNo">
          <Form.Label>Mobile No </Form.Label>
          <Form.Control
            type="tel"
            name="mobileNo"
            value={formData.formUserMobileNo}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUserProfilePic">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            name="profilePic"
            value={formData.formUserProfilePic}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div class="form-group">
        <label for="gender">Gender:</label><br/>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="male" name="gender" value="male"/>
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="female" name="gender" value="female"/>
          <label class="form-check-label" for="female">Female</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="transgender" name="gender" value="transgender"/>
          <label class="form-check-label" for="transgender">Transgender</label>
        </div>
        </div>
        <div class="form-group">
        <label for="gender">Select:</label><br/>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="male" name="gender" value="male"/>
          <label class="form-check-label" for="male">Player</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="radio" id="female" name="gender" value="female"/>
          <label class="form-check-label" for="female">Turf Owner</label>
        </div>
        <div class="form-check form-check-inline">
        </div>
        </div>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            minLength={6}
            required
          />
        </Form.Group>
        
      

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={6}
            required
          />
        </Form.Group>
        <div class="d-grid mt-4">
        <Button className="btn btn-primary" variant="primary" type="submit">
          Register
        </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegisterForm;
