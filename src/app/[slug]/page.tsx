import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResourceLibrary } from "@/components/ResourceLibrary";
import { ScrollToDay } from "@/components/ScrollToDay";
import { days, getDay } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return days.map((day) => ({ slug: day.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const day = getDay(slug);

  if (!day) return {};

  return {
    title: `${day.ogTitle} | GVSU TRIO Upward Bound`,
    description: day.ogDescription,
    alternates: {
      canonical: `/${day.slug}/`,
    },
    openGraph: {
      title: day.ogTitle,
      description: day.ogDescription,
      url: `/${day.slug}/`,
      siteName: "GVSU TRIO Upward Bound Resource Library",
      images: [
        {
          url: day.ogImage,
          width: 1200,
          height: 630,
          alt: `${day.ogTitle} resource preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: day.ogTitle,
      description: day.ogDescription,
      images: [day.ogImage],
    },
  };
}

export default async function DayPage({ params }: PageProps) {
  const { slug } = await params;
  const day = getDay(slug);

  if (!day) notFound();

  return (
    <>
      <ScrollToDay slug={day.slug} />
      <ResourceLibrary focusedDaySlug={day.slug} />
    </>
  );
}
