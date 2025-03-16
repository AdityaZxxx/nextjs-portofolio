// api/articles.ts

// Types for Article response
export interface Author {
  id: number;
  name: string;
}

export interface ImageSize {
  url: string | null;
  width: number | null;
  height: number | null;
  mimeType: string | null;
  filesize: number | null;
  filename: string | null;
}

export interface ImageSizes {
  thumbnail: ImageSize;
  square: ImageSize;
  small: ImageSize;
  medium: ImageSize;
  large: ImageSize;
  xlarge: ImageSize;
  og: ImageSize;
}

export interface HeroImage {
  id: number;
  alt: string;
  caption: string | null;
  url: string;
  thumbnailURL: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
  sizes: ImageSizes;
}

export interface ArticleContent {
  root: {
    children: any[];
    type: string;
    format: string;
    indent: number;
    version: number;
  };
}

export interface Article {
  id: number;
  title: string;
  heroImage: HeroImage;
  content: ArticleContent;
  publishedAt: string;
  populatedAuthors: Author[];
  slug: string;
  createdAt: string;
  updatedAt: string;
}

const API_URL = "http://localhost:6969";

/**
 * Fetch a single article by slug
 */
export async function getArticle(slug: string): Promise<Article | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/articles/${slug}?depth=1&draft=false`,
      {
        next: { revalidate: 3600 }, // Revalidate cache every hour
      }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch article: ${response.status} ${response.statusText}`
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

/**
 * Fetch list of articles
 */
export async function getArticles(
  page = 1,
  limit = 10
): Promise<{
  docs: Article[];
  totalDocs: number;
  totalPages: number;
  page: number;
} | null> {
  try {
    const response = await fetch(
      `${API_URL}/api/articles?page=${page}&limit=${limit}&depth=1&draft=false`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      console.error(
        `Failed to fetch articles: ${response.status} ${response.statusText}`
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching articles:", error);
    return null;
  }
}
