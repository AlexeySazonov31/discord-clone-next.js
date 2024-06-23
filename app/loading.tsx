import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <Image priority src="/main-loader.svg" width={150} height={150} alt="loader icon" />
    </div>
  );
}
