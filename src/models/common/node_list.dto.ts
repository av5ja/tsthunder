import { z } from 'zod'

export const NodeList = <T extends z.ZodTypeAny>(N: T) =>
  z.object({
    nodes: z.array(N)
  })
