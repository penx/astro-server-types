
import createClient from "openapi-fetch";
import { fetch, Request } from 'undici'

export const fetchClient = createClient({
  baseUrl: process.env.CUSTOMER_API_BASE_URL,
  fetch,
  Request
});
