/**
 * Host half of the personal-theme profile plugin: registers the durable
 * settings namespace whose `tokens` field carries the browser palette
 * (JSON map of token name -> { light, dark }) persisted by the client half
 * through the settings scope. The file provider keeps it in settings.yaml.
 */
import { settingsNamespace } from '@deepseek-ai/dsh-settings'
import z from '@deepseek-ai/schemastery'

export const name = 'dsh-profile-ui-personal-theme'

export function apply(ctx) {
  ctx.inject(['settings'], (sctx) => {
    sctx.settings.register(settingsNamespace('ui-personal-theme'), z.object({
      tokens: z.string().default(''),
    }))
  })
}
