import KeyManager from '../lib/keyManager.js'
import CryptoAPI from '../lib/CryptoAPI.js'

const check = {
    async price(cmd){
       try {
         const keyManager = new KeyManager()
         const key = keyManager.getKey();
         
         const cryptoAPI = new CryptoAPI(key)
         const resp = await cryptoAPI.getPriceData(cmd.coin, cmd.cur)
         console.log(resp); 
       } catch (err) {
           console.error(err.message.red)
       }
    }
}

export default check