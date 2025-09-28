// /src/components/ImageLightbox.tsx
'use client'

import * as React from 'react'
import Image from 'next/image'

type Props = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  caption?: string
  credit?: string
}

export default function ImageLightbox({
  src,
  alt,
  width = 1200,
  height = 675,
  className = '',
  caption,
  credit,
}: Props) {
  const [open, setOpen] = React.useState(false)
  const [scale, setScale] = React.useState(1)
  const [pos, setPos] = React.useState({ x: 0, y: 0 })
  const imgRef = React.useRef<HTMLImageElement | null>(null)
  const dragState = React.useRef<{ dragging: boolean; startX: number; startY: number; origX: number; origY: number }>({
    dragging: false, startX: 0, startY: 0, origX: 0, origY: 0
  })

  const close = () => { setOpen(false); setScale(1); setPos({ x: 0, y: 0 }) }
  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 5))
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 1))
  const resetZoom = () => { setScale(1); setPos({ x: 0, y: 0 }) }

  // ESC para cerrar
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') close() }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // Wheel zoom (Ctrl/Cmd + rueda o normal en sobremesa)
  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    if (!open) return
    e.preventDefault()
    const delta = e.deltaY
    if (delta > 0) zoomOut()
    else zoomIn()
  }

  // Drag para pan cuando hay zoom
  const onMouseDown: React.MouseEventHandler<HTMLImageElement> = (e) => {
    if (scale === 1) return
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      origX: pos.x,
      origY: pos.y
    }
  }
  const onMouseMove: React.MouseEventHandler<HTMLImageElement> = (e) => {
    if (!dragState.current.dragging) return
    const dx = e.clientX - dragState.current.startX
    const dy = e.clientY - dragState.current.startY
    setPos({ x: dragState.current.origX + dx, y: dragState.current.origY + dy })
  }
  const endDrag = () => { dragState.current.dragging = false }

  return (
    <>
      {/* Imagen en el artículo (miniatura/preview) */}
      <figure className={`group relative ${className}`}>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ampliar imagen"
          className="block w-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg cursor-zoom-in"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-auto rounded-lg shadow-sm transition-transform group-hover:scale-[1.01]"
            sizes="(max-width: 768px) 100vw, 768px"
            priority={false}
          />
          <span className="absolute bottom-2 right-2 text-xs bg-black/60 text-white rounded px-2 py-0.5">
            Click para ampliar
          </span>
        </button>
        {(caption || credit) && (
          <figcaption className="mt-2 text-sm text-muted-foreground">
            {caption}{caption && credit ? ' · ' : ''}{credit ? <em>{credit}</em> : null}
          </figcaption>
        )}
      </figure>

      {/* Lightbox con zoom */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3"
          onClick={close}
          onWheel={onWheel}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controles */}
            <div className="absolute -top-12 left-0 right-0 mx-auto flex items-center justify-center gap-2">
              <button onClick={zoomOut} className="px-3 py-1 rounded bg-white/90 hover:bg-white text-black text-sm">−</button>
              <button onClick={resetZoom} className="px-3 py-1 rounded bg-white/90 hover:bg-white text-black text-sm">100%</button>
              <button onClick={zoomIn} className="px-3 py-1 rounded bg-white/90 hover:bg-white text-black text-sm">+</button>
              <button onClick={close} aria-label="Cerrar" className="ml-3 px-3 py-1 rounded bg-white/30 hover:bg-white/40 text-white text-sm">✕</button>
            </div>

            <div className="overflow-hidden rounded-lg">
              <img
                ref={imgRef}
                src={src}
                alt={alt}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={endDrag}
                onMouseLeave={endDrag}
                className="max-w-[95vw] max-h-[85vh] object-contain cursor-grab"
                style={{
                  transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
                  transformOrigin: 'center center',
                }}
                draggable={false}
              />
            </div>

            {(caption || credit) && (
              <div className="mt-3 text-center text-sm text-white/90">
                {caption}{caption && credit ? ' · ' : ''}{credit ? <em>{credit}</em> : null}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
