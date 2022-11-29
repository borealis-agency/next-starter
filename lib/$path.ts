export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  borealis_agency_horizontal_logo_subtitle_dark_svg: '/borealis-agency-horizontal-logo-subtitle-dark.svg',
  borealis_logo_icon_red_svg: '/borealis-logo-icon-red.svg'
} as const

export type StaticPath = typeof staticPath
