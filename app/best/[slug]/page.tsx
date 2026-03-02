import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BoardCard from "@/app/[category]/BoardCard";
import {
  getBoardsForSeoCollection,
  getSeoCollectionBySlug,
  seoCollections,
} from "@/data/seoCollections";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return seoCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const collection = getSeoCollectionBySlug(slug);

  if (!collection) {
    return {
      title: "Collection Not Found | Job Resources",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${collection.title} | Job Resources`,
    description: collection.description,
    alternates: {
      canonical: `/best/${collection.slug}`,
    },
    openGraph: {
      title: `${collection.title} | Job Resources`,
      description: collection.description,
      url: `/best/${collection.slug}`,
      type: "website",
    },
    twitter: {
      title: `${collection.title} | Job Resources`,
      description: collection.description,
      card: "summary_large_image",
    },
  };
}

export default async function BestCollectionPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const collection = getSeoCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const relevantBoards = getBoardsForSeoCollection(collection);
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: collection.title,
    description: collection.description,
    url: `https://jobresources.fyi/best/${collection.slug}`,
  };

  return (
    <main className="min-h-screen p-6 md:p-10 max-w-7xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <div className="mb-8">
        <Link
          href="/best"
          className="inline-block text-sm text-blue-600 hover:underline mb-3"
        >
          Back to all collections
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          {collection.title}
        </h1>
        <p className="text-gray-600 max-w-3xl">{collection.intro}</p>
      </div>

      {relevantBoards.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relevantBoards.map((board) => (
            <BoardCard key={board.name} board={board} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No matching boards found for this topic.</p>
      )}
    </main>
  );
}
