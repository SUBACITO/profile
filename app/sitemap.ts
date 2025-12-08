import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://subacito.cf',
            lastModified: new Date("2025-12-08 12:39:20Z"),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://subacito.cf/about',
            lastModified: new Date("2025-12-08 15:39:40Z"),
            changeFrequency: 'monthly',
            priority: 0.5,
        },
        // thêm các URL khác nếu muốn
    ];
}
