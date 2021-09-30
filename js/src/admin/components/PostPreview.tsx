import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import Dropdown from 'flarum/common/components/Dropdown';

import ShareDropdownButton from '../../common/components/ShareDropdownButton';
import ShareIconButton from '../../common/components/ShareIconButton';
import ShareLinkButton from '../../common/components/ShareLinkButton';
import doesSupportWebShare from '../../common/helpers/doesSupportWebShare';

interface IPostPreviewAttrs {
  displayType: 'icon' | 'text' | 'menu';
}

export default class PostPreview extends Component<IPostPreviewAttrs> {
  supportsWebShare = doesSupportWebShare();

  view() {
    return (
      <div class="ExtensionPage-davwheat_share_preview">
        <h3></h3>
        <div class="davwheat_share-Post">
          <img src="https://avatars.githubusercontent.com/u/7406822?s=64&v=4" class="avatar" />
          <div class="header">
            <span class="username">davwheat</span>
            <span class="time">5 minutes ago</span>
          </div>

          <div class="content">
            <div class="skeleton" />
            <div class="skeleton" />
            <div class="skeleton" />
          </div>

          <div class="actions">
            {this.supportsWebShare && this.attrs.displayType === 'text' && (
              <>
                <ShareLinkButton url="https://davwheat.dev/" discussionTitle="davwheat's online portfolio" />
                <div class="Dropdown-separator" />
              </>
            )}

            <Button className="Button Button--link">{app.translator.trans('davwheat-share.admin.preview.reply')}</Button>

            {this.supportsWebShare && this.attrs.displayType === 'icon' && (
              <>
                <ShareIconButton url="https://davwheat.dev/" discussionTitle="davwheat's online portfolio" />
                <div class="Dropdown-separator" />
              </>
            )}

            <Dropdown buttonClassName="Dropdown-toggle Button Button--icon Button--flat" icon="fas fa-ellipsis-h">
              {this.supportsWebShare && this.attrs.displayType === 'menu' && (
                <>
                  <ShareDropdownButton url="https://davwheat.dev/" discussionTitle="davwheat's online portfolio" />
                  <div class="Dropdown-separator" />
                </>
              )}

              <Button className="Button" icon="fas fa-pencil-alt">
                {app.translator.trans('davwheat-share.admin.preview.dropdown.edit')}
              </Button>
              <div class="Dropdown-separator" />
              <Button className="Button" icon="fas fa-trash-alt">
                {app.translator.trans('davwheat-share.admin.preview.dropdown.delete')}
              </Button>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
