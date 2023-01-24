
import './App.css';
import React, {useState} from 'react';
import './App.css'
function App() {
	const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [branchName, setBranchName] = useState('');

	console.log(firstName, lastName, email, password, confirmPassword, branchName);
	const handleSubmit = () => {
	console.log('handle clicked', firstName +' '+ lastName +' '+ email +' '+ password +' '+ confirmPassword +' '+ branchName);
	}
    return(
       <div className="form">
		    <h2>Student Information Form</h2>
          <div>

First name: <input type="text" onChange={(event) => setFirstName(event.target.value)} />

</div>

<div>

Last name: <input type="text" onChange={(event) => setLastName(event.target.value)} />

</div>
<div>

Branch Name: <input type="text" onChange={(event) => setBranchName(event.target.value)} />

</div>

<div>

Email: <input type="text" onChange={(event) => setEmail(event.target.value)} />

</div>

<div>

Password: <input type="text" onChange={(event) => setPassword(event.target.value)} />

</div>
<div>

Confirm Password: <input type="text" onChange={(event) => setConfirmPassword(event.target.value)} />

</div>

<button onClick={handleSubmit} className="ButtonView">Submit</button>

</div>
	)
	
}
export default App;
