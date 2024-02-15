import cn from 'clsx'
import Image from 'next/image'

export function Screenshot({ src, alt, full }) {
  return (
    <div
      className={cn(
        '-mb-4 mt-6 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800',
        full ? 'bg-white' : 'bg-zinc-800'
      )}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'w-auto select-none',
          full ? '' : ''
        )}
      />
    </div>
  )
}