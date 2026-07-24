import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Auto Detailing Blog | Tips, Guides & Industry Insights — Refined Auto Detailing",
  description:
    "Expert auto detailing tips, how-to guides, and industry insights from Refined Auto Detailing. Learn about ceramic coating, paint correction, interior care, and more.",
};

const posts = [
  {
    title: "How Often Should You Get Your Car Detailed? A Complete Guide",
    excerpt: "The frequency of detailing depends on your driving habits, storage conditions, and vehicle type. Here's a practical guide to help you decide.",
    slug: "how-often-car-detail",
    category: "Guides",
    readTime: "5 min",
    date: "2024-12-15",
  },
  {
    title: "Ceramic Coating vs. Wax vs. Paint Sealant: What's the Difference?",
    excerpt: "Three very different levels of protection. Understanding the difference helps you choose what's right for your vehicle and budget.",
    slug: "ceramic-coating-vs-wax",
    category: "Education",
    readTime: "7 min",
    date: "2024-12-08",
  },
  {
    title: "Pet Hair in Your Car? Here's How Professionals Remove It",
    excerpt: "Dog and cat hair embeds deep into fabric fibers. Professional techniques and tools make all the difference — here's what we use.",
    slug: "pet-hair-removal-guide",
    category: "Tips",
    readTime: "4 min",
    date: "2024-11-28",
  },
  {
    title: "Why Mobile Detailing is Better Than a Detail Shop",
    excerpt: "No commute, no waiting room, no leaving your car with strangers. The case for mobile detailing has never been stronger.",
    slug: "mobile-vs-shop-detailing",
    category: "Industry",
    readTime: "6 min",
    date: "2024-11-20",
  },
  {
    title: "Tesla Interior Detailing: What You Need to Know",
    excerpt: "Tesla interiors require special care — vegan leather, large touchscreens, and minimalist surfaces need the right approach.",
    slug: "tesla-interior-detailing",
    category: "Guides",
    readTime: "5 min",
    date: "2024-11-12",
  },
  {
    title: "How to Maintain Your Car Between Professional Details",
    excerpt: "Smart between-detail maintenance extends the life of your professional detail. Simple habits that make a real difference.",
    slug: "car-maintenance-between-details",
    category: "Tips",
    readTime: "4 min",
    date: "2024-11-01",
  },
];

const categories = ["All", "Guides", "Tips", "Education", "Industry"];

export default function BlogPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Blog</span>
            <h1 className="text-5xl font-black tracking-tight mb-6">
              Detailing <span className="text-gradient-gold">Insights</span>
            </h1>
            <p className="text-white/50 text-lg">Expert tips, guides, and industry knowledge from Refined Auto Detailing.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${cat === "All" ? "bg-gold-500 text-black" : "glass text-white/60 hover:text-white"}`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="group glass rounded-2xl overflow-hidden hover:border-gold-500/30 transition-all duration-300">
                {/* Category image placeholder */}
                <div className="h-48 bg-gradient-to-br from-dark-900 to-dark-950 border-b border-white/5 flex items-center justify-center">
                  <span className="text-4xl">
                    {post.category === "Guides" ? "📖" : post.category === "Tips" ? "💡" : post.category === "Education" ? "🎓" : "🏆"}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">{post.category}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/40 text-xs flex items-center gap-1">
                      <Clock size={10} /> {post.readTime} read
                    </span>
                    <span className="text-white/40 text-xs flex items-center gap-1 ml-auto">
                      <Calendar size={10} /> {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-white font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-gold-500 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-gold-500/70 hover:text-gold-500 text-sm font-medium transition-colors"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
