import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
        privateKey: process.env.PRIVATE_KEY
      })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}