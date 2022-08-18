import path from 'path';
import { readdir , stat } from 'fs';


export const getDir = () => {
	return path.join(__dirname, '../../data');
}

export const ReadDirSize = async (directory = getDirectory()) => {
  const files = await readdir(directory);
  const stats = files.map( file => stat( path.join( directory, file ) ) );
  console.log(stats);
  return ( await Promise.all( stats ) ).reduce( ( accumulator, { size } ) => accumulator + size, 0 );
}
