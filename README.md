# dsh-ui-personal-theme

Personal UI theme customization for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH).

A profile-local plugin that stacks a custom color palette over the active
theme for both color schemes (light / dark). The palette is edited in a
「外观定制」 settings-section page and persists in the user-settings document —
no repo changes, no rebuild, survives restarts.

## Features

- Token-based palette: each entry maps a `--dsw-*` theme token to `{ light, dark }`
  values; the baked Classic Blue palette is the default when nothing is stored.
- Settings-section editor: pick colors per token, add/remove tokens, reset to
  the baked palette.
- Durable persistence through the `ui-personal-theme` settings namespace
  (field `tokens`, JSON map) — stored in `settings.yaml` by the file provider.

## Installation

1. Copy this package into your profile workspace, e.g.
   `~/.dsh/profiles/web/packages/dsh-ui-personal-theme/`.
2. Register it in your profile's `package.json` and run `pnpm install`.
3. Add the patch row to your profile's `cordis.patch.yml`:

   ```yaml
   - insert:
       - id: ui-personal-theme
         name: dsh-profile-ui-personal-theme
   ```

4. Restart the DSH Web server. Open **settings → 外观定制** to edit the palette.

## Rollback

Remove the patch row and restart; the stored palette remains in the settings
document and is picked up again if you re-enable the plugin.

## License

[Apache-2.0](LICENSE)
