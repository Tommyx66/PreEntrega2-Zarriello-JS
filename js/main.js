
alert("Bienvenidos al Tame Impala Shop");

let nameEntered = prompt("Por favor introduzca su nombre:");

alert(`Hola ${nameEntered}!`);

var agePrompt = prompt("Por favor introduzca su edad");

if (agePrompt < 16) {
  alert('Lo sentimos! Nuestros productos pueden contener imagenes o alegorías a cuestiones no aptas para todo publico');
  window.location.href = 'http://www.google.com';
  alert(`Vuelve en unos años!`);
} else {
  alert('Ahora tienes acceso a nuestro catálogo:');
}



// Array Catálogo &  array Carrito (vacío).
const catalog = [{
  id: 1,
  name: "Buzo Hoddie - Tame Impala",
  description: "Buzo color Amarillo con Logo Estampado",
  price: 29.99
}
  , {
  id: 2,
  name: "T-Shirt - Tame Impala",
  description: "T-Shirt color Negro con Logo Estampado de Innerspeaker",
  price: 14.99
}
  , {
  id: 3,
  name: "Album Lonerism - Edición Especial",
  description: "Edicion Especial Deluxe",
  price: 59.99
}
  , {
  id: 4,
  name: "Album Currents",
  description: "Edición Standard",
  price: 39.99
}
]

const chart = [];

// Variable Producto seleccionado en catálogo.
let product;
let objectsCheck;

let confirmProduct = true;

// Catalog.find (búsqueda) de cada objeto.
const catalogSearch = (id) => {
  return catalog.find(item => item.id === id);
}

// Bucle con un While, mientras el confirm es true.
while (confirmProduct) {
  // Mostrar array-catalog con un .map para seleccionar ID del producto.
  objectsCheck = parseInt(prompt("Elija su producto, según el índice (por ejemplo: 1 para seleecionar T-shirt) :" + "\n" + catalog.map(product => "\n" + product.id + " - " + product.name + " " + "(" + product.description + ")" + " - " + "$" + product.price + "\n").join(".")));
  // Productos a mostrar en el if(1 al 4, osea 4 ID, en este caso es true, sino se pone el else)
  if (objectsCheck >= 1 && objectsCheck <= 4) {
    // Hacer de la variable product  función que usa la ID del producto seleccionado en lecturaObjetos. █
    product = catalogSearch(objectsCheck);
    //  Preguntar si quiere seguir comprando con un confirm. 
    confirmProduct = confirm("¿Va a realizar otra compra?");
  } else {
    alert("El número ingresado es inválido");
  }

  // Push al chart productos seleccionados por el cliente
  chart.push(product);
} console.log(chart);

// Variable confirmProduct fuera del While = true para utilizar en un bucle nuevo, así el cliente puede eliminar productos del array-chart.
confirmProduct = true;

let productRemoved;
let productsCheck;

// Función que busque producto según ID del chart 
const chartSearch = (id) => {
  return chart.find(item => item.id === id);
}

let Total = 0;

// Segundo bucle While con confirmProduct =true.
while (confirmProduct) {
  // Mostrar array-chart para que el cliente remueva los productos que no desea.
  productsCheck = parseInt(prompt("Si desea remover algún producto, tan sólo escriba el número de índice: " + "\n" + "Tu carrito contiene: \n" + chart.map(item => "\n" + item.id + " - " + item.name + " $" + item.price + "\n").join(" - ")));
  if (productsCheck >= 1 && productsCheck <= 4) {
    productRemoved = chartSearch(productsCheck);
    // Remover producto
    chart.splice(((productRemoved.id) - 1), 1);
  } else {
    alert("El número ingresado es inválido");
  }
  confirmProduct = confirm("¿Desea seguir removiendo elementos del carrito?");
} console.log(chart);

// Total y agradecimiento por la compra.
for (products of chart) {
  Total += products.price;
}

alert("Gracias por tu compra! Esperamos que vuelvas pronto! El total es: $ " + Total.toFixed(2));