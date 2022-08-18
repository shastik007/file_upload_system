import path from 'path';
import { readdir , stat } from 'fs';


export const getDir = () => {
	return path.join(__dirname, '../../data');
}


