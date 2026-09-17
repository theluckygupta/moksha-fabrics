import type { MetadataRoute } from "next";
import { fabrics } from "@/lib/fabrics";

const baseUrl = "https://mokshafabrics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes = [
    "",
    "/fabrics",
    "/about",
    "/faq",
    "/contact",
    "/guides",
    "/guides/how-to-source-fabric-wholesale-from-surat",
    "/guides/fabric-gsm-guide",
    "/guides/fabric-width-guide",
    "/textile-fabric-manufacturer-in-surat",
    "/fabric-supplier-in-surat",
    "/fabrics/printed-fabrics",
    "/fabrics/dress-material-fabrics",
    "/fabrics/synthetic-blended-fabrics",
    "/fabrics/dyed-fabrics",
  ];

  const productRoutes = fabrics
    .filter((fabric) => !coreRoutes.includes(`/fabrics/${fabric.slug}`))
    .map((fabric) => `/fabrics/${fabric.slug}`);

  return [...new Set([...coreRoutes, ...productRoutes])].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path === "/guides" || path === "/fabrics" ? 0.9 : 0.8,
  }));
}
