type Props = { modelName: string; color: string; variant: string }

export default function Awaiting({ modelName, color, variant }: Props) {
  return (
    <div
      className="min-h-[560px] flex items-center justify-center relative"
      style={{
        background:
          'repeating-linear-gradient(135deg, #FAF7F1 0 16px, #F2EDE3 16px 17px)',
      }}
    >
      <div className="text-center px-8 max-w-md">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: color }}
            aria-hidden
          />
          <p
            className="text-[11px] uppercase tracking-[0.24em] text-[#6E6863]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Variant {variant} · Awaiting
          </p>
        </div>
        <h2
          className="text-5xl leading-[1.05] tracking-[-0.01em] text-[#14110F]"
          style={{ fontFamily: 'Instrument Serif, serif' }}
        >
          <span className="italic">{modelName}</span> has not<br />
          returned this one yet.
        </h2>
        <p className="mt-6 text-sm text-[#6E6863] leading-relaxed">
          When the model returns this variant, paste it into{' '}
          <code
            className="px-1.5 py-0.5 bg-[#ECE6D9] rounded text-[12px]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            src/submissions/{slug(modelName)}/{variant}.tsx
          </code>{' '}
          and it will render here, in this frame.
        </p>
      </div>
    </div>
  )
}

function slug(name: string) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}
