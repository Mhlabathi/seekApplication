import { useState } from 'react'
import ExpDashboard from './expDashboard';

export default function Experience(){
    const [experienceDetails, setExperienceDetails] = useState(null);

    const handleSaveExperience = (data) => {
        setExperienceDetails(data);
    }

    return (
        <>
            <h3>Practical Experience</h3>
            <ExperienceDetails onSave={handleSaveExperience} />
            { experienceDetails && <ExpDashboard experienceForm={experienceDetails}/>}
        </>
    )
}

function ExperienceDetails({ onSave }){
    const [experienceForm, setExperienceForm] = useState({
            company:'',
            position: '',
            responsibility:'',
            start: '',
            end: ''
        });
        const [isDisabled, setIsDisabled] = useState(false);
        
        const updateField = (field, value) => {
            setExperienceForm(prev => ({
                ...prev,
                [field]: value
            }));
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            if (experienceForm.company && experienceForm.position && experienceForm.responsibility && experienceForm.start && experienceForm.end ) {
                onSave(experienceForm);
            } else {
                alert('Please fill in all fields');
            }
        }
    
        const disableFields = () => {
            if(!isDisabled)
                setIsDisabled(!isDisabled);
            else return;
        }
    
        const ableFields = () => {
            if(isDisabled)
                setIsDisabled(!isDisabled);
            else return;
        }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="label-block">
                    <label htmlFor="company">Company name:</label>
                    <input type="text"
                        name="company"
                        placeholder="Company name"
                        value={experienceForm.company}
                        onChange={(e) => updateField('company', e.target.value)}
                        disabled={isDisabled}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="position">Position:</label>
                    <input type="text"
                        name="position"
                        placeholder="Position"
                        value={experienceForm.position}
                        onChange={(e) => updateField('position', e.target.value)}
                        disabled={isDisabled}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="position">Responsibilities:</label>
                    <textarea type="textArea"
                        name="responsibility"
                        placeholder="Responsibilities"
                        value={experienceForm.responsibility}
                        onChange={(e) => updateField('responsibility', e.target.value)}
                        disabled={isDisabled}
                        >
                    </textarea>
                </div>
                <div className="label-block">
                    <label htmlFor="start">Start date:</label>
                    <input type="date"
                        name="start"
                        placeholder=""
                        value={experienceForm.start}
                        onChange={(e) => updateField('start', e.target.value)}
                        disabled={isDisabled}
                        >
                    </input>
                </div>
                <div className="label-block">
                    <label htmlFor="end">End date:</label>
                    <input type="date"
                        name="end"
                        placeholder=""
                        value={experienceForm.end}
                        onChange={(e) => updateField('end', e.target.value)}
                        disabled={isDisabled}
                        >
                    </input>
                </div>
                <div>
                    <button type='submit'
                        onClick={disableFields}
                        >Save experience details
                    </button>
                    <button type='text'
                        onClick={ableFields}
                        >Edit
                    </button>
                </div>
            </form>
        </div>
    )
}