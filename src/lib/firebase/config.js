const config = {
  apiKey: "AIzaSyCzloyk6Pm3Yih7RlcnuM0pcTpf5GU6vo0",
  authDomain: "fir-codelab-nextjs.firebaseapp.com",
  projectId: "fir-codelab-nextjs",
  storageBucket: "fir-codelab-nextjs.appspot.com",
  messagingSenderId: "167213257545",
  appId: "1:167213257545:web:891b095552ede4efbf4098",
  measurementId: "G-M30S41X40K",
};

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
