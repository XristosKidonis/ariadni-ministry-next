import * as admin from 'firebase-admin';

// Initialize Firebase Admin (only runs on server)
let firebaseApp: admin.app.App | null = null;

export function initializeFirebase() {
  if (firebaseApp) {
    return firebaseApp;
  }

  // Get credentials from environment variable
  const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT;

  if (!serviceAccountKey) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT environment variable is not set');
  }

  try {
    const serviceAccount = JSON.parse(serviceAccountKey);

    firebaseApp = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    });

    return firebaseApp;
  } catch (error) {
    console.error('Failed to initialize Firebase:', error);
    throw error;
  }
}

export async function savePrayerRequest(data: {
  name: string;
  email: string;
  prayer: string;
  timestamp: string;
  requestId: string;
}) {
  try {
    const app = initializeFirebase();
    const db = admin.database(app);

    await db.ref(`prayer-requests/${data.requestId}`).set(data);

    return { success: true, id: data.requestId };
  } catch (error) {
    console.error('Error saving prayer request to Firebase:', error);
    throw error;
  }
}

export async function saveDonation(data: {
  method: string;
  amount: string;
  name?: string;
  email?: string;
  timestamp: string;
  donationId: string;
}) {
  try {
    const app = initializeFirebase();
    const db = admin.database(app);

    await db.ref(`donations/${data.donationId}`).set(data);

    return { success: true, id: data.donationId };
  } catch (error) {
    console.error('Error saving donation to Firebase:', error);
    throw error;
  }
}
