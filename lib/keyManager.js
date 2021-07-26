import Configstore from 'configstore'
// import * as pkg from '../package.json'   

class KeyManager {
  constructor() {
    this.conf = new Configstore("cryptocli");
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API key found - Get a key from https://nomics.com");
    }
    return key;
  }

  deleteKey() {
    const key = this.conf.get("apiKey");

    if (!key) {
      throw new Error("No API key found - Get a key from https://nomics.com");
    }
    this.conf.delete('apiKey')

    return;
  }
}

export default KeyManager