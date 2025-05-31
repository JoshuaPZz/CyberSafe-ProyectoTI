import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

// Firebase “core” y Auth
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth }       from '@angular/fire/auth';

// **NUEVO**: Realtime Database
import { provideDatabase, getDatabase } from '@angular/fire/database';

import { environment } from './app/environment';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),

    provideFirebaseApp(() => initializeApp(environment.firebase)),

    provideAuth(() => getAuth()),


    provideDatabase(() => getDatabase()),
    // ——————————————

  ]
}).catch(err => console.error(err));
