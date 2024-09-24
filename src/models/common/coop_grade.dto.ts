import { CoopGrade } from '@/enums/coop/coop_grade'
import { z } from 'zod'
import { RawId } from './raw_id.dto'

export const CoopGradeModel = z
  .object({
    id: RawId(CoopGrade.Id)
  })
  .nullable()

export type CoopGradeModel = z.infer<typeof CoopGradeModel>
