export default class Memory {
  constructor() {
    this.url = 'https://rebikhub-http.herokuapp.com';
    this.getAllTickets = '?allTickets';
  }

  async save(ticket) {
    const response = await fetch(`${this.url}${this.postCreate}`, {
      method: 'POST',
      body: JSON.stringify(ticket),
    });
    const tickets = await response.text();
    console.log(`Server response: ${tickets}`);
  }

  async load() {
    try {
      const response = await fetch(`${this.url}${this.getAllTickets}`);
      const tickets = await response.json();
      return tickets;
    } catch (error) {
      const err = new Error(error);
      return err;
    }
  }
}
