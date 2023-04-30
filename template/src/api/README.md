# API

All code related to communicating with backend API(s) should be placed here.

## Generating API client configuration

If Swagger/OpenAPI documentation is available, we can generate all API endpoints from that configuration using a single npm script.

```bash
npm run generate:api
```

This command is set up to generate an API client with [axios](https://github.com/axios/axios) as the HTTP client and using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) as the code generator.

Make sure to update that npm script in `package.json` to point to the correct URL for the desired Swagger/OpenAPI JSON by replacing `__SWAGGER_JSON_URL_HERE__` with an actual URL.

If you need to update the API client because backend API was updated, just run this command again.

### Generating API client configuration with proper structure

Depending on how the API specification is structured, you might need to update `--module-name-index` flag in `generate:api` script.

Desired behavior for the generated API client is that API endpoints belonging to different domains are nested under those domains as properties on the API client.

For example, for an endpoint `/users/projects`, the desired way to use the API client is to have that endpoint accessible as `ApiClient.users.projectsList()` instead of it being at the root like `ApiClient.projectsList()`. Using "namespaced" groups of API endpoints also prevents potential conflicts that could occur if multiple endpoints with the same name would have to be generated at the root of the API client (e.g. `/users/projects` and `/companies/projects`).

API client generator automatically creates a file `/src/api/api-client.ts` which creates an instance of API client that should be used within the app. If you need to adjust any `axios` settings for that ApiClient, this is the place to do it.

### SSL errors while generating API client configuration

If your desired Swagger/OpenAPI documentation is not using SSL (HTTPS), then an additional flag needs to be passed to `swagger-typescript-api`. Update `generate:api` script by adding `--disableStrictSSL` flag as another argument to `swagger-typescript-api` call.

## Managing API calls

For managing API calls, their lifecycle, loading/error states as well as data, make sure to use [TanStack Query](https://tanstack.com/query), formerly known as React Query.

### Manual API calls

If for some reason you have to use API client directly without TanStack Query, for example in [NextAuth/Auth.js](https://authjs.dev/) callbacks where you don't have the TanStack Query client available, make sure to handle errors properly as well. There is an `isRequestError` method available on the generated `Api` client class which you can use to determine if the error in try/catch is actually a request error thrown by `axios`.

```ts
import { ApiClient } from "@/api";

try {
  const response = ApiClient.users.usersList();
} catch (error) {
  if (ApiClient.isRequestError(error)) {
    // axios will throw an error for any request that is not 2xx status
    // This `isRequestError` check guarantees that the error is an actual axios thrown error and not some other runtime error and it makes sure that you will have proper TypeScript types in this block
    // Use this to check exact status code if you need to respond a specific way to a specific status code
  }
}
```
