import os from 'os';
import { object } from 'zod';

const user = os.userInfo();
console.log(`Current user info is`);
console.log(user);
const byteToGb = (byteSize: number) => byteSize / (1024 * 1024 * 1024)
const osInfo = {
    name: os.type(),
    release: os.release(),
    totatlMemo: byteToGb(os.totalmem()),
    freeMemo: byteToGb(os.freemem()),
    numOfCpu: os.cpus().length
};

console.log('-----os info is');
console.log(osInfo);





