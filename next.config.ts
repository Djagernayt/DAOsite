import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('NextConfig')} */
const nextConfig: NextConfig = {
  turbopack: {} 
};

// export default createNextIntlPlugin()(nextConfig)




export default withNextIntl(nextConfig);