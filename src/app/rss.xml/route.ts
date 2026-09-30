import { getPosts } from "@/utils/utils";
import { baseURL, research, person } from "@/resources";

export const dynamic = "force-static";

export function GET() {
  const posts = getPosts(["src", "app", "research", "posts"]);

  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${research.title}</title>
    <link>${baseURL}/research</link>
    <description>${research.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/rss.xml" rel="self" type="application/rss+xml" />
    <managingEditor>${person.email || "noreply@example.com"} (${person.name})</managingEditor>
    <webMaster>${person.email || "noreply@example.com"} (${person.name})</webMaster>
    <image>
      <url>${baseURL}${person.avatar || "/images/avatar.png"}</url>
      <title>${research.title}</title>
      <link>${baseURL}/research</link>
    </image>
    ${sortedPosts
      .map(
        (post) => `
    <item>
      <title>${post.metadata.title}</title>
      <link>${baseURL}/research/${post.slug}</link>
      <guid>${baseURL}/research/${post.slug}</guid>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.metadata.summary}]]></description>
      ${post.metadata.image ? `<enclosure url="${baseURL}${post.metadata.image}" type="image/jpeg" />` : ""}
      ${post.metadata.tag ? `<category>${post.metadata.tag}</category>` : ""}
      <author>${person.email || "noreply@example.com"} (${person.name})</author>
    </item>`,
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
