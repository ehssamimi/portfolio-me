// app/sitemap.js

async function getProjects() {
  // اینجا کد اتصال به MongoDB و گرفتن پروژه‌ها
  // مثلاً:
  // const projects = await db.collection('projects').find({}).toArray();
  // return projects;

  // فعلاً داده نمونه:
  return [
    { slug: "project-1", updatedAt: new Date("2025-11-20") },
    { slug: "project-2", updatedAt: new Date("2025-12-05") },
  ];
}

export default async function sitemap() {
  const baseUrl = "https://maysamghaysari.ir";
  const today = new Date().toISOString().split("T")[0];

  const projects = await getProjects();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // ... بقیه صفحات ثابت
  ];

  const dynamicPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt.toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}

export const revalidate = 86400; // هر روز بروزرسانی
