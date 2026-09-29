// A Typo-style row: small monospace date on the left, content on the right
// (stacked on phones)
const PostLine = ({
  date,
  children,
}: {
  date: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="post-line">
    <p className="line-date">{date}</p>
    <div className="min-w-0 flex-1">{children}</div>
  </div>
);

export default PostLine;
