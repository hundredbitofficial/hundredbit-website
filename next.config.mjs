/** Static export: the build output in /out is plain HTML/CSS/JS + contact.php, ready for any PHP host (cPanel, Hostinger, etc). */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  images: { unoptimized: true },
};
export default nextConfig;
