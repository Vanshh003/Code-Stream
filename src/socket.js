import {io} from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    const socket = io("https://code-with-me.onrender.com", options);
    
    socket.on('connect_error', (err) => {
        console.error('Socket connection error:', err);
    });

    return socket;
}
