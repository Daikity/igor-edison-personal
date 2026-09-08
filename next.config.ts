import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
    additionalData: `
      @use "sass:map";
      @use '@/assets/scss/global/mixins' as *;
    `,
  },
};

export default nextConfig;
