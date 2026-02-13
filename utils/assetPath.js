import { useRouter } from 'next/router'

export function useAssetPath() {
  const router = useRouter()
  const basePath = router.basePath || ''

  return function assetPath(path) {
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${basePath}${normalizedPath}`
  }
}

export function getAssetPath(path) {
  const basePath = process.env.__NEXT_ROUTER_BASEPATH || ''
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${normalizedPath}`
}
