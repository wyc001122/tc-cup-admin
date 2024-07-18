import { codeInspectorPlugin } from 'code-inspector-plugin'

export default function createCodeInspectorPlugin() {
  return codeInspectorPlugin({
    bundler: 'vite',
  })
}
