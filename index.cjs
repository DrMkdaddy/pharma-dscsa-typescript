"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PharmaDscsaClient = void 0;

class PharmaDscsaClient {
  constructor(config = {}) {
    this.apiKey = config.apiKey || (typeof process !== 'undefined' ? process.env?.RAPIDAPI_KEY || '' : '');
    this.rapidApiHost = config.rapidApiHost || 'us-fda-dscsa-eu-fmd-prescription-drug-serialization.p.rapidapi.com';
    this.baseUrl = config.baseUrl || `https://${this.rapidApiHost}`;
  }

  async request(endpoint, options = {}) {
    if (!this.apiKey) {
      return {
        success: false,
        error: 'RapidAPI API key is required. Obtain a key at: https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/us-fda-dscsa-eu-fmd-prescription-drug-serialization',
        code: 'MISSING_API_KEY',
        subscribe_url: 'https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/us-fda-dscsa-eu-fmd-prescription-drug-serialization'
      };
    }

    const cleanBase = this.baseUrl.replace(/\/+$/, '');
    const cleanPath = endpoint.replace(/^\/+/, '');
    const url = `${cleanBase}/${cleanPath}`;

    const headers = Object.assign({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-rapidapi-key': this.apiKey,
      'x-rapidapi-host': this.rapidApiHost
    }, options.headers || {});

    try {
      const response = await fetch(url, Object.assign({}, options, { headers }));
      const data = await response.json();
      return data;
    } catch (err) {
      return {
        success: false,
        error: (err && err.message) || 'Network request failed',
        code: 'NETWORK_ERROR',
        subscribe_url: 'https://rapidapi.com/noor-mkdad-apis-noor-mkdad-apis-default/api/us-fda-dscsa-eu-fmd-prescription-drug-serialization'
      };
    }
  }

  async getHealth() {
    return this.request('/health', { method: 'GET' });
  }

  async validate(payload) {
    return this.request('/api/v1/validate', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  }
}

exports.PharmaDscsaClient = PharmaDscsaClient;
exports.default = PharmaDscsaClient;
