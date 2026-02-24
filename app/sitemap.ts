import { MetadataRoute } from 'next';

import { faqs } from './data/faqs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.goquicksilver.com';

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/reservation`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/fare-quote`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/service-areas`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/corporate`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/group-shuttle`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/vehicle-quiz`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/tools/mci-time-calculator`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/how-to-book`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/guides/mci-pickup-instructions`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/customer`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/deals`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/leave-review`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];

    const locations = [
        'kansas-city', 'overland-park', 'olathe', 'lawrence', 'belton', 'topeka',
        'manhattan', 'wichita', 'lees-summit-mo', 'independence-mo', 'blue-springs',
        'shawnee', 'lenexa', 'salina', 'emporia', 'saint-joseph', 'gladstone',
        'grandview-mo', 'prairie-village', 'mission', 'dodge-city', 'kearny',
        'smithville', 'kansas-state-university', 'kansas-city-marriott-downtown', 'holiday-inn'
    ];

    const locationRoutes: MetadataRoute.Sitemap = locations.map(loc => ({
        url: `${baseUrl}/airport-shuttle/${loc}/`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    }));

    const faqRoutes: MetadataRoute.Sitemap = faqs.flatMap(cat =>
        cat.questions.map(faq => ({
            url: `${baseUrl}/faq/${faq.slug}/`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
        }))
    );

    return [...staticRoutes, ...locationRoutes, ...faqRoutes];
}
