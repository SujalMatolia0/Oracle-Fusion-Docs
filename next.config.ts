import nextra from 'nextra'

const withNextra = nextra({
  // You can add options here if needed
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false as const,
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx'
    }
  }
}

export default withNextra(nextConfig)