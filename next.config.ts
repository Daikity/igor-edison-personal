import type { NextConfig } from "next"
import path from 'path'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'app')],
    prependData: `
      @use '@/assets/scss/global/varibels' as *;
      @use '@/assets/scss/global/mixins' as *;
    `,
  },
};

export default nextConfig;
