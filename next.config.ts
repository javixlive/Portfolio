import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/works/intertiaWheel',
        destination: '/works/inertia-wheel',
        permanent: true
      }
    ]
  }
}

export default nextConfig
