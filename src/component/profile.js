import './profile.css';
import Range from './range';

const Profile = () => {
    return ( 
        <>
            <div className="heading">
                <h1>SIP Calculator</h1>
            </div>
            <div className="parentDiv">
                <Range/>
            </div>
        </>
    );
}
 
export default Profile;