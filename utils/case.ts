export function decodeCamelCase(input?: string): string {
  if (!input || typeof input !== "string") return "";

  if (input.startsWith("_")) input = input.replace(/^_+/, "");
  return (
    input
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      .toLowerCase()
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
  );
}
