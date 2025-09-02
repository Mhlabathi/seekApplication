import '../styles/education.css';
import { useState } from 'react';
import EduDashboard from './eduDashboard';

export default function Education(){
    const [educationData, setEducationData] = useState(null);

    const handleSaveEducationData = (data) => {
        setEducationData(data);
    }

    return (
        <>
            <h3>Education Details</h3>
            <div className="education-container">
                <EducationDetails onSave={handleSaveEducationData} />
                {educationData && <EduDashboard educationForm={educationData} />}
            </div>
        </>
    );
}

function EducationDetails({ onSave }){
    const [educationForm, setEducationForm] = useState({
        course:'',
        school: '',
        start: '',
        end: ''
    });
    const [isDisabled, setIsDisabled] = useState(false);
    
    const updateField = (field, value) => {
        setEducationForm(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (educationForm.course && educationForm.school && educationForm.start && educationForm.end ) {
            onSave(educationForm);
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
        <>
            <form onSubmit={handleSubmit}>
                <div className="label-block">
                    <label htmlFor="course">Course:</label>
                    <input type="text"
                        name="course"
                        placeholder="field of study"
                        value={educationForm.course}
                        disabled={isDisabled}
                        onChange={(e) => updateField('course',e.target.value)}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="course">School of Study:</label>
                    <input type="text"
                        name="school"
                        placeholder="school"
                        value={educationForm.school}
                        disabled={isDisabled}
                        onChange={(e) => updateField('school',e.target.value)}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="course">Start Date:</label>
                    <input type="date"
                        name="start"
                        placeholder=""
                        value={educationForm.start}
                        disabled={isDisabled}
                        onChange={(e) => updateField('start',e.target.value)}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="end">End Date:</label>
                    <input type="date"
                        name="end"
                        placeholder=""
                        value={educationForm.end}
                        disabled={isDisabled}
                        onChange={(e) => updateField('end',e.target.value)}
                        >
                    </input>
                </div>
                <div>
                    <button 
                        type='submit'
                        onClick={disableFields}
                        >Save education details
                    </button>
                    <button 
                        type='text'
                        onClick={ableFields}
                        >Edit
                    </button>
                </div>
            </form>
        </>
    );
}