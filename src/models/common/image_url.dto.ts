import { z } from 'zod'

export const ImageURL = z.object({
  image: z.object({
    url: z.string().url()
  })
})

export type ImageURL = z.infer<typeof ImageURL>
