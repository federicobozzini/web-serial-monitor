/*global TextDecoderStream*/

export class SerialMonitor {
  serial;
  cb;
  output = "";

  constructor(serial) {
    this.serial = serial;
  }

  async connect() {
    if (!this.serial) {
      throw Error('Missing Serial object');
    }
    const port = await this.serial.requestPort();
    await port.open({ baudrate: 9600 });
    const decoder = new TextDecoderStream();
    port.readable.pipeTo(decoder.writable);
    const inputStream = decoder.readable;

    const reader = inputStream.getReader();
    while (true) {
      const { value, done } = await reader.read();
      if (value) {
        this.output += value;
        this.cb(this.output);
      }
      if (done) {
        console.log("END", done);
        reader.releaseLock();
        break;
      }
    }
  }

  onRead(cb) {
      this.cb = cb;
  }
}
