// Centred page width shared by the header, sections and footer
const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
    {children}
  </div>
);

export default Container;
