export default function LegalPage({
  title,
  subtitle,
  content
}: {
  title: string;
  subtitle: string;
  content: React.ReactNode;
}) {
  return (
    <section className="min-h-screen py-24 px-6 bg-[#0B0F1A] text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-gray-400 mb-10">
          {subtitle}
        </p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          {content}
        </div>
      </div>
    </section>
  );
}
