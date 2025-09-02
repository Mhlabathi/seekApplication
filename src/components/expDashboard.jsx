
export default function ExpDashboard({experienceForm}) {
    if (!experienceForm) {
        return (
            <div className="experience">
                <h2>User Experience</h2>
                <p>No personal data available yet.</p>
            </div>
        );
    }

    return(
        <div className="experience">
            <div className="profile-experience">
                <p>Company: {experienceForm.company}</p>
                <p>Position: {experienceForm.position}</p>
                <p>Responsibilities: {experienceForm.responsibility}</p>
                <p>Start date: {experienceForm.start}</p>
                <p>End date: {experienceForm.end}</p>
            </div>
        </div>
    );
}