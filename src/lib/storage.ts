// Storage helpers com fallback in-memory
const memStore = new Map<string, unknown>();

export const store = {
  get<T>(key: string, fallback: T): T {
    try {
      const v = localStorage.getItem(`ddn.v1.${key}`);
      return v === null ? fallback : (JSON.parse(v) as T);
    } catch {
      return memStore.has(`ddn.v1.${key}`) ? (memStore.get(`ddn.v1.${key}`) as T) : fallback;
    }
  },
  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(`ddn.v1.${key}`, JSON.stringify(value));
    } catch {
      memStore.set(`ddn.v1.${key}`, value);
    }
  },
};
