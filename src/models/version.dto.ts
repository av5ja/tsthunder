import { z } from 'zod'

export namespace NSApp {
  export const VersionModel = z.object({
    version: z.string(),
    revision: z.string()
  })

  export const LookupModel = z
    .object({
      results: z.array(
        z.object({
          bundleId: z.string(),
          userRatingCount: z.number().int().min(0),
          trackId: z.number().int().min(0),
          price: z.number().min(0),
          userRatingCountForCurrentVersion: z.number().int().min(0),
          averageUserRating: z.number().min(0),
          averageUserRatingForCurrentVersion: z.number().min(0),
          fileSizeBytes: z.string().pipe(z.coerce.number()),
          minimumOsVersion: z.string(),
          releaseDate: z.string().datetime(),
          currentVersionReleaseDate: z.string().datetime(),
          version: z.string()
        })
      )
    })
    .transform((object) => {
      return object.results[0]
    })

  export type LookupModel = z.infer<typeof LookupModel>
  export type VersionModel = z.infer<typeof VersionModel>
}
