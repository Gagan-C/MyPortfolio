/**
 * Single source of truth for the Vercel Blob store base URL.
 *
 * Previously this host string was hardcoded in ~10 places across the app. To
 * recreate the store or move regions you'd have to find-and-edit every one, and
 * missing one would silently break an image or fetch. Set
 * `NEXT_PUBLIC_BLOB_BASE_URL` to override (e.g. per-environment on Vercel and
 * in `.env.local`); otherwise the production host is used as the fallback.
 *
 * Exported as a `NEXT_PUBLIC_*` env var so both Server Components (content
 * fetching) and Client Components (images, links) read the exact same value at
 * build time. Keep this module free of server-only logic so it is safe to
 * import from `"use client"` code.
 */
export const BLOB_BASE =
  process.env.NEXT_PUBLIC_BLOB_BASE_URL ??
  "https://e21qb2sohxwlyxkx.public.blob.vercel-storage.com";

/** Build a fully-qualified Blob URL for the given path (leading slash optional). */
export function contentUrl(path: string): string {
  return `${BLOB_BASE}/${path.replace(/^\//, "")}`;
}