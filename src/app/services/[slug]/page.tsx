import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/services/ServicePage";
import { getService, SERVICES } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: path,
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
