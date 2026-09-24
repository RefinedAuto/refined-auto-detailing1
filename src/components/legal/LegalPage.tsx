import Breadcrumbs from "@/components/layout/Breadcrumbs";

export default function LegalPage({
  title,
  path,
  updated,
  children,
}: {
  title: string;
  path: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark-950 pt-32 min-h-screen">
      <div className="container-custom py-16 max-w-3xl">
        <Breadcrumbs items={[{ name: title, path }]} />
        <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">{title}</h1>
        <p className="text-white/60 text-sm mb-12">Last updated: {updated}</p>
        <div
          className="text-white/80 leading-relaxed space-y-4
            [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4
            [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-white [&_h3]:mt-6 [&_h3]:mb-2
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2
            [&_a]:text-gold-500 [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-gold-400
            [&_strong]:text-white"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
