import app from 'flarum/common/app';

import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import shareUrl from '../helpers/shareUrl';

import type { IShareButtonAttrs } from './ShareDropdownButton';

export default class ShareLinkButton extends Component<IShareButtonAttrs> {
  view() {
    return (
      <Button
        aria-label={app.translator.trans('davwheat-share.lib.share_a11y_label')}
        onclick={() => shareUrl(this.attrs.url, this.attrs.discussionTitle)}
        className="Button Button--link davwheat-ShareLinkButton"
      >
        {app.translator.trans('davwheat-share.lib.share')}
      </Button>
    );
  }
}
