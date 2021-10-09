import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';

import CommentPost from 'flarum/forum/components/CommentPost';
import Separator from 'flarum/common/components/Separator';
import PostMeta from 'flarum/forum/components/PostMeta';

import type ItemList from 'flarum/common/utils/ItemList';
import * as PostControls from 'flarum/forum/utils/PostControls';

import Discussion from 'flarum/common/models/Discussion';

import { ShareDropdownButton, ShareIconButton, ShareLinkButton, doesSupportWebShare, shareUrl } from '../common';

app.initializers.add('davwheat/flarum-ext-share', () => {
  if (!doesSupportWebShare()) return;

  const displayType: () => 'icon' | 'text' | 'menu' = () => app.forum.attribute('davwheat-share.share_button_style');

  extend(CommentPost.prototype, 'actionItems', function (this: CommentPost, items: ItemList) {
    const type = displayType();
    if (type === 'menu') return;

    const ShareButton = type === 'text' ? ShareLinkButton : ShareIconButton;

    const post = (this.attrs as Record<string, unknown>).post as unknown;
    const discussion = (post as Record<string, () => unknown>).discussion() as Discussion;

    items.add('davwheat-share', <ShareButton url={PostMeta.prototype.getPermalink(post)} discussionTitle={discussion.title()} />, 10);
  });

  extend(PostControls, 'controls', function (this: undefined, items: ItemList, post: unknown) {
    const type = displayType();
    if (type !== 'menu') return;

    const discussion = (post as Record<string, () => unknown>).discussion() as Discussion;

    items.add('davwheat-share', <ShareDropdownButton url={PostMeta.prototype.getPermalink(post)} discussionTitle={discussion.title()} />, 999);
    items.add('davwheat-share-Separator', Separator.component(), 998);
  });
});

export { ShareDropdownButton, ShareIconButton, ShareLinkButton, doesSupportWebShare, shareUrl };
