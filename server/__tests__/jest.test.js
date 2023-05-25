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
  test('test signup query and make sure that create user', (done) => {
    signupQuery({username: 'ahmad ahmad', email:'ahmad@gmail.com', password:'123456'})
    .then((data) => {
      expect(200);
      expect(typeof data).toBe('object');
      expect(data.status).toBe(200);
      expect(data.msg).toBe("user signup successfully")
      expect(typeof data.rows).toBe('object')
      expect(data.rows.username).toBe('ahmad ahmad')
      expect(data.rows.email).toBe('ahmad@gmail.com')
      done()
    }).catch(error => {
      done(error)
    })
  })
  test('test signup query and make sure that create user', (done) => {
    signupQuery({username: 'ahmad ahmad', email:'ahmad@gmail.com', password:'123456'})
    .then((data) => {
      expect(typeof data).toBe('object');
      expect(data.status).toBe(401);
      expect(data.msg).toBe('this user is logged');
      done()
    })
    .catch((erorr) => {
      done(erorr)
    })

});
  test('test deleting from cart query and sure every thing is good', (done) => {
    deleteFromCart({productId: 4})
    .then(({rows}) => {
      expect(200);
      expect(Array.isArray(rows)).toBe(true);
      expect(typeof rows[0]).toBe('object');
      done();
    }).catch(error => {
      done(error)
    }) 
  })
})



