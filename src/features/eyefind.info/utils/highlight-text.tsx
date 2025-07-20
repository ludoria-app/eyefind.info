// Function to highlight hashtags and mentions
export function highlightText(text: string) {
  const parts = text.split(/(#[^\s]+|@[^\s]+)/g);

  return parts.map((part, index) => {
    if (part.startsWith('#') || part.startsWith('@')) {
      return (
        <span key={index} className="text-sky-600">
          {part}
        </span>
      );
    }
    return part;
  });
}
