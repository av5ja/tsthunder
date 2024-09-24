import dayjs from 'dayjs'
import { z } from 'zod'

export const DateTime = z
  .string()
  .datetime()
  .nullable()
  .transform((value) => (value === null ? null : dayjs(value).toISOString()))

export type DateTime = z.infer<typeof DateTime>
