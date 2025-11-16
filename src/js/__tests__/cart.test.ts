import Cart from '../cart';

describe('Cart', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  test('getTotalPrice calculates sum', () => {
    cart.add({ id: 1, price: 100 });
    cart.add({ id: 2, price: 200 });
    expect(cart.getTotalPrice()).toBe(300);
  });

  test('getTotalPriceWithDiscount applies discount', () => {
    cart.add({ id: 1, price: 100 });
    cart.add({ id: 2, price: 200 });
    expect(cart.getTotalPriceWithDiscount(10)).toBe(270);
  });

  test('removeById removes item', () => {
    cart.add({ id: 1, price: 100 });
    cart.add({ id: 2, price: 200 });
    cart.removeById(1);
    expect(cart.getItems()).toEqual([{ id: 2, price: 200 }]);
  });

  test('removeById does nothing if id not found', () => {
    cart.add({ id: 1, price: 100 });
    cart.removeById(999);
    expect(cart.getItems()).toHaveLength(1);
  });
});