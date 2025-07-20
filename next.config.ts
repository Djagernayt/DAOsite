import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';


const nextConfig: NextConfig = {
  turbopack: {} 
};

export default createNextIntlPlugin()(nextConfig)
