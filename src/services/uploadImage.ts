import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../lib/s3Client';

export async function uploadImageToS3(file: File): Promise<string> {
  const fileName = `${Date.now()}-${file.name}`;

  const client = s3Client;

  const command = new PutObjectCommand({
    Bucket: 'hero-base-images',
    Key: fileName,
    Body: file,
    ContentType: file.type,
  });

  await client.send(command);

  return `https://hero-base-images.s3.eu-north-1.amazonaws.com/${fileName}`;
}
