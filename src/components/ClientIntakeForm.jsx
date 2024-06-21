// src/components/ClientIntakeForm.js

import { useState } from 'react';
import styled from 'styled-components';


const FormContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);  
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  border-radius: 20px;  
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CheckboxLabel = styled.label`
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: red;
  border: none;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: gold;
  }
`;

const ClientIntakeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: '',
    needs: []
  });
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      if (checked) {
        return { ...prevData, needs: [...prevData.needs, name] };
      } else {
        return { ...prevData, needs: prevData.needs.filter((need) => need !== name) };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit-form.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <FormContainer>
      
      <h3> Fill in the intake form for a FREE consultation.</h3>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contactMethod">Preferred Contact Method</Label>
          <Select id="contactMethod" name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="Text">Text</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>What are your needs? (Select all that apply)</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <Input type="checkbox" name="Consultation" onChange={handleCheckboxChange} />
              Consultation
            </CheckboxLabel>
            <CheckboxLabel>
              <Input type="checkbox" name="Representation" onChange={handleCheckboxChange} />
              Representation
            </CheckboxLabel>
            <CheckboxLabel>
              <Input type="checkbox" name="Documentation" onChange={handleCheckboxChange} />
              Documentation
            </CheckboxLabel>
            <CheckboxLabel>
              <Input type="checkbox" name="Other" onChange={handleCheckboxChange} />
              Other
            </CheckboxLabel>
          </CheckboxGroup>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      {response && <p>{response}</p>}
    </FormContainer>
  );
};

export default ClientIntakeForm;
