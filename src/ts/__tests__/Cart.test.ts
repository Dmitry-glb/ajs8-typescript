import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('должен считать сумму', () => {
    cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.getTotalPrice()).toBe(2900);
  });

  test('должен применять скидку', () => {
    cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    expect(cart.getTotalPriceWithDiscount(10)).toBe(2610);
  });

  test('должен удалять по id', () => {
    cart.add(new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225));
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    cart.removeById(1001);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(1008);
  });
});