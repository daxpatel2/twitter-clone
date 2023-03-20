import './sidebar_components.css';
//since each thing in the sidebar is the exact same interms of componenets
//only thing that is different is the name, and the logo
//we make them into components so we dont have to repeat code
//onlything that we will change is the name and the logo
//that will be done through parameters
//figure out how to do active state in react, where the current page would glow indicating you are at that page
function SidebarComponents({text,Icon}) {
    return (
        <div className="sidebar-options">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarComponents;