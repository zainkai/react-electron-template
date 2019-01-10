/**
 * Dispatchable action for sending data to ipcMain in main.js
 * @param {String} channel ipcMain channels
 * @param {*} payload 
 */
export const ipcSendAction = (channel, payload) => {
  return {
    type: 'IPC_SEND',
    channel,
    payload
  }
}
