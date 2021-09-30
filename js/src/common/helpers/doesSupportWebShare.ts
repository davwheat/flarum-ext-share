export default function doesSupportWebShare(): boolean {
  return 'share' in navigator;
}
