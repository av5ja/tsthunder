import type { S3URL } from '@/models/common/s3_url.dto'

export interface ResourceQuery {
  assetURLs: S3URL[]
}
