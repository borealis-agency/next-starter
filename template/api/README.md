# API

All code related to communicating with backend API(s) should be placed here.

## Generating API client configuration

If Swagger/OpenAPI documentation is available, we can generate all API endpoints from that configuration using a single npm script.

```bash
npm run generate:api
```

This command is set up to generate an API client with [axios](https://github.com/axios/axios) as the HTTP client and using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) as the code generator.

Make sure to update that npm script in `package.json` to point to the correct URL for the desired Swagger/OpenAPI JSON by replacing `__SWAGGER_JSON_URL_HERE__` with an actual URL.

### Generating API client configuration with proper structure

Depending on how the API specification is structured, you might need to update `--module-name-index` flag in `generate:api` script.

Desired behavior for the generated API client is that API endpoints belonging to different domains are nested under those domains as properties on the API client.

For example, for an endpoint `/users/projects`, the desired way to use the API client is to have that endpoint accessible as `ApiClient.users.projectsList()` instead of it being at the root like `ApiClient.projectsList()`. Using "namespaced" groups of API endpoints also prevents potential conflicts that could occur if multiple endpoints with the same name would have to be generated at the root of the API client (e.g. `/users/projects` and `/companies/projects`).

### SSL errors while generating API client configuration

If your desired Swagger/OpenAPI documentation is not using SSL (HTTPS), then an additional flag needs to be passed to `swagger-typescript-api`. Update `generate:api` script by adding `--disableStrictSSL` flag as another argument.

## Using generated API client

Now that the API client is generated, we need to create an instance of it in order to use it inside the app.

Create a new file `/api/index.ts` and create an instance of `Api` class that was automatically generated in `api-generated.ts` file.

```ts
import { Api } from "./api-generated";

export const ApiClient = new Api();
```

That's it, you new API client should be ready to use with autocomplete features and typesafety provided by TypeScript.

## Managing API calls

For managing API calls, their lifecycle, loading/error states as well as data, make sure to use [TanStack Query](https://tanstack.com/query), formerly known as React Query.
