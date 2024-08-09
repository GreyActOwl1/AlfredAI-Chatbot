import { title } from "@/components/primitives";
import GeminiDemo from "@/components/GeminiDemo";

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Gemini Integration</h1>
      <GeminiDemo />
    </div>
  );
}
