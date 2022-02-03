console.log("URL NAME: ", process.env.NEXT_PUBLIC_URL_NAME);
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/dashboard",
        destination: "https://svelte-next-dashboard.vercel.app/",
      },
    ];
  },
};
