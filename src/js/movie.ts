export default class Movie {
  constructor(
    public title: string,
    public originalTitle: string,
    public year: number,
    public country: string,
    public slogan: string,
    public genre: string,
    public duration: number,
  ) {}

  getInfo(): string {
    return `
      • год: ${this.year}
      • страна: ${this.country}
      • слоган: «${this.slogan}»
      • жанр: ${this.genre}
      • время: ${this.duration} мин. / ${this.formatDuration()}
    `.trim();
  }

  private formatDuration(): string {
    const hours = Math.floor(this.duration / 60);
    const minutes = this.duration % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}