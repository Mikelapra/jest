const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product')

describe("addProduct", () => {
  it("should add a product", () => {
    expect(() =>
      addProduct("pan", 5).toBe({ name: "pan", price: 5, id: 0 })
      );
    });
  it('should fail when adding a repeated product', () => {
    expect(() => 
      addProduct("pan",5).toThrow('El producto ya existe')); 
  });
});
  it('should fail when adding a product with no name', () => {
    expect(() => 
      addProduct().toThrow('Se dede incluir nombre y precio')); 
});
  it('should fail when adding a product with no price', () => {
    expect(() => 
      addProduct("pan",).toThrow('Se dede incluir nombre y precio')); 
});

describe('getProduct', () => {
  it("should add a product", () => {
    expect(() =>
      removeProduct(0).toBe({ name: "pan", price: 5, id: 0 })
    );
  });
});

describe('removeProduct', () => {
  it("should add a product", () => {
    expect(() =>
      removeProduct(0).toBe({})
    );
  });
});

describe('updateProduct', () => {
  it("should update a product", () => {
    expect(() =>
      updateProduct("leche", 6, 0).toBe({ name: "leche", price: 6, id: 0 })
    );
  });
  it("should fail when updating a product that does not exist", () => {
    expect(() =>
      updateProduct("pan", 6, 1).toThrow(('Se dede incluir nombre y precioEste producto no existe'))
    );
  });
  it("should only update the price", () => {
    expect(() =>
      updateProduct("pan", 7, 0).toBe({ name: "leche", price: 7, id: 0 })
    );
  });
  it("should only update the name", () => {
    expect(() =>
      updateProduct("cereales", 7, 0).toBe({ name: "cereales", price: 7, id: 0 })
    );
  });
});
