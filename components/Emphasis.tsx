// Render **text** from the data files in bold
const Emphasis = ({ text }: { text: string }) => (
  <>
    {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? (
        <strong key={i} className="font-semibold text-zinc-200">
          {part}
        </strong>
      ) : (
        part
      ),
    )}
  </>
);

export default Emphasis;
