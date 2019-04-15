export class MessageModel {
  private message = '';

  constructor(message: string) {
    this.message = message;
  }

  get getmessage() {
    return this.message;
  }
}
