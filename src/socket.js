import {io} from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    console.log(process.env);
    const socket = io("http://localhost:" + process.env.PORT, options);
    
    socket.on('connect_error', (err) => {
        console.error('Socket connection error:', err);
    });

    return socket;
}
