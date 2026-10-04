// Structured data for search engines, rendered as a JSON-LD script
const JsonLd = ({ data }: { data: Record<string, unknown> }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({ "@context": "https://schema.org", ...data })
        // keep "</script>" in strings from closing the tag
        .replace(/</g, "\\u003c"),
    }}
  />
);

export default JsonLd;
