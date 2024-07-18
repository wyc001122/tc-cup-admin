import banner from 'vite-plugin-banner'

export default function createBanner() {
  return banner(`
/**
 * 由 tc-admin 提供技术支持
 * Powered by tc-admin
 */
`)
}
