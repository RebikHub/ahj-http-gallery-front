export default class Memory {
  constructor() {
    this.url = 'https://ahj-gallery-back.herokuapp.com';
    this.imgList = '?method=imgList';
    this.imgDelete = '/?method=removeImage&id=';
    this.imgUpload = '/?method=uploadImage';
  }

  async save(img) {
    const response = await fetch(`${this.url}${this.imgUpload}`, {
      method: 'POST',
      body: img,
    });
    const result = await response.text();
    console.log(`Server response: ${result}`);
  }

  async delete(id, img) {
    const response = await fetch(`${this.url}${this.imgDelete}${id}`, {
      method: 'POST',
      body: JSON.stringify(img),
    });
    const result = await response.text();
    console.log(`Server response: ${result}`);
  }

  async load() {
    try {
      const response = await fetch(`${this.url}${this.imgList}`);
      const result = await response.json();
      return result;
    } catch (error) {
      const err = new Error(error);
      return err;
    }
  }
}
