/**
 * GitHub Pages serves Project Pages from a subpath (/EndlessTech/). Next.js
 * static export does not rewrite raw href attributes or unoptimized
 * next/image src attributes with basePath — only runtime navigation does.
 * This helper produces basePath-aware asset/public paths for export mode.
 *
 * Mirrors the REPO_NAME constant in next.config.js. Keep them in sync.
 */
const PAGES_BASE_PATH = process.env.GITHUB_ACTIONS === 'true' ? '/EndlessTech' : '';

/**
 * Prefix a public/ asset path with the deploy basePath so it resolves on
 * GitHub Pages. Use only for raw asset paths (e.g. next/image `src` with
 * unoptimized, or plain <img>/<a> tags). next/link handles basePath itself.
 *
 * @example withBasePath('/images/logo.jpeg') // -> '/EndlessTech/images/logo.jpeg'
 */
export function withBasePath(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${PAGES_BASE_PATH}${path}`;
}
