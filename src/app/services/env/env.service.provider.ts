import { EnvService } from './env.service';

// tslint:disable-next-line: variable-name
export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow = window || {};
  const browserWindowEnv = browserWindow['__env' as keyof typeof window] || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) {
      env[key as keyof typeof env] = window['__env' as keyof typeof window][key];
    }
  }

  console.log(env)
  return env;
};

// tslint:disable-next-line: variable-name
export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: []
};
