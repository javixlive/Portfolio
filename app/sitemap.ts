import type { MetadataRoute } from 'next'
import { profile, projects } from '../content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/',
    '/projects',
    '/skills',
    '/resume',
    ...projects.map(project => `/works/${project.slug}`)
  ]
  return paths.map(path => ({ url: new URL(path, profile.siteUrl).href }))
}
