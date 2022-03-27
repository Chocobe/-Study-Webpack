export default class RandomNum {
  value!: number;

  constructor(min: number, max: number) {
    this.value = min + (max - min) * Math.random();
  }
}