import dayjs from 'dayjs'
import { z } from 'zod'

export namespace Discord {
  export const Token = z.object({
    token_type: z.string(),
    access_token: z.string(),
    id_token: z.string(),
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    expires_in: z.number().transform((value: any) => dayjs().add(value, 's').toISOString()),
    refresh_token: z.string(),
    scope: z.string()
  })

  export const User = z.object({
    id: z.string(),
    username: z.string(),
    avatar: z.string(),
    locale: z.string(),
    global_name: z.string()
  })

  export type User = z.infer<typeof User>
  export type Token = z.infer<typeof Token>
}
