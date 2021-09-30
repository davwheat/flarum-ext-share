import app from 'flarum/common/app';

export default async function shareUrl(url: string, description: string): Promise<void> {
  navigator.share({
    title: app.forum.attribute('title') as string,
    text: description,
    url,
  });
}
