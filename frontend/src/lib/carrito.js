export function getCarrito() {
  if (typeof localStorage === 'undefined') return [];
  return JSON.parse(localStorage.getItem('carrito') || '[]');
}

export function saveCarrito(carrito) {
  localStorage.setItem('carrito', JSON.stringify(carrito));
  updateContador();
}

export function addToCarrito(producto) {
  const carrito = getCarrito();
  const existing = carrito.find(item => item.id === producto.id);
  if (existing) {
    existing.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  saveCarrito(carrito);
}

export function removeFromCarrito(id) {
  const carrito = getCarrito().filter(item => item.id !== id);
  saveCarrito(carrito);
}

export function updateCantidad(id, cantidad) {
  const carrito = getCarrito();
  const item = carrito.find(item => item.id === id);
  if (item) {
    item.cantidad = cantidad;
    if (item.cantidad <= 0) {
      saveCarrito(carrito.filter(i => i.id !== id));
    } else {
      saveCarrito(carrito);
    }
  }
}

export function getTotal() {
  return getCarrito().reduce((total, item) => total + item.price * item.cantidad, 0);
}

export function getTotalItems() {
  return getCarrito().reduce((total, item) => total + item.cantidad, 0);
}

export function updateContador() {
  const badge = document.querySelector('.nav-cart .badge');
  if (badge) badge.textContent = getTotalItems().toString();
}