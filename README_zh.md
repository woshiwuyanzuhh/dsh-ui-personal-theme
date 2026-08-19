# dsh-ui-personal-theme

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (DSH) 的个人界面主题定制插件。

一个 profile 本地插件：在活动主题之上叠加自定义调色板（支持亮色 / 暗色两套配色）。调色板在「外观定制」设置分区中编辑，并持久化到用户设置文档中——不改仓库源码、无需重新构建、重启后依然生效。

## 功能

- 基于 token 的调色板：每一条把某个 `--dsw-*` 主题 token 映射为 `{ light, dark }` 两个颜色值；未存储任何值时使用内置的 Classic Blue 默认调色板。
- 设置分区编辑器：为每个 token 挑选颜色、增删 token、一键恢复内置调色板。
- 持久化：通过 `ui-personal-theme` 设置命名空间（字段 `tokens`，JSON map）保存，由文件提供器写入 `settings.yaml`。

## 安装

1. 把本包复制到你的 profile 工作区，例如 `~/.dsh/profiles/web/packages/dsh-ui-personal-theme/`。
2. 在 profile 的 `package.json` 中注册该包并执行 `pnpm install`。
3. 在 profile 的 `cordis.patch.yml` 中添加补丁行：

   ```yaml
   - insert:
       - id: ui-personal-theme
         name: dsh-profile-ui-personal-theme
   ```

4. 重启 DSH Web 服务。打开 **设置 → 外观定制** 即可编辑调色板。

## 回滚

删除补丁行并重启即可；已保存的调色板仍保留在设置文档中，重新启用插件后会再次生效。

## 许可证

[Apache-2.0](LICENSE)
