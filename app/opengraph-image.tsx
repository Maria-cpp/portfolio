import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt =
  'Maria Naseem — Forward Deployed Engineer & AI Solutions Architect';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0d0f14',
          padding: '80px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: 'rgba(124,92,255,0.22)',
            filter: 'blur(90px)',
            display: 'flex'
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 22,
            fontFamily: 'monospace',
            color: '#7c5cff',
            letterSpacing: 3,
            textTransform: 'uppercase'
          }}
        >
          Maria Naseem
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            color: '#e7e9ee',
            lineHeight: 1.05,
            letterSpacing: -2
          }}
        >
          Forward Deployed Engineer
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 8,
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
            color: '#22d3ee'
          }}
        >
          AI Solutions Architect
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 27,
            color: '#9aa0ad',
            maxWidth: 900,
            lineHeight: 1.4
          }}
        >
          I embed with clients, map their workflows, and ship production AI —
          agentic systems, RAG, computer vision, enterprise automation.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 44,
            gap: 12,
            fontSize: 19,
            fontFamily: 'monospace',
            color: '#7c5cff'
          }}
        >
          <div style={{ display: 'flex' }}>Agentic AI</div>
          <div style={{ display: 'flex', color: '#3a3f4b' }}>·</div>
          <div style={{ display: 'flex' }}>RAG</div>
          <div style={{ display: 'flex', color: '#3a3f4b' }}>·</div>
          <div style={{ display: 'flex' }}>Computer Vision</div>
          <div style={{ display: 'flex', color: '#3a3f4b' }}>·</div>
          <div style={{ display: 'flex' }}>Azure</div>
          <div style={{ display: 'flex', color: '#3a3f4b' }}>·</div>
          <div style={{ display: 'flex' }}>MCP</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
