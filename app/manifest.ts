import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "My PWA",
    short_name: "PWA",
    description: "A simple PWA app.",
    theme_color: "#000000",
    background_color: "#ffffff",
    display: "standalone",
    orientation: "portrait",
    icons: [
      {
        src: "icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
