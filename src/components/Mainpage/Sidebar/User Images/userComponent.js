import './userComponent.css';
import img from './img4.svg'

function UserComponent() {
    return (
        //this whole thing will be user which incompases the different things in it
        <div className='user'>
            <img className='profile-pic' src={img}/>
            <h2>Elon Musk</h2>
        </div>
    )
}

export default UserComponent;