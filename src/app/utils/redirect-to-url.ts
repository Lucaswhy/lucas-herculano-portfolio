export default function redirectToUrl(url?: string): void {
  if (url) {
    window.open(url, '_blank');
  }
}
