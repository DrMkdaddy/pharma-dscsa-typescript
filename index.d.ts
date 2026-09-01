export interface RapidApiConfig {
  /**
   * RapidAPI Proxy Key ('x-rapidapi-key').
   * Required to authenticate requests via RapidAPI.
   * Obtain your dedicated API key at: https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee
   */
  apiKey?: string;
  /**
   * Custom endpoint URL override. Defaults to 'https://fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee.p.rapidapi.com'.
   */
  baseUrl?: string;
  /**
   * RapidAPI Host header. Defaults to 'fda-dscsa-eu-fmd-drug-serialization-api-21-usc-360eee.p.rapidapi.com'.
   */
  rapidApiHost?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  code?: string;
  subscribe_url?: string;
  upgrade_url?: string;
  meta?: {
    latency_ms: number;
    version: string;
  };
}

export declare class PharmaDscsaClient {
  constructor(config?: RapidApiConfig);
  /**
   * Send an authenticated request to RapidAPI Hub.
   */
  request<T = any>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>>;
  /**
   * Check API health and latency.
   */
  getHealth(): Promise<ApiResponse<{ status: string; timestamp: string }>>;
  /**
   * Validate or parse payload via RapidAPI.
   */
  validate<T = any>(payload: Record<string, any>): Promise<ApiResponse<T>>;
}

export default PharmaDscsaClient;
