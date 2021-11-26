import Gallery from './gallery';
import Memory from './memory';

console.log('app started');

const memory = new Memory();
const gallery = new Gallery(memory);

gallery.events();
