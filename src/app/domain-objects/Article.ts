export class Article {
  private id: number;
  private title: string;
  private content: string;

  public constructor(title: string, content: string, id?: number) {
    this.title = title;
    this.content = content;
    this.id = id;
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getContent(): string {
    return this.content;
  }

  public setContent(content: string): void {
    this.content = content;
  }
}
