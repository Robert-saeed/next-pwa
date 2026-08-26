import { defaultCache } from "@serwist/next/worker";
import type { PrecacheEntry, SerwistGlobalConfig } from "serwist";
import { CacheFirst, NetworkFirst, Serwist, StaleWhileRevalidate } from "serwist";

declare const self: ServiceWorkerGlobalScope & {
  __SW_MANIFEST: (string | PrecacheEntry)[] | undefined;
};

const serwist = new Serwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,

  fallbacks: {
    entries: [
      {
        url: "/offline", 
        matcher({ request }) {
          return request.mode === "navigate";
        },
      },
    ],
  },

  runtimeCaching: [
    {
      matcher: /\.(?:png|jpg|jpeg|svg|webp|gif|woff2?)$/i,
      handler: new CacheFirst({
        cacheName: "images-and-fonts",
        plugins: [
          {
            cacheWillUpdate: async ({ response }) => {
              return response && response.status === 200 ? response : null;
            },
          },
        ],
      }),
    },

    {
      matcher: ({ url }) => url.pathname.startsWith("/api/"),
      handler: new NetworkFirst({
        cacheName: "api-cache",
        networkTimeoutSeconds: 5,
      }),
    },

    // {
    //   matcher: ({ request }) => request.mode === "navigate",
    //   handler: new StaleWhileRevalidate({
    //     cacheName: "pages-cache",
    //   }),
    // },

    ...defaultCache,
  ],

  // runtimeCaching: defaultCache,
});

serwist.addEventListeners();