import type { NextConfig } from "next"
import path from 'path'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'app')],
    prependData: `
      @use '@/assets/scss/global/varibels' as *;
      @use '@/assets/scss/global/mixins' as *;
    `,
  },
};

export default nextConfig;
