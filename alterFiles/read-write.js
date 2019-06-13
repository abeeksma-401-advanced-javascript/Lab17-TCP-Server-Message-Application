
const fs = require('fs');

const util = require('util');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.writeFile);


const alterFile = async file => {
  let data = await read(file);
  let text = data.toString().toUpperCase();
  await write(file, Buffer.from(text));
  //add event to emit that something has been saved.   
};




module.exports = alterFile; 
