import { ImageResponse } from 'next/og'
import { profile } from '../content/site'

export const alt = `${profile.shortName}, ${profile.jobTitle}`
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 96px',
        background: '#202023',
        color: 'rgba(255, 255, 255, 0.92)'
      }}
    >
      <div style={{ fontSize: 80, fontWeight: 700 }}>{profile.name}</div>
      <div style={{ marginTop: 24, fontSize: 44, color: '#fbd38d' }}>
        {profile.jobTitle}
      </div>
      <div style={{ marginTop: 16, fontSize: 32, opacity: 0.7 }}>
        {profile.location}
      </div>
    </div>,
    size
  )
}
