import { fetchPlaceholders, getMetadata } from "../../scripts/aem.js";
export default async function decorate(block) {
  const local = getMetadata("local");
  const placeholders = await fetchPlaceholders("local");
  const { addtocart, color } = placeholders;
}
