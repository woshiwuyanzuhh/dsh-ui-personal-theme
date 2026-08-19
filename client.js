/**
 * dsh-profile-ui-personal-theme — browser half (classic script bundle).
 * Boot: stacks the personal palette over the active theme for both color
 * schemes. Persistence: the palette round-trips through the Host
 * user-settings document (namespace `ui-personal-theme`, field `tokens`,
 * a JSON map of token name -> { light, dark }); no stored value means the
 * baked Classic Blue palette. Settings: owns the 「外观定制」 section.
 */
;(function () {
  'use strict'
  var PACKAGE_ID = 'dsh-profile-ui-personal-theme'
  var NAMESPACE = 'ui-personal-theme'
  var FIELD = 'tokens'
  var SOURCE = 'personal-theme'

  var TOKENS = [
    { key: '--dsw-alias-brand-primary', label: '品牌主色', field: 'brand' },
    { key: '--dsw-alias-bg-base', label: '基础背景', field: 'base' },
    { key: '--dsw-alias-bg-layer-1', label: '面板背景', field: 'layer1' },
    { key: '--dsw-alias-bg-layer-2', label: '嵌套面板', field: 'layer2' },
    { key: '--dsw-alias-bg-overlay', label: '弹层背景', field: 'overlay' },
    { key: '--dsw-alias-label-primary', label: '主要文字', field: 'text1' },
    { key: '--dsw-alias-label-secondary', label: '次要文字', field: 'text2' },
    { key: '--dsw-alias-border-l1', label: '细边框', field: 'border1' },
    { key: '--dsw-alias-border-l2', label: '强边框', field: 'border2' },
    { key: '--dsw-alias-state-success-primary', label: '成功色', field: 'success' },
    { key: '--dsw-alias-state-warn-primary', label: '警告色', field: 'warn' },
    { key: '--dsw-alias-state-error-primary', label: '错误色', field: 'error' },
    { key: '--dsw-specific-sidebar-fill', label: '侧边栏背景', field: 'sidebar' },
  ]

  var PALETTES = {
    classic: {
      brand: { light: '#4e6ef2', dark: '#6f8bff' },
      base: { light: '#f6f7f9', dark: '#0f1117' },
      layer1: { light: '#ffffff', dark: '#161923' },
      layer2: { light: '#f0f2f5', dark: '#1d202e' },
      overlay: { light: '#ffffff', dark: '#22263a' },
      text1: { light: '#1a1f2b', dark: '#e6e9f2' },
      text2: { light: '#6b7280', dark: '#9aa1b5' },
      border1: { light: '#e3e6ec', dark: '#2a2f42' },
      border2: { light: '#c9ced8', dark: '#3a4058' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: '#eef0f6', dark: '#131722' },
    },
    ocean: {
      brand: { light: '#0284c7', dark: '#38bdf8' },
      base: { light: '#f2f7fb', dark: '#0a1520' },
      layer1: { light: '#ffffff', dark: '#0f1e2c' },
      layer2: { light: '#eaf2f8', dark: '#14293b' },
      overlay: { light: '#ffffff', dark: '#182f44' },
      text1: { light: '#12283a', dark: '#dcebf5' },
      text2: { light: '#5b7a92', dark: '#8fa9bd' },
      border1: { light: '#d8e6f0', dark: '#1e3a52' },
      border2: { light: '#b6cfdf', dark: '#2c4f6e' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: '#e6f1f8', dark: '#0d1926' },
    },
    emerald: {
      brand: { light: '#059669', dark: '#34d399' },
      base: { light: '#f2f9f5', dark: '#0a1610' },
      layer1: { light: '#ffffff', dark: '#0e1f16' },
      layer2: { light: '#e9f5ee', dark: '#122a1d' },
      overlay: { light: '#ffffff', dark: '#163123' },
      text1: { light: '#132a1e', dark: '#dbf0e4' },
      text2: { light: '#5d7d6b', dark: '#8db49d' },
      border1: { light: '#d5eadd', dark: '#1c3a28' },
      border2: { light: '#aecfbb', dark: '#2a523a' },
      success: { light: '#059669', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: '#e5f3ea', dark: '#0c1a12' },
    },
    violet: {
      brand: { light: '#7c3aed', dark: '#a78bfa' },
      base: { light: '#f7f5fc', dark: '#120e1f' },
      layer1: { light: '#ffffff', dark: '#171227' },
      layer2: { light: '#f1edfa', dark: '#1d1633' },
      overlay: { light: '#ffffff', dark: '#221a3d' },
      text1: { light: '#221543', dark: '#e8e2f7' },
      text2: { light: '#6d5f8f', dark: '#a297c4' },
      border1: { light: '#e2dcf3', dark: '#2b2150' },
      border2: { light: '#c4b8e4', dark: '#3b2f6b' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: '#f0ecf9', dark: '#151024' },
    },
    sunset: {
      brand: { light: '#ea580c', dark: '#fb923c' },
      base: { light: '#fdf8f3', dark: '#170f08' },
      layer1: { light: '#ffffff', dark: '#1e140b' },
      layer2: { light: '#faf0e6', dark: '#261a0e' },
      overlay: { light: '#ffffff', dark: '#2c1f12' },
      text1: { light: '#2e1c0e', dark: '#f4e8dc' },
      text2: { light: '#7d6650', dark: '#b39a80' },
      border1: { light: '#f0e2d3', dark: '#3a2a19' },
      border2: { light: '#ddc2a6', dark: '#52391f' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: '#faf1e8', dark: '#1a1109' },
    },
    rose: {
      brand: { light: '#e11d48', dark: '#fb7185' },
      base: { light: '#fdf5f7', dark: '#180d10' },
      layer1: { light: '#ffffff', dark: '#1f1115' },
      layer2: { light: '#faecef', dark: '#27151b' },
      overlay: { light: '#ffffff', dark: '#2d1a20' },
      text1: { light: '#2b1116', dark: '#f4e0e5' },
      text2: { light: '#7d5b63', dark: '#b38992' },
      border1: { light: '#f3dde2', dark: '#3b222a' },
      border2: { light: '#e2b7c0', dark: '#522e39' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#e11d48', dark: '#fb7185' },
      sidebar: { light: '#faedf0', dark: '#1a0e11' },
    },
    aurora: {
      brand: { light: '#7c5cff', dark: '#a58cff' },
      base: { light: '#eef1fd', dark: '#0d1026' },
      layer1: { light: '#fbfcff', dark: '#141736' },
      layer2: { light: '#e5e9fb', dark: '#1a1e42' },
      overlay: { light: '#ffffff', dark: '#21244d' },
      text1: { light: '#1d2140', dark: '#e8eaff' },
      text2: { light: '#5a6187', dark: '#9aa0d1' },
      border1: { light: '#d6dcf5', dark: '#282c55' },
      border2: { light: '#b9c2ea', dark: '#383d6e' },
      success: { light: '#10b981', dark: '#34d399' },
      warn: { light: '#f59e0b', dark: '#fbbf24' },
      error: { light: '#ef4444', dark: '#f87171' },
      sidebar: { light: 'linear-gradient(165deg, #d9d6ff 0%, #eef1fd 55%, #dfe9ff 100%)', dark: 'linear-gradient(165deg, #232459 0%, #0d1026 60%, #0e1f38 100%)' },
    },
    slate: {
      brand: { light: '#1d6ef2', dark: '#5f9cfc' },
      base: { light: '#f2f4f7', dark: '#0e1013' },
      layer1: { light: '#ffffff', dark: '#16181c' },
      layer2: { light: '#e9ecf1', dark: '#1c1f24' },
      overlay: { light: '#ffffff', dark: '#22252b' },
      text1: { light: '#14171c', dark: '#e8eaee' },
      text2: { light: '#566072', dark: '#969ca9' },
      border1: { light: '#dfe3ea', dark: '#272b32' },
      border2: { light: '#c3c9d4', dark: '#383d47' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: 'linear-gradient(180deg, #dfe6f1 0%, #f2f4f7 100%)', dark: 'linear-gradient(180deg, #20242c 0%, #0e1013 100%)' },
    },
    candy: {
      brand: { light: '#f23c9c', dark: '#f78fc0' },
      base: { light: '#fdeaf4', dark: '#1c0d16' },
      layer1: { light: '#ffffff', dark: '#26101d' },
      layer2: { light: '#fbd9ec', dark: '#2e1223' },
      overlay: { light: '#ffffff', dark: '#361628' },
      text1: { light: '#2c1220', dark: '#fbe9f3' },
      text2: { light: '#7d5169', dark: '#c092ac' },
      border1: { light: '#f4d3e4', dark: '#40212f' },
      border2: { light: '#e4aecb', dark: '#552c41' },
      success: { light: '#16a34a', dark: '#4ade80' },
      warn: { light: '#f59e0b', dark: '#fbbf24' },
      error: { light: '#ef4444', dark: '#f87171' },
      sidebar: { light: 'linear-gradient(165deg, #ffd0e7 0%, #fdeaf4 60%, #f3d9ff 100%)', dark: 'linear-gradient(165deg, #4a1233 0%, #1c0d16 60%, #251240 100%)' },
    },
    matcha: {
      brand: { light: '#6db51f', dark: '#a3e635' },
      base: { light: '#f1f5e8', dark: '#11150a' },
      layer1: { light: '#ffffff', dark: '#171b0e' },
      layer2: { light: '#e6edd4', dark: '#1d2311' },
      overlay: { light: '#ffffff', dark: '#232a15' },
      text1: { light: '#20270f', dark: '#edf1dd' },
      text2: { light: '#66704d', dark: '#a9b28b' },
      border1: { light: '#dbe2c6', dark: '#2c3419' },
      border2: { light: '#bdc9a0', dark: '#3f4824' },
      success: { light: '#16a34a', dark: '#4ade80' },
      warn: { light: '#d97706', dark: '#fbbf24' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: 'linear-gradient(165deg, #dff0b2 0%, #f1f5e8 60%, #e2f3d2 100%)', dark: 'linear-gradient(165deg, #27330f 0%, #11150a 60%, #1c2410 100%)' },
    },
    asuka: {
      brand: { light: '#e5221c', dark: '#ff8a70' },
      base: { light: '#fce6d8', dark: '#170705' },
      layer1: { light: '#fdf3e8', dark: '#26110a' },
      layer2: { light: '#f8dcc8', dark: '#2e1207' },
      overlay: { light: '#ffffff', dark: '#381608' },
      text1: { light: '#3a140a', dark: '#fde9da' },
      text2: { light: '#8f5140', dark: '#d19a7e' },
      border1: { light: '#f3c9ac', dark: '#4e2010' },
      border2: { light: '#e59d76', dark: '#6b2c17' },
      success: { light: '#16a34a', dark: '#34d399' },
      warn: { light: '#ff9500', dark: '#ffb340' },
      error: { light: '#dc2626', dark: '#f87171' },
      sidebar: { light: 'linear-gradient(160deg, #ff5a3c 0%, #f9b48f 55%, #fce6d8 100%)', dark: 'linear-gradient(160deg, #b31e12 0%, #571009 55%, #170705 100%)' },
    },
    overdrive: {
      brand: { light: '#a26bff', dark: '#a26bff' },
      base: { light: 'rgba(10, 8, 32, 0.24)', dark: 'rgba(10, 8, 32, 0.24)' },
      layer1: { light: 'rgba(22, 16, 54, 0.24)', dark: 'rgba(22, 16, 54, 0.24)' },
      layer2: { light: 'rgba(30, 22, 66, 0.22)', dark: 'rgba(30, 22, 66, 0.22)' },
      overlay: { light: 'rgba(18, 12, 46, 0.94)', dark: 'rgba(18, 12, 46, 0.94)' },
      text1: { light: '#f6f1ff', dark: '#f6f1ff' },
      text2: { light: 'rgba(222, 210, 252, 0.85)', dark: 'rgba(222, 210, 252, 0.85)' },
      border1: { light: 'rgba(147, 122, 255, 0.28)', dark: 'rgba(147, 122, 255, 0.28)' },
      border2: { light: 'rgba(80, 235, 255, 0.42)', dark: 'rgba(80, 235, 255, 0.42)' },
      success: { light: '#3affc2', dark: '#3affc2' },
      warn: { light: '#ffc85c', dark: '#ffc85c' },
      error: { light: '#ff5c8f', dark: '#ff5c8f' },
      sidebar: { light: 'rgba(14, 10, 40, 0.22)', dark: 'rgba(14, 10, 40, 0.22)' },
    },
  }

  var PRESETS = [
    { id: 'classic', name: '经典蓝' },
    { id: 'aurora', name: '极光' },
    { id: 'slate', name: '石墨' },
    { id: 'candy', name: '糖果' },
    { id: 'matcha', name: '抹茶' },
    { id: 'asuka', name: '明日香' },
    { id: 'ocean', name: '深海蓝' },
    { id: 'emerald', name: '翡翠绿' },
    { id: 'violet', name: '暮光紫' },
    { id: 'sunset', name: '暖阳橙' },
    { id: 'rose', name: '玫瑰红' },
    { id: 'overdrive', name: '极光过载' },
  ]

  var DEFAULT_PALETTE = PALETTES.classic

  var CSS = [
    '.aps-root { display: flex; flex-direction: column; gap: 20px; padding: 2px 4px 28px; font-size: 13px; color: var(--dsw-alias-label-primary); }',
    '.aps-title { margin: 0; font-size: 16px; font-weight: 600; line-height: 1.4; }',
    '.aps-sub { margin: 4px 0 0; font-size: 12px; color: var(--dsw-alias-label-secondary); line-height: 1.6; }',
    '.aps-block-label { margin: 0 0 8px; font-size: 12px; font-weight: 600; color: var(--dsw-alias-label-secondary); }',
    '.aps-presets { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }',
    '.aps-preset { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-primary); font-size: 12px; cursor: pointer; transition: border-color .15s ease, box-shadow .15s ease; }',
    '.aps-preset:hover { border-color: var(--dsw-alias-brand-primary); box-shadow: 0 0 0 3px rgba(120,140,220,.18); }',
    '.aps-dot { width: 12px; height: 12px; border-radius: 50%; box-shadow: inset 0 0 0 1px rgba(0,0,0,.15); flex: none; }',
    '.aps-reset { margin-left: auto; padding: 6px 12px; border-radius: 8px; border: 1px solid var(--dsw-alias-border-l1); background: transparent; color: var(--dsw-alias-label-secondary); font-size: 12px; cursor: pointer; transition: color .15s ease, border-color .15s ease; }',
    '.aps-reset:hover { color: var(--dsw-alias-state-error-primary); border-color: var(--dsw-alias-state-error-primary); }',
    '.aps-seg { display: inline-flex; border: 1px solid var(--dsw-alias-border-l1); border-radius: 8px; overflow: hidden; }',
    '.aps-seg-btn { padding: 6px 14px; border: none; background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary); font-size: 12px; cursor: pointer; transition: background .15s ease, color .15s ease; }',
    '.aps-seg-btn + .aps-seg-btn { border-left: 1px solid var(--dsw-alias-border-l1); }',
    '.aps-seg-btn.aps-active { background: var(--dsw-alias-brand-primary); color: #ffffff; }',
    '.aps-grid { display: flex; flex-direction: column; border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; padding: 0 10px; background: var(--dsw-alias-bg-layer-1); }',
    '.aps-row { display: flex; align-items: center; gap: 10px; padding: 9px 2px; border-bottom: 1px solid var(--dsw-alias-border-l1); }',
    '.aps-row:last-child { border-bottom: none; }',
    '.aps-row-label { flex: 1; font-size: 13px; }',
    '.aps-swatch { width: 14px; height: 14px; border-radius: 4px; border: 1px solid var(--dsw-alias-border-l2); flex: none; }',
    '.aps-color-input { width: 32px; height: 26px; padding: 0 2px; border: 1px solid var(--dsw-alias-border-l1); border-radius: 6px; background: var(--dsw-alias-bg-layer-2); cursor: pointer; flex: none; }',
    '.aps-hex { min-width: 58px; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 11px; color: var(--dsw-alias-label-secondary); text-align: right; }',
    '.aps-status { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; border-radius: 10px; background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-secondary); font-size: 12px; line-height: 1.6; }',
    '.aps-status-on { color: var(--dsw-alias-state-success-primary); font-weight: 600; }',
    '*::-webkit-scrollbar { width: 10px; height: 10px; }',
    '*::-webkit-scrollbar-track { background: transparent; }',
    '*::-webkit-scrollbar-thumb { background: var(--dsw-alias-border-l2); border-radius: 8px; border: 2px solid transparent; background-clip: padding-box; }',
    '*::-webkit-scrollbar-thumb:hover { background: var(--dsw-alias-label-secondary); border: 2px solid transparent; background-clip: padding-box; }',
    '*::-webkit-scrollbar-corner { background: transparent; }',
    '::selection { background: var(--dsw-alias-brand-primary); color: #ffffff; }',
    'body[data-personal-palette="aurora"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; mix-blend-mode: soft-light; animation: aps-glow-drift 16s ease-in-out infinite; background: radial-gradient(42% 55% at 12% 8%, rgba(124,92,255,.55), transparent 70%), radial-gradient(45% 60% at 88% 92%, rgba(56,189,248,.45), transparent 70%); }',
    'body[data-personal-palette="slate"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; mix-blend-mode: soft-light; background: radial-gradient(45% 55% at 10% 6%, rgba(96,165,250,.38), transparent 70%), radial-gradient(40% 55% at 90% 94%, rgba(148,163,184,.32), transparent 70%); }',
    'body[data-personal-palette="slate"]::after { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147482999; opacity: .5; background-image: repeating-linear-gradient(0deg, rgba(100,116,139,.045) 0 1px, transparent 1px 28px), repeating-linear-gradient(90deg, rgba(100,116,139,.045) 0 1px, transparent 1px 28px); }',
    'body[data-personal-palette="candy"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; mix-blend-mode: soft-light; animation: aps-glow-drift 18s ease-in-out infinite; background: radial-gradient(45% 60% at 10% 8%, rgba(244,60,156,.5), transparent 70%), radial-gradient(45% 55% at 90% 90%, rgba(167,139,250,.4), transparent 70%), radial-gradient(30% 40% at 80% 20%, rgba(251,113,133,.35), transparent 70%); }',
    'body[data-personal-palette="matcha"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; mix-blend-mode: soft-light; animation: aps-glow-drift 20s ease-in-out infinite; background: radial-gradient(42% 55% at 12% 8%, rgba(109,181,31,.4), transparent 70%), radial-gradient(45% 60% at 88% 92%, rgba(163,230,53,.4), transparent 70%); }',
    'body[data-personal-palette="asuka"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; animation: aps-ember-flicker 4s ease-in-out infinite; background: radial-gradient(55% 65% at 14% 6%, rgba(255,52,26,.16), transparent 72%), radial-gradient(48% 58% at 86% 88%, rgba(255,146,36,.13), transparent 72%), radial-gradient(36% 46% at 66% 24%, rgba(255,74,40,.10), transparent 72%), linear-gradient(to top, rgba(255,90,20,.16), transparent 52%); }',
    'body[data-personal-palette="asuka"]::after { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147482999; mix-blend-mode: overlay; background: linear-gradient(to top, rgba(255,90,20,.7), transparent 48%), radial-gradient(42% 38% at 16% 6%, rgba(255,130,40,.55), transparent 72%); }',
    '@keyframes aps-glow-drift { 0%, 100% { transform: translate3d(-1.5%, -1%, 0) scale(1); } 50% { transform: translate3d(1.5%, 1.5%, 0) scale(1.06); } }',
    '@keyframes aps-ember-flicker { 0%, 100% { opacity: .62; transform: scale(1); } 25% { opacity: 1; transform: scale(1.045); } 50% { opacity: .78; transform: scale(1.02); } 75% { opacity: 1; transform: scale(1.05); } }',
    'body[data-personal-palette="aurora"] ::selection { background: linear-gradient(90deg, #7c5cff, #38bdf8); color: #ffffff; }',
    'body[data-personal-palette="slate"] ::selection { background: linear-gradient(90deg, #1d6ef2, #5f9cfc); color: #ffffff; }',
    'body[data-personal-palette="candy"] ::selection { background: linear-gradient(90deg, #f23c9c, #a78bfa); color: #ffffff; }',
    'body[data-personal-palette="matcha"] ::selection { background: linear-gradient(90deg, #6db51f, #a3e635); color: #ffffff; }',
    'body[data-personal-palette="asuka"] ::selection { background: linear-gradient(90deg, #e5221c, #ff9500, #ffd23c); color: #ffffff; }',
    'body[data-personal-palette="aurora"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #7c5cff, #38bdf8); }',
    'body[data-personal-palette="slate"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #1d6ef2, #5f9cfc); }',
    'body[data-personal-palette="candy"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #f23c9c, #a78bfa); }',
    'body[data-personal-palette="matcha"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #6db51f, #a3e635); }',
    'body[data-personal-palette="asuka"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #ff4a2e, #ff9500); }',
    'body[data-personal-palette="overdrive"] { background-image: radial-gradient(56% 60% at 14% 20%, rgba(139, 92, 246, 0.42) 0%, rgba(124, 58, 237, 0.16) 30%, transparent 68%), radial-gradient(60% 64% at 86% 14%, rgba(34, 211, 238, 0.38) 0%, rgba(14, 165, 233, 0.14) 30%, transparent 68%), radial-gradient(64% 68% at 64% 86%, rgba(236, 72, 153, 0.40) 0%, rgba(236, 72, 153, 0.14) 32%, transparent 70%), linear-gradient(115deg, transparent 32%, rgba(150, 210, 255, 0.06) 42%, rgba(255, 255, 255, 0.12) 50%, rgba(150, 210, 255, 0.06) 58%, transparent 68%), url("data:image/jpeg;base64,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huKUCnYoxQITFGKXFLikA3FLilxS4oENxRinYooENop2KMUCEopcUYoEJijFOoxQAmKKXFFAhKKKKACiiigQUYoooAKSlooEJRRRmgQUYpM0UWEGaTNFGKBCUUtJQSFFFJQKwUUUlArBRRQKBBSUtFIQlJS0lBIhpKdSUEtDaKU0lBIUlLSUibBSUUYoFYSjFLiigkbRilxRigkMUUUUhBRiijFAgpKXFLSEJijFLijFAhMUYpcUuKAG4pcUuKXFAhmKMU/FGKAsNxRin4o20AMxRin7aXFIQzFGKfijFADMUYp2KMUAMxRinYoxQAzFGKfikxQAzFJipNtJjFMBmKTFPxSYoAbSYp+KSkA3FJin4pMUCGYop2KTFMBtFOxSYoGJim4p1IaQCUlLijFACUUuKSgBKKWkpAFJS0lIBKQinYptADDSdKcaSkMcrYqzHcY71SzijdiocblKVjRN1x1qtLcZqvvNRu1RyIrmuJI2agank0007E3IiKaRUhppFICIikIp5FNIqRkZFNIqQimkUikMxTSKfSEVIyMikIp5puKRSGU0in0hFSUhhppp5FNxSKKgFKKKcBWiR7IAU4UUoFMAApwFAFLVWAKAKUClAqgACnAUClp2AMUoFAFOqrAIBS0AU4CqsMQCnAUoFLiqEIBSilApcU7AJTgKMU8CqsMQClxS0oFOwABS4pQKXFMBAKXbTgKKYhAKUCnYpQKBiYoFOxS4piEApQKXFKBTGJinAUoWloAlhHzVt6eBkVixcEVq2cu0ioktAOv08LgV3Wzw5/whucr/AGlt9Tv35/LGP85rzezu9oHNaP24betcFSm5MkbfgYNcxfAZOK2by73A81g3Uu4mumnFopGZKOajxUsnJpgFdSGIBS4pwFKBTAQClFLinAUDG4pcU4CnYpgNApdtOApQKAGhacBTsUuKQDQtLtp2KKAE20u2lpcUANxS4pwWlxQIbilxTsUYoAbilpcUuKBXG4pcU7FGKBCYpcUuKXbSAbilxTsUuKBDMUuKdRSFcTFLRS0CExS0UUAFFLiikAmKUClooEFFFFAgxRilooAMUlFFAgoopaACiiigLCUYpaKAExRilooENxRS0UCEoopKADNGaMUUCCkoozTEFJRSUBYWikooFYKSiloFYKQ0UUCsFFJRQKwUUUlBNgoopKQrC0lFFBNhM0hp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ACnCgCnAUCAU4CkAp4oEJilxSgU4LzQA0CnAU7GOtApgJilApQKcBQAgFLilxS4oATFLilxSgUDExSinYpQKBXEApcUuKWgYYpQKMUuKACjFKBS4oAAKcBigClAoASnYpcUtIBuKdiiloASloooAKKKWgAoopaACiilxQAlLiiloASlxRRQAYopaTNABRRmloASilooASlpKKADNFFFAWClpKWgAooooEFFFFABRRSZoAKKM0UCCiiloGJRRRQFhKKKKBWEopaKYCUUtJQAlFLSUAFJS0mKACkpaKAEoNLSGgQlFFFAWEopaSgApKWigBKKKKBWCkooxSJCiiloENoxS0UEiUUtFArCUtAFLikSNpcUopcUibCAUUoFLQRYQClxS4pQKRImKXFLilxSJExQBTsUYpEiYpRSgUuKRIlLilxTgKBWGgU7FKBTsUgsNC0uKcBSgUiRuKXFOxRigQ3FLinYoxSAbijFOxS4oEMxRin4oxQBHijFPpMUXAZikp5FJigBlJin4oxQBGRSEU8000AMIpCKfTSKYhhFJTiKQ0CGGm08000CsNIppFPNNNAhhFNJp5phFMBpptOIppFACGg0UUhCUlLRQIbikNOzTTQAZpM0lFAgpKWikISkpaCKAEpKOlJmkMQ0hp1JikA2kxTqSgBpFNIp9NNICM0hp5ppqSiM02nmmmgCM0mKeRTcUiiMikNPIptSMYRTTTzTSKkpDDTTT6aRSKGGm0802pGiuKcKQU4V0JHugKcBQBThVAApQKUUVSAUUoFAFOqgExSilxSgVQwFKBS4pQKpIAApwpBTgKoQCilApQKYCAU4ClFLTAKUCjFOApiACnAUgpwFACinCgU4CgQAU7FAFOAoJACnAUAU4CgAxSrwQR1pQtKBSEHJ69aUCgClphcMUoFKBSgUAJilApcUtACYpQKUClxQAUoFAFOAoGJilxS4pcUAIBSgUoFLikMTFOxRS4pgApaKKQC0UClxQAUUtFACYpaWjFACUtFFABilxSZozQAtGaSimMWijNFAwozSUtAC0U2loAWikpc0gDNFFFABmiiimIKKKKACiiigApaSikAtJmlxRQAlGKWigBKKKKAFpKKKACiiigAooxRQISloooASkpcUYpgJRS0YoCw3FFOoxQISkp2KSgBKbTqQigYhpKdTaYgpKWkxQAUlFFABR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pRRilpCEpRRilxQAUoFGKWkAYpcUClxQAYoxS4pcUhCYoxS4pcUAJRinYooATFGKdijFADcUuKXFGKQhtFPxRimA3FGKdijFIBuKMU7FGKYDcUYp2KMUgG0lOxRtpiGYoxT8UYoAjxRinkUlADCKQinYpMUAMxSEU8im4pjGUYp2KKAGYop2KTFAxKSnYopCG0U7FJigQlFLijFIQmKMUtFAgoFLilApCEFLS0YpEiilopaRFgFKKKUCpJaClopcUibAKUUClFArCilFIKUVJFhwpRSClFBLFFLSClpEi0tJS0iRaKBSjGRnp3oEFFKcZ46dqKQhBS0lFAgooooASkpaSgBKQ06m0AIabTiaaaAGk0004000wsMNNNPNNNADDTTTjTTTHYYaaaeaaaAsMpppxppoENNNNPNNNAhtJSmkNAhpptOppoFYQ0006kNAWGmilxSGkKwhpKWkoEFJS0lAhKSlpKAsIaSnUnWlcQlFKRSUXAbRS0UCsNNJTqSgLDTSU40lIBpFNxTzTcUhjCKSnGmmkAwimmpDTSKQyM0008000ixhptPNNNSMaRTDTzTDSKIgKcKBSiu1HuDhSigU4CqQAKUUuKUUxAKdSAU4VQwFOAoApQKoAFLSgUoFUIQCnAUYpQKYABS0UtACUooxS0wFFLSU6gQCnCminimA4U4U1aeKRLHKKeKYKkFIljhTlpq08UiB1KKBSikIWloFGKACloxS0AFFFLSASloopjFooooAKWkooGFLSUUDFopKM0DFopKKChaM0lLmmMKSiigAooopjCiiigAzRRSUDFpaSimMWiiikMKKKKAFoopcUAFGM0uKUUAIBS0tFIAApcUUtABS0AUoFIAApcUUoFIQAUuKMUuKAEpcUuKUCgQmKUClxS0gExRilxS4oASjFOxS4pANxRinYpcUCG4oxTsUYoAbijFOxRigBuKMU/FJigBuKTFPxRigBmKMU/FJigQ3FJin4pMUwGYpCKkxTcUAMpCKeRTcUDGEUhFPIpuKYDKTFPNNNAxtJTqSgBuKWiikAlFLRQAUUlLSEJS0UUhWClFFFArBS0UtIloKWkpaRNhRThSUtImwClpKWkTYXNKDSClpEtCinCminUiWKKWkFLSIYop1NpRSJsLThTc0uaRNhaM0UUCFopKWgkKKKKQBRRSZoFYKM0lJQAE02lpK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MWikpaYwooooGFLSUtABS0CigYUUUUDCjFLRQMSloooAKKKKBhRRRQMKWikoGFLiiigoKSlooGJS0UdKBhSUtGKCgxRRQaQwpMUUtMobS0YooGFFFFBQUlLRQUJS0UUDFopKM0DDNFHFFMoKKKKCgozSUUFC0ZpKKChc0ZpKKRSFoBpKKBi0UUUFC0UmaKRQtFJRQUh1FJSUhjs0ZptLmkULmikzRQULRSUUhi0UUUhhS0lLSGFLSUUDFooopDFpaQUtIYUUUopAFFFLQMSilopAFFFFAxaKSlpAFLRRQIWiiikMKKKKQBRmiigYtFJRSELRSUtABRRRSAKWkpaACiiigApKWikAUlFLQAUUUlIApaSigBaKSikIKKKKACiiigBaKSlpAFJRRSEFFFJQIKKKKQCUUtJSEFJS0lAgpKWkpCEpKWikISiiikISig0hpCENIaU0hNIQhNNpSaaaQgJptKabSEJTaU02gkDTaU00mkIQ00mlNMNBIU00pppNIQ00004000EjTSUGkJoAQmm0pNNpCENMNOamGgQhNNNKaaaAGtTTSk000EjxThTBThXpnhjxTgaYKcKBDxThTAaUUxDxS5poNGaYEq1PGM1WU1ah7UxFuOLNSmHilh6Vp6n/AGaBB/ZZmP7oed5uPv8AfFK4zDkTFQHircxFVHNUhCA06o80oNMRIDSg0wGnA0xDs0opoNLmncB+aWmA0oNMB4NLTM0opgPzS5plLTAdS02lpgLS02igY6ikooAdRSUtMoKKKKQC0UUUxi0UlOpAFFFFAwoopaYwooooGFFFFAwooooGFFFFAC0lFLQUFFJS0DCiiigYUUUUDCiiigYUUlFAwooooKFzSUUUFBRRikoKFpKWkNAwpaSigoDRRRQMKBRSUykLSUUUFBmiiigpBS0lApFoKWkooGFLSUUFC0UlFIoWikozQUhaM0maTNBQ7NFJmjNIsWlptLQMXNFJRSKFpRSUUDFpabmlzSGLRSUUhiilpKKQxaWkpc0gFopKWgYtFJS0hi0UlLSGLRSUUALRRRSAWikpaACiiikAtFJS0gCiiigBaKSlpDCiiigApaSikIWiiigAooopDClpKWgAooooASlpKKQgooopAFFFFABRRRQAtJRRSAKKKKBBSUtJSAWikozSELRRSUgCiikpAFFFFBIlFFFIBKKKKQhDRRSUCCiikpCCkoNITSEITTTSk00mkICabmjNJSEBptBNNJpEgTTSaCaQ0EiGmmlNNNIQhNJSmmUhAaaaU0wmgQE000pppoENNJS02kIQ00mlJppoEIaaaU00mgQ0000pppoAQ000pptBI8U4UwU8V6R4Q4UopopwpiHClFNFOBpiFpwptKKdxDxViNsVWBp6tQBoxTYqUzZFZqyU/wA2mBYkkzVdjTS9JnNMQ4UopoNLmmIcKcDTAadmmA4GnA0wU6gB1LTQaUGmA6lBpopRTAcDS5popadwHZoBpoNLmncB4NLmmZpwouAuaKSloAWiiimMWlptLQMWijNFABSikooGOopKWgYUtJS0DCiiigYUUUUDExS0UUXAKKKKZQUtJRRcYtFFFABRRRQUFFFFAwooooGJRS0lFxhRRRQUJS0UUFBSGlooGhKKKKCkFFJS0FhQaKSgYUZopDQUhc0lFJTKQuaKSigoWikooKFzRSZpaRQUZoooKDNGaSjNBSDNFFFBYUUUZpFC0UmaM0ikOopM0ZoGLmjNJS0ihaKQUUhjqKSjNAxaWkFLQMWikpaQC0tNpaQxaKSlpDClpKKBi0uaSikAtLTaWgYtGaTNLmkAtFFFIApaSikMWikpaAFopKKQC0UUUALRSUUgFopKKAFpaSikAtFJRQAtFJS0gCiiigApKWkpALRSUuaACikopCFpKKKACiiikAUUUUAFFFJSEFFFFIBaKSikAtJRRSEFJS0lIQUUZpDQIKTNFFIApKWkzSEFJmkJpM0hAaaTQTTc0CFppNBNNJqSQzTSaCaQmkICaaTQTTSaCQNNJozSUCDNNJoJptIQE0hNITTc0CAmmmlzTSaQgJphpTTSaBATTTQTSUCENNJpSaaTSEIaaaWmk0CENNJoJoKP5fmbG2Z27scZ9M+tAhpNMJpTTaBDxTwaYKcDXpHgDwaWmilFAhwNOFNFLTEOFOBpopaYDhSimilBpiHg07NMBpRRcQ7NKKaDTqoBwNKKbS0AOBp2aYKUGmIeDTqYDSg0AOpc03NLTAdmnA0ylFMB4NLmmUoNMBwNOBpmaXNADxS0wGnZpgLmnUylFFwHUUmaWmMWiiigYtFJSimAtFJRQMdS02loGLRRRQMWikpaBhRRRQAtFJS0DEopaTpQMKKKKCgpaSigYtFFFAwooooGFFJS0DCiiigobiilopjCkpaKCgopBS0FBSUUUDEooooLQtIaKKBhSGiigpCUUUlMsWiikoKCjNFFBSCiiigpBRmikoKQuaKSigsWkoopFC0UlLSGFFFFBYtFFFIYUtNpaChaWm0tIYtLSUUDHClzTc0UhjqKSlzSGGaWkooAWlpKKQxaUU2lpDFooopALRSUUDFBpaSikA6jNJRSAdmikooAWiikzSGLS0lFIBaKM0ZoAWikpaQBRRRQAUtJRQAtFJRSAWiiikAUUUUAFFFJQAtFJmikAtFJRmgBaKSikAtFJRSEGaM0UUgCiiigAopKBSELRSUGkAZopKXNIQUmaDSUgFoNFJQIKSjNITSEGaTNGaaTSuICaQmkpCaQgzSUU0mkIDSGgmm5pEgTzTSaCabmgQE00mlppNIQZppNFITSEITSE0ZppNAhCc0hopKQgzTCaWm0CDNNNBNJmgQlITRmkNBIhPNIaCaaTSACaYaXNNJoENJoMj+X5e9tmd23PGfXFIaQmmIaabSmmk0hEgpwpgpwr0T54eKcKYKUUwHinCmClBoEPFKKaKUUxDqUUlLmmAtOBptLTEOFLTQaUGmA8UoNNFLQIdSim0oNMQ8UuabmlpjHClpmacDTAcDSg03NKKAHA0tNBpaYh2aUGmZpQaYD6XNNFLQMdmlBptFMB4NLTBS5oAfS0zNLmmA6ikzSigYtLSUUDFooopjFpaQUtIYUUUUDFooopjCiiigYtFJS0gE6UUUUygopaSgaCiiigoWgYyM9O+KSloGBxk46ds0lLSUDCiiigYUUUUDCiikpjCiiigtBRRRQUJRRSUFIWikooKCiikoGJRRRTLCiikoKQtJRQaC0FLSUZoKQZoopKChaQ0UUFIKWkopFC0CkopFC0UlLQUhaKSjNBQtFJS0hiiikFLmgoWikzS5pDFopKKBjqWm0tIYtFJRSAdmikpc0hi0tJmigBaKSlpDFopKWkAUUUUDFopKM0gHZopM0UAOopKKQC0UlFIB1FJRQAtLTaXNIBaKTNGaQxc0ZoooAWikopALRSUtABRRRSEFJQaKBhRRRQAtGaSikAtFJRSAKKSlpCClzSUUAFFJS0gCikzRSEGaKSikAUZpKKBC0UlGaQC00mjNNJqRC5pM0hNJSELmmk0E00mkIXNITSE0hNAgzTSaCabmkIUmmk0E00mkICaQmjNNJpCAmm5paaTQICabS00mkSITTSaXNNPWgQUhNBNNJpCAmmmjNNY0ABNNJozTSaBC5ppNGaTNBIhNITQTTSaBATTCaUmmk0CEJppNKTTSaBCGmmlNNNAiQU4UwU4GvQPnh4paaKcKAHCnCmCnA0xDqUGmg0tMQ6lBpoNLQIdTgaYDTqYDqUGm0UwHg0oNNFLTEPFLTQaWgQ7NKDTaWmMdmlpmacDTAdSg02lBp3AfS00GlzQA6gGm0uaYDs0tNpc0wHA0oNNpRQA+imiloAdSim5padxjqWmg0oNFwHClptLmmMdRSCloAKUGkooGOoptLmgYtLSUUDFopKKBi0UUUxhRSUUDFopKWgYUUUUDCiiigoKKKKBhRRRTGFFFJQULSUtJQMKSiigpBmg0UUDQGkopKCxaKSloKCiikoKCkpaSmWgpKKKCkFFFJQNC0UUlBaFpKKKCgNFFJQWhaSjNFBQZopKWkUhaKSikUOpKTNGaChc0uabS5oGLmjNJRmkUOopuaWkMdSim0UDH0UlFIYtFJmlzQAopaQUUhi0tJRSAWlptLQAtFJmlpDFpabS0gFopKKBi0UlFIB1FNzS5oAdRSUUgFopM0UgFpabS0AKDS5puaWkAtFJRmkMWiiigApaSikIWikopAFLTaWgBaKSikMKKSigQtFJS0gCiiigAopKKQC0ZpM0lIBaKKSkIWkzRmkpALSZpM0lAhc0E03NGakQuaTNITSUhBmjNNzRmkICabmgmmk0hC5ppOaQmkoAUmkJpCaSkIM0hNJmkJpCAmkzSZpCaBATTTQTTSaQhSaaTQTTTQICaSkJpM0iQJppNBNIaAAmmE0pNNJpEiE0hNBNNoAKQmgmm5oJAmmk0pNNJoEIaSgmm5oEBNNJoptAgJppNBpDTESCnUwU6u8+eHinZpgNLQA8GlpopQaYh4paaDTht8vvvz+GKBC0tNBpaYDs0oNNpRTEPBpRTAaXNMB4pRTQaWgQ8UopoNLQA4GlpmaUGncB2acDTKWmA/NKDTBSg0wH0oNNpQaAHZpc0zNLmmA/NFNzSg07gOzSg03NKKAHg0uaZS5pgPzS5pmaUGgB9LTM0uaYx4NLmmA0oNAxwNOzTM0uaAH5opoNLmmMWijNFAxaM0lFMB1GabS0hi0UlFMYtFJS0DCiiigoWikooGLRSUUDQUUUUDFpKKKCgooopjCikooKCiikoGLSUUUFBQaSigoKKKSgtC0UlLQUJSUtJTKQUUlFBQUUlFBQtGaSigtBmikooKFopM0UFC0lFBoLQUUlFIpC0UlFBSFopKKCh1FJRSGLS02lzQMWikzRSKHUUmaM0DHClpuaWkMXNFJmikMeDRTRS5oAdRRlPL/i35/DFJmkIdRmm0uaBi0tNpaQxc0tNozSAdRSUUALmlptFIY6ikopALS5pKTNADs0ZptLSAWlptGaQDs0tNBpaQC0UlLSAWikozQAtFJS0hhRRRSEFFJRQMXNFJRSAWikooELRSUZpALRSZozSAWkopKAFopKM0hC0lJmkJpALmkzSZpM0hC5pM0maTNIQuaTNJmkJpALmgmm5pM0hC5pCaTNITSEKTTc0E03NAhc0hNJmkzSACaQmjNNJpCFzTSaM00mkIXNNJoJppNAgNJmkJpKQgJpuc0pNNJoEBNMJpTTSaQgpCaQmkoJAmmk0E0maAEJpCaM00mgkUmmmgmmk0CAmmk0E0hNAgJphNKTTaBATTaU00mgBCaQmg000EkwNLTAafXcfPjhS00UtMQ4U6mZpwoEOBpQabS0xD80tMBpQaYDxS5pgpc0CHilzTBS5pgPBp2ajBpwNAh4NLmmZpQaYD80tNBpQaAHA0oNMpc0wH5pQaYDSg0wHU4Gm5ozTAfmjNNpc0APBozTc0ZpgPzSg0zNLmmA/NLmmZp2aAHZpQaYDS5pgPpabmlBoGOBpQabmloGOzS5pmaXNMB4NLmmUuaBj80ZpoNLmgBwNLmmUuaYx1FJmjNMY6ikooAXNFJRQULRRRQMWikooGFLTaWgoKWkooGLRSUUDQUUUUFBRSGimMKKKKCgpKWkoKQUUUhoKCiikoKQtFJRQWgNFJRTKA0UUlBQGiikoKCikooLQtJQaKCgopKKCkLRmkNJQWhc0UlFBSFopKM0ih1GaSigYtFJRQULmikpaRQtFJRQMdmikpaQxQaM0lLSGLmikzRQA4GlpuaWgY6ikoqQFpc02loAWlzTaM0gHZpaaDS5oGLRmkopALRSUtIYtGaSjNIBc0UmaKAFpabS5pALmikooAXNOBplLmkA7NLTQaM0gHUUmaM0hi0ZoopAFLmkooAXNJmkzRSELRSUZoAWiiikAUUmaKQC0ZpM0maQC5ozTc0ZpALmjNNzSZoEOzTc0maTNIQ7NJmm5pM0gHZpM0lJmkIXNITSE0maQhc0mabmjNIQuaTNITTc0CHZpuaTNBNIAzSZoppNIQpNNzRmkzSAQmkzQTTTQIM0hNBppNIQZpCaQmkzSELmmk0E00mgQuaYTQTSZoJAmmk0E00mgQZpDRmmk0CAmkoJppNIQE0hNJmkNAgNNJoJpCaBBTSaCabmgQGmmlppNAAaaTQTTaYiYGnA0ylBruPniQGlzTKUGgQ+lzTQaUGgB4NLTM0uaYh4NLTKUGmIeDSg0wUooEPzSg0wGlBpgPBpQaZmnA0APzSg0zNLmgQ+lBpuaAaYDwaWmUoNMB9ANNpc0APpQaYDS5pgOFLmm0uaYDs0uaZmlBoAfRmm5pc0wHZpQabmlzQA7NLmm5padxj80oNMBpc0APzS5qPNKDTGSUuaZmjNAEmaM0zNLmmMfRTc0uaAHZpc0zNLmgY/NGaZmlzTAfmlzTM0ZoGPzRTc0uaYx1FNBpc0DFopKWgYUUlFBQtFJRmgYtFJmloKQtJRRmgoKKKSgYUUUlMoWkoooKQUUlFBQUlFBoKQUUUZoLQUUlFMoKKKKCgpDQaTNBQUUlFBaCikzQaChaQ0maM0FIKKSimWhaM0maKQxc0UmaKC0LmikozQMWlzTc0ZpFDs0ZpKM0DHA0ZptLSKHUZpM0UgHZozTaWgY6im5ozSGPpQaYDS5oAfmjNNzS5pDHZopuaM0hjqKTNGaAHUZptGaQDs0uaZS5oGOopuaXNSAuaM03NLQAuaWm0uaAFzRmkzRSAXNLmm0tIBaWm5paQC0uabmjNAD80ZpuaM1Ix2aKSikIdSZpM0ZoAXNGaSikAtGaTNJmgB2aM03NJmkA/NJmm5pM0hDs0ZpmaM0gHZpM0maTNIB2aTNNzSZpCHZpM03NGaAFzSZpM0maQh2abmkJpM0hC5pM0maTNIBc0maTNITSELmkzTSaM0CFJozTc0maQCk0maQmkJpCFJppNJmkJoELmmk0ZppNIQpNNzQTTSaBCmmk0ZppNIQpNNJpCaTNAgJpCaQmkpCCmk0E00mgQpNNzRmkJoEBNNoJpCaBAaaTQTTSaBATSE0E000CCkJoJppNAgJpCaCaaTQIM0maKaTTETClBpoNKDXafPjwaWmA04GgBwNLmm0uaBDwaUGmA0uaYh+aWmZpQaAHg0uaZSg0xDwaWmUuaAH0oNNBopiHg0oNMBpaYEgNLmowaUGgRIDS5pmaM0APzS5pmaUGmA/NLmmA0uaAHg0uaZmlzTuA/NANNzRTAkBpc1GDS5oAfmlzTM0uaYDxS5pgNOzRcY6lzTM0uaYx+aXNMzS5oAdmlBpuaM07jH5pc0zNLmgB+aM0zNLmmA/NGabmjNAD80uaZmlBoGOzS5puaM0xj80uaZmlzQMfmjNMzS5oGOzS5pmaM0yh+aKbmjNFxjqKTNGaBjqBSZozQNC0UlFBYtFJRmgYUlFFMoM0ZpKKCkLSUUUFBSUZooKQUmaKTNMtC5ozSUUFC0UlGaChabSk0lBSEozSUUFhRmkooKCkozSUykOpKTNLSKQUUlFBSFFFJmjNBQtFJmjNIoWjNJmjNAxaWm0UFDs80uaZmlBpDHA0ZpBRmgY4GlplLmkMdmim5pRQA4UtNzRmkMdmlzTc0ZpDH5ozTc0ZoAfRTc0ZpDHZozTc0ZoAfmim5ozUgOozSZpM0DHUZpKKAHZozTc0ZpAOpc03NFIB2aM0lFADqM0maM0gFzS5puaXNIBaM0maM0gHZozTc0ZpAOzRmmZozSAfmkzTc0maQD80ZpmaM0CH5pM0zNGakB2aM03NJmgB2aM0zNGaQDs0mabmjdSEOzSZpuaM0hC5pM0maTNIB2aTNN3UmaQhxNNzmkzSZoAdmkzTc0maQh2abmkJpCaAFzRmm0hNIQ4mkzTSc0maQh2aaTSZpM0CFJpM0maQmkIXNNJpCaTNAgJpKM00mkIUmmk0hNJQIKQ0E00mkICaQmkJpCaBATTSaCaTNAgpCaCaYTQIXNITSZpKBBmkJpCaQ0AGaQmgmm0CDNITRmmk0CAmkpCaTNAgJpM0E00mmImBpc00GlBrsPAHA07NMpQaBDwadTAaXNAD6UGmg0A0xD80uaZmnUCHA0uaZmlzTAfmlzTM0oNAD6UGmUuaYh4NLmmA0tAh+aM03NLmmA4GlBpuaM0APBpc0zNKDTAeDTs1Hupc0APzS5pgNLmmA+lBpmaXNAD80uaYDS5oAdmlzTM0uaYDwaXNMzS5oAfmlzTM0uadxj80uaZmjNMB4NOzUeaXNAx+aXNMzRmgB+aXNMzS5pgPBpc1HmlBouMfmlzTM0ZpgSZozTM0uaBj80ZpmaXNBQ/NGaZmlzTGPzRmm5ozQMfmjNNzRmgY7NGabmjNMZIDS1GKlRc0FIQUtSiI0pjoKRBmjNOZcVGTQMXNGabmjNMtDqSkzRmgYtFJmimUFGaTNGaCkLTaWkoLCig0lBSFoozSZoKQZozSUUFIM0lIaKC0LSUZpKCgopKKCgoopKChaM0lJQUOzRmm5ozQNC5ozTaXNBQuaM0maM0FDqKbmlzSKFpQabmjNIY7NLTc0ZoGOzS5pmaXNIY7NFNzS5pgOzSg02gGpGOpc02ikMcKWm0ZoAdRmkzRmkAuaXNNzRQMdmlptGaQDs0UmaSkMdmlzTaKAHUUmaM0gFFLmm5ozSAdmlzTM0ZoAfmjNMzRmkA/dRmmZozSAfmjNMzRmkIfmkzTc0ZpAOzS5pmaTNIB+aM0zNGaQDs0ZpmaM0APzSc4z2puaN5xjPHpSAdmkzTc0ZpCHZpM03NJmkIfmkzTc0maQDs0ZpuaTNIBxakzTc0maBDs0mabmjNIQuaTNIWpM0gFzSZpM0maAFzRmm5pCaQhxNNzSZpM0hC5ozTc0mcUCHZpCabmkzSELmkzSZpCaBC5ppNITSUCFzSE0hNNzSELmkzSE0hNIQpNNzSZpCaBCk00mkJpCaBATSZpM0hNAATSZpCaQmgQuaaTQTTSaBATSZpM0UCAmm5ozSE0CAmm5ozSE0xATTc0ZpCaQATTc0E0hpkkwNKDTaWus8IfmlBpgNOFAh4pc00GloAcDS02lBpiHZpQabmigB+aXNMBpc0xD80ZpuaXNAh4NLmmZpc0wHZpQaZmlzQBJmlBqPNOBoFYdmlzTM0uaYh+aM03NGaYD80uaZmlzQA7NLmm5pQaYDgaXNNozQA8GlzTM0uaAH5pQaZmlzTAfmlzTAaXNADwaXNR5pc0xj80oNMzS5oAfmlBpmaXNMB2aXNMzS5oGPzRmm5pc0DHZpc0ylpjH5ozTKXNAD80ZpmaXNFxj80uaZmlzRcY7NLmmZozTuMfmlzTM0ZouMfmjNMzS5pjHZpc0zNLmgolXk1bhXNU4zV+3PSgZbjhyKHhwK0NKNn9vh/tHf8AZd37zZ1xRqps/t039nb/ALLu/d7+uKV9SjCmXFVWq7cGqDnmmMTNGabmkzTuWh+aM0zNLuouUOzQDTM0Zp3Gh2aM03NGaC0OzRmm5ozQUOzSU3NJmgpD80UzNGaCx1GabmjNBQppM0maM0y0FFJmjNBQUlFJmgaFzRmkzRQULmkNJmkoKFzRSZozSKHZpKTNGaBi5pc02igodRSZooKFzS02igY+jNNzRSGOzRTaXOKQxaXNNzRmgB2aXNNzRmgB+aXNMzS5pDHZpaZmlzSGOzRTd1GaQDs0oNMzRmgB+aXNR5ozSGPzRmm5NGaQD91GaZmjNAD80ZpmaN1IB+aXNMzRmkA/NJmm5ozSAdmjNNzRmi4Ds0uaZmjNIB+aTNMzRmkA/NG6mZozSEP3UmabmjNIB2aN1MzRmkA/dSZpuaTNAD80ZpmaN1IQ7NGabmkzSAdmjNNzSZpAOzSZpuaTNIQ/NJmm5ozQAuaM03NJmkIdmkzTc0maQDs0mabmikAuaM03NITQIcWppNJmkzSELmkzSE0maBC5ozTc0maQh2aQmm5pM0CFzSZpM0maQh2abmkJzSZoELmm5pCaQmgQpNNJpCaQmgQpNNJpCaQmkIUmm5ozTc0ALmkJpCaTNAgzSZoJppNAhSaaTSE0hNAhc0hNJmm5oAXNITSE0maYgJpM0E03NAhSaaTQTTSaBC5ppNGaQmgRMDTgaZmlBrqPDHilBpuaWmIeDSg0wGlBoAfmlpgNLmgQ/NKDTKWgQ+jNNzS5pgOzSg02jNAh+aXNMzS5pgPzS5pgNLmgQ/NGaYDTs0AOzS5pgNLmmA+im5pc0AOzSg03NFMQ/NLmmA0uaAH5pQaZRmgCTNANMzS5pgPzS5pmaWgB2aUGmUuaYD80uaZmjNAx4NKDTM0uaYD807NR5pc0APzSg0zNLmgY/NLmmA0ZoAkzRmmZozTGSZpc1HmlzQMfmjNNzRmgY7dS5plGaYx+aXNMzS5oGPzRmmZozTGPzS5qPNGaBkmaM0zNGaBkytg1ahlxVANUivimUbMdxgUPc5HWsoTkd6UzZoGWJpc1UZuaQyZphagpDs0ZpmaM0FDs0ZpuaM0yh2aM0zNLmgpDs0ZpuaM0FDs0ZpuaM0FDs0mabmjNMpC5ozTc0maCkSZpM1Hupc0FofmkzTc0ZoLHZpM03NGaLjQ7NJmkzSZoKHZpM03dSZp3KH5pM03NJmgofmjNMzRmkUPzSZpuaM0XGPzRmmZozSuMfmjdTM0ZplIkzSbqZmjNIok3Uu6o80ZoAk3UuaizRmkMlzRmo80BqAJM0uai3UuaQyTNANR5pQaAJM0bqZmjNICTNGajzS5pDH5ozUeaM0ASZozTM0ZpDJM0maZmlzSAfmjdUeaXNAD80ZpmaM0gH5ozTM0u6kA7NLupmaM0gH5ozTM0ZpAPzRmmZozSAfmjNMzRmkIfmkzTc0ZoAdmjNNzRmkAuaM03NGaAH5pM03NGaQh1GaZmjNIB2aM0zNGaQDs0mabmjNAC5ozTc0makQ7NGabmkzQA7NJmm5pM0hDs0ZpuaTNIB2aTNNzSZoEOzSZpM0maQC5pM0maTNAri5pM0maTNIQ7NITTc0hNAh2aTNNzSZpCFJpM0maTNAhxNNJpM00mgQ4mmk0hNJmgQuabmkJpCaQhSaTNJmkzQAuaTNJmmk0CFJpCaTNITQIM0maQmkzTEKTTc0ZpCaBATSE0maTNAgpM0ZpuaQhc00mgmkJpgBNJSZpCaBCk00mjNNJoEWKUUwGnCuo8UdmlzTc0uaBDqUGm0oNADxS0zNKDQIfS03NGaBD6BTQaUGmA7NLmm5paYh2aM02lzQA7NLmm0tAh2aXNMpQaYD80uaZmlBoEOzS5ptLQA7NGabS5pgOzSg0yloAfmlzTKXNADqXNNBozTAfmlzTM0ZoAfmlpmaWgB+aXNMzRmmA/NLmmZpc0DHg0tMzS5oAfmlzTM0ZoGPzS5pmaM0wH5pc0zNLmgY/NGaZmlzQMfmlzTM0uaYDs0ZpuaTNAx+aXNMzRmmMfmlzUeaXNAx+aM0zNLmmMfmjNMzRmgofmjdTM0ZoGSbqN9MzRmmUPzRmmZozQMfmjNMzRuoKH5ozTM0bqCkPzRmmbqXNBQ7NGaZmjNFyh+6jdUeaM0ykPzRmmZozQWh2aTNNzRmgpDs0ZpmaM0XKQ/NGaZmkzQUPzRmm5ozQUh26kzTCaM0FDs0ZpmaM0FD80maZmjNAx+aKZmjNBQ/NJmm5pM0DH5ozTM0ZoKH5ozTM0uaBj80ZpmaM0FD80ZpmaM0hkmaM0zNGaAH5ozTM0ZpASZozUeaXNAx+aXNR7qXNAD80oao80bqQyTNGaZuo3UgH5pc1Huo3UASZozUeaXNIY/NLuqPNGaQEmaTNNzRmgB2aXNR5pc0gH5o3UzNGaQD91LuqPNGaQEmaM0zNJmkBJmjNMzRmkA/NGaj3UbqAJM0ZqPNGaQh+aM0zNGaQD80ZpmaM0CH5ozTM0ZpAPzSZpuaTNIB2aM03NJmkIfmkzTc0maQD80maZmjNADs0maTNJmkIdmkzTc0maQDs0ZpmaM0CHZpM03NJmgB2aQmm5opCFzSZpM0hNIQ7NJmm5pCaBDiabmkzSZoAdmm5pM0maQhc0hNJmm5oEOzTc0hNJmgQuaQmkzTc0hDiaTNNzSZpgOzTc0maQtQIUmkLU3NJmgQuaTNJmkJoEKTSE0maTNAhaaTSE0maAFzSUmaTNAhc00mjNJQIM0hozSE0CDNNJoJpM0CCkJoppNMROKcDTAadXQeOPzSiowacDQIeKWmZpc0CHg0tMzS5pgOzTs0zNLQIdmlzTM0uaAHg0uaZmlzQA/NLmmZpc0xDs0uabmjNAE0Ri+fzt/wB07NmPvds+1NBpmaUGgB+aKbmjNMQ/NLmmZpc0XEPzSg1HmlBoAfmlzTM0uaYD6M0wGnZoAdmjNNzRmgB9GabmjNMB+aXNMBpc0DH5ozTc0ZoAdmnA0zNANMCTNGaZmlzQA/NLupmaXNAD80ZpmaM0DJM0ZpmaXNMY/NLmo80uaAH5o3UzNGaBkmaM0zNGaYx+aM0zNGaYyTNGaZmjNAyTNGaZmjNAx+aM0zNGaYx+aM0zNLmgofmjNMzRmgY/NG6mbqM0FIfmjNMzRmmUPzRmmZozQUSZpM0zdijdQUh+aM0zNGaCh+aTNNzRmgodmjNNzSZoKH5ozTM0ZoKQ7NGaZmjNBSHZo3UzNGaCkP3UZpmaTdQUPzSZpuaTNModmjNNzRmgodmk3U3NJmgaH7qM0zNG6gofmjdTM0ZpDHZozTc0ZoGPzRmmZozTKH5pc1HmjNIZJmjNR5ozQMkzRmo80oNAD80uaj3Uu6kA/NGaZmjNAx+aM0zNLmkA/NGaZmjdQMfmjNM3UbqQEmaM0zNGaAJM0bqj3UbqQEm6jNM3UbqQE0ZTzU83d5e4btvXHfHvRIU81vK3eXuO3d1x2z71DuozQBJmjNMzRmkA/NGaZmjNIY/NG6mZpM0gJN1G6mZozSAfuozTM0ZoAfmjNMzRmkIfmjNMzRmkA/dRmmZpM0gJM0ZqPNLmgQ/NGaZupM0gH5ozTN1JmkIfmjNMzRmgB2aM03NJmkA/dSZpuaTdSEPzSZpmaTNAD80mabupM0hD80mabmkzQA7NJmm5pN1IQ/NJupuaTNAh2aQtTc0maAHZpM03NJmkIcTSxlPNTzd3l7hu29cd8e9Rk0maAJJSnmv5O7y9x27uuO2femZpuaTNIQ7NIWppNJmgQ7NITTS1NzQIcTSbqbmkzQAuaM03NITQIUmkzSZpM0CFzSZpM0hNAhSaTNJmkJpCFzTSaM00mmIXNJSZpM0CHZppNJmkzQIXNJmkzSZoAXNJmkzSE0xAaTNJRmgQZppNBNIaALANLTAadmtzyB2aUU3NKDTAdmnZpmaXNAh+aM03NLmgQ7NLmm5ozTEPzRmm0tADs0uabRmgB+aXNMzS0CH5ozTKXNAD80uaZmlzQA/NLTAaM0xD80uaZmlzQA7NLmm5ozQA8GjNNozTEPzSg0zNLmgB+aM0zNKDQA/NLmmZozQA/NGabmjNMY/NLmmZozQA/NKDTM0uaYx+aXNMBpc0CH5ozTM0uaBjs0uaZmlzQA7NLmmZozTAfmlzTM0ZoGPzS5pmaTNAx+aXNMzRmmMkzRmmZozQMfmlzTM0ZoGPzRmmZozQMfmlzTM0ZpjH5ozTM0ZoKH5ozTM0ZoGPzRmmZozTKH5ozTM0bqBofmjNMzRmgofmjNMzRmgofmjNMzRmgpD80ZpmaM0FDs05A0jqiKWZjhVUZJPpUeaVHaN1eNirKcqwOCD60FD3VkdkdSrKcFSMEH0puaR5GkdndizMcszHJJ9abmgpD80mabupM0yh+aQmm5pM0FIdmk3U3NGaZQ7dRmmE0ZoGPzRmmZpM0FD80ZpmaM0hj80ZpmaM0FDs0bqZmlzQMdmjNNzSZoGPzRmm5ozQUOzRmmZozQMkzSZpmaM0APzS7qjzS5oGPzRmmZozQA/NG6mZozSGSZozTM0ZpBcfmlzUeaXdQMfmjNMzRmkBJmjNR5pc0gH5o3UzNLmgB26lzTM0ZpXAfmjNMzRmgCTNG6o80ZpASZozTM0ZpAPzRmmZpM0ASZozUeaM0gJN1GajzS7qQD80Zpm6k3UgJM0maZmjNAD80bqZmjNIB+aM0zNGaQh+aM0zNGaBD80mabmk3UgH5ozTN1GaQD91Jmm5ozQIdmkzTc0maQDs0ZpmaTNAh+aTNNzSZpAPzSbqbmkzQA7NJmm5pM0hD80mabmkzQIdmkzTc0maQh2aQmm5ozQAuaTNJmkzQIdmkzTc0hagQpNITTSaTNADs0mabmkzSEOzSZpuaTNAh2aQmm5pM0CHZpCaaTSZoAUmkzSZpCaBC5pCaTNJmgQpNJSZpM0CFzRmm5pM0CFzSE0maTNAC5pM0maTNMQpNJmkzSZoELmkJpM0maBC00mjNITTAsClplOBrY8sdmlBplLmgRJRmmA07NAh2aXNNozQIfmlBpgNLmmA/NLTAaXNAh1Lmm5ozQIfRTc0ZoAfmjNNozTAfmjNNzS5oAdmnZqPNLmgB+aXNMzRmgRJmjNMzS5oAfmjNMzS5pgPopuaM0APzS5pmaM0CH5pc0zNGaYD80ZpmaXNAx+aXNMzRmi4EmaM0zNLmgB+aN1MzRmmMk3UuajzS5oAfml3VHmlzQBJmjNR5p2U8v8Ai35/DFMY7dS5qPNGaAJM0ZpmaM0DH5pc0zNGaYx+aN1MzRmgZJmjNMzRmgY/NGaZmlzQMfmjNMzRmgY/NGaZmjNMY/NGaZmjNBQ/NLmo80ZoGPzRmm5ozQUOzRmmZozTKH5ozTM0ZoKQ/dRmmZozQMfuo3VHmjNBRJmkzTM0ZoKQ/dRuqPNGaCh+aTNNzRmmUO3UZpmaM0DH5pM0zNGaCh2aM03NJmi5Q/NGaZmjNBQ/NGaZmjNAx2aM0zNGaBj80mabRmkMfuozTM0ZoKHZpc0zNGaBj80ZpmaTNAEmaM1HmlzQMfmjNR5pc0APzRmmZozQMkzRmmZozSAfmjNMzRmgB+6jdTM0ZoGPzS5qPNG6kBJml3VHmjNIZJuo3VHmjNAEuaM1HmjNAiTNGaj3Uu6kA/NG6mbqN1IY/dRupmaM0gJM0ZpmaN1Ah2aN1M3UZpDH5ozTM0ZpAPzRmmZo3UCH5o3UzNGaQXH5ozTM0bqQD80bqjzRmgQ/dRmmZo3UgH5ozTM0maAJM0ZqPNG6kIkzSZpm6jdQA/dSbqZmjdSEPzSZpm6kzQA/NJmm5pM0hXH5pM0zNGaAHZpM03NJmkIfmkzTc0maBDs0mabmjNADs0mabmkJpAOzSZppamlqBDy1NzTc0maAHZozTc0maCRSaM03NJmgQ7NJmm5pM0AOzSZpuaTNAh2aTNJmkzSELmkpM0hNAhc0maTNJmmAuaTNJRmgQuaaTSE0maBC5pM0maTNAC0maM0maBBmkzRmkzQICaQmjNJmgApCaDTc0xFkGlzTM0ua1PMHg0uaYDS0wHUuabmlzQIcDS5pmaXNAD6XNMzS5oEPBozTc0A0CH5pc0ylzTAdmlzTM0uaAH5pc0zNGaBD80uaZmlzQA+jNNzRmgB+aM0zNLmmIfmjNNzRmkA/NLmmZozTAfmlzTKKAH5pc0zNGaAsPzS5pmaM0wsPzS5pmaM0APzRmm5ozQA/NLmmZozQA/NLmmZpc0DHZpc0zNGaYD80uaZmlzQMdmlzTM0ZoGPzS5pmaM0wH5ozTM0tAD80ZpmaM0DH5pc0zNGaYx+aM0zNLmgY/NGaZmjdQMfmjNMzRmgY/dRmmZozTGPzRmmZozQUPzRmm5ozQUOzRmmZozQMfmjNM3UbqBj80ZpmaM0XKH5ozTM0ZoGOzRmmZozTLQ/NGaZmjNAx2aN1NzSZoKH5pM03NJmgpD80ZpmaN1BQ/NJmm5ozQMdmjNNzSZoGPzSZ96bmjNBQ7NGaZmjNA7js0ZpuaM0DH5ozTM0ZoGPzRuqPNG6gZJuozUeaN1IofmjNNw2zfg7c4zjjPpSbqdwH5ozTN1GaBj80ZpmaM0gH5pc0zNJmgZJmgGmZozRcB+aM0zNGaQD80Zpm6jdQA/NLmmZozSGPzRmmZpc0XAdmjNNzRmgB+aM0zNGaQXH5ozTM0uaAuOzS5qPNGaQEmaM0zNGaAH7qM1HmjNICTNGajzRmgCTdRuqPNGaQEm6kzTM0bqQD80bqZmjNIQ/dRmmZozQA/NGaZuFG6kA/NGaYCScDknoKQkg4PBFAD91GaZuozSEPzRmmZo3UCuOzRmmZozSAdmjNMzRmgB+aTNNzSZoEOzRmmZozSAdmjNMzRmgQ7NGaZmjNIB2aTNNzSbqBXH5pM0wtSFqAH7qaWpuaTNADiaTNNzRmgQuaM03NGaQh2aTNNzSZoEOzSZpuaTNAh2aTNJmkJoELmkJpM0maBC5pM0maTNAh2aTNNzSZoAdmkzTc0ZoAXNJmkzSZoELmkzSZoGSQByT0AoELSZpDkEg8Edc0maAFzSUmaTNMQuaTNJmigAozSUmaBBmkozSZoAsA0ZpuaXNannDs0oNMzS5oEPBpaZmlzQIdmlzTc0uaAHZpc0zNLmmA7NLmm5ooEPBpc0zNGaBD80uaZmlzQFh2aXNMzS0xDs0uaZmlzSAdmlzTM0oNMB2aUGmZpc0ASZozTM0bqBElGaZuo3UASZozTN1G6gCTNGaZuo3UwH5pc0zdRuoAfmlzTM0ZoAfmlzUeaXNAD80u6o80uaBj91G6mZpc0wH7qN1MzRmgB+aXNMzRmgY/NLmmZozQA/dS7qjzS5pjJN1G6o80ZoGSZpc1HmjNAEmaM0zNG6gZJmjNM3UmaBkm6jNMzRupjH5ozTN1GaBj80Zpm6jdQUSZozUe6jNAyTNGaZmjNMY7NGabmjNAx2aM03NGaCh2aN1MzRmgY/dRmmZozQUOzRmmZozQMfmkzTc0maLlD80ZpmaM0DH5ozTM0maLlD80bqZmjNFxj80mabmkzTuUP3UuajzRuoKH5ozTN1G6kMfmjNR7qM0xj80bqZmjNAx+6kzTc0ZoKHZozTM0ZpDJM0ZpmaM0DH722bNx25zjPGfWkzTCaM0CH5ozTN1G6gY/dRmo91LuoGPzRmo91G6gCTNLmo91GaQyTdRuqPNGaAJN1G6mZozQA/caN1MzRmkA/dRupmaN1Ax+6l30zdRmgB+6l3VHmjNICTNGajzS7qBD80bqZuo3UgJM0ZqPdRmgCTNGajzRupASZozUe6jdQA/NGaZuozSAfmjNMzRmgQ/dRupmaTNIB+6jNMzRmgY/NGaZmjNIVx4YggjgjoaCxJyTknvTM0bqAH5ozUeaM0hEmaTdTM0ZoAduo3U3NJmkA/NJmm5pM0AP3UZpmaTNIQ/dSZpuaTNAh+6jdTM0ZoAdupN1NzSZoEP3UmabmkzSAdmkzTd1GaBDs0mabmkzQA7NGabmkzQIdmkzTc0maBDs0maTNJmkIdmkzTc0maBDs0maTNJmmAuaM03NJmkIXNGabmjNAC5ozTc0maBDs0hNNzRmgBc0maTNJQIdmkDEEEHBHcUmaTNADixJJJyT1zTc0maTNMQuaM0maTNAhc0maTNGaAAmkzSUZoAM0ZpM0maBE9KKKK1PPFooooAWloooEKKWiigQZpaKKAFozRRQAtFFFMQuaM0UUAKDS5oooAM0tFFAgpaKKYBS0UUhBmlzRRTAUUUUUALRRRQAtFFFACiiiigApaKKYC0ZoooGGaWiigQUZoooGGaWiigBaKKKYBmlzRRQMKXNFFIYZooopjCloooGFGaKKAFzRRRQMM0ZoooGGaM0UUygzS0UUAGaM0UUDDNGaKKCgzRmiigYmaM0UUxi0maKKRSDNGaKKCgpM0UUDDNGaKKYwzRRRQMSg0UUFCZooooGFGaKKBhRRRQUJRmiimMKKKKQxM0UUUxhmiiigYZpDRRQUGaM0UUDDNKDRRSAKQ0UUAFLRRQMKKKKACiiigYZozRRSAM0ZoooAM0UUUDFooooEFGaKKQBmloopAGaM0UUDEzS5oooAKKKKACiiikAZozRRQIXNJmiikAZooopCCiiigAooopCDNJmiigAzRmiigAooopAJmjNFFABmkzRRSEJmjNFFABmjNFFAgzSZoopCDNNzRRQMM0maKKBCZooooEFJmiikAZpM0UUCEzRRRQAmaTNFFAhM0GiigQlJRRQIKSiikAlFFFACGkoopiEJpKKKQAaSiigQGkoooASkNFFMQUlFFACUUUUCEpKKKAEpKKKBAabRRTA/9k="), radial-gradient(130% 130% at 50% 28%, rgba(14, 10, 42, 0.95) 0%, rgba(8, 5, 24, 0.98) 55%, rgba(4, 2, 16, 0.99) 100%); background-size: 170% 170%, 170% 170%, 170% 170%, 320% 100%, cover, 100% 100%; background-position: 0% 0%, 0% 0%, 0% 0%, 200% 0%, 50% 50%, 0% 0%; background-repeat: no-repeat; animation: aps-overdrive-pan 36s ease-in-out infinite alternate; }',
    'body[data-personal-palette="overdrive"]::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; mix-blend-mode: soft-light; animation: aps-glow-drift 16s ease-in-out infinite; background: radial-gradient(42% 55% at 12% 8%, rgba(124,92,255,0.5), transparent 70%), radial-gradient(45% 60% at 88% 92%, rgba(56,189,248,0.4), transparent 70%), radial-gradient(40% 50% at 80% 20%, rgba(236,72,153,0.35), transparent 70%); }',
    'body[data-personal-palette="overdrive"] { --dsw-shadow-lv1: 0 0 10px rgba(124, 92, 255, 0.30), 0 2px 12px rgba(0, 0, 0, 0.45); --dsw-shadow-lv2: 0 0 16px rgba(124, 92, 255, 0.34), 0 0 30px rgba(46, 230, 255, 0.16), 0 4px 18px rgba(0, 0, 0, 0.50); --dsw-shadow-lv3: 0 0 26px rgba(124, 92, 255, 0.42), 0 0 48px rgba(46, 230, 255, 0.20), 0 0 90px rgba(255, 92, 202, 0.14), 0 12px 44px rgba(0, 0, 0, 0.55); }',
    'body[data-personal-palette="overdrive"] ::selection { background: linear-gradient(90deg, #7c5cff, #38bdf8, #ec4899); color: #ffffff; }',
    'body[data-personal-palette="overdrive"] *::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #7c5cff, #38bdf8); }',
    '@keyframes aps-overdrive-pan { 0% { background-position: 0% 0%, 0% 0%, 0% 0%, 200% 0%, 50% 50%, 0% 0%; } 50% { background-position: 16% 10%, 16% 10%, 16% 10%, 70% 0%, 50% 50%, 0% 0%; } 100% { background-position: 32% 20%, 32% 20%, 32% 20%, -60% 0%, 50% 50%, 0% 0%; } }',
  ].join('\n')

  function clonePalette(palette) {
    var out = {}
    for (var key in palette) {
      out[key] = { light: palette[key].light, dark: palette[key].dark }
    }
    return out
  }

  function paletteToTokens(palette) {
    var tokens = {}
    for (var i = 0; i < TOKENS.length; i++) {
      var t = TOKENS[i]
      tokens[t.key] = { light: palette[t.field].light, dark: palette[t.field].dark }
    }
    return tokens
  }

  /** Normalize a stored JSON map into a full palette; invalid entries fall back to Classic Blue. */
  function parseTokens(json) {
    var obj = null
    try { obj = JSON.parse(json) } catch (error) { return null }
    if (typeof obj !== 'object' || obj === null) return null
    var palette = {}
    for (var i = 0; i < TOKENS.length; i++) {
      var t = TOKENS[i]
      var v = obj[t.key]
      if (typeof v === 'object' && v !== null && typeof v.light === 'string' && typeof v.dark === 'string') {
        palette[t.field] = { light: v.light, dark: v.dark }
      } else {
        palette[t.field] = { light: DEFAULT_PALETTE[t.field].light, dark: DEFAULT_PALETTE[t.field].dark }
      }
    }
    return palette
  }

  window.__ModuleLoader__.load({
    id: PACKAGE_ID,
    factory: function (require) {
      var React = require('react')

      return {
        name: PACKAGE_ID,
        inject: ['theme', 'settingsScope', 'slots'],
        apply: function (ctx) {
          var theme = ctx.theme
          var scope = ctx.settingsScope.bind({ namespace: NAMESPACE })

          var current = clonePalette(DEFAULT_PALETTE)
          var paletteListeners = []
          var publishPalette = function () {
            for (var i = 0; i < paletteListeners.length; i++) paletteListeners[i]()
          }
          var setCurrent = function (palette) {
            current = palette
            publishPalette()
          }

          var disposeLayer = null
          var applyLayer = function (palette) {
            if (disposeLayer !== null) {
              disposeLayer()
              disposeLayer = null
            }
            disposeLayer = theme.overrideTokens(SOURCE, paletteToTokens(palette))
          }
          ctx.effect(function () {
            return function () {
              if (disposeLayer !== null) disposeLayer()
            }
          })

          var matchPresetId = function (palette) {
            var ids = Object.keys(PALETTES)
            for (var i = 0; i < ids.length; i++) {
              var p = PALETTES[ids[i]]
              var same = true
              for (var f in p) {
                if (palette[f] === undefined || palette[f].light !== p[f].light || palette[f].dark !== p[f].dark) {
                  same = false
                  break
                }
              }
              if (same) return ids[i]
            }
            return 'custom'
          }

          // ── canvas FX engine (per-palette ambient particles) ────────────────
          var reducedMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches
          var fxCanvas = null
          var fxCtx = null
          var fxRaf = 0
          var fxMode = 'off'
          var fxParticles = []
          var fxWidth = 0
          var fxHeight = 0
          var fxDpr = 1

          var fxResize = function () {
            if (fxCanvas === null) return
            fxDpr = Math.min(window.devicePixelRatio || 1, 1.5)
            fxWidth = window.innerWidth
            fxHeight = window.innerHeight
            fxCanvas.width = Math.floor(fxWidth * fxDpr)
            fxCanvas.height = Math.floor(fxHeight * fxDpr)
            fxCtx.setTransform(fxDpr, 0, 0, fxDpr, 0, 0)
          }

          var fxEnsure = function () {
            if (fxCanvas !== null) return
            fxCanvas = document.createElement('canvas')
            fxCanvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483001;'
            document.body.appendChild(fxCanvas)
            fxCtx = fxCanvas.getContext('2d')
            fxResize()
            window.addEventListener('resize', fxResize)
          }

          var fxRemove = function () {
            if (fxCanvas === null) return
            window.removeEventListener('resize', fxResize)
            fxCanvas.remove()
            fxCanvas = null
            fxCtx = null
          }

          var fxMakeEmber = function () {
            var spark = Math.random() < 0.4
            return {
              kind: 'ember',
              spark: spark,
              x: Math.random() * fxWidth,
              y: fxHeight * (0.3 + Math.random() * 0.7),
              r: spark ? 2.6 + Math.random() * 2.6 : 1.6 + Math.random() * 2.8,
              vy: spark ? 1 + Math.random() * 1.1 : 0.5 + Math.random() * 0.9,
              vx: (Math.random() - 0.5) * (spark ? 0.5 : 0.35),
              hue: spark ? 20 + Math.random() * 20 : 8 + Math.random() * 38,
              phase: Math.random() * Math.PI * 2,
              flicker: 0.8 + Math.random() * 0.2,
            }
          }

          var fxMakeBubble = function () {
            return {
              kind: 'bubble',
              x: Math.random() * fxWidth,
              y: fxHeight * (0.3 + Math.random() * 0.7),
              r: 6 + Math.random() * 14,
              vy: 0.12 + Math.random() * 0.25,
              vx: (Math.random() - 0.5) * 0.2,
              color: Math.random() < 0.5 ? 'rgba(244,114,182,0.16)' : 'rgba(167,139,250,0.14)',
            }
          }

          var fxMakeSpeck = function () {
            return {
              kind: 'speck',
              x: Math.random() * fxWidth,
              y: Math.random() * fxHeight,
              r: 0.8 + Math.random() * 1.4,
              vy: 0.15 + Math.random() * 0.3,
              vx: (Math.random() - 0.5) * 0.2,
              twinkle: Math.random() * Math.PI * 2,
            }
          }

          var fxSpawn = function () {
            fxParticles = []
            var i
            if (fxMode === 'embers') {
              for (i = 0; i < 120; i++) fxParticles.push(fxMakeEmber())
            } else if (fxMode === 'bubbles') {
              for (i = 0; i < 22; i++) fxParticles.push(fxMakeBubble())
            } else if (fxMode === 'specks') {
              for (i = 0; i < 45; i++) fxParticles.push(fxMakeSpeck())
            }
          }

          var fxDrawAurora = function () {
            var t = performance.now() / 1000
            var w = fxWidth
            var h = fxHeight
            var ribbons = [
              { y: 0.16, amp: 0.06, speed: 0.5, from: 'rgba(124,92,255,0.20)', to: 'rgba(124,92,255,0)' },
              { y: 0.32, amp: 0.08, speed: 0.38, from: 'rgba(56,189,248,0.16)', to: 'rgba(56,189,248,0)' },
              { y: 0.55, amp: 0.07, speed: 0.6, from: 'rgba(167,139,250,0.13)', to: 'rgba(167,139,250,0)' },
            ]
            var i, x
            for (i = 0; i < ribbons.length; i++) {
              var rb = ribbons[i]
              var midY = rb.y * h
              var grad = fxCtx.createLinearGradient(0, midY, 0, midY + h * 0.5)
              grad.addColorStop(0, rb.from)
              grad.addColorStop(1, rb.to)
              fxCtx.fillStyle = grad
              fxCtx.beginPath()
              fxCtx.moveTo(0, h)
              for (x = 0; x <= w; x += 12) {
                fxCtx.lineTo(x, midY + Math.sin(x * 0.004 + t * rb.speed) * rb.amp * h)
              }
              fxCtx.lineTo(w, h)
              fxCtx.closePath()
              fxCtx.fill()
            }
          }

          var fxFrame = function () {
            fxRaf = 0
            if (fxCanvas === null || fxMode === 'off') return
            var w = fxWidth
            var h = fxHeight
            fxCtx.clearRect(0, 0, w, h)
            if (fxMode === 'aurora') {
              fxDrawAurora()
            } else {
              fxCtx.globalCompositeOperation = 'lighter'
              var i, p
              for (i = 0; i < fxParticles.length; i++) {
                p = fxParticles[i]
                p.x += p.vx
                p.y -= p.vy
                if (p.kind === 'ember') {
                  p.phase += 0.07
                  var alpha = p.flicker * (0.85 + 0.15 * Math.sin(p.phase))
                  var halo = p.r * (p.spark ? 7 : 5.5)
                  var grad = fxCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, halo)
                  grad.addColorStop(0, 'hsla(' + p.hue + ', 100%, ' + (p.spark ? 78 : 65) + '%, ' + alpha + ')')
                  grad.addColorStop(1, 'hsla(' + p.hue + ', 100%, 55%, 0)')
                  fxCtx.fillStyle = grad
                  fxCtx.beginPath()
                  fxCtx.arc(p.x, p.y, halo, 0, Math.PI * 2)
                  fxCtx.fill()
                  if (p.spark) {
                    fxCtx.fillStyle = 'rgba(255,236,190,' + (alpha * 0.9) + ')'
                    fxCtx.beginPath()
                    fxCtx.arc(p.x, p.y, p.r * 0.8, 0, Math.PI * 2)
                    fxCtx.fill()
                  }
                  if (p.y < -30 || p.x < -30 || p.x > w + 30) {
                    fxParticles[i] = fxMakeEmber()
                    fxParticles[i].y = h + 30
                  }
                } else if (p.kind === 'bubble') {
                  fxCtx.fillStyle = p.color
                  fxCtx.beginPath()
                  fxCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                  fxCtx.fill()
                  if (p.y < -p.r - 10) {
                    p.y = h + p.r + 10
                    p.x = Math.random() * w
                  }
                } else if (p.kind === 'speck') {
                  p.twinkle += 0.05
                  fxCtx.fillStyle = 'rgba(214,232,150,' + (0.35 + 0.3 * Math.sin(p.twinkle)) + ')'
                  fxCtx.beginPath()
                  fxCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                  fxCtx.fill()
                  if (p.y < -10) {
                    p.y = h + 10
                    p.x = Math.random() * w
                  }
                }
              }
              fxCtx.globalCompositeOperation = 'source-over'
            }
            fxRaf = requestAnimationFrame(fxFrame)
          }

          var fxSwitch = function (id) {
            var next
            if (id === 'overdrive') next = 'aurora'
            else if (id !== 'aurora' && id !== 'asuka' && id !== 'candy' && id !== 'matcha') next = 'off'
            else next = id
            if (next === fxMode) return
            fxMode = next
            if (fxMode === 'off') {
              if (fxRaf !== 0) {
                cancelAnimationFrame(fxRaf)
                fxRaf = 0
              }
              fxParticles = []
              fxRemove()
            } else {
              fxEnsure()
              fxSpawn()
              if (fxRaf === 0) fxRaf = requestAnimationFrame(fxFrame)
            }
          }

          ctx.effect(function () {
            return function () {
              if (fxRaf !== 0) {
                cancelAnimationFrame(fxRaf)
                fxRaf = 0
              }
              fxRemove()
            }
          })

          var updateEffects = function (palette) {
            var id = matchPresetId(palette)
            document.body.dataset.personalPalette = id
            fxSwitch(id)
          }
          var adopt = function () {
            var snap = scope.getSnapshot()
            if (snap.status !== 'ready') return
            var value = snap.value
            var stored = (value !== undefined && value !== null && typeof value[FIELD] === 'string' && value[FIELD] !== '')
              ? parseTokens(value[FIELD])
              : null
            var palette = stored === null ? clonePalette(DEFAULT_PALETTE) : stored
            setCurrent(palette)
            applyLayer(palette)
            updateEffects(palette)
          }
          var disposeSubscribe = scope.subscribe(adopt)
          ctx.effect(function () { return disposeSubscribe })
          adopt()

          var tag = document.createElement('style')
          tag.dataset.plugin = PACKAGE_ID
          tag.textContent = CSS
          document.head.appendChild(tag)
          ctx.effect(function () { return function () { tag.remove() } })

          function Studio() {
            var modeState = React.useState('sync')
            var mode = modeState[0]
            var setMode = modeState[1]

            var paletteState = React.useState(clonePalette(current))
            var palette = paletteState[0]
            var setPalette = paletteState[1]

            React.useEffect(function () {
              var onPalette = function () { setPalette(clonePalette(current)) }
              paletteListeners.push(onPalette)
              return function () {
                var i = paletteListeners.indexOf(onPalette)
                if (i >= 0) paletteListeners.splice(i, 1)
              }
            }, [])

            var commit = function (next) {
              setPalette(next)
              applyLayer(next)
              updateEffects(next)
              scope.set(FIELD, JSON.stringify(paletteToTokens(next))).catch(function () {})
            }

            var pickPreset = function (id) {
              var preset = PALETTES[id]
              if (preset === undefined) return
              commit(clonePalette(preset))
            }

            var changeColor = function (key) {
              return function (event) {
                var value = event.target.value
                var t = null
                for (var i = 0; i < TOKENS.length; i++) {
                  if (TOKENS[i].key === key) { t = TOKENS[i]; break }
                }
                if (t === null) return
                var prev = palette[t.field]
                var entry
                if (mode === 'sync') {
                  entry = { light: value, dark: value }
                } else if (mode === 'light') {
                  entry = { light: value, dark: prev.dark }
                } else {
                  entry = { light: prev.light, dark: value }
                }
                var next = clonePalette(palette)
                next[t.field] = entry
                commit(next)
              }
            }

            var handleReset = function () {
              var classic = clonePalette(DEFAULT_PALETTE)
              setPalette(classic)
              applyLayer(classic)
              updateEffects(classic)
              scope.unset(FIELD).catch(function () {})
            }

            var overriddenCount = 0
            for (var i = 0; i < TOKENS.length; i++) {
              var f = TOKENS[i].field
              if (palette[f].light !== DEFAULT_PALETTE[f].light || palette[f].dark !== DEFAULT_PALETTE[f].dark) {
                overriddenCount += 1
              }
            }

            var h = React.createElement
            return h('div', { className: 'aps-root' },
              h('h2', { className: 'aps-title' }, '外观定制'),
              h('p', { className: 'aps-sub' }, '一键切换整套配色，或逐项自定义界面颜色，修改立即生效并永久保存。「仅浅色/仅深色」模式下，另一模式保持原值。'),
              h('div', null,
                h('p', { className: 'aps-block-label' }, '配色方案'),
                h('div', { className: 'aps-presets' },
                  PRESETS.map(function (p) {
                    return h('button', { key: p.id, className: 'aps-preset', onClick: function () { pickPreset(p.id) } },
                      h('span', { className: 'aps-dot', style: { background: PALETTES[p.id].sidebar.light } }),
                      p.name,
                    )
                  }),
                  h('button', { className: 'aps-reset', onClick: handleReset }, '恢复默认'),
                ),
              ),
              h('div', null,
                h('p', { className: 'aps-block-label' }, '颜色编辑模式'),
                h('div', { className: 'aps-seg' },
                  h('button', { className: 'aps-seg-btn' + (mode === 'sync' ? ' aps-active' : ''), onClick: function () { setMode('sync') } }, '同步（浅色=深色）'),
                  h('button', { className: 'aps-seg-btn' + (mode === 'light' ? ' aps-active' : ''), onClick: function () { setMode('light') } }, '仅浅色'),
                  h('button', { className: 'aps-seg-btn' + (mode === 'dark' ? ' aps-active' : ''), onClick: function () { setMode('dark') } }, '仅深色'),
                ),
              ),
              h('div', null,
                h('p', { className: 'aps-block-label' }, '自定义颜色'),
                h('div', { className: 'aps-grid' },
                  TOKENS.map(function (t) {
                    var light = palette[t.field].light
                    var dark = palette[t.field].dark
                    var inputVal = mode === 'dark' ? dark : light
                    var overridden = light !== DEFAULT_PALETTE[t.field].light || dark !== DEFAULT_PALETTE[t.field].dark
                    return h('div', { key: t.key, className: 'aps-row' },
                      h('span', { className: 'aps-row-label' }, t.label),
                      h('span', { className: 'aps-swatch', title: '浅色', style: { background: light } }),
                      h('span', { className: 'aps-swatch', title: '深色', style: { background: dark } }),
                      h('input', { type: 'color', className: 'aps-color-input', value: inputVal, onChange: changeColor(t.key) }),
                      h('span', { className: 'aps-hex' }, overridden ? inputVal.toUpperCase() : '默认'),
                    )
                  }),
                ),
              ),
              h('div', { className: 'aps-status' },
                h('span', { className: overriddenCount > 0 ? 'aps-status-on' : undefined },
                  overriddenCount > 0 ? '自定义配色已生效（' + overriddenCount + ' 项自定义，已永久保存）' : '当前使用默认配色（经典蓝）'),
                h('div', null, '配色保存在用户设置文件（settings.yaml），重启 dsh web 后依然生效。'),
              ),
            )
          }

          ctx.slots.inject('settings.section', function () {
            return ctx.slots.register(
              { name: 'settings.section', id: 'appearance-studio', order: 5, label: '外观定制' },
              function () { return React.createElement(Studio) },
            )
          })
        },
      }
    },
  })
})()
