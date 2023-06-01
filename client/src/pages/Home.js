import React, {useState} from 'react';
import Navbar from '../components/Navbar.js';
import Button from '../components/Button.js';
import ImpactModal from '../components/ImpactModal.js';


const Home = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const handleClick = () => {
        console.log('Impact Button Clicked')
        setModalOpen(true)
    }

return (
    <div className="home-body">
    <Navbar />
    <Button content = {"Log Your Impact"} onClick = {()=>handleClick()}/>
    {modalOpen && <ImpactModal onClose = {() => setModalOpen(false)}/>}
    </div>
)
}


export default Home