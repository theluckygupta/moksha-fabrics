export type FabricCategory = {
  slug: string;
  name: string;
  shortDescription: string;
  buyerUse: string;
  status: "catalogue" | "enquiry";
};

export const fabricCategories: FabricCategory[] = [
  { slug: "printed-fabrics", name: "Printed Fabrics", shortDescription: "Printed textile options for fashion, dress materials and garment collections.", buyerUse: "Suitable for buyers developing printed fashion ranges.", status: "catalogue" },
  { slug: "dress-material-fabrics", name: "Dress Material Fabrics", shortDescription: "Commercial fabric options for coordinated sets and dress-material programs.", buyerUse: "Useful for wholesalers, retailers and garment businesses.", status: "catalogue" },
  { slug: "synthetic-blended-fabrics", name: "Synthetic & Blended Fabrics", shortDescription: "Versatile constructions selected around durability, consistency and commercial use.", buyerUse: "For manufacturers seeking practical fabric specifications.", status: "catalogue" },
  { slug: "dyed-fabrics", name: "Dyed Fabrics", shortDescription: "Solid and dyed textile options for fashion and manufacturing requirements.", buyerUse: "For buyers specifying colour, finish and application.", status: "catalogue" },
  { slug: "textile-wholesale", name: "Textile Wholesale", shortDescription: "Bulk textile sourcing from Surat for professional buyers.", buyerUse: "For wholesale quantities and recurring supply requirements.", status: "enquiry" },
  { slug: "custom-development", name: "Custom Development", shortDescription: "Specification-led conversations for fabric requirements beyond the standard range.", buyerUse: "For custom construction, finish or application requirements.", status: "enquiry" },
];

export const enquiryFields = ["Fabric type", "Construction", "Width", "GSM", "Finish", "Quantity", "Intended use"];
