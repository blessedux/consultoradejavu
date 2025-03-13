'use client'

// This file adds some debug info to help troubleshoot routing issues
if (typeof window !== 'undefined') {
  console.log('Application loaded. Current path:', window.location.pathname);
  console.log('Application loaded. Current URL:', window.location.href);
  
  // Add error event listener to catch any uncaught errors
  window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error);
  });
}

export default function GlobalDebug() {
  return null; // This component doesn't render anything
} 