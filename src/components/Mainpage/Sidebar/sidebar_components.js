import './sidebar_components.css';

//since each thing in the sidebar is the exact same interms of componenets
//only thing that is different is the name, and the logo
//we make them into components so we dont have to repeat code
//onlything that we will change is the name and the logo
//that will be done through parameters
//figure out how to do active state in react, where the current page would glow indicating you are at that page


//can we make it so that on click it goes to link /text.lowercase()?
//where to inplement this?
//ig make the h2 a link and set the properties to off so we cant see it, like what we did for widget?

function SidebarComponents({text,Icon}) {
    return (
        <div className="sidebar-options">
            <Icon className='icon'/>
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarComponents;