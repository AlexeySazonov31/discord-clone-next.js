"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "messageFile" | "serverImage";
  type?: "icon" | "message";
}

export const FileUpload = ({ onChange, value, endPoint, type = "icon" }: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  if (value && fileType !== "pdf") {
    return (
      <div className={cn("relative", type === "message" ? "w-64 h-64" : "h-20 w-20")}>
        <Image
          data-type={type}
          src={value}
          alt="Upload"
          className="rounded-full object-cover data-[type='message']:rounded-sm"
          fill
        />
        <button
          data-type={type}
          onClick={() => onChange("")}
          className="bg-rose-700 text-white p-1 rounded-full absolute top-0 data-[type='message']:-top-2 right-0 data-[type='message']:-right-2 shadow-sm"
          type="button"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    );
  }

  if (value && fileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => onChange("")}
          className="bg-rose-700 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
          type="button"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
      appearance={{
        label: "text-indigo-500 hover:text-indigo-500/70 transition",
        button:
          "bg-indigo-500 text-white hover:bg-indigo-500/90 cursor-pointer text-sm select-none rounded-md font-medium",
        uploadIcon: "fill-zinc-500",
        allowedContent: "text-zinc-500",
      }}
    />
  );
};
