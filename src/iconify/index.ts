import { addCollection } from '@iconify/vue'
import data from './data.json'

const VITE_PUBLIC_PATH = import.meta.env.VITE_PUBLIC_PATH
export async function downloadAndInstall(name: string) {
  const data = Object.freeze(await fetch(`${VITE_PUBLIC_PATH}icons/${name}-raw.json`).then(r => r.json()))
  addCollection(data)
}

export const icons = data.sort((a, b) => a.info.name.localeCompare(b.info.name))
