import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTypography,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig<Theme>({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
      ],
    },
  },
  shortcuts: [
    {
      'text-H24': 'text-24px leading-32px font-bold',
      'text-H20': 'text-20px leading-28px font-bold',
      'text-H16': 'text-16px leading-24px font-bold',
      'text-H14_M': 'text-14px leading-22px font-bold',
      'text-H14_R': 'text-14px leading-22px',
      'text-H12_M': 'text-12px leading-20px font-bold',
      'text-H12_R': 'text-12px leading-20px',
      // 'flex-center': 'flex justify-center items-center',
      // 'flex-col-center': 'flex flex-col justify-center items-center',
    },
  ],
  preflights: [
    // {
    //   getCSS: () => {
    //     const returnCss: string[] = []
    //     const key = 'light'
    //     const css = entriesToCss(Object.entries(theme))
    //     const roots = toArray([`[data-theme="${key}"],[data-theme="${key}"] *,[data-theme="${key}"] ::before,[data-theme="${key}"] ::after`, `[data-theme="${key}"] ::backdrop`])
    //     returnCss.push(roots.map(root => `${root}{${css}}`).join(''))
    //     return returnCss.join('')
    //   },
    // },
  ],
  theme: {
    colors: {
      // 'ui-primary': 'rgb(var(--ui-primary))',
      // 'ui-text': 'rgb(var(--ui-text))',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  configDeps: [
  ],
})
