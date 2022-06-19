import os from 'os';

const user = os.userInfo();
console.log(`Current user info is`);
console.log(user);

const byteToGb = (byteSize: number) => byteSize / (1024 * 1024 * 1024)
const cpuInfos = os.cpus();
const ramSize = byteToGb(os.totalmem()) // gb
const freeMem = byteToGb(os.freemem())
console.log(cpuInfos[0]);
console.log(`memory size ${ramSize}`);
console.log(`free memory size ${freeMem}`);



