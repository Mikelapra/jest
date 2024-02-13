let products = [];
let id = 0;

function addProduct(name, price) {
    console.log(name)
    if (!name || !price) {
    throw new Error ("Se dede incluir nombre y precio")
}
    const productExists = products.find((p) => p.name === name);
    if (productExists) {
    throw new Error("El producto ya existe")
}   
    const product = { name, price, id:id++}
    products.push(product)
    return product
}

function getProduct(id) {
    products.forEach((product) => {
        if (product.id === id) {
            return product
        } else  {
            throw new Error("El producto no encontrado.")
        }
    })
}

function removeProduct(id) {
    if (!id) {
        throw new Error("El id no exite");
    }
    const idAEliminar = products.findIndex((p) => p.id === id)
    if (idAEliminar!==1) {
        products.splise(idAEliminar,1)
    } else {
        throw new Error("El id no existe");
    }
}




function resetProducts() {
    products = []
    id = 0
} 



function updateProduct(name, price, id) {
    products.forEach((product) => {
        if (product.id === id) {
            product.name = name
            product.price = price
    } else {
        throw new Error("Este producto no existe");
    }    
})
}