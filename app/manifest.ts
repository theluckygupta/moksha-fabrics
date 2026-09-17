import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moksha Fabrics",
    short_name: "Moksha Fabrics",
    description: "Textile fabric sourcing from Surat, Gujarat.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7fbfb",
    theme_color: "#173f4b",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
