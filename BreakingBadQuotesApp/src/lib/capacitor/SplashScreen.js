import { SplashScreen } from '@capacitor/splash-screen';

// Hide the splash (you should do this on app launch)
await SplashScreen.hide();

// Show the splash for an indefinite amount of time:
await SplashScreen.show({
  autoHide: false,
});

// Show the splash for two seconds and then automatically hide it:
await SplashScreen.show({
  showDuration: 500,
  autoHide: true,
});