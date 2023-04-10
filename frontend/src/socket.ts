import { io } from 'socket.io-client';

const BASE_URL = process.env.BASE_URL || 'http://localhost:5000';

const socket = io(BASE_URL, {
  transports: ['websocket'],
});

export default socket;
