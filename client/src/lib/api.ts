import { queryClient } from './queryClient';

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }

  return res;
}

export async function fetchWithAuth(url: string) {
  const response = await fetch(url, {
    credentials: 'include'
  });
  
  if (!response.ok) {
    if (response.status === 401) {
      // Clear auth data and redirect to login
      queryClient.setQueryData(['/api/auth/me'], null);
      window.location.href = '/login';
      return null;
    }
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  return response.json();
}
