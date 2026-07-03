const stroke = '#08090b'
const sw = 3.2

export function BoldShopifyIcon() {
  return (
    <svg viewBox="0 0 52 52" width="52" height="52" fill="none" aria-hidden="true">
      <path
        d="M17 19.5 13.5 42h25L35 19.5"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      <path
        d="M21 19.5c0-5.2 3.2-8.5 5-8.5s5 3.3 5 8.5"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M21.5 28.5h9M21.5 33.5h6.5"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BoldSeoGeoIcon() {
  return (
    <svg viewBox="0 0 52 52" width="52" height="52" fill="none" aria-hidden="true">
      <circle cx="23" cy="23" r="9.5" stroke={stroke} strokeWidth={sw} />
      <path d="M30 30 39.5 39.5" stroke={stroke} strokeWidth={sw} strokeLinecap="round" />
      <circle cx="37" cy="15.5" r="7" stroke={stroke} strokeWidth={sw} />
      <path
        d="M37 11.5v8M33 15.5h8"
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path
        d="M34.5 19.5c1.2 1.4 2.8 2.2 4.5 2.2"
        stroke={stroke}
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  )
}
