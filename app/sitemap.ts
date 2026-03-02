import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bdcegypt.com/',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://bdcegypt.com/queue-system',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://bdcegypt.com/nurse-call-system',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://bdcegypt.com/self-service-kiosks',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        }
    ]
}