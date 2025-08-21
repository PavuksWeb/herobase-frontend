import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import { s3Client } from '../lib/s3Client';

export async function deleteImageFromS3(key: string) {
  try {
    const client = s3Client;
    const command = new DeleteObjectCommand({
      Bucket: 'hero-base-images',
      Key: key,
    });

    await client.send(command);
    console.log('File deleted');
  } catch (error) {
    console.log('Error deleting file', error);
  }
}
