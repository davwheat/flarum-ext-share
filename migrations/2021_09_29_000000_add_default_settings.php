<?php

use Flarum\Database\Migration;

// HINT: you might want to use a `Flarum\Database\Migration` helper method for simplicity!
// See https://docs.flarum.org/extend/data.html#migrations to learn more about migrations.
return Migration::addSettings([
    'davwheat-share.share_button_style' => 'icon',
]);
