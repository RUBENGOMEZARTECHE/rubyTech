//ESTE ARCHIVO CONECTARA EL FRONTEND CON STRAPI

const STRAPI_URL = import.meta.env.STRAPI_URL;


//AQUI LE PEDIMOS A STRAPI LAS TRES CATEGORIAS
export async function getCategories() {
  const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
  const data = await res.json();
  return data.data;
}

//PEDIMOS TODOS LOS PRODUCTOS CON UN LIMITE DE 100   -   POPULATE=* INCLUYE, CATEGORIA, IMAGEN, SPECS...
export async function getProducts() {
  const res = await fetch(`${STRAPI_URL}/api/products?populate=*&pagination[limit]=100`);
  const data = await res.json(); //CONVIERTE UN JSON EN UN OBJETO
  return data.data;
}

//BUSCAMOS LOS PRODUCTOS EN ESPECIFICO POR SU SLUG, QUE SE GENERA SOLO
export async function getProductBySlug(slug) {
  const res = await fetch(`${STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`);
  const data = await res.json();
  return data.data[0];
}

//AQUI PEDIMOS TODOS LOS POSTS PARA MOSTRAR EN LA PAGINA DE BLOG
export async function getBlogPosts() {
  const res = await fetch(`${STRAPI_URL}/api/blog-posts?populate=*`);
  const data = await res.json();
  return data.data;
}

export async function getBlogPostBySlug(slug) {
  const res = await fetch(`${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`);
  const data = await res.json();
  return data.data[0];
}

//PEDIMOS LOS ANALISI DEL LABORATORIO
export async function getLabAnalyses() {
  const res = await fetch(`${STRAPI_URL}/api/lab-analyses?populate=*`);
  const data = await res.json();
  return data.data;
}
