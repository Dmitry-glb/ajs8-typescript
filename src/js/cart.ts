export default class Cart {
  private items: Array<{ id: number; price: number }> = [];

  add(item: { id: number; price: number }): void {
    this.items.push(item);
  }

  getItems(): Array<{ id: number; price: number }> {
    return [...this.items];
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
    const total = this.getTotalPrice();
    return total - (total * discount) / 100;
  }

  removeById(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}