---
to: src/api/api-client.ts
unless_exists: true
---
import { Api } from "./api-generated";

export const ApiClient = new Api();
