import { CoopStage } from '@/enums/coop/coop_stage'
import { z } from 'zod'
import { ImageURL } from './image_url.dto'
import { RawId } from './raw_id.dto'

export const CoopStageModel = z
  .object({
    id: RawId(CoopStage.Id)
  })
  .merge(ImageURL)

export type CoopStageModel = z.infer<typeof CoopStageModel>
