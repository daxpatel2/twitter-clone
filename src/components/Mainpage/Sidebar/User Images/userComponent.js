import './userComponent.css';
import img4 from './img4.svg';

//just do email and randomly generated image that we pick out


function randomImg(){
    //generate a random image from file
    let myPix = ['/img1.svg','/img2.svg','/img3.svg','/img4.svg'];
    let ranNum = Math.floor(Math.random() * myPix.length);

    return myPix[ranNum];
}

function UserComponent() {
    return (
        //this whole thing will be user which incompases the different things in it
        <div className='user'>
            
        </div>
    )
}

export default UserComponent;