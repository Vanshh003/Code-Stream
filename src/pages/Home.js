
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';

const Home = () => {
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room')
    }

    const joinRoom = () => {
        if(!roomId || !username) {
            toast.error("Room ID and username required");
            return;
        }
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });        
    };

    const handleInputEnter = (e) => {
        console.log('event', e.code);
        if(e.code === 'Enter') {
            joinRoom();
        }
    }

    return (
        <div className='homePageWrapper'>
            <div className='formWrapper'>
                <img 
                    className='homePageLogo' 
                    src='home.png' 
                    alt='Code-Stream-logo' 
                />
                <h4 className='mainLabel'>Paste Invitation Room ID</h4>
                <div className='inputGroup'>
                    <input 
                        type='text'
                        className='inputBox'
                        placeholder='ROOM ID'
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input 
                        type='text'
                        className='inputBox'
                        placeholder='USERNAME'
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                    <span className='createInfo'>
                     If you do not have an invite then Create &nbsp;
                        <a onClick={createNewRoom} href='' className='createNewBtn'>New Room</a>
                    </span>
                </div>
            </div>
            <footer>
                <h4>Code Stream</h4>
            </footer>
        </div>
    )
}

export default Home;
