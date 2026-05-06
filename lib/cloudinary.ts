/**
 * lib/cloudinary.ts
 * ─────────────────────────────────────────────────────────────────
 * All media helpers in one place:
 *   · Cloudinary  → images + PDFs
 *   · YouTube     → videos (unlisted or public)
 *
 * Your Cloudinary cloud name: dk9agw1x3
 * ─────────────────────────────────────────────────────────────────
 */

// Cloud name — visible in your Cloudinary dashboard top-left
const CLOUD = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ?? 'dk9agw1x3'
const BASE  = `https://res.cloudinary.com/${CLOUD}`

// ─────────────────────────────────────────────────────────────────
// CLOUDINARY IMAGE HELPER
// ─────────────────────────────────────────────────────────────────
/**
 * cld — Build a Cloudinary image URL.
 *
 * @param publicId   The path you see in Cloudinary Media Library.
 *                   Example: 'bharatdixit/hero/slide-1'
 *                   No leading slash. No file extension needed.
 *
 * @param transform  Optional resize/crop instructions (Cloudinary transformations).
 *                   f_auto and q_auto are always added for you automatically.
 *
 * Useful transforms:
 *   'w_1920,h_1080,c_fill'      → fill 1920×1080, crop if needed
 *   'w_800,h_600,c_fill,g_face' → fill 800×600, smart-crop on face
 *   'w_400,h_256,c_fill'        → thumbnail size
 *   'w_1200,h_630,c_fill'       → OG image size
 *
 * Usage in a component:
 *   <Image src={cld('bharatdixit/hero/slide-1')} ... />
 *   <Image src={cld('bharatdixit/gallery/london/summit', 'w_800,h_600,c_fill,g_face')} ... />
 */
export function cld(publicId: string, transform = ''): string {
  const t = [transform, 'f_auto', 'q_auto'].filter(Boolean).join(',')
  return `${BASE}/image/upload/${t}/${publicId}`
}

// ─────────────────────────────────────────────────────────────────
// CLOUDINARY PDF HELPER
// ─────────────────────────────────────────────────────────────────
/**
 * cldPdf — Build a direct download/view URL for a PDF stored in Cloudinary.
 *
 * When you upload a PDF to Cloudinary it is stored as a "raw" file.
 * The public ID is the folder path without the .pdf extension.
 *
 * @param publicId   e.g. 'bharatdixit/whitepapers/vigorus-ai-v11'
 *
 * Usage:
 *   <a href={cldPdf('bharatdixit/whitepapers/vigorus-ai-v11')}
 *      target="_blank" rel="noopener noreferrer">
 *     Download PDF
 *   </a>
 *
 * How to upload a PDF to Cloudinary:
 *   1. Go to Cloudinary → Media Library → bharatdixit/whitepapers/
 *   2. Click Upload → select your PDF
 *   3. Cloudinary stores it — copy the Public ID shown (remove .pdf from the end)
 *   4. Paste that Public ID as the argument here
 */
export function cldPdf(publicId: string): string {
  return `${BASE}/raw/upload/${publicId}.pdf`
}

// ─────────────────────────────────────────────────────────────────
// YOUTUBE HELPERS
// ─────────────────────────────────────────────────────────────────
/**
 * ytThumb — Get a YouTube video thumbnail as an image URL.
 *
 * @param videoId   The YouTube video ID.
 *                  From URL: https://youtube.com/watch?v=ABC123xyz  → 'ABC123xyz'
 *                  From URL: https://youtu.be/ABC123xyz             → 'ABC123xyz'
 *
 * @param quality   'hqdefault'     = 480×360  (always exists, use this as default)
 *                  'maxresdefault' = 1280×720 (best, but may not exist for all videos)
 *
 * Usage:
 *   <Image src={ytThumb('ABC123xyz')} alt="Video title" fill className="object-cover" unoptimized />
 *
 * NOTE: Always add unoptimized to YouTube thumbnail <Image> tags.
 *       YouTube thumbnails are already optimised — Next.js does not need to process them.
 */
export function ytThumb(
  videoId: string,
  quality: 'maxresdefault' | 'hqdefault' = 'hqdefault'
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
}

/**
 * ytUrl — Build a YouTube watch URL to open the video in a new tab.
 *
 * @param videoId   e.g. 'ABC123xyz'
 *
 * Usage:
 *   <a href={ytUrl('ABC123xyz')} target="_blank" rel="noopener noreferrer">
 *     Watch on YouTube
 *   </a>
 */
export function ytUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`
}

/**
 * ytEmbed — Build a YouTube embed URL for use inside an <iframe>.
 *
 * @param videoId   e.g. 'ABC123xyz'
 *
 * Usage:
 *   <iframe
 *     src={ytEmbed('ABC123xyz')}
 *     width="100%" height="100%"
 *     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
 *     allowFullScreen
 *   />
 */
export function ytEmbed(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
}
