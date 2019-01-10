import fs from 'fs'
import os from 'os'

// module mocks ***************************************/
jest.mock('fs')
jest.mock('os')
/** * **************************************************/

// Useful function mocks ******************************/
const NOOP = () => {} // classical no operation function
/** * *************************************************/

// Pre-Mocked modules ********************************/
// fs module - anything that can create things
fs.WriteStream.mockImplementation(NOOP)
fs.mkdir.mockImplementation(NOOP)
fs.mkdirSync.mockImplementation(NOOP)
fs.readdirSync.mockImplementation(NOOP)
fs.chmod.mockImplementation(NOOP)
fs.chmodSync.mockImplementation(NOOP)
fs.chown.mockImplementation(NOOP)
fs.chownSync.mockImplementation(NOOP)
fs.write.mockImplementation(NOOP)
fs.writeSync.mockImplementation(NOOP)
fs.writeFile.mockImplementation(NOOP)
fs.writeFileSync.mockImplementation(NOOP)
fs.copyFile.mockImplementation(NOOP)
fs.copyFileSync.mockImplementation(NOOP)
/** * ***********************************************/

// Testing globals *********************************/
global.NOOP = NOOP
/** * ***********************************************/
