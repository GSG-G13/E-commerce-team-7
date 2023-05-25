import { Build } from '../src/database/config/build.js';
import { connection } from '../src/database/config/connection.js';
import { signupQuery } from '../src/database/query/auth/signup.js';
import { addToCartQuery } from '../src/database/query/cart/addToCart.js';
import { decrementCount, incrementCount } from '../src/database/query/cart/count.js';
import { deleteFromCart } from '../src/database/query/cart/deleteFromCart.js';
import { getProductFromCartQuery } from '../src/database/query/cart/getProductFromCart.js';
import { getProduct } from '../src/database/query/products/getProduct.js';
import { gitProductsQuery } from '../src/database/query/products/getProducts.js';
import { getUserByEmail } from '../src/database/query/userAuthentication/login.js';



beforeAll(() => Build());
afterAll(() => connection.end());

describe('testing Auth Queries', () => {
  test('gitProductsQuery should return Array of Objects with status 200 ', (done) => {
    gitProductsQuery().then((data) => {
      expect(Array.isArray(data)).toBe(true);
      expect(200);
      expect(typeof data[0]).toBe('object');
      expect(data[0].id).toBe((1));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getProduct should return Array of Objects with status 200 ', (done) => {
    getProduct({id: 1}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].id).toBe((1));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getUserByEmail should return Array of Objects with status 200 ', (done) => {
    getUserByEmail({email: 'admin@example.com'}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].id).toBe((1));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('addToCartQuery should return Array of Objects with status 200 and add +1 to count', (done) => {
    addToCartQuery({id: 1, productId: 1}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].count).toBe((2));
      done();
    }).catch((error) => {
      done(error);
    });
  });
  
  test('incrementCount should return Array of Objects with status 200 add +1 to count', (done) => {
    incrementCount({user_id: 1, product_id: 1}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].count).toBe((3));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('decrementCount should return Array of Objects with status 200 add -1 to count', (done) => {
    decrementCount({user_id: 1, product_id: 1}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].count).toBe((2));
      done();
    }).catch((error) => {
      done(error);
    });
  });

  test('getProductFromCartQuery should return Array of Objects with status 200 and return the cart products', (done) => {
    getProductFromCartQuery({id: 1}).then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      expect(rows[0].count).toBe((2));
      done();
    }).catch((error) => {
      done(error);
    });
  });
  // deleteFromCart
  // signupQuery

})



