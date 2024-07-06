import socketio from "socket.io-client";
import { createContext } from 'react';
export const socket = socketio('http://103.35.189.49:8000');
export const SocketContext = createContext();