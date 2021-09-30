import app from 'flarum/admin/app';

import ShareSettingsPage from './components/ShareSettingsPage';

app.initializers.add('davwheat/flarum-ext-share', () => {
  app.extensionData
    .for('davwheat-share')
    .registerSetting({
      label: app.translator.trans('davwheat-share.admin.display_options_label'),
      setting: 'davwheat-share.share_button_style',
      type: 'select',
      options: ['icon', 'text', 'menu'].reduce((acc, curr) => {
        acc[curr] = app.translator.trans(`davwheat-share.admin.display_options.${curr}`);

        return acc;
      }, {} as Record<string, string>),
      default: 'icon',
    })
    .registerPage(ShareSettingsPage);
});
