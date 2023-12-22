import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Bota Cuero", img: "https://http2.mlstatic.com/D_NQ_NP_964800-MLA71300199641_082023-W.webp", price: 80000, category: "calzados", description: "Una bota", stock: 100 },
  { name: "Zapato", img: "https://http2.mlstatic.com/D_NQ_NP_666609-MLA71298246761_082023-W.webp", price: 110000, category: "calzados", description: "Un Zapato", stock: 9 },
  { name: "Zapatilla", img: "https://http2.mlstatic.com/D_NQ_NP_770956-MLA71258240024_082023-W.webp", price: 73000, category: "calzados", description: "Una zapatilla", stock: 10 },
  { name: "Bota Gamuza", img: "https://http2.mlstatic.com/D_NQ_NP_910606-MLA71298103973_082023-W.webp", price: 10000, category: "calzados", description: "Una bota", stock: 10 },
  { name: "Lisa", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/832/755/products/xxorange-2319497c778d03930616964352197898-480-0.", price: 1000, category: "ropa", description: "Una Remera", stock: 500 },
  { name: "Estampada", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/832/755/products/foto-26-1411-922351d5baf3ad420516940319623284-1024-1024-9202a4cc29c01a471c16964373532067-480-0.webp", price: 12000, category: "ropa", description: "Una Remera", stock: 100 },
  { name: "De Diseño", img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/832/755/products/araggo-856bdd6d93b43e08c016964389559963-480-0.", price: 50000, category: "ropa", description: "Una Remera", stock: 11 },
]; 

export const seedProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};