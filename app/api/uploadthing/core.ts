import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = () => {
    const { userId } = auth();
    if (!userId) throw new UploadThingError("Unauthorized");
    return { userId: userId };
}

export const ourFileRouter = {
    serverImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            console.log("file url", file.url);
            return { uploadedBy: metadata.userId };
        }),
    messageFile: f(["image", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(async ({ metadata, file }) => {
            const userId = (metadata as any).userId;
            console.log("Upload complete for userId:", userId);
            console.log("file url", file.url);
            return { uploadedBy: userId };
        })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;