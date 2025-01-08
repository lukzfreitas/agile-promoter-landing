import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  env: {
    resendKey: process.env.RESEND_KEY,
    emailFrom: process.env.EMAIL_FROM,
    emailHost: process.env.EMAIL_HOST,
  },
}
