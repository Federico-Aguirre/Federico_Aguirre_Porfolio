import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build", //this line will tell the build to create a file with this name
};

export default million.next(nextConfig);