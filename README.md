Sccreen shots


Home Page: -
![image](https://github.com/user-attachments/assets/d334a109-ee94-49dc-afd8-066be7dc8108)

 


Signp Page: -
![image](https://github.com/user-attachments/assets/ab64b0af-b658-4bf1-8a95-e2217c69d6d2)

 


Login Page: - 
![image](https://github.com/user-attachments/assets/9b38a86d-27ab-41bc-8fe5-6b38772e8cf0)




# Rhythm Realm

Rhythm Realm is a feature-packed digital music streaming platform designed to offer a rich, personalized listening experience. Users can explore an extensive library of music, create custom playlists, and enjoy personalized recommendations. With seamless Spotify API integration, the platform offers secure authentication, powerful search options, and a responsive design that works across devices. Built on the MERN stack, it provides high performance and ensures user security.

## Features

1. Full-Screen Mode offers a distraction-free, immersive music experience.

2. Password Login & Verification ensures secure account access with email confirmation.

3. Forgot Password allows easy recovery through a quick reset process.

4. Google Login & Sign Up provides fast and secure user onboarding.

5. Collections & Playlists let users clone Spotify collections or create/edit custom playlists.

6. History tracks all your previously played songs, albums, and artists.

7. Filtered Search helps you find music by artist, album, or track with ease.

8. Spotify Search allows advanced music discovery using detailed queries.

9. Account Edit lets users update their profile quickly.

10. Recommendations adapt to your listening habits for personalized music.

11. Link Copy makes sharing music easy with direct track or album links.

12. Audio Controls offer smooth play, pause, and volume adjustments.

13. Light & Dark Mode customizes the look for any environment.

14. Responsive Design ensures a smooth experience on all devices.

15. Restricted Playback protects music content for authorized users only.



```markdown
## Generate ENV Files

### Create `.env` file in the `client` directory with the following content:

```bash
VITE_GOOGLE_CLIENT=YourGoogleClientSecretFrom https://console.cloud.google.com/apis/library
```

### Create `.env` file in the `server` directory with the following content:

```bash
PORT=5000
MONGO_URL=mongodb://localhost:27017/Rhythm_Realm

SITE_URL=http://localhost:5000  # Replace with your URL if different from port 5000

JWT_SECRET=GenerateATokenOf256Bytes   # Hint: A hexadecimal unique key

SPOTIFY_ID=YourSpotifyIDFrom https://www.spotify.com/in-en/account/profile/
SPOTIFY_SECRET=YourSpotifyAPISecretFrom https://developer.spotify.com/documentation/web-api

MAIL_EMAIL=YourEmailAddressForSendingEmails@gmail.com
MAIL_SECRET=YourMailSecretFrom https://aws.amazon.com/secrets-manager/

# If you have enabled two-step verification for Gmail, generate an app password and use it as MAIL_SECRET [https://myaccount.google.com/apppasswords]
```

---

## How to Start

1. Clone the repository:
   ```bash
   git clone https://github.com/CHIRAG-singh123/music-streaming-mern.git
   ```

2. Navigate to the client folder and install dependencies:
   ```bash
   cd client
   npm install
   ```

3. Build and start the client:
   ```bash
   npm run build
   npm run dev
   ```

4. Move to the server folder:
   ```bash
   cd ..
   cd server
   ```

5. Install server dependencies and start the server:
   ```bash
   npm install
   npm start
   ```

---

Follow these steps to get Rhythm Realm up and running locally. Make sure to configure the environment variables properly to ensure full functionality.


