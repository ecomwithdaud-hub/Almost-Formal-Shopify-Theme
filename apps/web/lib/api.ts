export async function api<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const baseUrl =
    typeof window === "undefined"
      ? (process.env.API_URL || "http://127.0.0.1:4000").replace(/\/$/, "")
      : "";
  const response = await fetch(`${baseUrl}/api${normalizedPath}`, {
    ...options,
    headers: {
      ...(options.body instanceof FormData
        ? {}
        : { "Content-Type": "application/json" }),
      ...options.headers,
    },
  });
  const data = await response.json();
  if (!response.ok)
    throw new Error(data.error || "Something went wrong. Please try again.");
  return data;
}
export type Settings = {
  name: string;
  email: string;
  phone: string;
  instagram: string;
  shipping: number;
  codEnabled: boolean;
  announcement: string;
};
