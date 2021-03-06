/*global TextDecoderStream*/

export class SerialMonitor {

  baudRate = 9600;
  port;
  serial;
  reader;
  inputDone;
  readCallback;
  connectionCallback;

  constructor(serial) {
    this.serial = serial;
  }

  async connect() {
    if (!this.serial) {
      throw Error("Connection: missing Serial object");
    }
    this.port = await this.serial.requestPort();
    await this.port.open({ baudrate: this.baudRate });
    this.connectionCallback(true);
    const decoder = new TextDecoderStream();
    this.inputDone = this.port.readable.pipeTo(decoder.writable);
    const inputStream = decoder.readable;

    this.reader = inputStream.getReader();
    while (true) {
      const { value, done } = await this.reader.read();
      if (value) {
        this.readCallback(value);
      }
      if (done) {
        this.reader.releaseLock();
        break;
      }
    }
  }

  async disconnect() {
    if (!this.serial) {
      throw Error("Disconnection: missing Serial object");
    }
    if (this.reader) {
      await this.reader.cancel();
      await this.inputDone.catch(() => {});
      this.reader = undefined;
      this.inputDone = undefined;
    }
    if (this.outputStream) {
      await this.outputStream.getWriter().close();
      this.outputStream = undefined;
    }
    await this.port.close();
    this.port = undefined;
    this.connectionCallback(false);
  }

  setBaudRate(baudRate) {
    this.baudRate = baudRate;
  }

  onConnectionEvent(cb) {
    this.connectionCallback = cb;
  }

  onRead(cb) {
    this.readCallback = cb;
  }
}
