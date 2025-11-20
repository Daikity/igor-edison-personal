import type { NextConfig } from "next"
import path from 'path'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
    additionalData: `
      @use "sass:map";
      @use '@/assets/scss/global/mixins' as *;
    `,
  },
};

export default nextConfig;
