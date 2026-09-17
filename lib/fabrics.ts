export type Fabric = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  application: string;
  specifications: string[];
  status: "Catalogue category";
};

// Placeholder catalogue entries. Replace/add real Moksha Fabrics products
// once confirmed specifications and images are available.
export const fabrics: Fabric[] = [
  { slug: "printed-fabrics", name: "Printed Fabrics", category: "Printed Fabrics", categorySlug: "printed-fabrics", description: "Printed textile fabrics for fashion, garment and wholesale applications.", application: "Dress materials, garments, ethnicwear and fashion collections.", specifications: ["Print development", "Width to specification", "Bulk sourcing"], status: "Catalogue category" },
  { slug: "dress-material-fabrics", name: "Dress Material Fabrics", category: "Dress Material Fabrics", categorySlug: "dress-material-fabrics", description: "Fabric options suited to dress materials, coordinated sets and fashion collections.", application: "Dress materials, suits, coordinated sets and apparel.", specifications: ["Construction to requirement", "Width to specification", "Sampling available on request"], status: "Catalogue category" },
  { slug: "synthetic-blended-fabrics", name: "Synthetic & Blended Fabrics", category: "Synthetic & Blended Fabrics", categorySlug: "synthetic-blended-fabrics", description: "Synthetic and blended constructions for practical fashion and commercial textile applications.", application: "Apparel, fashion collections and commercial garments.", specifications: ["Blend varies by development", "Width to specification", "Bulk sourcing"], status: "Catalogue category" },
  { slug: "dyed-fabrics", name: "Dyed Fabrics", category: "Dyed Fabrics", categorySlug: "dyed-fabrics", description: "Dyed textile fabrics for buyers looking for colour consistency and flexible sourcing.", application: "Apparel, dress materials and garment production.", specifications: ["Colour development", "Finish to requirement", "Bulk sourcing"], status: "Catalogue category" },
];

export function getFabric(slug: string) {
  return fabrics.find((fabric) => fabric.slug === slug);
}
