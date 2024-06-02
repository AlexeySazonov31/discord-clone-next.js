"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endPoint: "messageFile" | "serverImage";
}

export const FileUpload = ({ onChange, value, endPoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (fileType && value !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          src={value}
          fill
          alt="Upload"
          className="rounded-full object-cover"
        />
        <button
          onClick={() => onChange("")}
          className="bg-rose-800/80 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
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
    />
  );
};
