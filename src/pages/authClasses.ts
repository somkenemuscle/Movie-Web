// Shared Tailwind class strings for LoginPage and SignUpPage, which render
// an identical two-panel layout around different copy/fields.

export const authLayout = 'flex min-h-[100svh] pt-[var(--nav-height)] max-[680px]:flex-col'

export const authBrand =
  'relative w-[52%] max-[900px]:w-[44%] max-[680px]:w-full max-[680px]:min-h-[240px] flex-shrink-0 overflow-hidden ' +
  '[background:linear-gradient(160deg,#0c0c1e_0%,#130d38_40%,#0f0826_100%)] flex flex-col'

export const authBrandBg = 'absolute inset-0 pointer-events-none'

export const authBrandBlob1 =
  'absolute rounded-full blur-[90px] animate-pulse-soft top-[5%] -right-[10%] w-[450px] h-[450px] ' +
  'bg-[radial-gradient(circle,rgba(139,92,246,0.22)_0%,transparent_65%)]'

export const authBrandBlob2 =
  'absolute rounded-full blur-[90px] animate-pulse-soft [animation-delay:4s] bottom-[20%] -left-[5%] w-[380px] h-[380px] ' +
  'bg-[radial-gradient(circle,rgba(236,72,153,0.16)_0%,transparent_65%)]'

export const authBrandInner =
  'relative z-[1] flex flex-col h-full pt-12 px-[52px] max-[900px]:px-9 max-[680px]:px-6 max-[680px]:pt-8 pb-0'

export const authBrandLogo =
  'inline-flex items-center gap-2.5 font-display text-xl tracking-[0.08em] text-white mb-16 max-[680px]:mb-6 ' +
  'transition-opacity duration-150 hover:opacity-80 [&_svg]:w-7 [&_svg]:h-7 [&_svg]:text-accent'

export const authBrandContent = 'flex-1'

export const authBrandTitle =
  'font-display text-[clamp(52px,5.5vw,80px)] max-[900px]:text-[clamp(44px,5vw,64px)] max-[680px]:text-[52px] ' +
  'font-normal tracking-[0.06em] leading-none text-white uppercase mb-5 max-[680px]:mb-0'

export const authBrandSub =
  'text-[15px] text-white/60 leading-[1.75] max-w-[340px] mb-9 max-[680px]:hidden'

export const authBrandPerks = 'list-none m-0 p-0 flex flex-col gap-3.5 max-[680px]:hidden'

export const authBrandPerkItem = 'flex items-center gap-3 text-sm font-medium text-white/75'

export const authBrandPerkIcon =
  'flex items-center justify-center w-[34px] h-[34px] bg-white/10 border border-white/12 rounded-md text-base flex-shrink-0'

export const authBrandPosters =
  'grid grid-cols-3 gap-2.5 mt-12 max-[680px]:mt-5 ' +
  '[mask-image:linear-gradient(to_bottom,transparent_0%,black_35%,black_65%,transparent_100%)]'

export const authBrandPoster = 'h-[120px] rounded-[10px] overflow-hidden opacity-70'

export const authFormPanel =
  'flex-1 flex items-center justify-center py-12 px-10 max-[680px]:py-9 max-[680px]:px-6 max-[680px]:pb-12 bg-bg overflow-y-auto'

export const authFormInner = 'w-full max-w-[400px] animate-fade-in-up'

export const authFormHeader = 'mb-8'

export const authFormTitle = 'font-display text-[42px] font-normal tracking-[0.05em] text-text mb-2'

export const authFormSub = 'text-sm text-text-muted leading-[1.6]'

export const authSocialBtn =
  'w-full flex items-center justify-center gap-3 py-[13px] px-5 bg-white/5 border-[1.5px] border-border-strong ' +
  'rounded-md text-text font-body text-sm font-medium cursor-pointer transition-[background,border-color,transform] ' +
  'duration-150 mb-5 hover:bg-white/9 hover:border-white/25 hover:-translate-y-px active:scale-[0.98] [&_svg]:w-5 [&_svg]:h-5 [&_svg]:flex-shrink-0'

export const authDivider =
  'flex items-center gap-3.5 mb-6 text-text-subtle text-xs font-medium tracking-[0.06em] uppercase ' +
  "before:content-[''] before:flex-1 before:h-px before:bg-border after:content-[''] after:flex-1 after:h-px after:bg-border"

export const authForm = 'flex flex-col gap-[18px]'

export const authFormRow = 'flex items-center justify-between gap-3'

export const authRemember = 'inline-flex items-center gap-2 text-[13px] text-text-muted cursor-pointer select-none'

export const authRememberCheck = 'w-4 h-4 accent-accent cursor-pointer'

export const authTerms = 'text-xs text-text-subtle leading-[1.6] m-0'

export const authSubmit = 'w-full mt-1'

export const authLink =
  'text-[13px] text-accent font-medium transition-colors duration-150 underline underline-offset-2 decoration-transparent hover:text-pink hover:decoration-current'

export const authLinkAccent =
  '!text-sm !font-semibold !no-underline hover:!underline hover:!underline-offset-[3px] hover:!decoration-current'

export const authSwitch = 'text-center mt-6 text-sm text-text-muted'
