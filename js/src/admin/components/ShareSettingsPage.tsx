import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Link from 'flarum/common/components/Link';

import type ItemList from 'flarum/common/utils/ItemList';
import PostPreview from './PostPreview';

export default class ShareSettingsPage extends ExtensionPage {
  sections(): ItemList {
    const old = super.sections();

    const displayType = (this.settings as Record<string, () => unknown>)['davwheat-share.share_button_style']();

    old.add(
      'notice',
      <div class="davwheat_share-Notice">
        {app.translator.trans('davwheat-share.admin.browser_support_notice', {
          a: <Link target="_blank" external href="https://caniuse.com/web-share" />,
        })}
      </div>,
      25
    );
    old.replace('content', null, 20);
    old.add('preview', <PostPreview displayType={displayType} />, 15);
    old.replace('permissions', null, 10);

    return old;
  }
}
