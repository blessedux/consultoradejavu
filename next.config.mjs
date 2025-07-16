let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.com'],
    minimumCacheTTL: 2678400, // 31 days
    formats: ['image/webp'], // Prioritize WebP
    remotePatterns: [
      // Add patterns for any external domains you use for images here
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      //   pathname: '/images/**',
      // },
    ],
    deviceSizes: [320, 420, 768, 1024, 1200], // Optimize for common device sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256], // Optimize for common image component sizes
  },
  experimental: {
    webpackBuildWorker: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key]) &&
      nextConfig[key] !== null // Added null check
    ) {
      // Special handling for images to merge arrays like remotePatterns correctly if needed
      if (key === 'images' && userConfig.images) {
         for (const imageKey in userConfig.images) {
            if (Array.isArray(nextConfig.images[imageKey]) && Array.isArray(userConfig.images[imageKey])) {
               // Concatenate arrays like remotePatterns, domains, etc.
               nextConfig.images[imageKey] = [...new Set([...nextConfig.images[imageKey], ...userConfig.images[imageKey]])];
            } else if (typeof nextConfig.images[imageKey] === 'object' && !Array.isArray(nextConfig.images[imageKey]) && nextConfig.images[imageKey] !== null) {
               // Merge nested objects if necessary
               nextConfig.images[imageKey] = { ...nextConfig.images[imageKey], ...userConfig.images[imageKey] };
            } else {
               // Overwrite other properties
               nextConfig.images[imageKey] = userConfig.images[imageKey];
            }
         }
      } else {
        // Default object merge
        nextConfig[key] = {
          ...nextConfig[key],
          ...userConfig[key],
        };
      }
    } else {
      // Overwrite primitive values or arrays (except for specific image properties handled above)
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
