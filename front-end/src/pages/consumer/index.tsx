import { type NextPage } from "next";
import TextField from '@mui/material/TextField';
import { useState } from "react";

const checkFormIsComplete = (form) => {
    for (let formKey in form) {
      if (form[formKey] === "") {
        console.log("Invalid form")
        return false;
      }
    }
    console.log("valid form")
    return true;
}

const ConsumerPage: NextPage = () => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    postcode: "",
    state: ""
  });

  const [error, setError] = useState(false);

  const submitJob = () => {
    //check fields
    if (checkFormIsComplete(formData)) {
      // send axious post and redirect with message
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <h1>Create a Job to Submit</h1>
      <TextField id="type" error={error} label="Job Type" helperText="Enter the type of Job you would like i.e. Dress" variant="filled" value={formData.type} onChange={(e) => setFormData({...formData, type: e.target.value})}/>
      <TextField id="description" error={error} label="Description" helperText="Write a brief descrition of the job you would like done" variant="filled" multiline rows={4} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
      <TextField id="budget" label="Budget (Optional)" type="number" InputLabelProps={{shrink: true,}} variant="filled"/>
      <h3>Your Details</h3>
      <TextField id="firstName" error={error} label="First Name" variant="filled" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})}/>
      <TextField id="lastName" error={error} label="Last Name" variant="filled" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})}/>
      <TextField id="phoneNumber" error={error} label="Phone Number" variant="filled" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}/>
      <TextField id="email" error={error} label="Email" variant="filled" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      <TextField id="address" error={error} label="Address" helperText="Enter the first line of your address" variant="filled" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})}/>
      <TextField id="postcode" error={error}  label="Postcode" type="number" InputLabelProps={{shrink: true,}} variant="filled" value={formData.postcode} onChange={(e) => setFormData({...formData, postcode: e.target.value})}/>
      <TextField id="state" error={error} label="State" variant="filled" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})}/>


     <button onClick={submitJob}>Post Job</button>
    </>
  );
};

export default ConsumerPage;