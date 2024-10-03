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

- **Full-Screen Mode**  
  Experience uninterrupted music streaming in a distraction-free full-screen mode for complete immersion.

- **Password Login & Verification-Based Sign Up**  
  Secure your account with password login and email verification, ensuring a reliable and safe authentication process.

- **Forgot Password**  
  Recover your account easily through a simple and secure password reset process, ensuring smooth access at all times.

- **Google Login & Sign Up**  
  Streamline account creation and login with Google authentication for fast and secure user onboarding.

- **Collections Clone & Custom Playlist Creation/Editing**  
  Clone your existing Spotify collections or create and edit custom playlists, offering full control over your music library.

- **History**  
  Track your music journey with a complete history of all played tracks, albums, and artists, allowing you to revisit favorites easily.

- **Search with Filter (All, Artists, Albums, Tracks)**  
  Effortlessly find what you're looking for with a powerful search feature that filters results by artist, album, track, or all.

- **Spotify Search Queries**  
  Utilize advanced Spotify search queries directly within the platform (e.g., artist:alan walker), providing precise music discovery.

- **Account Edit Option**  
  Easily update and manage your account details, ensuring your profile stays current and personalized.

- **Activity-Based Recommendations**  
  Receive tailored music recommendations based on your listening history, ensuring a constantly evolving playlist that suits your tastes.

- **Link Copy Feature (Track, Album, Artist)**  
  Share your favorite music with others by copying direct links to tracks, albums, or artists, simplifying music sharing.

- **Audio (Track) Controls**  
  Control your music playback seamlessly with an easy-to-use interface that supports play, pause, skip, and volume adjustments.

- **Light & Dark Mode**  
  Switch between light and dark modes for a visually customized experience that adapts to your environment and preferences.

- **Responsive Design**  
  Enjoy a smooth and adaptable music streaming experience on any device, with a responsive design that adjusts to various screen sizes.

- **Restricted Audio Playback**  
  Protect your content by restricting audio playback to authorized users only, maintaining security and privacy across the platform.





Here is the code block for your `README.md` that you can copy and paste:

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
```

