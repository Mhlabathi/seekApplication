import { useState } from 'react';
import '../styles/personal.css';
import Dashboard from './dashboard';


export default function Personal(){
    const [personalData, setPersonalData] = useState(null);

    const handleSavePersonalData = (data) => {
        setPersonalData(data);
    };
    
    return (
        <div className='personalDetails'>
            <h3>Personal Details</h3>
            <div className="personal-container">
                <PersonalForm onSave={handleSavePersonalData} />
                {personalData && <Dashboard personalForm={personalData} />}
            </div>
        </div>
    );
}

function PersonalForm({ onSave }){
    const [personalForm, setPersonalForm] = useState({
        name:'',
        surname: '',
        id: '',
        email: '',
        number: ''
    });
    const [isDisabled, setIsDisabled] = useState(false);
    
    const updateField = (field, value) => {
        setPersonalForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (personalForm.name && personalForm.surname && personalForm.email && personalForm.id && personalForm.number) {
            onSave(personalForm);
        } else {
            alert('Please fill in all fields');
        }
    }

    const disableFields = () => {
        if(!isDisabled)
            setIsDisabled(!isDisabled);
    }

    const ableFields = () => {
        if(isDisabled)
            setIsDisabled(!isDisabled);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='label-block'>
                    <label htmlFor="name">First Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="first name"
                        value={personalForm.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        disabled={isDisabled}
                        required
                        >
                    </input>
                </div>
                <div className='label-block'>
                    <label htmlFor="surname">Last Name:</label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="last name"
                        value={personalForm.lastname}
                        onChange={(e) => updateField('surname', e.target.value)}
                        disabled={isDisabled}
                        required
                        >
                    </input>
                </div>
                <div className='label-block'>
                    <label htmlFor="identity">ID No.:</label>
                    <input type="text"
                        id="identity"
                        placeholder="ID number"
                        value={personalForm.id}
                        onChange={(e) => updateField('id', e.target.value)}
                        disabled={isDisabled}
                        required
                        >
                    </input>
                </div>
                <div className='label-block'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="mail"
                        id="email"
                        placeholder="Email@example.com"
                        value={personalForm.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        disabled={isDisabled}
                        required
                        >
                    </input>
                </div>
                <div className='label-block'>
                    <label htmlFor="number">Phone number:</label>
                    <input type="text"
                        id="number"
                        placeholder="Phone number"
                        value={personalForm.number}
                        onChange={(e) => updateField('number', e.target.value)}
                        disabled={isDisabled}
                        required
                        >
                    </input>
                </div>
                <div> <button 
                        className='savePersonal'
                        type='submit'
                        onClick={disableFields}
                        >Save personal information
                      </button>
                      <button 
                        className='editPersonal'
                        type='text'
                        onClick={ableFields}
                        >Edit
                      </button>
                </div>
            </form>
        </div>
    );
}