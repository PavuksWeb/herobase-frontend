import { S3Client } from '@aws-sdk/client-s3';

export const s3Client = new S3Client({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: 'AKIAY27ONBATYUV2DWB7',
    secretAccessKey: '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',
  },
  requestChecksumCalculation: 'WHEN_REQUIRED',
});
