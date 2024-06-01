import { Button } from "@/components/ui/button";

const state = true;

export default function Home() {
  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-indigo-500">Hello Discord Clone</p>
      <Button>Click me</Button>
    </div>
  );
}
