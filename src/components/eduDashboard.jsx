
export default function EduDashboard({educationForm}) {
    if (!educationForm) {
        return (
            <div className="profile">
                <h2>User Profile</h2>
                <p>No personal data available yet.</p>
            </div>
        );
    }

    return(
        <div className="profile">
            <h2>User Education</h2>
            <div className="profile-education">
                <p>Course: {educationForm.course}</p>
                <p>School: {educationForm.school}</p>
                <p>Start date: {educationForm.start}</p>
                <p>Finish: {educationForm.end}</p>
            </div>
        </div>
    );
}