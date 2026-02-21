const STRAPI_URL = import.meta.env.STRAPI_URL;

export async function getCategories() {
  const res = await fetch(`${STRAPI_URL}/api/categories?populate=*`);
  const data = await res.json();
  return data.data;
}

export async function getProducts() {
  const res = await fetch(`${STRAPI_URL}/api/products?populate=*`);
  const data = await res.json();
  return data.data;
}

export async function getProductBySlug(slug) {
  const res = await fetch(`${STRAPI_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`);
  const data = await res.json();
  return data.data[0];
}

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

export async function getLabAnalyses() {
  const res = await fetch(`${STRAPI_URL}/api/lab-analyses?populate=*`);
  const data = await res.json();
  return data.data;
}
