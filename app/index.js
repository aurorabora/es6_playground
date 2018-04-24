import { addToDom } from './helpers';
import add from './add';
import Person from './person';

addToDom('<hr>')            // makes line and adds line break called head rule 

const Bob= new Person('Bob', 'BobcatMan');
const Susie= new Person('Susie', 'Wonder Susan');

addToDom(Bob.speak('Hello')); //template literal USE BACKTICK
addToDom(Susie.speak('Hi Bob'));
addToDom(Susie.xRay());
addToDom(Bob.sayHeroName());
