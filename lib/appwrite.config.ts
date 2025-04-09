import * as sdk from 'node-appwrite';

export const {
  NEXT_PUBLIC_APPWRITE_API_ENDPOINT: ENDPOINT,
  // NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: PROJECT_ID,
  NEXT_PUBLIC_APPWRITE_API_KEY: API_KEY,
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: DATABASE_ID,
  NEXT_PUBLIC_APPWRITE_DATABASE_PATIENTS_COLLECTION_ID: PATIENTS_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_DATABASE_DOCTORS_COLLECTION_ID: DOCTORS_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_DATABASE_APPOINTMENTS_COLLECTION_ID:
    APPOINTMENTS_COLLECTION_ID,
  NEXT_PUBLIC_APPWRITE_STORAGE_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
