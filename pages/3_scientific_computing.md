<!DOCTYPE html>
<html>
<head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>3_scientific_computing</title><script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.1.10/require.min.js"></script>




<style type="text/css">
    pre { line-height: 125%; }
td.linenos .normal { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
span.linenos { color: inherit; background-color: transparent; padding-left: 5px; padding-right: 5px; }
td.linenos .special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
span.linenos.special { color: #000000; background-color: #ffffc0; padding-left: 5px; padding-right: 5px; }
.highlight .hll { background-color: var(--jp-cell-editor-active-background) }
.highlight { background: var(--jp-cell-editor-background); color: var(--jp-mirror-editor-variable-color) }
.highlight .c { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment */
.highlight .err { color: var(--jp-mirror-editor-error-color) } /* Error */
.highlight .k { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword */
.highlight .o { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator */
.highlight .p { color: var(--jp-mirror-editor-punctuation-color) } /* Punctuation */
.highlight .ch { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Hashbang */
.highlight .cm { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Multiline */
.highlight .cp { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Preproc */
.highlight .cpf { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.PreprocFile */
.highlight .c1 { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Single */
.highlight .cs { color: var(--jp-mirror-editor-comment-color); font-style: italic } /* Comment.Special */
.highlight .kc { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Constant */
.highlight .kd { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Declaration */
.highlight .kn { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Namespace */
.highlight .kp { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Pseudo */
.highlight .kr { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Reserved */
.highlight .kt { color: var(--jp-mirror-editor-keyword-color); font-weight: bold } /* Keyword.Type */
.highlight .m { color: var(--jp-mirror-editor-number-color) } /* Literal.Number */
.highlight .s { color: var(--jp-mirror-editor-string-color) } /* Literal.String */
.highlight .ow { color: var(--jp-mirror-editor-operator-color); font-weight: bold } /* Operator.Word */
.highlight .w { color: var(--jp-mirror-editor-variable-color) } /* Text.Whitespace */
.highlight .mb { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Bin */
.highlight .mf { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Float */
.highlight .mh { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Hex */
.highlight .mi { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer */
.highlight .mo { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Oct */
.highlight .sa { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Affix */
.highlight .sb { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Backtick */
.highlight .sc { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Char */
.highlight .dl { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Delimiter */
.highlight .sd { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Doc */
.highlight .s2 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Double */
.highlight .se { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Escape */
.highlight .sh { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Heredoc */
.highlight .si { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Interpol */
.highlight .sx { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Other */
.highlight .sr { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Regex */
.highlight .s1 { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Single */
.highlight .ss { color: var(--jp-mirror-editor-string-color) } /* Literal.String.Symbol */
.highlight .il { color: var(--jp-mirror-editor-number-color) } /* Literal.Number.Integer.Long */
  </style>



<style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
 * Mozilla scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */
[data-jp-theme-scrollbars='true'] {
  scrollbar-color: rgb(var(--jp-scrollbar-thumb-color))
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar. These selectors
 * will match lower in the tree, and so will override the above */
[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny {
  scrollbar-color: rgba(var(--jp-scrollbar-thumb-color), 0.5) transparent;
  scrollbar-width: thin;
}

/*
 * Webkit scrollbar styling
 */

/* use standard opaque scrollbars for most nodes */

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-corner {
  background: var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-thumb {
  background: rgb(var(--jp-scrollbar-thumb-color));
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-right: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

[data-jp-theme-scrollbars='true'] ::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
  border-bottom: var(--jp-scrollbar-endpad) solid
    var(--jp-scrollbar-background-color);
}

/* for code nodes, use a transparent style of scrollbar */

[data-jp-theme-scrollbars='true'] .CodeMirror-hscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true'] .CodeMirror-vscrollbar::-webkit-scrollbar,
[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-corner,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-corner {
  background-color: transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-thumb,
[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
  border: var(--jp-scrollbar-thumb-margin) solid transparent;
  background-clip: content-box;
  border-radius: var(--jp-scrollbar-thumb-radius);
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-hscrollbar::-webkit-scrollbar-track:horizontal {
  border-left: var(--jp-scrollbar-endpad) solid transparent;
  border-right: var(--jp-scrollbar-endpad) solid transparent;
}

[data-jp-theme-scrollbars='true']
  .CodeMirror-vscrollbar::-webkit-scrollbar-track:vertical {
  border-top: var(--jp-scrollbar-endpad) solid transparent;
  border-bottom: var(--jp-scrollbar-endpad) solid transparent;
}

/* tiny scrollbar */

.jp-scrollbar-tiny::-webkit-scrollbar,
.jp-scrollbar-tiny::-webkit-scrollbar-corner {
  background-color: transparent;
  height: 4px;
  width: 4px;
}

.jp-scrollbar-tiny::-webkit-scrollbar-thumb {
  background: rgba(var(--jp-scrollbar-thumb-color), 0.5);
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:horizontal {
  border-left: 0px solid transparent;
  border-right: 0px solid transparent;
}

.jp-scrollbar-tiny::-webkit-scrollbar-track:vertical {
  border-top: 0px solid transparent;
  border-bottom: 0px solid transparent;
}

/*
 * Phosphor
 */

.lm-ScrollBar[data-orientation='horizontal'] {
  min-height: 16px;
  max-height: 16px;
  min-width: 45px;
  border-top: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] {
  min-width: 16px;
  max-width: 16px;
  min-height: 45px;
  border-left: 1px solid #a0a0a0;
}

.lm-ScrollBar-button {
  background-color: #f0f0f0;
  background-position: center center;
  min-height: 15px;
  max-height: 15px;
  min-width: 15px;
  max-width: 15px;
}

.lm-ScrollBar-button:hover {
  background-color: #dadada;
}

.lm-ScrollBar-button.lm-mod-active {
  background-color: #cdcdcd;
}

.lm-ScrollBar-track {
  background: #f0f0f0;
}

.lm-ScrollBar-thumb {
  background: #cdcdcd;
}

.lm-ScrollBar-thumb:hover {
  background: #bababa;
}

.lm-ScrollBar-thumb.lm-mod-active {
  background: #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal'] .lm-ScrollBar-thumb {
  height: 100%;
  min-width: 15px;
  border-left: 1px solid #a0a0a0;
  border-right: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='vertical'] .lm-ScrollBar-thumb {
  width: 100%;
  min-height: 15px;
  border-top: 1px solid #a0a0a0;
  border-bottom: 1px solid #a0a0a0;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-left);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='horizontal']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-right);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='decrement'] {
  background-image: var(--jp-icon-caret-up);
  background-size: 17px;
}

.lm-ScrollBar[data-orientation='vertical']
  .lm-ScrollBar-button[data-action='increment'] {
  background-image: var(--jp-icon-caret-down);
  background-size: 17px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Widget, /* </DEPRECATED> */
.lm-Widget {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: default;
}


/* <DEPRECATED> */ .p-Widget.p-mod-hidden, /* </DEPRECATED> */
.lm-Widget.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-CommandPalette, /* </DEPRECATED> */
.lm-CommandPalette {
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-CommandPalette-search, /* </DEPRECATED> */
.lm-CommandPalette-search {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-content, /* </DEPRECATED> */
.lm-CommandPalette-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  min-height: 0;
  overflow: auto;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-CommandPalette-header, /* </DEPRECATED> */
.lm-CommandPalette-header {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}


/* <DEPRECATED> */ .p-CommandPalette-item, /* </DEPRECATED> */
.lm-CommandPalette-item {
  display: flex;
  flex-direction: row;
}


/* <DEPRECATED> */ .p-CommandPalette-itemIcon, /* </DEPRECATED> */
.lm-CommandPalette-itemIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemContent, /* </DEPRECATED> */
.lm-CommandPalette-itemContent {
  flex: 1 1 auto;
  overflow: hidden;
}


/* <DEPRECATED> */ .p-CommandPalette-itemShortcut, /* </DEPRECATED> */
.lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-CommandPalette-itemLabel, /* </DEPRECATED> */
.lm-CommandPalette-itemLabel {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.lm-close-icon {
	border:1px solid transparent;
  background-color: transparent;
  position: absolute;
	z-index:1;
	right:3%;
	top: 0;
	bottom: 0;
	margin: auto;
	padding: 7px 0;
	display: none;
	vertical-align: middle;
  outline: 0;
  cursor: pointer;
}
.lm-close-icon:after {
	content: "X";
	display: block;
	width: 15px;
	height: 15px;
	text-align: center;
	color:#000;
	font-weight: normal;
	font-size: 12px;
	cursor: pointer;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-DockPanel, /* </DEPRECATED> */
.lm-DockPanel {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-widget, /* </DEPRECATED> */
.lm-DockPanel-widget {
  z-index: 0;
}


/* <DEPRECATED> */ .p-DockPanel-tabBar, /* </DEPRECATED> */
.lm-DockPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-DockPanel-handle, /* </DEPRECATED> */
.lm-DockPanel-handle {
  z-index: 2;
}


/* <DEPRECATED> */ .p-DockPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-DockPanel-handle:after, /* </DEPRECATED> */
.lm-DockPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal'] {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical'] {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='horizontal']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='horizontal']:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-DockPanel-handle[data-orientation='vertical']:after,
/* </DEPRECATED> */
.lm-DockPanel-handle[data-orientation='vertical']:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}


/* <DEPRECATED> */ .p-DockPanel-overlay, /* </DEPRECATED> */
.lm-DockPanel-overlay {
  z-index: 3;
  box-sizing: border-box;
  pointer-events: none;
}


/* <DEPRECATED> */ .p-DockPanel-overlay.p-mod-hidden, /* </DEPRECATED> */
.lm-DockPanel-overlay.lm-mod-hidden {
  display: none !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-Menu, /* </DEPRECATED> */
.lm-Menu {
  z-index: 10000;
  position: absolute;
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: auto;
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-Menu-content, /* </DEPRECATED> */
.lm-Menu-content {
  margin: 0;
  padding: 0;
  display: table;
  list-style-type: none;
}


/* <DEPRECATED> */ .p-Menu-item, /* </DEPRECATED> */
.lm-Menu-item {
  display: table-row;
}


/* <DEPRECATED> */
.p-Menu-item.p-mod-hidden,
.p-Menu-item.p-mod-collapsed,
/* </DEPRECATED> */
.lm-Menu-item.lm-mod-hidden,
.lm-Menu-item.lm-mod-collapsed {
  display: none !important;
}


/* <DEPRECATED> */
.p-Menu-itemIcon,
.p-Menu-itemSubmenuIcon,
/* </DEPRECATED> */
.lm-Menu-itemIcon,
.lm-Menu-itemSubmenuIcon {
  display: table-cell;
  text-align: center;
}


/* <DEPRECATED> */ .p-Menu-itemLabel, /* </DEPRECATED> */
.lm-Menu-itemLabel {
  display: table-cell;
  text-align: left;
}


/* <DEPRECATED> */ .p-Menu-itemShortcut, /* </DEPRECATED> */
.lm-Menu-itemShortcut {
  display: table-cell;
  text-align: right;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-MenuBar, /* </DEPRECATED> */
.lm-MenuBar {
  outline: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-MenuBar-content, /* </DEPRECATED> */
.lm-MenuBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  list-style-type: none;
}


/* <DEPRECATED> */ .p--MenuBar-item, /* </DEPRECATED> */
.lm-MenuBar-item {
  box-sizing: border-box;
}


/* <DEPRECATED> */
.p-MenuBar-itemIcon,
.p-MenuBar-itemLabel,
/* </DEPRECATED> */
.lm-MenuBar-itemIcon,
.lm-MenuBar-itemLabel {
  display: inline-block;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-ScrollBar, /* </DEPRECATED> */
.lm-ScrollBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='horizontal'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-ScrollBar[data-orientation='vertical'],
/* </DEPRECATED> */
.lm-ScrollBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-ScrollBar-button, /* </DEPRECATED> */
.lm-ScrollBar-button {
  box-sizing: border-box;
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-track, /* </DEPRECATED> */
.lm-ScrollBar-track {
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
}


/* <DEPRECATED> */ .p-ScrollBar-thumb, /* </DEPRECATED> */
.lm-ScrollBar-thumb {
  box-sizing: border-box;
  position: absolute;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-SplitPanel-child, /* </DEPRECATED> */
.lm-SplitPanel-child {
  z-index: 0;
}


/* <DEPRECATED> */ .p-SplitPanel-handle, /* </DEPRECATED> */
.lm-SplitPanel-handle {
  z-index: 1;
}


/* <DEPRECATED> */ .p-SplitPanel-handle.p-mod-hidden, /* </DEPRECATED> */
.lm-SplitPanel-handle.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-SplitPanel-handle:after, /* </DEPRECATED> */
.lm-SplitPanel-handle:after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle {
  cursor: ew-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle {
  cursor: ns-resize;
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='horizontal'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='horizontal'] > .lm-SplitPanel-handle:after {
  left: 50%;
  min-width: 8px;
  transform: translateX(-50%);
}


/* <DEPRECATED> */
.p-SplitPanel[data-orientation='vertical'] > .p-SplitPanel-handle:after,
/* </DEPRECATED> */
.lm-SplitPanel[data-orientation='vertical'] > .lm-SplitPanel-handle:after {
  top: 50%;
  min-height: 8px;
  transform: translateY(-50%);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabBar, /* </DEPRECATED> */
.lm-TabBar {
  display: flex;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='horizontal'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] {
  flex-direction: row;
}


/* <DEPRECATED> */ .p-TabBar[data-orientation='vertical'], /* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-content, /* </DEPRECATED> */
.lm-TabBar-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex: 1 1 auto;
  list-style-type: none;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='horizontal'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='horizontal'] > .lm-TabBar-content {
  flex-direction: row;
}


/* <DEPRECATED> */
.p-TabBar[data-orientation='vertical'] > .p-TabBar-content,
/* </DEPRECATED> */
.lm-TabBar[data-orientation='vertical'] > .lm-TabBar-content {
  flex-direction: column;
}


/* <DEPRECATED> */ .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar-tab {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  overflow: hidden;
}


/* <DEPRECATED> */
.p-TabBar-tabIcon,
.p-TabBar-tabCloseIcon,
/* </DEPRECATED> */
.lm-TabBar-tabIcon,
.lm-TabBar-tabCloseIcon {
  flex: 0 0 auto;
}


/* <DEPRECATED> */ .p-TabBar-tabLabel, /* </DEPRECATED> */
.lm-TabBar-tabLabel {
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
}


.lm-TabBar-tabInput {
  user-select: all;
  width: 100%;
  box-sizing : border-box;
}


/* <DEPRECATED> */ .p-TabBar-tab.p-mod-hidden, /* </DEPRECATED> */
.lm-TabBar-tab.lm-mod-hidden {
  display: none !important;
}


/* <DEPRECATED> */ .p-TabBar.p-mod-dragging .p-TabBar-tab, /* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab {
  position: relative;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='horizontal'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='horizontal'] .lm-TabBar-tab {
  left: 0;
  transition: left 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging[data-orientation='vertical'] .p-TabBar-tab,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging[data-orientation='vertical'] .lm-TabBar-tab {
  top: 0;
  transition: top 150ms ease;
}


/* <DEPRECATED> */
.p-TabBar.p-mod-dragging .p-TabBar-tab.p-mod-dragging,
/* </DEPRECATED> */
.lm-TabBar.lm-mod-dragging .lm-TabBar-tab.lm-mod-dragging {
  transition: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ .p-TabPanel-tabBar, /* </DEPRECATED> */
.lm-TabPanel-tabBar {
  z-index: 1;
}


/* <DEPRECATED> */ .p-TabPanel-stackedPanel, /* </DEPRECATED> */
.lm-TabPanel-stackedPanel {
  z-index: 0;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/

@charset "UTF-8";
html{
  -webkit-box-sizing:border-box;
          box-sizing:border-box; }

*,
*::before,
*::after{
  -webkit-box-sizing:inherit;
          box-sizing:inherit; }

body{
  font-size:14px;
  font-weight:400;
  letter-spacing:0;
  line-height:1.28581;
  text-transform:none;
  color:#182026;
  font-family:-apple-system, "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", "Icons16", sans-serif; }

p{
  margin-bottom:10px;
  margin-top:0; }

small{
  font-size:12px; }

strong{
  font-weight:600; }

::-moz-selection{
  background:rgba(125, 188, 255, 0.6); }

::selection{
  background:rgba(125, 188, 255, 0.6); }
.bp3-heading{
  color:#182026;
  font-weight:600;
  margin:0 0 10px;
  padding:0; }
  .bp3-dark .bp3-heading{
    color:#f5f8fa; }

h1.bp3-heading, .bp3-running-text h1{
  font-size:36px;
  line-height:40px; }

h2.bp3-heading, .bp3-running-text h2{
  font-size:28px;
  line-height:32px; }

h3.bp3-heading, .bp3-running-text h3{
  font-size:22px;
  line-height:25px; }

h4.bp3-heading, .bp3-running-text h4{
  font-size:18px;
  line-height:21px; }

h5.bp3-heading, .bp3-running-text h5{
  font-size:16px;
  line-height:19px; }

h6.bp3-heading, .bp3-running-text h6{
  font-size:14px;
  line-height:16px; }
.bp3-ui-text{
  font-size:14px;
  font-weight:400;
  letter-spacing:0;
  line-height:1.28581;
  text-transform:none; }

.bp3-monospace-text{
  font-family:monospace;
  text-transform:none; }

.bp3-text-muted{
  color:#5c7080; }
  .bp3-dark .bp3-text-muted{
    color:#a7b6c2; }

.bp3-text-disabled{
  color:rgba(92, 112, 128, 0.6); }
  .bp3-dark .bp3-text-disabled{
    color:rgba(167, 182, 194, 0.6); }

.bp3-text-overflow-ellipsis{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal; }
.bp3-running-text{
  font-size:14px;
  line-height:1.5; }
  .bp3-running-text h1{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h1{
      color:#f5f8fa; }
  .bp3-running-text h2{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h2{
      color:#f5f8fa; }
  .bp3-running-text h3{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h3{
      color:#f5f8fa; }
  .bp3-running-text h4{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h4{
      color:#f5f8fa; }
  .bp3-running-text h5{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h5{
      color:#f5f8fa; }
  .bp3-running-text h6{
    color:#182026;
    font-weight:600;
    margin-bottom:20px;
    margin-top:40px; }
    .bp3-dark .bp3-running-text h6{
      color:#f5f8fa; }
  .bp3-running-text hr{
    border:none;
    border-bottom:1px solid rgba(16, 22, 26, 0.15);
    margin:20px 0; }
    .bp3-dark .bp3-running-text hr{
      border-color:rgba(255, 255, 255, 0.15); }
  .bp3-running-text p{
    margin:0 0 10px;
    padding:0; }

.bp3-text-large{
  font-size:16px; }

.bp3-text-small{
  font-size:12px; }
a{
  color:#106ba3;
  text-decoration:none; }
  a:hover{
    color:#106ba3;
    cursor:pointer;
    text-decoration:underline; }
  a .bp3-icon, a .bp3-icon-standard, a .bp3-icon-large{
    color:inherit; }
  a code,
  .bp3-dark a code{
    color:inherit; }
  .bp3-dark a,
  .bp3-dark a:hover{
    color:#48aff0; }
    .bp3-dark a .bp3-icon, .bp3-dark a .bp3-icon-standard, .bp3-dark a .bp3-icon-large,
    .bp3-dark a:hover .bp3-icon,
    .bp3-dark a:hover .bp3-icon-standard,
    .bp3-dark a:hover .bp3-icon-large{
      color:inherit; }
.bp3-running-text code, .bp3-code{
  font-family:monospace;
  text-transform:none;
  background:rgba(255, 255, 255, 0.7);
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2);
  color:#5c7080;
  font-size:smaller;
  padding:2px 5px; }
  .bp3-dark .bp3-running-text code, .bp3-running-text .bp3-dark code, .bp3-dark .bp3-code{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#a7b6c2; }
  .bp3-running-text a > code, a > .bp3-code{
    color:#137cbd; }
    .bp3-dark .bp3-running-text a > code, .bp3-running-text .bp3-dark a > code, .bp3-dark a > .bp3-code{
      color:inherit; }

.bp3-running-text pre, .bp3-code-block{
  font-family:monospace;
  text-transform:none;
  background:rgba(255, 255, 255, 0.7);
  border-radius:3px;
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
  color:#182026;
  display:block;
  font-size:13px;
  line-height:1.4;
  margin:10px 0;
  padding:13px 15px 12px;
  word-break:break-all;
  word-wrap:break-word; }
  .bp3-dark .bp3-running-text pre, .bp3-running-text .bp3-dark pre, .bp3-dark .bp3-code-block{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
  .bp3-running-text pre > code, .bp3-code-block > code{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:inherit;
    font-size:inherit;
    padding:0; }

.bp3-running-text kbd, .bp3-key{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#5c7080;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  font-family:inherit;
  font-size:12px;
  height:24px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  line-height:24px;
  min-width:24px;
  padding:3px 6px;
  vertical-align:middle; }
  .bp3-running-text kbd .bp3-icon, .bp3-key .bp3-icon, .bp3-running-text kbd .bp3-icon-standard, .bp3-key .bp3-icon-standard, .bp3-running-text kbd .bp3-icon-large, .bp3-key .bp3-icon-large{
    margin-right:5px; }
  .bp3-dark .bp3-running-text kbd, .bp3-running-text .bp3-dark kbd, .bp3-dark .bp3-key{
    background:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#a7b6c2; }
.bp3-running-text blockquote, .bp3-blockquote{
  border-left:solid 4px rgba(167, 182, 194, 0.5);
  margin:0 0 10px;
  padding:0 20px; }
  .bp3-dark .bp3-running-text blockquote, .bp3-running-text .bp3-dark blockquote, .bp3-dark .bp3-blockquote{
    border-color:rgba(115, 134, 148, 0.5); }
.bp3-running-text ul,
.bp3-running-text ol, .bp3-list{
  margin:10px 0;
  padding-left:30px; }
  .bp3-running-text ul li:not(:last-child), .bp3-running-text ol li:not(:last-child), .bp3-list li:not(:last-child){
    margin-bottom:5px; }
  .bp3-running-text ul ol, .bp3-running-text ol ol, .bp3-list ol,
  .bp3-running-text ul ul,
  .bp3-running-text ol ul,
  .bp3-list ul{
    margin-top:5px; }

.bp3-list-unstyled{
  list-style:none;
  margin:0;
  padding:0; }
  .bp3-list-unstyled li{
    padding:0; }
.bp3-rtl{
  text-align:right; }

.bp3-dark{
  color:#f5f8fa; }

:focus{
  outline:rgba(19, 124, 189, 0.6) auto 2px;
  outline-offset:2px;
  -moz-outline-radius:6px; }

.bp3-focus-disabled :focus{
  outline:none !important; }
  .bp3-focus-disabled :focus ~ .bp3-control-indicator{
    outline:none !important; }

.bp3-alert{
  max-width:400px;
  padding:20px; }

.bp3-alert-body{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-alert-body .bp3-icon{
    font-size:40px;
    margin-right:20px;
    margin-top:0; }

.bp3-alert-contents{
  word-break:break-word; }

.bp3-alert-footer{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:reverse;
      -ms-flex-direction:row-reverse;
          flex-direction:row-reverse;
  margin-top:10px; }
  .bp3-alert-footer .bp3-button{
    margin-left:10px; }
.bp3-breadcrumbs{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  cursor:default;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:wrap;
      flex-wrap:wrap;
  height:30px;
  list-style:none;
  margin:0;
  padding:0; }
  .bp3-breadcrumbs > li{
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }
    .bp3-breadcrumbs > li::after{
      background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.71 7.29l-4-4a1.003 1.003 0 00-1.42 1.42L8.59 8 5.3 11.29c-.19.18-.3.43-.3.71a1.003 1.003 0 001.71.71l4-4c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71z' fill='%235C7080'/%3e%3c/svg%3e");
      content:"";
      display:block;
      height:16px;
      margin:0 5px;
      width:16px; }
    .bp3-breadcrumbs > li:last-of-type::after{
      display:none; }

.bp3-breadcrumb,
.bp3-breadcrumb-current,
.bp3-breadcrumbs-collapsed{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  font-size:16px; }

.bp3-breadcrumb,
.bp3-breadcrumbs-collapsed{
  color:#5c7080; }

.bp3-breadcrumb:hover{
  text-decoration:none; }

.bp3-breadcrumb.bp3-disabled{
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-breadcrumb .bp3-icon{
  margin-right:5px; }

.bp3-breadcrumb-current{
  color:inherit;
  font-weight:600; }
  .bp3-breadcrumb-current .bp3-input{
    font-size:inherit;
    font-weight:inherit;
    vertical-align:baseline; }

.bp3-breadcrumbs-collapsed{
  background:#ced9e0;
  border:none;
  border-radius:3px;
  cursor:pointer;
  margin-right:2px;
  padding:1px 5px;
  vertical-align:text-bottom; }
  .bp3-breadcrumbs-collapsed::before{
    background:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cg fill='%235C7080'%3e%3ccircle cx='2' cy='8.03' r='2'/%3e%3ccircle cx='14' cy='8.03' r='2'/%3e%3ccircle cx='8' cy='8.03' r='2'/%3e%3c/g%3e%3c/svg%3e") center no-repeat;
    content:"";
    display:block;
    height:16px;
    width:16px; }
  .bp3-breadcrumbs-collapsed:hover{
    background:#bfccd6;
    color:#182026;
    text-decoration:none; }

.bp3-dark .bp3-breadcrumb,
.bp3-dark .bp3-breadcrumbs-collapsed{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumbs > li::after{
  color:#a7b6c2; }

.bp3-dark .bp3-breadcrumb.bp3-disabled{
  color:rgba(167, 182, 194, 0.6); }

.bp3-dark .bp3-breadcrumb-current{
  color:#f5f8fa; }

.bp3-dark .bp3-breadcrumbs-collapsed{
  background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-breadcrumbs-collapsed:hover{
    background:rgba(16, 22, 26, 0.6);
    color:#f5f8fa; }
.bp3-button{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  font-size:14px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  padding:5px 10px;
  text-align:left;
  vertical-align:middle;
  min-height:30px;
  min-width:30px; }
  .bp3-button > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-button > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-button::before,
  .bp3-button > *{
    margin-right:7px; }
  .bp3-button:empty::before,
  .bp3-button > :last-child{
    margin-right:0; }
  .bp3-button:empty{
    padding:0 !important; }
  .bp3-button:disabled, .bp3-button.bp3-disabled{
    cursor:not-allowed; }
  .bp3-button.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button.bp3-align-right,
  .bp3-align-right .bp3-button{
    text-align:right; }
  .bp3-button.bp3-align-left,
  .bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-button:not([class*="bp3-intent-"]){
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    color:#182026; }
    .bp3-button:not([class*="bp3-intent-"]):hover{
      background-clip:padding-box;
      background-color:#ebf1f5;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
    .bp3-button:not([class*="bp3-intent-"]):active, .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      background-color:#d8e1e8;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      outline:none; }
      .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active:hover, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active, .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-button.bp3-intent-primary{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover, .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-primary:hover{
      background-color:#106ba3;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-primary:active, .bp3-button.bp3-intent-primary.bp3-active{
      background-color:#0e5a8a;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-primary:disabled, .bp3-button.bp3-intent-primary.bp3-disabled{
      background-color:rgba(19, 124, 189, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-success{
    background-color:#0f9960;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-success:hover, .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-success:hover{
      background-color:#0d8050;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-success:active, .bp3-button.bp3-intent-success.bp3-active{
      background-color:#0a6640;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-success:disabled, .bp3-button.bp3-intent-success.bp3-disabled{
      background-color:rgba(15, 153, 96, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-warning{
    background-color:#d9822b;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover, .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-warning:hover{
      background-color:#bf7326;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-warning:active, .bp3-button.bp3-intent-warning.bp3-active{
      background-color:#a66321;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-warning:disabled, .bp3-button.bp3-intent-warning.bp3-disabled{
      background-color:rgba(217, 130, 43, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button.bp3-intent-danger{
    background-color:#db3737;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover, .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      color:#ffffff; }
    .bp3-button.bp3-intent-danger:hover{
      background-color:#c23030;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-danger:active, .bp3-button.bp3-intent-danger.bp3-active{
      background-color:#a82a2a;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-button.bp3-intent-danger:disabled, .bp3-button.bp3-intent-danger.bp3-disabled{
      background-color:rgba(219, 55, 55, 0.5);
      background-image:none;
      border-color:transparent;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.6); }
  .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
    stroke:#ffffff; }
  .bp3-button.bp3-large,
  .bp3-large .bp3-button{
    min-height:40px;
    min-width:40px;
    font-size:16px;
    padding:5px 15px; }
    .bp3-button.bp3-large::before,
    .bp3-button.bp3-large > *,
    .bp3-large .bp3-button::before,
    .bp3-large .bp3-button > *{
      margin-right:10px; }
    .bp3-button.bp3-large:empty::before,
    .bp3-button.bp3-large > :last-child,
    .bp3-large .bp3-button:empty::before,
    .bp3-large .bp3-button > :last-child{
      margin-right:0; }
  .bp3-button.bp3-small,
  .bp3-small .bp3-button{
    min-height:24px;
    min-width:24px;
    padding:0 7px; }
  .bp3-button.bp3-loading{
    position:relative; }
    .bp3-button.bp3-loading[class*="bp3-icon-"]::before{
      visibility:hidden; }
    .bp3-button.bp3-loading .bp3-button-spinner{
      margin:0;
      position:absolute; }
    .bp3-button.bp3-loading > :not(.bp3-button-spinner){
      visibility:hidden; }
  .bp3-button[class*="bp3-icon-"]::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    color:#5c7080; }
  .bp3-button .bp3-icon, .bp3-button .bp3-icon-standard, .bp3-button .bp3-icon-large{
    color:#5c7080; }
    .bp3-button .bp3-icon.bp3-align-right, .bp3-button .bp3-icon-standard.bp3-align-right, .bp3-button .bp3-icon-large.bp3-align-right{
      margin-left:7px; }
  .bp3-button .bp3-icon:first-child:last-child,
  .bp3-button .bp3-spinner + .bp3-icon:last-child{
    margin:0 -7px; }
  .bp3-dark .bp3-button:not([class*="bp3-intent-"]){
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover, .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):hover{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-active{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled{
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-button:not([class*="bp3-intent-"]):disabled.bp3-active, .bp3-dark .bp3-button:not([class*="bp3-intent-"]).bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"])[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
    .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-button:not([class*="bp3-intent-"]) .bp3-icon-large{
      color:#a7b6c2; }
  .bp3-dark .bp3-button[class*="bp3-intent-"]{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:hover{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:active, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-active{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-button[class*="bp3-intent-"]:disabled, .bp3-dark .bp3-button[class*="bp3-intent-"].bp3-disabled{
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(255, 255, 255, 0.3); }
    .bp3-dark .bp3-button[class*="bp3-intent-"] .bp3-button-spinner .bp3-spinner-head{
      stroke:#8a9ba8; }
  .bp3-button:disabled::before,
  .bp3-button:disabled .bp3-icon, .bp3-button:disabled .bp3-icon-standard, .bp3-button:disabled .bp3-icon-large, .bp3-button.bp3-disabled::before,
  .bp3-button.bp3-disabled .bp3-icon, .bp3-button.bp3-disabled .bp3-icon-standard, .bp3-button.bp3-disabled .bp3-icon-large, .bp3-button[class*="bp3-intent-"]::before,
  .bp3-button[class*="bp3-intent-"] .bp3-icon, .bp3-button[class*="bp3-intent-"] .bp3-icon-standard, .bp3-button[class*="bp3-intent-"] .bp3-icon-large{
    color:inherit !important; }
  .bp3-button.bp3-minimal{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-button.bp3-minimal:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button.bp3-minimal:active, .bp3-button.bp3-minimal.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button.bp3-minimal:disabled, .bp3-button.bp3-minimal:disabled:hover, .bp3-button.bp3-minimal.bp3-disabled, .bp3-button.bp3-minimal.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-minimal{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-minimal:hover, .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button.bp3-minimal:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-minimal:active, .bp3-dark .bp3-button.bp3-minimal.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-minimal:disabled, .bp3-dark .bp3-button.bp3-minimal:disabled:hover, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button.bp3-minimal:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover, .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover, .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover, .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-minimal.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover, .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-minimal.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-minimal.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button.bp3-outlined{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    border:1px solid rgba(24, 32, 38, 0.2);
    -webkit-box-sizing:border-box;
            box-sizing:border-box; }
    .bp3-button.bp3-outlined:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button.bp3-outlined:active, .bp3-button.bp3-outlined.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button.bp3-outlined{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button.bp3-outlined:hover, .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button.bp3-outlined:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button.bp3-outlined:active, .bp3-dark .bp3-button.bp3-outlined.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button.bp3-outlined:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined:disabled:hover.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:hover, .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-success{
      color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:hover, .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:hover, .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button.bp3-outlined.bp3-intent-danger{
      color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:hover, .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button.bp3-outlined.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
    .bp3-button.bp3-outlined:disabled, .bp3-button.bp3-outlined.bp3-disabled, .bp3-button.bp3-outlined:disabled:hover, .bp3-button.bp3-outlined.bp3-disabled:hover{
      border-color:rgba(92, 112, 128, 0.1); }
    .bp3-dark .bp3-button.bp3-outlined{
      border-color:rgba(255, 255, 255, 0.4); }
      .bp3-dark .bp3-button.bp3-outlined:disabled, .bp3-dark .bp3-button.bp3-outlined:disabled:hover, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-disabled:hover{
        border-color:rgba(255, 255, 255, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-primary{
      border-color:rgba(16, 107, 163, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
        border-color:rgba(16, 107, 163, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary{
        border-color:rgba(72, 175, 240, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-primary.bp3-disabled{
          border-color:rgba(72, 175, 240, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-success{
      border-color:rgba(13, 128, 80, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
        border-color:rgba(13, 128, 80, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success{
        border-color:rgba(61, 204, 145, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-success.bp3-disabled{
          border-color:rgba(61, 204, 145, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-warning{
      border-color:rgba(191, 115, 38, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
        border-color:rgba(191, 115, 38, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning{
        border-color:rgba(255, 179, 102, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-warning.bp3-disabled{
          border-color:rgba(255, 179, 102, 0.2); }
    .bp3-button.bp3-outlined.bp3-intent-danger{
      border-color:rgba(194, 48, 48, 0.6); }
      .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
        border-color:rgba(194, 48, 48, 0.2); }
      .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger{
        border-color:rgba(255, 115, 115, 0.6); }
        .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger:disabled, .bp3-dark .bp3-button.bp3-outlined.bp3-intent-danger.bp3-disabled{
          border-color:rgba(255, 115, 115, 0.2); }

a.bp3-button{
  text-align:center;
  text-decoration:none;
  -webkit-transition:none;
  transition:none; }
  a.bp3-button, a.bp3-button:hover, a.bp3-button:active{
    color:#182026; }
  a.bp3-button.bp3-disabled{
    color:rgba(92, 112, 128, 0.6); }

.bp3-button-text{
  -webkit-box-flex:0;
      -ms-flex:0 1 auto;
          flex:0 1 auto; }

.bp3-button.bp3-align-left .bp3-button-text, .bp3-button.bp3-align-right .bp3-button-text,
.bp3-button-group.bp3-align-left .bp3-button-text,
.bp3-button-group.bp3-align-right .bp3-button-text{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto; }
.bp3-button-group{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex; }
  .bp3-button-group .bp3-button{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    position:relative;
    z-index:4; }
    .bp3-button-group .bp3-button:focus{
      z-index:5; }
    .bp3-button-group .bp3-button:hover{
      z-index:6; }
    .bp3-button-group .bp3-button:active, .bp3-button-group .bp3-button.bp3-active{
      z-index:7; }
    .bp3-button-group .bp3-button:disabled, .bp3-button-group .bp3-button.bp3-disabled{
      z-index:3; }
    .bp3-button-group .bp3-button[class*="bp3-intent-"]{
      z-index:9; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:focus{
        z-index:10; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:hover{
        z-index:11; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:active, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-active{
        z-index:12; }
      .bp3-button-group .bp3-button[class*="bp3-intent-"]:disabled, .bp3-button-group .bp3-button[class*="bp3-intent-"].bp3-disabled{
        z-index:8; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:first-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:first-child){
    border-bottom-left-radius:0;
    border-top-left-radius:0; }
  .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    border-bottom-right-radius:0;
    border-top-right-radius:0;
    margin-right:-1px; }
  .bp3-button-group.bp3-minimal .bp3-button{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-button-group.bp3-minimal .bp3-button:hover{
      background:rgba(167, 182, 194, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026;
      text-decoration:none; }
    .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
      background:rgba(115, 134, 148, 0.3);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#182026; }
    .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
      background:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed; }
      .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
        background:rgba(115, 134, 148, 0.3); }
    .bp3-dark .bp3-button-group.bp3-minimal .bp3-button{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:inherit; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:hover{
        background:rgba(138, 155, 168, 0.15); }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-active{
        background:rgba(138, 155, 168, 0.3);
        color:#f5f8fa; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover{
        background:none;
        color:rgba(167, 182, 194, 0.6);
        cursor:not-allowed; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button:disabled:hover.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-disabled:hover.bp3-active{
          background:rgba(138, 155, 168, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
      color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.15);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#106ba3; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(16, 107, 163, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
        stroke:#106ba3; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary{
        color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:hover{
          background:rgba(19, 124, 189, 0.2);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-active{
          background:rgba(19, 124, 189, 0.3);
          color:#48aff0; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled{
          background:none;
          color:rgba(72, 175, 240, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-primary.bp3-disabled.bp3-active{
            background:rgba(19, 124, 189, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
      color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.15);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#0d8050; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(13, 128, 80, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
        stroke:#0d8050; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success{
        color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:hover{
          background:rgba(15, 153, 96, 0.2);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-active{
          background:rgba(15, 153, 96, 0.3);
          color:#3dcc91; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled{
          background:none;
          color:rgba(61, 204, 145, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-success.bp3-disabled.bp3-active{
            background:rgba(15, 153, 96, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
      color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.15);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#bf7326; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(191, 115, 38, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
        stroke:#bf7326; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning{
        color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:hover{
          background:rgba(217, 130, 43, 0.2);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-active{
          background:rgba(217, 130, 43, 0.3);
          color:#ffb366; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled{
          background:none;
          color:rgba(255, 179, 102, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-warning.bp3-disabled.bp3-active{
            background:rgba(217, 130, 43, 0.3); }
    .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
      color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.15);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#c23030; }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(194, 48, 48, 0.5); }
        .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }
      .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
        stroke:#c23030; }
      .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger{
        color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:hover{
          background:rgba(219, 55, 55, 0.2);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-active{
          background:rgba(219, 55, 55, 0.3);
          color:#ff7373; }
        .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled{
          background:none;
          color:rgba(255, 115, 115, 0.5); }
          .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-button-group.bp3-minimal .bp3-button.bp3-intent-danger.bp3-disabled.bp3-active{
            background:rgba(219, 55, 55, 0.3); }
  .bp3-button-group .bp3-popover-wrapper,
  .bp3-button-group .bp3-popover-target{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-button-group .bp3-button.bp3-fill,
  .bp3-button-group.bp3-fill .bp3-button:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-button-group.bp3-vertical{
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column;
    vertical-align:top; }
    .bp3-button-group.bp3-vertical.bp3-fill{
      height:100%;
      width:unset; }
    .bp3-button-group.bp3-vertical .bp3-button{
      margin-right:0 !important;
      width:100%; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:first-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:first-child{
      border-radius:3px 3px 0 0; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:last-child .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:last-child{
      border-radius:0 0 3px 3px; }
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
    .bp3-button-group.bp3-vertical:not(.bp3-minimal) > .bp3-button:not(:last-child){
      margin-bottom:-1px; }
  .bp3-button-group.bp3-align-left .bp3-button{
    text-align:left; }
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group:not(.bp3-minimal) > .bp3-button:not(:last-child){
    margin-right:1px; }
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-popover-wrapper:not(:last-child) .bp3-button,
  .bp3-dark .bp3-button-group.bp3-vertical > .bp3-button:not(:last-child){
    margin-bottom:1px; }
.bp3-callout{
  font-size:14px;
  line-height:1.5;
  background-color:rgba(138, 155, 168, 0.15);
  border-radius:3px;
  padding:10px 12px 9px;
  position:relative;
  width:100%; }
  .bp3-callout[class*="bp3-icon-"]{
    padding-left:40px; }
    .bp3-callout[class*="bp3-icon-"]::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      color:#5c7080;
      left:10px;
      position:absolute;
      top:10px; }
  .bp3-callout.bp3-callout-icon{
    padding-left:40px; }
    .bp3-callout.bp3-callout-icon > .bp3-icon:first-child{
      color:#5c7080;
      left:10px;
      position:absolute;
      top:10px; }
  .bp3-callout .bp3-heading{
    line-height:20px;
    margin-bottom:5px;
    margin-top:0; }
    .bp3-callout .bp3-heading:last-child{
      margin-bottom:0; }
  .bp3-dark .bp3-callout{
    background-color:rgba(138, 155, 168, 0.2); }
    .bp3-dark .bp3-callout[class*="bp3-icon-"]::before{
      color:#a7b6c2; }
  .bp3-callout.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15); }
    .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-primary .bp3-heading{
      color:#106ba3; }
    .bp3-dark .bp3-callout.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-primary[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-primary > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-primary .bp3-heading{
        color:#48aff0; }
  .bp3-callout.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15); }
    .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-success .bp3-heading{
      color:#0d8050; }
    .bp3-dark .bp3-callout.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-success[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-success > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-success .bp3-heading{
        color:#3dcc91; }
  .bp3-callout.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15); }
    .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-warning .bp3-heading{
      color:#bf7326; }
    .bp3-dark .bp3-callout.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-warning[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-warning > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-warning .bp3-heading{
        color:#ffb366; }
  .bp3-callout.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15); }
    .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
    .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
    .bp3-callout.bp3-intent-danger .bp3-heading{
      color:#c23030; }
    .bp3-dark .bp3-callout.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25); }
      .bp3-dark .bp3-callout.bp3-intent-danger[class*="bp3-icon-"]::before,
      .bp3-dark .bp3-callout.bp3-intent-danger > .bp3-icon:first-child,
      .bp3-dark .bp3-callout.bp3-intent-danger .bp3-heading{
        color:#ff7373; }
  .bp3-running-text .bp3-callout{
    margin:20px 0; }
.bp3-card{
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
  padding:20px;
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-card.bp3-dark,
  .bp3-dark .bp3-card{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-0{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.15), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }
  .bp3-elevation-0.bp3-dark,
  .bp3-dark .bp3-elevation-0{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), 0 0 0 rgba(16, 22, 26, 0), 0 0 0 rgba(16, 22, 26, 0); }

.bp3-elevation-1{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-1.bp3-dark,
  .bp3-dark .bp3-elevation-1{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-elevation-2{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2), 0 2px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-2.bp3-dark,
  .bp3-dark .bp3-elevation-2{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.4), 0 2px 6px rgba(16, 22, 26, 0.4); }

.bp3-elevation-3{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-3.bp3-dark,
  .bp3-dark .bp3-elevation-3{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-elevation-4{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2); }
  .bp3-elevation-4.bp3-dark,
  .bp3-dark .bp3-elevation-4{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:hover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  cursor:pointer; }
  .bp3-card.bp3-interactive:hover.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:hover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }

.bp3-card.bp3-interactive:active{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  opacity:0.9;
  -webkit-transition-duration:0;
          transition-duration:0; }
  .bp3-card.bp3-interactive:active.bp3-dark,
  .bp3-dark .bp3-card.bp3-interactive:active{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-collapse{
  height:0;
  overflow-y:hidden;
  -webkit-transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:height 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-collapse .bp3-collapse-body{
    -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-collapse .bp3-collapse-body[aria-hidden="true"]{
      display:none; }

.bp3-context-menu .bp3-popover-target{
  display:block; }

.bp3-context-menu-popover-target{
  position:fixed; }

.bp3-divider{
  border-bottom:1px solid rgba(16, 22, 26, 0.15);
  border-right:1px solid rgba(16, 22, 26, 0.15);
  margin:5px; }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-dialog-container{
  opacity:1;
  -webkit-transform:scale(1);
          transform:scale(1);
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  min-height:100%;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none;
  width:100%; }
  .bp3-dialog-container.bp3-overlay-enter > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5); }
  .bp3-dialog-container.bp3-overlay-enter-active > .bp3-dialog, .bp3-dialog-container.bp3-overlay-appear-active > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-dialog-container.bp3-overlay-exit > .bp3-dialog{
    opacity:1;
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-dialog-container.bp3-overlay-exit-active > .bp3-dialog{
    opacity:0;
    -webkit-transform:scale(0.5);
            transform:scale(0.5);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-transform;
    transition-property:opacity, -webkit-transform;
    transition-property:opacity, transform;
    transition-property:opacity, transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }

.bp3-dialog{
  background:#ebf1f5;
  border-radius:6px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:30px 0;
  padding-bottom:20px;
  pointer-events:all;
  -webkit-user-select:text;
     -moz-user-select:text;
      -ms-user-select:text;
          user-select:text;
  width:500px; }
  .bp3-dialog:focus{
    outline:0; }
  .bp3-dialog.bp3-dark,
  .bp3-dark .bp3-dialog{
    background:#293742;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }

.bp3-dialog-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background:#ffffff;
  border-radius:6px 6px 0 0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  min-height:40px;
  padding-left:20px;
  padding-right:5px; }
  .bp3-dialog-header .bp3-icon-large,
  .bp3-dialog-header .bp3-icon{
    color:#5c7080;
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px; }
  .bp3-dialog-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:inherit;
    margin:0; }
    .bp3-dialog-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-dialog-header{
    background:#30404d;
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-dialog-header .bp3-icon-large,
    .bp3-dark .bp3-dialog-header .bp3-icon{
      color:#a7b6c2; }

.bp3-dialog-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  line-height:18px;
  margin:20px; }

.bp3-dialog-footer{
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  margin:0 20px; }

.bp3-dialog-footer-actions{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:end;
      -ms-flex-pack:end;
          justify-content:flex-end; }
  .bp3-dialog-footer-actions .bp3-button{
    margin-left:10px; }
.bp3-drawer{
  background:#ffffff;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0;
  padding:0; }
  .bp3-drawer:focus{
    outline:0; }
  .bp3-drawer.bp3-position-top{
    height:50%;
    left:0;
    right:0;
    top:0; }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter, .bp3-drawer.bp3-position-top.bp3-overlay-appear{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%); }
    .bp3-drawer.bp3-position-top.bp3-overlay-enter-active, .bp3-drawer.bp3-position-top.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-top.bp3-overlay-exit-active{
      -webkit-transform:translateY(-100%);
              transform:translateY(-100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-bottom{
    bottom:0;
    height:50%;
    left:0;
    right:0; }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-enter-active, .bp3-drawer.bp3-position-bottom.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer.bp3-position-bottom.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-left{
    bottom:0;
    left:0;
    top:0;
    width:50%; }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter, .bp3-drawer.bp3-position-left.bp3-overlay-appear{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%); }
    .bp3-drawer.bp3-position-left.bp3-overlay-enter-active, .bp3-drawer.bp3-position-left.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-left.bp3-overlay-exit-active{
      -webkit-transform:translateX(-100%);
              transform:translateX(-100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-position-right{
    bottom:0;
    right:0;
    top:0;
    width:50%; }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter, .bp3-drawer.bp3-position-right.bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer.bp3-position-right.bp3-overlay-enter-active, .bp3-drawer.bp3-position-right.bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer.bp3-position-right.bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right):not(.bp3-vertical){
    bottom:0;
    right:0;
    top:0;
    width:50%; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear{
      -webkit-transform:translateX(100%);
              transform:translateX(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-appear-active{
      -webkit-transform:translateX(0);
              transform:translateX(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit{
      -webkit-transform:translateX(0);
              transform:translateX(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right):not(.bp3-vertical).bp3-overlay-exit-active{
      -webkit-transform:translateX(100%);
              transform:translateX(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
  .bp3-position-right).bp3-vertical{
    bottom:0;
    height:50%;
    left:0;
    right:0; }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear{
      -webkit-transform:translateY(100%);
              transform:translateY(100%); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-enter-active, .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-appear-active{
      -webkit-transform:translateY(0);
              transform:translateY(0);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:200ms;
              transition-duration:200ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit{
      -webkit-transform:translateY(0);
              transform:translateY(0); }
    .bp3-drawer:not(.bp3-position-top):not(.bp3-position-bottom):not(.bp3-position-left):not(
    .bp3-position-right).bp3-vertical.bp3-overlay-exit-active{
      -webkit-transform:translateY(100%);
              transform:translateY(100%);
      -webkit-transition-delay:0;
              transition-delay:0;
      -webkit-transition-duration:100ms;
              transition-duration:100ms;
      -webkit-transition-property:-webkit-transform;
      transition-property:-webkit-transform;
      transition-property:transform;
      transition-property:transform, -webkit-transform;
      -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
              transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-drawer.bp3-dark,
  .bp3-dark .bp3-drawer{
    background:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }

.bp3-drawer-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border-radius:0;
  -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:0 1px 0 rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  min-height:40px;
  padding:5px;
  padding-left:20px;
  position:relative; }
  .bp3-drawer-header .bp3-icon-large,
  .bp3-drawer-header .bp3-icon{
    color:#5c7080;
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    margin-right:10px; }
  .bp3-drawer-header .bp3-heading{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:inherit;
    margin:0; }
    .bp3-drawer-header .bp3-heading:last-child{
      margin-right:20px; }
  .bp3-dark .bp3-drawer-header{
    -webkit-box-shadow:0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:0 1px 0 rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-drawer-header .bp3-icon-large,
    .bp3-dark .bp3-drawer-header .bp3-icon{
      color:#a7b6c2; }

.bp3-drawer-body{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  line-height:18px;
  overflow:auto; }

.bp3-drawer-footer{
  -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  padding:10px 20px;
  position:relative; }
  .bp3-dark .bp3-drawer-footer{
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.4); }
.bp3-editable-text{
  cursor:text;
  display:inline-block;
  max-width:100%;
  position:relative;
  vertical-align:top;
  white-space:nowrap; }
  .bp3-editable-text::before{
    bottom:-3px;
    left:-3px;
    position:absolute;
    right:-3px;
    top:-3px;
    border-radius:3px;
    content:"";
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9), box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-editable-text.bp3-editable-text-editing::before{
    background-color:#ffffff;
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#137cbd; }
  .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(19, 124, 189, 0.4); }
  .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#0f9960; }
  .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px rgba(15, 153, 96, 0.4); }
  .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#d9822b; }
  .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px rgba(217, 130, 43, 0.4); }
  .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-input,
  .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#db3737; }
  .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px rgba(219, 55, 55, 0.4); }
  .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-editable-text:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(255, 255, 255, 0.15); }
  .bp3-dark .bp3-editable-text.bp3-editable-text-editing::before{
    background-color:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-disabled::before{
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary .bp3-editable-text-content{
    color:#48aff0; }
  .bp3-dark .bp3-editable-text.bp3-intent-primary:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4);
            box-shadow:0 0 0 0 rgba(72, 175, 240, 0), 0 0 0 0 rgba(72, 175, 240, 0), inset 0 0 0 1px rgba(72, 175, 240, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-primary.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #48aff0, 0 0 0 3px rgba(72, 175, 240, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success .bp3-editable-text-content{
    color:#3dcc91; }
  .bp3-dark .bp3-editable-text.bp3-intent-success:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4);
            box-shadow:0 0 0 0 rgba(61, 204, 145, 0), 0 0 0 0 rgba(61, 204, 145, 0), inset 0 0 0 1px rgba(61, 204, 145, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-success.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #3dcc91, 0 0 0 3px rgba(61, 204, 145, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning .bp3-editable-text-content{
    color:#ffb366; }
  .bp3-dark .bp3-editable-text.bp3-intent-warning:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4);
            box-shadow:0 0 0 0 rgba(255, 179, 102, 0), 0 0 0 0 rgba(255, 179, 102, 0), inset 0 0 0 1px rgba(255, 179, 102, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-warning.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ffb366, 0 0 0 3px rgba(255, 179, 102, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger .bp3-editable-text-content{
    color:#ff7373; }
  .bp3-dark .bp3-editable-text.bp3-intent-danger:hover::before{
    -webkit-box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4);
            box-shadow:0 0 0 0 rgba(255, 115, 115, 0), 0 0 0 0 rgba(255, 115, 115, 0), inset 0 0 0 1px rgba(255, 115, 115, 0.4); }
  .bp3-dark .bp3-editable-text.bp3-intent-danger.bp3-editable-text-editing::before{
    -webkit-box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #ff7373, 0 0 0 3px rgba(255, 115, 115, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-editable-text-input,
.bp3-editable-text-content{
  color:inherit;
  display:inherit;
  font:inherit;
  letter-spacing:inherit;
  max-width:inherit;
  min-width:inherit;
  position:relative;
  resize:none;
  text-transform:inherit;
  vertical-align:top; }

.bp3-editable-text-input{
  background:none;
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0;
  white-space:pre-wrap;
  width:100%; }
  .bp3-editable-text-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-editable-text-input:focus{
    outline:none; }
  .bp3-editable-text-input::-ms-clear{
    display:none; }

.bp3-editable-text-content{
  overflow:hidden;
  padding-right:2px;
  text-overflow:ellipsis;
  white-space:pre; }
  .bp3-editable-text-editing > .bp3-editable-text-content{
    left:0;
    position:absolute;
    visibility:hidden; }
  .bp3-editable-text-placeholder > .bp3-editable-text-content{
    color:rgba(92, 112, 128, 0.6); }
    .bp3-dark .bp3-editable-text-placeholder > .bp3-editable-text-content{
      color:rgba(167, 182, 194, 0.6); }

.bp3-editable-text.bp3-multiline{
  display:block; }
  .bp3-editable-text.bp3-multiline .bp3-editable-text-content{
    overflow:auto;
    white-space:pre-wrap;
    word-wrap:break-word; }
.bp3-divider{
  border-bottom:1px solid rgba(16, 22, 26, 0.15);
  border-right:1px solid rgba(16, 22, 26, 0.15);
  margin:5px; }
  .bp3-dark .bp3-divider{
    border-color:rgba(16, 22, 26, 0.4); }
.bp3-control-group{
  -webkit-transform:translateZ(0);
          transform:translateZ(0);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:stretch;
      -ms-flex-align:stretch;
          align-items:stretch; }
  .bp3-control-group > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select,
  .bp3-control-group .bp3-input,
  .bp3-control-group .bp3-select{
    position:relative; }
  .bp3-control-group .bp3-input{
    border-radius:inherit;
    z-index:2; }
    .bp3-control-group .bp3-input:focus{
      border-radius:3px;
      z-index:14; }
    .bp3-control-group .bp3-input[class*="bp3-intent"]{
      z-index:13; }
      .bp3-control-group .bp3-input[class*="bp3-intent"]:focus{
        z-index:15; }
    .bp3-control-group .bp3-input[readonly], .bp3-control-group .bp3-input:disabled, .bp3-control-group .bp3-input.bp3-disabled{
      z-index:1; }
  .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input{
    z-index:13; }
    .bp3-control-group .bp3-input-group[class*="bp3-intent"] .bp3-input:focus{
      z-index:15; }
  .bp3-control-group .bp3-button,
  .bp3-control-group .bp3-html-select select,
  .bp3-control-group .bp3-select select{
    -webkit-transform:translateZ(0);
            transform:translateZ(0);
    border-radius:inherit;
    z-index:4; }
    .bp3-control-group .bp3-button:focus,
    .bp3-control-group .bp3-html-select select:focus,
    .bp3-control-group .bp3-select select:focus{
      z-index:5; }
    .bp3-control-group .bp3-button:hover,
    .bp3-control-group .bp3-html-select select:hover,
    .bp3-control-group .bp3-select select:hover{
      z-index:6; }
    .bp3-control-group .bp3-button:active,
    .bp3-control-group .bp3-html-select select:active,
    .bp3-control-group .bp3-select select:active{
      z-index:7; }
    .bp3-control-group .bp3-button[readonly], .bp3-control-group .bp3-button:disabled, .bp3-control-group .bp3-button.bp3-disabled,
    .bp3-control-group .bp3-html-select select[readonly],
    .bp3-control-group .bp3-html-select select:disabled,
    .bp3-control-group .bp3-html-select select.bp3-disabled,
    .bp3-control-group .bp3-select select[readonly],
    .bp3-control-group .bp3-select select:disabled,
    .bp3-control-group .bp3-select select.bp3-disabled{
      z-index:3; }
    .bp3-control-group .bp3-button[class*="bp3-intent"],
    .bp3-control-group .bp3-html-select select[class*="bp3-intent"],
    .bp3-control-group .bp3-select select[class*="bp3-intent"]{
      z-index:9; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:focus,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:focus{
        z-index:10; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:hover,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:hover{
        z-index:11; }
      .bp3-control-group .bp3-button[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:active,
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:active{
        z-index:12; }
      .bp3-control-group .bp3-button[class*="bp3-intent"][readonly], .bp3-control-group .bp3-button[class*="bp3-intent"]:disabled, .bp3-control-group .bp3-button[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-html-select select[class*="bp3-intent"].bp3-disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"][readonly],
      .bp3-control-group .bp3-select select[class*="bp3-intent"]:disabled,
      .bp3-control-group .bp3-select select[class*="bp3-intent"].bp3-disabled{
        z-index:8; }
  .bp3-control-group .bp3-input-group > .bp3-icon,
  .bp3-control-group .bp3-input-group > .bp3-button,
  .bp3-control-group .bp3-input-group > .bp3-input-action{
    z-index:16; }
  .bp3-control-group .bp3-select::after,
  .bp3-control-group .bp3-html-select::after,
  .bp3-control-group .bp3-select > .bp3-icon,
  .bp3-control-group .bp3-html-select > .bp3-icon{
    z-index:17; }
  .bp3-control-group .bp3-select:focus-within{
    z-index:5; }
  .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
    margin-right:-1px; }
  .bp3-control-group:not(.bp3-vertical) > .bp3-divider:not(:first-child){
    margin-left:6px; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > *:not(.bp3-divider){
    margin-right:0; }
  .bp3-dark .bp3-control-group:not(.bp3-vertical) > .bp3-button + .bp3-button{
    margin-left:1px; }
  .bp3-control-group .bp3-popover-wrapper,
  .bp3-control-group .bp3-popover-target{
    border-radius:inherit; }
  .bp3-control-group > :first-child{
    border-radius:3px 0 0 3px; }
  .bp3-control-group > :last-child{
    border-radius:0 3px 3px 0;
    margin-right:0; }
  .bp3-control-group > :only-child{
    border-radius:3px;
    margin-right:0; }
  .bp3-control-group .bp3-input-group .bp3-button{
    border-radius:3px; }
  .bp3-control-group .bp3-numeric-input:not(:first-child) .bp3-input-group{
    border-bottom-left-radius:0;
    border-top-left-radius:0; }
  .bp3-control-group.bp3-fill{
    width:100%; }
  .bp3-control-group > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-fill > *:not(.bp3-fixed){
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto; }
  .bp3-control-group.bp3-vertical{
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-control-group.bp3-vertical > *{
      margin-top:-1px; }
    .bp3-control-group.bp3-vertical > :first-child{
      border-radius:3px 3px 0 0;
      margin-top:0; }
    .bp3-control-group.bp3-vertical > :last-child{
      border-radius:0 0 3px 3px; }
.bp3-control{
  cursor:pointer;
  display:block;
  margin-bottom:10px;
  position:relative;
  text-transform:none; }
  .bp3-control input:checked ~ .bp3-control-indicator{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
  .bp3-control:hover input:checked ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
  .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    background:#0e5a8a;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-control input:checked ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control:hover input:checked ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control input:not(:disabled):active:checked ~ .bp3-control-indicator{
    background-color:#0e5a8a;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-control input:disabled:checked ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-control:not(.bp3-align-right){
    padding-left:26px; }
    .bp3-control:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-26px; }
  .bp3-control.bp3-align-right{
    padding-right:26px; }
    .bp3-control.bp3-align-right .bp3-control-indicator{
      margin-right:-26px; }
  .bp3-control.bp3-disabled{
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-control.bp3-inline{
    display:inline-block;
    margin-right:20px; }
  .bp3-control input{
    left:0;
    opacity:0;
    position:absolute;
    top:0;
    z-index:-1; }
  .bp3-control .bp3-control-indicator{
    background-clip:padding-box;
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    border:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    cursor:pointer;
    display:inline-block;
    font-size:16px;
    height:1em;
    margin-right:10px;
    margin-top:-3px;
    position:relative;
    -webkit-user-select:none;
       -moz-user-select:none;
        -ms-user-select:none;
            user-select:none;
    vertical-align:middle;
    width:1em; }
    .bp3-control .bp3-control-indicator::before{
      content:"";
      display:block;
      height:1em;
      width:1em; }
  .bp3-control:hover .bp3-control-indicator{
    background-color:#ebf1f5; }
  .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
    background:#d8e1e8;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    cursor:not-allowed; }
  .bp3-control input:focus ~ .bp3-control-indicator{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:2px;
    -moz-outline-radius:6px; }
  .bp3-control.bp3-align-right .bp3-control-indicator{
    float:right;
    margin-left:10px;
    margin-top:1px; }
  .bp3-control.bp3-large{
    font-size:16px; }
    .bp3-control.bp3-large:not(.bp3-align-right){
      padding-left:30px; }
      .bp3-control.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
        margin-left:-30px; }
    .bp3-control.bp3-large.bp3-align-right{
      padding-right:30px; }
      .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
        margin-right:-30px; }
    .bp3-control.bp3-large .bp3-control-indicator{
      font-size:20px; }
    .bp3-control.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-top:0; }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    background-color:#137cbd;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.1)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
    color:#ffffff; }
  .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 -1px 0 rgba(16, 22, 26, 0.2); }
  .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    background:#0e5a8a;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-dark .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox:hover input:indeterminate ~ .bp3-control-indicator{
    background-color:#106ba3;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-checkbox input:not(:disabled):active:indeterminate ~ .bp3-control-indicator{
    background-color:#0e5a8a;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-control.bp3-checkbox .bp3-control-indicator{
    border-radius:3px; }
  .bp3-control.bp3-checkbox input:checked ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-checkbox input:indeterminate ~ .bp3-control-indicator::before{
    background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z' fill='white'/%3e%3c/svg%3e"); }
  .bp3-control.bp3-radio .bp3-control-indicator{
    border-radius:50%; }
  .bp3-control.bp3-radio input:checked ~ .bp3-control-indicator::before{
    background-image:radial-gradient(#ffffff, #ffffff 28%, transparent 32%); }
  .bp3-control.bp3-radio input:checked:disabled ~ .bp3-control-indicator::before{
    opacity:0.5; }
  .bp3-control.bp3-radio input:focus ~ .bp3-control-indicator{
    -moz-outline-radius:16px; }
  .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(167, 182, 194, 0.5); }
  .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(115, 134, 148, 0.5); }
  .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(92, 112, 128, 0.5); }
  .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(206, 217, 224, 0.5); }
    .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(19, 124, 189, 0.5); }
    .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(255, 255, 255, 0.8); }
  .bp3-control.bp3-switch:not(.bp3-align-right){
    padding-left:38px; }
    .bp3-control.bp3-switch:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-38px; }
  .bp3-control.bp3-switch.bp3-align-right{
    padding-right:38px; }
    .bp3-control.bp3-switch.bp3-align-right .bp3-control-indicator{
      margin-right:-38px; }
  .bp3-control.bp3-switch .bp3-control-indicator{
    border:none;
    border-radius:1.75em;
    -webkit-box-shadow:none !important;
            box-shadow:none !important;
    min-width:1.75em;
    -webkit-transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:background-color 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
    width:auto; }
    .bp3-control.bp3-switch .bp3-control-indicator::before{
      background:#ffffff;
      border-radius:50%;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
      height:calc(1em - 4px);
      left:0;
      margin:2px;
      position:absolute;
      -webkit-transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      transition:left 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
      width:calc(1em - 4px); }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    left:calc(100% - 1em); }
  .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right){
    padding-left:45px; }
    .bp3-control.bp3-switch.bp3-large:not(.bp3-align-right) .bp3-control-indicator{
      margin-left:-45px; }
  .bp3-control.bp3-switch.bp3-large.bp3-align-right{
    padding-right:45px; }
    .bp3-control.bp3-switch.bp3-large.bp3-align-right .bp3-control-indicator{
      margin-right:-45px; }
  .bp3-dark .bp3-control.bp3-switch input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-control.bp3-switch:hover input ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.7); }
  .bp3-dark .bp3-control.bp3-switch input:not(:disabled):active ~ .bp3-control-indicator{
    background:rgba(16, 22, 26, 0.9); }
  .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator{
    background:rgba(57, 75, 89, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator{
    background:#137cbd; }
  .bp3-dark .bp3-control.bp3-switch:hover input:checked ~ .bp3-control-indicator{
    background:#106ba3; }
  .bp3-dark .bp3-control.bp3-switch input:checked:not(:disabled):active ~ .bp3-control-indicator{
    background:#0e5a8a; }
  .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator{
    background:rgba(14, 90, 138, 0.5); }
    .bp3-dark .bp3-control.bp3-switch input:checked:disabled ~ .bp3-control-indicator::before{
      background:rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch .bp3-control-indicator::before{
    background:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator::before{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-control.bp3-switch .bp3-switch-inner-text{
    font-size:0.7em;
    text-align:center; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:first-child{
    line-height:0;
    margin-left:0.5em;
    margin-right:1.2em;
    visibility:hidden; }
  .bp3-control.bp3-switch .bp3-control-indicator-child:last-child{
    line-height:1em;
    margin-left:1.2em;
    margin-right:0.5em;
    visibility:visible; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:first-child{
    line-height:1em;
    visibility:visible; }
  .bp3-control.bp3-switch input:checked ~ .bp3-control-indicator .bp3-control-indicator-child:last-child{
    line-height:0;
    visibility:hidden; }
  .bp3-dark .bp3-control{
    color:#f5f8fa; }
    .bp3-dark .bp3-control.bp3-disabled{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-control .bp3-control-indicator{
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-control:hover .bp3-control-indicator{
      background-color:#30404d; }
    .bp3-dark .bp3-control input:not(:disabled):active ~ .bp3-control-indicator{
      background:#202b33;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-control input:disabled ~ .bp3-control-indicator{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      cursor:not-allowed; }
    .bp3-dark .bp3-control.bp3-checkbox input:disabled:checked ~ .bp3-control-indicator, .bp3-dark .bp3-control.bp3-checkbox input:disabled:indeterminate ~ .bp3-control-indicator{
      color:rgba(167, 182, 194, 0.6); }
.bp3-file-input{
  cursor:pointer;
  display:inline-block;
  height:30px;
  position:relative; }
  .bp3-file-input input{
    margin:0;
    min-width:200px;
    opacity:0; }
    .bp3-file-input input:disabled + .bp3-file-upload-input,
    .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
      background:rgba(206, 217, 224, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      resize:none; }
      .bp3-file-input input:disabled + .bp3-file-upload-input::after,
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
        background-color:rgba(206, 217, 224, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(92, 112, 128, 0.6);
        cursor:not-allowed;
        outline:none; }
        .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active:hover,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active,
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active:hover{
          background:rgba(206, 217, 224, 0.7); }
      .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input, .bp3-dark
      .bp3-file-input input.bp3-disabled + .bp3-file-upload-input{
        background:rgba(57, 75, 89, 0.5);
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after, .bp3-dark
        .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after{
          background-color:rgba(57, 75, 89, 0.5);
          background-image:none;
          -webkit-box-shadow:none;
                  box-shadow:none;
          color:rgba(167, 182, 194, 0.6); }
          .bp3-dark .bp3-file-input input:disabled + .bp3-file-upload-input::after.bp3-active, .bp3-dark
          .bp3-file-input input.bp3-disabled + .bp3-file-upload-input::after.bp3-active{
            background:rgba(57, 75, 89, 0.7); }
  .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#182026; }
  .bp3-dark .bp3-file-input.bp3-file-input-has-selection .bp3-file-upload-input{
    color:#f5f8fa; }
  .bp3-file-input.bp3-fill{
    width:100%; }
  .bp3-file-input.bp3-large,
  .bp3-large .bp3-file-input{
    height:40px; }
  .bp3-file-input .bp3-file-upload-input-custom-text::after{
    content:attr(bp3-button-text); }

.bp3-file-upload-input{
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  background:#ffffff;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#182026;
  font-size:14px;
  font-weight:400;
  height:30px;
  line-height:30px;
  outline:none;
  padding:0 10px;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  vertical-align:middle;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  color:rgba(92, 112, 128, 0.6);
  left:0;
  padding-right:80px;
  position:absolute;
  right:0;
  top:0;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-file-upload-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-file-upload-input:focus, .bp3-file-upload-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-file-upload-input[type="search"], .bp3-file-upload-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-file-upload-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-file-upload-input:disabled, .bp3-file-upload-input.bp3-disabled{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    resize:none; }
  .bp3-file-upload-input::after{
    background-color:#f5f8fa;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    color:#182026;
    min-height:24px;
    min-width:24px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    border-radius:3px;
    content:"Browse";
    line-height:24px;
    margin:3px;
    position:absolute;
    right:0;
    text-align:center;
    top:0;
    width:70px; }
    .bp3-file-upload-input::after:hover{
      background-clip:padding-box;
      background-color:#ebf1f5;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
    .bp3-file-upload-input::after:active, .bp3-file-upload-input::after.bp3-active{
      background-color:#d8e1e8;
      background-image:none;
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-file-upload-input::after:disabled, .bp3-file-upload-input::after.bp3-disabled{
      background-color:rgba(206, 217, 224, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(92, 112, 128, 0.6);
      cursor:not-allowed;
      outline:none; }
      .bp3-file-upload-input::after:disabled.bp3-active, .bp3-file-upload-input::after:disabled.bp3-active:hover, .bp3-file-upload-input::after.bp3-disabled.bp3-active, .bp3-file-upload-input::after.bp3-disabled.bp3-active:hover{
        background:rgba(206, 217, 224, 0.7); }
  .bp3-file-upload-input:hover::after{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-file-upload-input:active::after{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-large .bp3-file-upload-input{
    font-size:16px;
    height:40px;
    line-height:40px;
    padding-right:95px; }
    .bp3-large .bp3-file-upload-input[type="search"], .bp3-large .bp3-file-upload-input.bp3-round{
      padding:0 15px; }
    .bp3-large .bp3-file-upload-input::after{
      min-height:30px;
      min-width:30px;
      line-height:30px;
      margin:5px;
      width:85px; }
  .bp3-dark .bp3-file-upload-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:disabled, .bp3-dark .bp3-file-upload-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-file-upload-input::after{
      background-color:#394b59;
      background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
      background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
      color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover, .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        color:#f5f8fa; }
      .bp3-dark .bp3-file-upload-input::after:hover{
        background-color:#30404d;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-file-upload-input::after:active, .bp3-dark .bp3-file-upload-input::after.bp3-active{
        background-color:#202b33;
        background-image:none;
        -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
                box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
      .bp3-dark .bp3-file-upload-input::after:disabled, .bp3-dark .bp3-file-upload-input::after.bp3-disabled{
        background-color:rgba(57, 75, 89, 0.5);
        background-image:none;
        -webkit-box-shadow:none;
                box-shadow:none;
        color:rgba(167, 182, 194, 0.6); }
        .bp3-dark .bp3-file-upload-input::after:disabled.bp3-active, .bp3-dark .bp3-file-upload-input::after.bp3-disabled.bp3-active{
          background:rgba(57, 75, 89, 0.7); }
      .bp3-dark .bp3-file-upload-input::after .bp3-button-spinner .bp3-spinner-head{
        background:rgba(16, 22, 26, 0.5);
        stroke:#8a9ba8; }
    .bp3-dark .bp3-file-upload-input:hover::after{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-file-upload-input:active::after{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
.bp3-file-upload-input::after{
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
.bp3-form-group{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin:0 0 15px; }
  .bp3-form-group label.bp3-label{
    margin-bottom:5px; }
  .bp3-form-group .bp3-control{
    margin-top:7px; }
  .bp3-form-group .bp3-form-helper-text{
    color:#5c7080;
    font-size:12px;
    margin-top:5px; }
  .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#106ba3; }
  .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#0d8050; }
  .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#bf7326; }
  .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#c23030; }
  .bp3-form-group.bp3-inline{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row; }
    .bp3-form-group.bp3-inline.bp3-large label.bp3-label{
      line-height:40px;
      margin:0 10px 0 0; }
    .bp3-form-group.bp3-inline label.bp3-label{
      line-height:30px;
      margin:0 10px 0 0; }
  .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-dark .bp3-form-group.bp3-intent-primary .bp3-form-helper-text{
    color:#48aff0; }
  .bp3-dark .bp3-form-group.bp3-intent-success .bp3-form-helper-text{
    color:#3dcc91; }
  .bp3-dark .bp3-form-group.bp3-intent-warning .bp3-form-helper-text{
    color:#ffb366; }
  .bp3-dark .bp3-form-group.bp3-intent-danger .bp3-form-helper-text{
    color:#ff7373; }
  .bp3-dark .bp3-form-group .bp3-form-helper-text{
    color:#a7b6c2; }
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-label,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-text-muted,
  .bp3-dark .bp3-form-group.bp3-disabled .bp3-form-helper-text{
    color:rgba(167, 182, 194, 0.6) !important; }
.bp3-input-group{
  display:block;
  position:relative; }
  .bp3-input-group .bp3-input{
    position:relative;
    width:100%; }
    .bp3-input-group .bp3-input:not(:first-child){
      padding-left:30px; }
    .bp3-input-group .bp3-input:not(:last-child){
      padding-right:30px; }
  .bp3-input-group .bp3-input-action,
  .bp3-input-group > .bp3-input-left-container,
  .bp3-input-group > .bp3-button,
  .bp3-input-group > .bp3-icon{
    position:absolute;
    top:0; }
    .bp3-input-group .bp3-input-action:first-child,
    .bp3-input-group > .bp3-input-left-container:first-child,
    .bp3-input-group > .bp3-button:first-child,
    .bp3-input-group > .bp3-icon:first-child{
      left:0; }
    .bp3-input-group .bp3-input-action:last-child,
    .bp3-input-group > .bp3-input-left-container:last-child,
    .bp3-input-group > .bp3-button:last-child,
    .bp3-input-group > .bp3-icon:last-child{
      right:0; }
  .bp3-input-group .bp3-button{
    min-height:24px;
    min-width:24px;
    margin:3px;
    padding:0 7px; }
    .bp3-input-group .bp3-button:empty{
      padding:0; }
  .bp3-input-group > .bp3-input-left-container,
  .bp3-input-group > .bp3-icon{
    z-index:1; }
  .bp3-input-group > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group > .bp3-icon{
    color:#5c7080; }
    .bp3-input-group > .bp3-input-left-container > .bp3-icon:empty,
    .bp3-input-group > .bp3-icon:empty{
      font-family:"Icons16", sans-serif;
      font-size:16px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased; }
  .bp3-input-group > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group > .bp3-icon,
  .bp3-input-group .bp3-input-action > .bp3-spinner{
    margin:7px; }
  .bp3-input-group .bp3-tag{
    margin:5px; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus),
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
    color:#5c7080; }
    .bp3-dark .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus), .bp3-dark
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus){
      color:#a7b6c2; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:not(:hover):not(:focus) .bp3-icon-large{
      color:#5c7080; }
  .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled,
  .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled{
    color:rgba(92, 112, 128, 0.6) !important; }
    .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-standard, .bp3-input-group .bp3-input:not(:focus) + .bp3-button.bp3-minimal:disabled .bp3-icon-large,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-standard,
    .bp3-input-group .bp3-input:not(:focus) + .bp3-input-action .bp3-button.bp3-minimal:disabled .bp3-icon-large{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-input-group.bp3-disabled{
    cursor:not-allowed; }
    .bp3-input-group.bp3-disabled .bp3-icon{
      color:rgba(92, 112, 128, 0.6); }
  .bp3-input-group.bp3-large .bp3-button{
    min-height:30px;
    min-width:30px;
    margin:5px; }
  .bp3-input-group.bp3-large > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group.bp3-large > .bp3-icon,
  .bp3-input-group.bp3-large .bp3-input-action > .bp3-spinner{
    margin:12px; }
  .bp3-input-group.bp3-large .bp3-input{
    font-size:16px;
    height:40px;
    line-height:40px; }
    .bp3-input-group.bp3-large .bp3-input[type="search"], .bp3-input-group.bp3-large .bp3-input.bp3-round{
      padding:0 15px; }
    .bp3-input-group.bp3-large .bp3-input:not(:first-child){
      padding-left:40px; }
    .bp3-input-group.bp3-large .bp3-input:not(:last-child){
      padding-right:40px; }
  .bp3-input-group.bp3-small .bp3-button{
    min-height:20px;
    min-width:20px;
    margin:2px; }
  .bp3-input-group.bp3-small .bp3-tag{
    min-height:20px;
    min-width:20px;
    margin:2px; }
  .bp3-input-group.bp3-small > .bp3-input-left-container > .bp3-icon,
  .bp3-input-group.bp3-small > .bp3-icon,
  .bp3-input-group.bp3-small .bp3-input-action > .bp3-spinner{
    margin:4px; }
  .bp3-input-group.bp3-small .bp3-input{
    font-size:12px;
    height:24px;
    line-height:24px;
    padding-left:8px;
    padding-right:8px; }
    .bp3-input-group.bp3-small .bp3-input[type="search"], .bp3-input-group.bp3-small .bp3-input.bp3-round{
      padding:0 12px; }
    .bp3-input-group.bp3-small .bp3-input:not(:first-child){
      padding-left:24px; }
    .bp3-input-group.bp3-small .bp3-input:not(:last-child){
      padding-right:24px; }
  .bp3-input-group.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-input-group.bp3-round .bp3-button,
  .bp3-input-group.bp3-round .bp3-input,
  .bp3-input-group.bp3-round .bp3-tag{
    border-radius:30px; }
  .bp3-dark .bp3-input-group .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-input-group.bp3-disabled .bp3-icon{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-input-group.bp3-intent-primary .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-primary .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input-group.bp3-intent-primary .bp3-input:disabled, .bp3-input-group.bp3-intent-primary .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-primary > .bp3-icon{
    color:#106ba3; }
    .bp3-dark .bp3-input-group.bp3-intent-primary > .bp3-icon{
      color:#48aff0; }
  .bp3-input-group.bp3-intent-success .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-success .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input-group.bp3-intent-success .bp3-input:disabled, .bp3-input-group.bp3-intent-success .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-success > .bp3-icon{
    color:#0d8050; }
    .bp3-dark .bp3-input-group.bp3-intent-success > .bp3-icon{
      color:#3dcc91; }
  .bp3-input-group.bp3-intent-warning .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-warning .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input-group.bp3-intent-warning .bp3-input:disabled, .bp3-input-group.bp3-intent-warning .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-warning > .bp3-icon{
    color:#bf7326; }
    .bp3-dark .bp3-input-group.bp3-intent-warning > .bp3-icon{
      color:#ffb366; }
  .bp3-input-group.bp3-intent-danger .bp3-input{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input-group.bp3-intent-danger .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input-group.bp3-intent-danger .bp3-input:disabled, .bp3-input-group.bp3-intent-danger .bp3-input.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-input-group.bp3-intent-danger > .bp3-icon{
    color:#c23030; }
    .bp3-dark .bp3-input-group.bp3-intent-danger > .bp3-icon{
      color:#ff7373; }
.bp3-input{
  -webkit-appearance:none;
     -moz-appearance:none;
          appearance:none;
  background:#ffffff;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
  color:#182026;
  font-size:14px;
  font-weight:400;
  height:30px;
  line-height:30px;
  outline:none;
  padding:0 10px;
  -webkit-transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);
  vertical-align:middle; }
  .bp3-input::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input:focus, .bp3-input.bp3-active{
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-input[type="search"], .bp3-input.bp3-round{
    border-radius:30px;
    -webkit-box-sizing:border-box;
            box-sizing:border-box;
    padding-left:10px; }
  .bp3-input[readonly]{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.15); }
  .bp3-input:disabled, .bp3-input.bp3-disabled{
    background:rgba(206, 217, 224, 0.5);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    resize:none; }
  .bp3-input.bp3-large{
    font-size:16px;
    height:40px;
    line-height:40px; }
    .bp3-input.bp3-large[type="search"], .bp3-input.bp3-large.bp3-round{
      padding:0 15px; }
  .bp3-input.bp3-small{
    font-size:12px;
    height:24px;
    line-height:24px;
    padding-left:8px;
    padding-right:8px; }
    .bp3-input.bp3-small[type="search"], .bp3-input.bp3-small.bp3-round{
      padding:0 12px; }
  .bp3-input.bp3-fill{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    width:100%; }
  .bp3-dark .bp3-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-input:disabled, .bp3-dark .bp3-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-input.bp3-intent-primary{
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-primary[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #137cbd;
              box-shadow:inset 0 0 0 1px #137cbd; }
    .bp3-input.bp3-intent-primary:disabled, .bp3-input.bp3-intent-primary.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px #137cbd, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary:focus{
        -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-primary[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #137cbd;
                box-shadow:inset 0 0 0 1px #137cbd; }
      .bp3-dark .bp3-input.bp3-intent-primary:disabled, .bp3-dark .bp3-input.bp3-intent-primary.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-success{
    -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success:focus{
      -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-success[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #0f9960;
              box-shadow:inset 0 0 0 1px #0f9960; }
    .bp3-input.bp3-intent-success:disabled, .bp3-input.bp3-intent-success.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-success{
      -webkit-box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), 0 0 0 0 rgba(15, 153, 96, 0), inset 0 0 0 1px #0f9960, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success:focus{
        -webkit-box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #0f9960, 0 0 0 1px #0f9960, 0 0 0 3px rgba(15, 153, 96, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-success[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #0f9960;
                box-shadow:inset 0 0 0 1px #0f9960; }
      .bp3-dark .bp3-input.bp3-intent-success:disabled, .bp3-dark .bp3-input.bp3-intent-success.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-warning{
    -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning:focus{
      -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-warning[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #d9822b;
              box-shadow:inset 0 0 0 1px #d9822b; }
    .bp3-input.bp3-intent-warning:disabled, .bp3-input.bp3-intent-warning.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), 0 0 0 0 rgba(217, 130, 43, 0), inset 0 0 0 1px #d9822b, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning:focus{
        -webkit-box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #d9822b, 0 0 0 1px #d9822b, 0 0 0 3px rgba(217, 130, 43, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-warning[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #d9822b;
                box-shadow:inset 0 0 0 1px #d9822b; }
      .bp3-dark .bp3-input.bp3-intent-warning:disabled, .bp3-dark .bp3-input.bp3-intent-warning.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input.bp3-intent-danger{
    -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger:focus{
      -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-input.bp3-intent-danger[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px #db3737;
              box-shadow:inset 0 0 0 1px #db3737; }
    .bp3-input.bp3-intent-danger:disabled, .bp3-input.bp3-intent-danger.bp3-disabled{
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-input.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), 0 0 0 0 rgba(219, 55, 55, 0), inset 0 0 0 1px #db3737, inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger:focus{
        -webkit-box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
                box-shadow:0 0 0 1px #db3737, 0 0 0 1px #db3737, 0 0 0 3px rgba(219, 55, 55, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
      .bp3-dark .bp3-input.bp3-intent-danger[readonly]{
        -webkit-box-shadow:inset 0 0 0 1px #db3737;
                box-shadow:inset 0 0 0 1px #db3737; }
      .bp3-dark .bp3-input.bp3-intent-danger:disabled, .bp3-dark .bp3-input.bp3-intent-danger.bp3-disabled{
        -webkit-box-shadow:none;
                box-shadow:none; }
  .bp3-input::-ms-clear{
    display:none; }
textarea.bp3-input{
  max-width:100%;
  padding:10px; }
  textarea.bp3-input, textarea.bp3-input.bp3-large, textarea.bp3-input.bp3-small{
    height:auto;
    line-height:inherit; }
  textarea.bp3-input.bp3-small{
    padding:8px; }
  .bp3-dark textarea.bp3-input{
    background:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark textarea.bp3-input::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input::placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark textarea.bp3-input:focus{
      -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input[readonly]{
      -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark textarea.bp3-input:disabled, .bp3-dark textarea.bp3-input.bp3-disabled{
      background:rgba(57, 75, 89, 0.5);
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
label.bp3-label{
  display:block;
  margin-bottom:15px;
  margin-top:0; }
  label.bp3-label .bp3-html-select,
  label.bp3-label .bp3-input,
  label.bp3-label .bp3-select,
  label.bp3-label .bp3-slider,
  label.bp3-label .bp3-popover-wrapper{
    display:block;
    margin-top:5px;
    text-transform:none; }
  label.bp3-label .bp3-button-group{
    margin-top:5px; }
  label.bp3-label .bp3-select select,
  label.bp3-label .bp3-html-select select{
    font-weight:400;
    vertical-align:top;
    width:100%; }
  label.bp3-label.bp3-disabled,
  label.bp3-label.bp3-disabled .bp3-text-muted{
    color:rgba(92, 112, 128, 0.6); }
  label.bp3-label.bp3-inline{
    line-height:30px; }
    label.bp3-label.bp3-inline .bp3-html-select,
    label.bp3-label.bp3-inline .bp3-input,
    label.bp3-label.bp3-inline .bp3-input-group,
    label.bp3-label.bp3-inline .bp3-select,
    label.bp3-label.bp3-inline .bp3-popover-wrapper{
      display:inline-block;
      margin:0 0 0 5px;
      vertical-align:top; }
    label.bp3-label.bp3-inline .bp3-button-group{
      margin:0 0 0 5px; }
    label.bp3-label.bp3-inline .bp3-input-group .bp3-input{
      margin-left:0; }
    label.bp3-label.bp3-inline.bp3-large{
      line-height:40px; }
  label.bp3-label:not(.bp3-inline) .bp3-popover-target{
    display:block; }
  .bp3-dark label.bp3-label{
    color:#f5f8fa; }
    .bp3-dark label.bp3-label.bp3-disabled,
    .bp3-dark label.bp3-label.bp3-disabled .bp3-text-muted{
      color:rgba(167, 182, 194, 0.6); }
.bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button{
  -webkit-box-flex:1;
      -ms-flex:1 1 14px;
          flex:1 1 14px;
  min-height:0;
  padding:0;
  width:30px; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:first-child{
    border-radius:0 3px 0 0; }
  .bp3-numeric-input .bp3-button-group.bp3-vertical > .bp3-button:last-child{
    border-radius:0 0 3px 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:first-child{
  border-radius:3px 0 0 0; }

.bp3-numeric-input .bp3-button-group.bp3-vertical:first-child > .bp3-button:last-child{
  border-radius:0 0 0 3px; }

.bp3-numeric-input.bp3-large .bp3-button-group.bp3-vertical > .bp3-button{
  width:40px; }

form{
  display:block; }
.bp3-html-select select,
.bp3-select select{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  border:none;
  border-radius:3px;
  cursor:pointer;
  font-size:14px;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  padding:5px 10px;
  text-align:left;
  vertical-align:middle;
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  color:#182026;
  -moz-appearance:none;
  -webkit-appearance:none;
  border-radius:3px;
  height:30px;
  padding:0 25px 0 10px;
  width:100%; }
  .bp3-html-select select > *, .bp3-select select > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-html-select select > .bp3-fill, .bp3-select select > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-html-select select::before,
  .bp3-select select::before, .bp3-html-select select > *, .bp3-select select > *{
    margin-right:7px; }
  .bp3-html-select select:empty::before,
  .bp3-select select:empty::before,
  .bp3-html-select select > :last-child,
  .bp3-select select > :last-child{
    margin-right:0; }
  .bp3-html-select select:hover,
  .bp3-select select:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-html-select select:active,
  .bp3-select select:active, .bp3-html-select select.bp3-active,
  .bp3-select select.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-html-select select:disabled,
  .bp3-select select:disabled, .bp3-html-select select.bp3-disabled,
  .bp3-select select.bp3-disabled{
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    outline:none; }
    .bp3-html-select select:disabled.bp3-active,
    .bp3-select select:disabled.bp3-active, .bp3-html-select select:disabled.bp3-active:hover,
    .bp3-select select:disabled.bp3-active:hover, .bp3-html-select select.bp3-disabled.bp3-active,
    .bp3-select select.bp3-disabled.bp3-active, .bp3-html-select select.bp3-disabled.bp3-active:hover,
    .bp3-select select.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }

.bp3-html-select.bp3-minimal select,
.bp3-select.bp3-minimal select{
  background:none;
  -webkit-box-shadow:none;
          box-shadow:none; }
  .bp3-html-select.bp3-minimal select:hover,
  .bp3-select.bp3-minimal select:hover{
    background:rgba(167, 182, 194, 0.3);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:#182026;
    text-decoration:none; }
  .bp3-html-select.bp3-minimal select:active,
  .bp3-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal select.bp3-active,
  .bp3-select.bp3-minimal select.bp3-active{
    background:rgba(115, 134, 148, 0.3);
    -webkit-box-shadow:none;
            box-shadow:none;
    color:#182026; }
  .bp3-html-select.bp3-minimal select:disabled,
  .bp3-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal select:disabled:hover,
  .bp3-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal select.bp3-disabled,
  .bp3-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal select.bp3-disabled:hover,
  .bp3-select.bp3-minimal select.bp3-disabled:hover{
    background:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
    .bp3-html-select.bp3-minimal select:disabled.bp3-active,
    .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active,
    .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active{
      background:rgba(115, 134, 148, 0.3); }
  .bp3-dark .bp3-html-select.bp3-minimal select, .bp3-html-select.bp3-minimal .bp3-dark select,
  .bp3-dark .bp3-select.bp3-minimal select, .bp3-select.bp3-minimal .bp3-dark select{
    background:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:inherit; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover, .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none; }
    .bp3-dark .bp3-html-select.bp3-minimal select:hover, .bp3-html-select.bp3-minimal .bp3-dark select:hover,
    .bp3-dark .bp3-select.bp3-minimal select:hover, .bp3-select.bp3-minimal .bp3-dark select:hover{
      background:rgba(138, 155, 168, 0.15); }
    .bp3-dark .bp3-html-select.bp3-minimal select:active, .bp3-html-select.bp3-minimal .bp3-dark select:active,
    .bp3-dark .bp3-select.bp3-minimal select:active, .bp3-select.bp3-minimal .bp3-dark select:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-active,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-active{
      background:rgba(138, 155, 168, 0.3);
      color:#f5f8fa; }
    .bp3-dark .bp3-html-select.bp3-minimal select:disabled, .bp3-html-select.bp3-minimal .bp3-dark select:disabled,
    .bp3-dark .bp3-select.bp3-minimal select:disabled, .bp3-select.bp3-minimal .bp3-dark select:disabled, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select:disabled:hover, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover{
      background:none;
      color:rgba(167, 182, 194, 0.6);
      cursor:not-allowed; }
      .bp3-dark .bp3-html-select.bp3-minimal select:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select:disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select:disabled:hover.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-disabled:hover.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-disabled:hover.bp3-active{
        background:rgba(138, 155, 168, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-primary,
  .bp3-select.bp3-minimal select.bp3-intent-primary{
    color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover,
    .bp3-select.bp3-minimal select.bp3-intent-primary:hover{
      background:rgba(19, 124, 189, 0.15);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:active,
    .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active{
      background:rgba(19, 124, 189, 0.3);
      color:#106ba3; }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled{
      background:none;
      color:rgba(16, 107, 163, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active{
        background:rgba(19, 124, 189, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-primary .bp3-button-spinner .bp3-spinner-head{
      stroke:#106ba3; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary{
      color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:hover{
        background:rgba(19, 124, 189, 0.2);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-active{
        background:rgba(19, 124, 189, 0.3);
        color:#48aff0; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled{
        background:none;
        color:rgba(72, 175, 240, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-primary.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-primary.bp3-disabled.bp3-active{
          background:rgba(19, 124, 189, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-success,
  .bp3-select.bp3-minimal select.bp3-intent-success{
    color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:hover,
    .bp3-select.bp3-minimal select.bp3-intent-success:hover{
      background:rgba(15, 153, 96, 0.15);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:active,
    .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active{
      background:rgba(15, 153, 96, 0.3);
      color:#0d8050; }
    .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled{
      background:none;
      color:rgba(13, 128, 80, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active{
        background:rgba(15, 153, 96, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-success .bp3-button-spinner .bp3-spinner-head{
      stroke:#0d8050; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success{
      color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:hover{
        background:rgba(15, 153, 96, 0.2);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-active{
        background:rgba(15, 153, 96, 0.3);
        color:#3dcc91; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled{
        background:none;
        color:rgba(61, 204, 145, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-success.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-success.bp3-disabled.bp3-active{
          background:rgba(15, 153, 96, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-warning,
  .bp3-select.bp3-minimal select.bp3-intent-warning{
    color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover,
    .bp3-select.bp3-minimal select.bp3-intent-warning:hover{
      background:rgba(217, 130, 43, 0.15);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:active,
    .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active{
      background:rgba(217, 130, 43, 0.3);
      color:#bf7326; }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled{
      background:none;
      color:rgba(191, 115, 38, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active{
        background:rgba(217, 130, 43, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-warning .bp3-button-spinner .bp3-spinner-head{
      stroke:#bf7326; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning{
      color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:hover{
        background:rgba(217, 130, 43, 0.2);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-active{
        background:rgba(217, 130, 43, 0.3);
        color:#ffb366; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled{
        background:none;
        color:rgba(255, 179, 102, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-warning.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-warning.bp3-disabled.bp3-active{
          background:rgba(217, 130, 43, 0.3); }
  .bp3-html-select.bp3-minimal select.bp3-intent-danger,
  .bp3-select.bp3-minimal select.bp3-intent-danger{
    color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover,
    .bp3-select.bp3-minimal select.bp3-intent-danger:hover{
      background:rgba(219, 55, 55, 0.15);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:active,
    .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active{
      background:rgba(219, 55, 55, 0.3);
      color:#c23030; }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled,
    .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled{
      background:none;
      color:rgba(194, 48, 48, 0.5); }
      .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active,
      .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active{
        background:rgba(219, 55, 55, 0.3); }
    .bp3-html-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head, .bp3-select.bp3-minimal select.bp3-intent-danger .bp3-button-spinner .bp3-spinner-head{
      stroke:#c23030; }
    .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger,
    .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger{
      color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:hover, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:hover{
        background:rgba(219, 55, 55, 0.2);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-active{
        background:rgba(219, 55, 55, 0.3);
        color:#ff7373; }
      .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled,
      .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled{
        background:none;
        color:rgba(255, 115, 115, 0.5); }
        .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger:disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger:disabled.bp3-active, .bp3-dark .bp3-html-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-html-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active,
        .bp3-dark .bp3-select.bp3-minimal select.bp3-intent-danger.bp3-disabled.bp3-active, .bp3-select.bp3-minimal .bp3-dark select.bp3-intent-danger.bp3-disabled.bp3-active{
          background:rgba(219, 55, 55, 0.3); }

.bp3-html-select.bp3-large select,
.bp3-select.bp3-large select{
  font-size:16px;
  height:40px;
  padding-right:35px; }

.bp3-dark .bp3-html-select select, .bp3-dark .bp3-select select{
  background-color:#394b59;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
  color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover, .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select select:hover, .bp3-dark .bp3-select select:hover{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-html-select select:active, .bp3-dark .bp3-select select:active, .bp3-dark .bp3-html-select select.bp3-active, .bp3-dark .bp3-select select.bp3-active{
    background-color:#202b33;
    background-image:none;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-html-select select:disabled, .bp3-dark .bp3-select select:disabled, .bp3-dark .bp3-html-select select.bp3-disabled, .bp3-dark .bp3-select select.bp3-disabled{
    background-color:rgba(57, 75, 89, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-html-select select:disabled.bp3-active, .bp3-dark .bp3-select select:disabled.bp3-active, .bp3-dark .bp3-html-select select.bp3-disabled.bp3-active, .bp3-dark .bp3-select select.bp3-disabled.bp3-active{
      background:rgba(57, 75, 89, 0.7); }
  .bp3-dark .bp3-html-select select .bp3-button-spinner .bp3-spinner-head, .bp3-dark .bp3-select select .bp3-button-spinner .bp3-spinner-head{
    background:rgba(16, 22, 26, 0.5);
    stroke:#8a9ba8; }

.bp3-html-select select:disabled,
.bp3-select select:disabled{
  background-color:rgba(206, 217, 224, 0.5);
  -webkit-box-shadow:none;
          box-shadow:none;
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-html-select .bp3-icon,
.bp3-select .bp3-icon, .bp3-select::after{
  color:#5c7080;
  pointer-events:none;
  position:absolute;
  right:7px;
  top:7px; }
  .bp3-html-select .bp3-disabled.bp3-icon,
  .bp3-select .bp3-disabled.bp3-icon, .bp3-disabled.bp3-select::after{
    color:rgba(92, 112, 128, 0.6); }
.bp3-html-select,
.bp3-select{
  display:inline-block;
  letter-spacing:normal;
  position:relative;
  vertical-align:middle; }
  .bp3-html-select select::-ms-expand,
  .bp3-select select::-ms-expand{
    display:none; }
  .bp3-html-select .bp3-icon,
  .bp3-select .bp3-icon{
    color:#5c7080; }
    .bp3-html-select .bp3-icon:hover,
    .bp3-select .bp3-icon:hover{
      color:#182026; }
    .bp3-dark .bp3-html-select .bp3-icon, .bp3-dark
    .bp3-select .bp3-icon{
      color:#a7b6c2; }
      .bp3-dark .bp3-html-select .bp3-icon:hover, .bp3-dark
      .bp3-select .bp3-icon:hover{
        color:#f5f8fa; }
  .bp3-html-select.bp3-large::after,
  .bp3-html-select.bp3-large .bp3-icon,
  .bp3-select.bp3-large::after,
  .bp3-select.bp3-large .bp3-icon{
    right:12px;
    top:12px; }
  .bp3-html-select.bp3-fill,
  .bp3-html-select.bp3-fill select,
  .bp3-select.bp3-fill,
  .bp3-select.bp3-fill select{
    width:100%; }
  .bp3-dark .bp3-html-select option, .bp3-dark
  .bp3-select option{
    background-color:#30404d;
    color:#f5f8fa; }
  .bp3-dark .bp3-html-select option:disabled, .bp3-dark
  .bp3-select option:disabled{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-html-select::after, .bp3-dark
  .bp3-select::after{
    color:#a7b6c2; }

.bp3-select::after{
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  content:""; }
.bp3-running-text table, table.bp3-html-table{
  border-spacing:0;
  font-size:14px; }
  .bp3-running-text table th, table.bp3-html-table th,
  .bp3-running-text table td,
  table.bp3-html-table td{
    padding:11px;
    text-align:left;
    vertical-align:top; }
  .bp3-running-text table th, table.bp3-html-table th{
    color:#182026;
    font-weight:600; }
  
  .bp3-running-text table td,
  table.bp3-html-table td{
    color:#182026; }
  .bp3-running-text table tbody tr:first-child th, table.bp3-html-table tbody tr:first-child th,
  .bp3-running-text table tbody tr:first-child td,
  table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  .bp3-dark .bp3-running-text table th, .bp3-running-text .bp3-dark table th, .bp3-dark table.bp3-html-table th{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table td, .bp3-running-text .bp3-dark table td, .bp3-dark table.bp3-html-table td{
    color:#f5f8fa; }
  .bp3-dark .bp3-running-text table tbody tr:first-child th, .bp3-running-text .bp3-dark table tbody tr:first-child th, .bp3-dark table.bp3-html-table tbody tr:first-child th,
  .bp3-dark .bp3-running-text table tbody tr:first-child td,
  .bp3-running-text .bp3-dark table tbody tr:first-child td,
  .bp3-dark table.bp3-html-table tbody tr:first-child td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }

table.bp3-html-table.bp3-html-table-condensed th,
table.bp3-html-table.bp3-html-table-condensed td, table.bp3-html-table.bp3-small th,
table.bp3-html-table.bp3-small td{
  padding-bottom:6px;
  padding-top:6px; }

table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
  background:rgba(191, 204, 214, 0.15); }

table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
  -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered tbody tr td{
  -webkit-box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15);
          box-shadow:inset 0 1px 0 0 rgba(16, 22, 26, 0.15); }
  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
    -webkit-box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 1px 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
  -webkit-box-shadow:none;
          box-shadow:none; }
  table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(16, 22, 26, 0.15); }

table.bp3-html-table.bp3-interactive tbody tr:hover td{
  background-color:rgba(191, 204, 214, 0.3);
  cursor:pointer; }

table.bp3-html-table.bp3-interactive tbody tr:active td{
  background-color:rgba(191, 204, 214, 0.4); }

.bp3-dark table.bp3-html-table{ }
  .bp3-dark table.bp3-html-table.bp3-html-table-striped tbody tr:nth-child(odd) td{
    background:rgba(92, 112, 128, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered th:not(:first-child){
    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td{
    -webkit-box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 0 1px 0 0 rgba(255, 255, 255, 0.15); }
    .bp3-dark table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child){
      -webkit-box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15);
              box-shadow:inset 1px 1px 0 0 rgba(255, 255, 255, 0.15); }
  .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td{
    -webkit-box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15);
            box-shadow:inset 1px 0 0 0 rgba(255, 255, 255, 0.15); }
    .bp3-dark table.bp3-html-table.bp3-html-table-bordered.bp3-html-table-striped tbody tr:not(:first-child) td:first-child{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:hover td{
    background-color:rgba(92, 112, 128, 0.3);
    cursor:pointer; }
  .bp3-dark table.bp3-html-table.bp3-interactive tbody tr:active td{
    background-color:rgba(92, 112, 128, 0.4); }

.bp3-key-combo{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center; }
  .bp3-key-combo > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-key-combo > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-key-combo::before,
  .bp3-key-combo > *{
    margin-right:5px; }
  .bp3-key-combo:empty::before,
  .bp3-key-combo > :last-child{
    margin-right:0; }

.bp3-hotkey-dialog{
  padding-bottom:0;
  top:40px; }
  .bp3-hotkey-dialog .bp3-dialog-body{
    margin:0;
    padding:0; }
  .bp3-hotkey-dialog .bp3-hotkey-label{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1; }

.bp3-hotkey-column{
  margin:auto;
  max-height:80vh;
  overflow-y:auto;
  padding:30px; }
  .bp3-hotkey-column .bp3-heading{
    margin-bottom:20px; }
    .bp3-hotkey-column .bp3-heading:not(:first-child){
      margin-top:40px; }

.bp3-hotkey{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:justify;
      -ms-flex-pack:justify;
          justify-content:space-between;
  margin-left:0;
  margin-right:0; }
  .bp3-hotkey:not(:last-child){
    margin-bottom:10px; }
.bp3-icon{
  display:inline-block;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  vertical-align:text-bottom; }
  .bp3-icon:not(:empty)::before{
    content:"" !important;
    content:unset !important; }
  .bp3-icon > svg{
    display:block; }
    .bp3-icon > svg:not([fill]){
      fill:currentColor; }

.bp3-icon.bp3-intent-primary, .bp3-icon-standard.bp3-intent-primary, .bp3-icon-large.bp3-intent-primary{
  color:#106ba3; }
  .bp3-dark .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-icon-large.bp3-intent-primary{
    color:#48aff0; }

.bp3-icon.bp3-intent-success, .bp3-icon-standard.bp3-intent-success, .bp3-icon-large.bp3-intent-success{
  color:#0d8050; }
  .bp3-dark .bp3-icon.bp3-intent-success, .bp3-dark .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-icon-large.bp3-intent-success{
    color:#3dcc91; }

.bp3-icon.bp3-intent-warning, .bp3-icon-standard.bp3-intent-warning, .bp3-icon-large.bp3-intent-warning{
  color:#bf7326; }
  .bp3-dark .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-icon-large.bp3-intent-warning{
    color:#ffb366; }

.bp3-icon.bp3-intent-danger, .bp3-icon-standard.bp3-intent-danger, .bp3-icon-large.bp3-intent-danger{
  color:#c23030; }
  .bp3-dark .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-icon-large.bp3-intent-danger{
    color:#ff7373; }

span.bp3-icon-standard{
  font-family:"Icons16", sans-serif;
  font-size:16px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon-large{
  font-family:"Icons20", sans-serif;
  font-size:20px;
  font-style:normal;
  font-weight:400;
  line-height:1;
  -moz-osx-font-smoothing:grayscale;
  -webkit-font-smoothing:antialiased;
  display:inline-block; }

span.bp3-icon:empty{
  font-family:"Icons20";
  font-size:inherit;
  font-style:normal;
  font-weight:400;
  line-height:1; }
  span.bp3-icon:empty::before{
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased; }

.bp3-icon-add::before{
  content:""; }

.bp3-icon-add-column-left::before{
  content:""; }

.bp3-icon-add-column-right::before{
  content:""; }

.bp3-icon-add-row-bottom::before{
  content:""; }

.bp3-icon-add-row-top::before{
  content:""; }

.bp3-icon-add-to-artifact::before{
  content:""; }

.bp3-icon-add-to-folder::before{
  content:""; }

.bp3-icon-airplane::before{
  content:""; }

.bp3-icon-align-center::before{
  content:""; }

.bp3-icon-align-justify::before{
  content:""; }

.bp3-icon-align-left::before{
  content:""; }

.bp3-icon-align-right::before{
  content:""; }

.bp3-icon-alignment-bottom::before{
  content:""; }

.bp3-icon-alignment-horizontal-center::before{
  content:""; }

.bp3-icon-alignment-left::before{
  content:""; }

.bp3-icon-alignment-right::before{
  content:""; }

.bp3-icon-alignment-top::before{
  content:""; }

.bp3-icon-alignment-vertical-center::before{
  content:""; }

.bp3-icon-annotation::before{
  content:""; }

.bp3-icon-application::before{
  content:""; }

.bp3-icon-applications::before{
  content:""; }

.bp3-icon-archive::before{
  content:""; }

.bp3-icon-arrow-bottom-left::before{
  content:"↙"; }

.bp3-icon-arrow-bottom-right::before{
  content:"↘"; }

.bp3-icon-arrow-down::before{
  content:"↓"; }

.bp3-icon-arrow-left::before{
  content:"←"; }

.bp3-icon-arrow-right::before{
  content:"→"; }

.bp3-icon-arrow-top-left::before{
  content:"↖"; }

.bp3-icon-arrow-top-right::before{
  content:"↗"; }

.bp3-icon-arrow-up::before{
  content:"↑"; }

.bp3-icon-arrows-horizontal::before{
  content:"↔"; }

.bp3-icon-arrows-vertical::before{
  content:"↕"; }

.bp3-icon-asterisk::before{
  content:"*"; }

.bp3-icon-automatic-updates::before{
  content:""; }

.bp3-icon-badge::before{
  content:""; }

.bp3-icon-ban-circle::before{
  content:""; }

.bp3-icon-bank-account::before{
  content:""; }

.bp3-icon-barcode::before{
  content:""; }

.bp3-icon-blank::before{
  content:""; }

.bp3-icon-blocked-person::before{
  content:""; }

.bp3-icon-bold::before{
  content:""; }

.bp3-icon-book::before{
  content:""; }

.bp3-icon-bookmark::before{
  content:""; }

.bp3-icon-box::before{
  content:""; }

.bp3-icon-briefcase::before{
  content:""; }

.bp3-icon-bring-data::before{
  content:""; }

.bp3-icon-build::before{
  content:""; }

.bp3-icon-calculator::before{
  content:""; }

.bp3-icon-calendar::before{
  content:""; }

.bp3-icon-camera::before{
  content:""; }

.bp3-icon-caret-down::before{
  content:"⌄"; }

.bp3-icon-caret-left::before{
  content:"〈"; }

.bp3-icon-caret-right::before{
  content:"〉"; }

.bp3-icon-caret-up::before{
  content:"⌃"; }

.bp3-icon-cell-tower::before{
  content:""; }

.bp3-icon-changes::before{
  content:""; }

.bp3-icon-chart::before{
  content:""; }

.bp3-icon-chat::before{
  content:""; }

.bp3-icon-chevron-backward::before{
  content:""; }

.bp3-icon-chevron-down::before{
  content:""; }

.bp3-icon-chevron-forward::before{
  content:""; }

.bp3-icon-chevron-left::before{
  content:""; }

.bp3-icon-chevron-right::before{
  content:""; }

.bp3-icon-chevron-up::before{
  content:""; }

.bp3-icon-circle::before{
  content:""; }

.bp3-icon-circle-arrow-down::before{
  content:""; }

.bp3-icon-circle-arrow-left::before{
  content:""; }

.bp3-icon-circle-arrow-right::before{
  content:""; }

.bp3-icon-circle-arrow-up::before{
  content:""; }

.bp3-icon-citation::before{
  content:""; }

.bp3-icon-clean::before{
  content:""; }

.bp3-icon-clipboard::before{
  content:""; }

.bp3-icon-cloud::before{
  content:"☁"; }

.bp3-icon-cloud-download::before{
  content:""; }

.bp3-icon-cloud-upload::before{
  content:""; }

.bp3-icon-code::before{
  content:""; }

.bp3-icon-code-block::before{
  content:""; }

.bp3-icon-cog::before{
  content:""; }

.bp3-icon-collapse-all::before{
  content:""; }

.bp3-icon-column-layout::before{
  content:""; }

.bp3-icon-comment::before{
  content:""; }

.bp3-icon-comparison::before{
  content:""; }

.bp3-icon-compass::before{
  content:""; }

.bp3-icon-compressed::before{
  content:""; }

.bp3-icon-confirm::before{
  content:""; }

.bp3-icon-console::before{
  content:""; }

.bp3-icon-contrast::before{
  content:""; }

.bp3-icon-control::before{
  content:""; }

.bp3-icon-credit-card::before{
  content:""; }

.bp3-icon-cross::before{
  content:"✗"; }

.bp3-icon-crown::before{
  content:""; }

.bp3-icon-cube::before{
  content:""; }

.bp3-icon-cube-add::before{
  content:""; }

.bp3-icon-cube-remove::before{
  content:""; }

.bp3-icon-curved-range-chart::before{
  content:""; }

.bp3-icon-cut::before{
  content:""; }

.bp3-icon-dashboard::before{
  content:""; }

.bp3-icon-data-lineage::before{
  content:""; }

.bp3-icon-database::before{
  content:""; }

.bp3-icon-delete::before{
  content:""; }

.bp3-icon-delta::before{
  content:"Δ"; }

.bp3-icon-derive-column::before{
  content:""; }

.bp3-icon-desktop::before{
  content:""; }

.bp3-icon-diagnosis::before{
  content:""; }

.bp3-icon-diagram-tree::before{
  content:""; }

.bp3-icon-direction-left::before{
  content:""; }

.bp3-icon-direction-right::before{
  content:""; }

.bp3-icon-disable::before{
  content:""; }

.bp3-icon-document::before{
  content:""; }

.bp3-icon-document-open::before{
  content:""; }

.bp3-icon-document-share::before{
  content:""; }

.bp3-icon-dollar::before{
  content:"$"; }

.bp3-icon-dot::before{
  content:"•"; }

.bp3-icon-double-caret-horizontal::before{
  content:""; }

.bp3-icon-double-caret-vertical::before{
  content:""; }

.bp3-icon-double-chevron-down::before{
  content:""; }

.bp3-icon-double-chevron-left::before{
  content:""; }

.bp3-icon-double-chevron-right::before{
  content:""; }

.bp3-icon-double-chevron-up::before{
  content:""; }

.bp3-icon-doughnut-chart::before{
  content:""; }

.bp3-icon-download::before{
  content:""; }

.bp3-icon-drag-handle-horizontal::before{
  content:""; }

.bp3-icon-drag-handle-vertical::before{
  content:""; }

.bp3-icon-draw::before{
  content:""; }

.bp3-icon-drive-time::before{
  content:""; }

.bp3-icon-duplicate::before{
  content:""; }

.bp3-icon-edit::before{
  content:"✎"; }

.bp3-icon-eject::before{
  content:"⏏"; }

.bp3-icon-endorsed::before{
  content:""; }

.bp3-icon-envelope::before{
  content:"✉"; }

.bp3-icon-equals::before{
  content:""; }

.bp3-icon-eraser::before{
  content:""; }

.bp3-icon-error::before{
  content:""; }

.bp3-icon-euro::before{
  content:"€"; }

.bp3-icon-exchange::before{
  content:""; }

.bp3-icon-exclude-row::before{
  content:""; }

.bp3-icon-expand-all::before{
  content:""; }

.bp3-icon-export::before{
  content:""; }

.bp3-icon-eye-off::before{
  content:""; }

.bp3-icon-eye-on::before{
  content:""; }

.bp3-icon-eye-open::before{
  content:""; }

.bp3-icon-fast-backward::before{
  content:""; }

.bp3-icon-fast-forward::before{
  content:""; }

.bp3-icon-feed::before{
  content:""; }

.bp3-icon-feed-subscribed::before{
  content:""; }

.bp3-icon-film::before{
  content:""; }

.bp3-icon-filter::before{
  content:""; }

.bp3-icon-filter-keep::before{
  content:""; }

.bp3-icon-filter-list::before{
  content:""; }

.bp3-icon-filter-open::before{
  content:""; }

.bp3-icon-filter-remove::before{
  content:""; }

.bp3-icon-flag::before{
  content:"⚑"; }

.bp3-icon-flame::before{
  content:""; }

.bp3-icon-flash::before{
  content:""; }

.bp3-icon-floppy-disk::before{
  content:""; }

.bp3-icon-flow-branch::before{
  content:""; }

.bp3-icon-flow-end::before{
  content:""; }

.bp3-icon-flow-linear::before{
  content:""; }

.bp3-icon-flow-review::before{
  content:""; }

.bp3-icon-flow-review-branch::before{
  content:""; }

.bp3-icon-flows::before{
  content:""; }

.bp3-icon-folder-close::before{
  content:""; }

.bp3-icon-folder-new::before{
  content:""; }

.bp3-icon-folder-open::before{
  content:""; }

.bp3-icon-folder-shared::before{
  content:""; }

.bp3-icon-folder-shared-open::before{
  content:""; }

.bp3-icon-follower::before{
  content:""; }

.bp3-icon-following::before{
  content:""; }

.bp3-icon-font::before{
  content:""; }

.bp3-icon-fork::before{
  content:""; }

.bp3-icon-form::before{
  content:""; }

.bp3-icon-full-circle::before{
  content:""; }

.bp3-icon-full-stacked-chart::before{
  content:""; }

.bp3-icon-fullscreen::before{
  content:""; }

.bp3-icon-function::before{
  content:""; }

.bp3-icon-gantt-chart::before{
  content:""; }

.bp3-icon-geolocation::before{
  content:""; }

.bp3-icon-geosearch::before{
  content:""; }

.bp3-icon-git-branch::before{
  content:""; }

.bp3-icon-git-commit::before{
  content:""; }

.bp3-icon-git-merge::before{
  content:""; }

.bp3-icon-git-new-branch::before{
  content:""; }

.bp3-icon-git-pull::before{
  content:""; }

.bp3-icon-git-push::before{
  content:""; }

.bp3-icon-git-repo::before{
  content:""; }

.bp3-icon-glass::before{
  content:""; }

.bp3-icon-globe::before{
  content:""; }

.bp3-icon-globe-network::before{
  content:""; }

.bp3-icon-graph::before{
  content:""; }

.bp3-icon-graph-remove::before{
  content:""; }

.bp3-icon-greater-than::before{
  content:""; }

.bp3-icon-greater-than-or-equal-to::before{
  content:""; }

.bp3-icon-grid::before{
  content:""; }

.bp3-icon-grid-view::before{
  content:""; }

.bp3-icon-group-objects::before{
  content:""; }

.bp3-icon-grouped-bar-chart::before{
  content:""; }

.bp3-icon-hand::before{
  content:""; }

.bp3-icon-hand-down::before{
  content:""; }

.bp3-icon-hand-left::before{
  content:""; }

.bp3-icon-hand-right::before{
  content:""; }

.bp3-icon-hand-up::before{
  content:""; }

.bp3-icon-header::before{
  content:""; }

.bp3-icon-header-one::before{
  content:""; }

.bp3-icon-header-two::before{
  content:""; }

.bp3-icon-headset::before{
  content:""; }

.bp3-icon-heart::before{
  content:"♥"; }

.bp3-icon-heart-broken::before{
  content:""; }

.bp3-icon-heat-grid::before{
  content:""; }

.bp3-icon-heatmap::before{
  content:""; }

.bp3-icon-help::before{
  content:"?"; }

.bp3-icon-helper-management::before{
  content:""; }

.bp3-icon-highlight::before{
  content:""; }

.bp3-icon-history::before{
  content:""; }

.bp3-icon-home::before{
  content:"⌂"; }

.bp3-icon-horizontal-bar-chart::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-asc::before{
  content:""; }

.bp3-icon-horizontal-bar-chart-desc::before{
  content:""; }

.bp3-icon-horizontal-distribution::before{
  content:""; }

.bp3-icon-id-number::before{
  content:""; }

.bp3-icon-image-rotate-left::before{
  content:""; }

.bp3-icon-image-rotate-right::before{
  content:""; }

.bp3-icon-import::before{
  content:""; }

.bp3-icon-inbox::before{
  content:""; }

.bp3-icon-inbox-filtered::before{
  content:""; }

.bp3-icon-inbox-geo::before{
  content:""; }

.bp3-icon-inbox-search::before{
  content:""; }

.bp3-icon-inbox-update::before{
  content:""; }

.bp3-icon-info-sign::before{
  content:"ℹ"; }

.bp3-icon-inheritance::before{
  content:""; }

.bp3-icon-inner-join::before{
  content:""; }

.bp3-icon-insert::before{
  content:""; }

.bp3-icon-intersection::before{
  content:""; }

.bp3-icon-ip-address::before{
  content:""; }

.bp3-icon-issue::before{
  content:""; }

.bp3-icon-issue-closed::before{
  content:""; }

.bp3-icon-issue-new::before{
  content:""; }

.bp3-icon-italic::before{
  content:""; }

.bp3-icon-join-table::before{
  content:""; }

.bp3-icon-key::before{
  content:""; }

.bp3-icon-key-backspace::before{
  content:""; }

.bp3-icon-key-command::before{
  content:""; }

.bp3-icon-key-control::before{
  content:""; }

.bp3-icon-key-delete::before{
  content:""; }

.bp3-icon-key-enter::before{
  content:""; }

.bp3-icon-key-escape::before{
  content:""; }

.bp3-icon-key-option::before{
  content:""; }

.bp3-icon-key-shift::before{
  content:""; }

.bp3-icon-key-tab::before{
  content:""; }

.bp3-icon-known-vehicle::before{
  content:""; }

.bp3-icon-lab-test::before{
  content:""; }

.bp3-icon-label::before{
  content:""; }

.bp3-icon-layer::before{
  content:""; }

.bp3-icon-layers::before{
  content:""; }

.bp3-icon-layout::before{
  content:""; }

.bp3-icon-layout-auto::before{
  content:""; }

.bp3-icon-layout-balloon::before{
  content:""; }

.bp3-icon-layout-circle::before{
  content:""; }

.bp3-icon-layout-grid::before{
  content:""; }

.bp3-icon-layout-group-by::before{
  content:""; }

.bp3-icon-layout-hierarchy::before{
  content:""; }

.bp3-icon-layout-linear::before{
  content:""; }

.bp3-icon-layout-skew-grid::before{
  content:""; }

.bp3-icon-layout-sorted-clusters::before{
  content:""; }

.bp3-icon-learning::before{
  content:""; }

.bp3-icon-left-join::before{
  content:""; }

.bp3-icon-less-than::before{
  content:""; }

.bp3-icon-less-than-or-equal-to::before{
  content:""; }

.bp3-icon-lifesaver::before{
  content:""; }

.bp3-icon-lightbulb::before{
  content:""; }

.bp3-icon-link::before{
  content:""; }

.bp3-icon-list::before{
  content:"☰"; }

.bp3-icon-list-columns::before{
  content:""; }

.bp3-icon-list-detail-view::before{
  content:""; }

.bp3-icon-locate::before{
  content:""; }

.bp3-icon-lock::before{
  content:""; }

.bp3-icon-log-in::before{
  content:""; }

.bp3-icon-log-out::before{
  content:""; }

.bp3-icon-manual::before{
  content:""; }

.bp3-icon-manually-entered-data::before{
  content:""; }

.bp3-icon-map::before{
  content:""; }

.bp3-icon-map-create::before{
  content:""; }

.bp3-icon-map-marker::before{
  content:""; }

.bp3-icon-maximize::before{
  content:""; }

.bp3-icon-media::before{
  content:""; }

.bp3-icon-menu::before{
  content:""; }

.bp3-icon-menu-closed::before{
  content:""; }

.bp3-icon-menu-open::before{
  content:""; }

.bp3-icon-merge-columns::before{
  content:""; }

.bp3-icon-merge-links::before{
  content:""; }

.bp3-icon-minimize::before{
  content:""; }

.bp3-icon-minus::before{
  content:"−"; }

.bp3-icon-mobile-phone::before{
  content:""; }

.bp3-icon-mobile-video::before{
  content:""; }

.bp3-icon-moon::before{
  content:""; }

.bp3-icon-more::before{
  content:""; }

.bp3-icon-mountain::before{
  content:""; }

.bp3-icon-move::before{
  content:""; }

.bp3-icon-mugshot::before{
  content:""; }

.bp3-icon-multi-select::before{
  content:""; }

.bp3-icon-music::before{
  content:""; }

.bp3-icon-new-drawing::before{
  content:""; }

.bp3-icon-new-grid-item::before{
  content:""; }

.bp3-icon-new-layer::before{
  content:""; }

.bp3-icon-new-layers::before{
  content:""; }

.bp3-icon-new-link::before{
  content:""; }

.bp3-icon-new-object::before{
  content:""; }

.bp3-icon-new-person::before{
  content:""; }

.bp3-icon-new-prescription::before{
  content:""; }

.bp3-icon-new-text-box::before{
  content:""; }

.bp3-icon-ninja::before{
  content:""; }

.bp3-icon-not-equal-to::before{
  content:""; }

.bp3-icon-notifications::before{
  content:""; }

.bp3-icon-notifications-updated::before{
  content:""; }

.bp3-icon-numbered-list::before{
  content:""; }

.bp3-icon-numerical::before{
  content:""; }

.bp3-icon-office::before{
  content:""; }

.bp3-icon-offline::before{
  content:""; }

.bp3-icon-oil-field::before{
  content:""; }

.bp3-icon-one-column::before{
  content:""; }

.bp3-icon-outdated::before{
  content:""; }

.bp3-icon-page-layout::before{
  content:""; }

.bp3-icon-panel-stats::before{
  content:""; }

.bp3-icon-panel-table::before{
  content:""; }

.bp3-icon-paperclip::before{
  content:""; }

.bp3-icon-paragraph::before{
  content:""; }

.bp3-icon-path::before{
  content:""; }

.bp3-icon-path-search::before{
  content:""; }

.bp3-icon-pause::before{
  content:""; }

.bp3-icon-people::before{
  content:""; }

.bp3-icon-percentage::before{
  content:""; }

.bp3-icon-person::before{
  content:""; }

.bp3-icon-phone::before{
  content:"☎"; }

.bp3-icon-pie-chart::before{
  content:""; }

.bp3-icon-pin::before{
  content:""; }

.bp3-icon-pivot::before{
  content:""; }

.bp3-icon-pivot-table::before{
  content:""; }

.bp3-icon-play::before{
  content:""; }

.bp3-icon-plus::before{
  content:"+"; }

.bp3-icon-polygon-filter::before{
  content:""; }

.bp3-icon-power::before{
  content:""; }

.bp3-icon-predictive-analysis::before{
  content:""; }

.bp3-icon-prescription::before{
  content:""; }

.bp3-icon-presentation::before{
  content:""; }

.bp3-icon-print::before{
  content:"⎙"; }

.bp3-icon-projects::before{
  content:""; }

.bp3-icon-properties::before{
  content:""; }

.bp3-icon-property::before{
  content:""; }

.bp3-icon-publish-function::before{
  content:""; }

.bp3-icon-pulse::before{
  content:""; }

.bp3-icon-random::before{
  content:""; }

.bp3-icon-record::before{
  content:""; }

.bp3-icon-redo::before{
  content:""; }

.bp3-icon-refresh::before{
  content:""; }

.bp3-icon-regression-chart::before{
  content:""; }

.bp3-icon-remove::before{
  content:""; }

.bp3-icon-remove-column::before{
  content:""; }

.bp3-icon-remove-column-left::before{
  content:""; }

.bp3-icon-remove-column-right::before{
  content:""; }

.bp3-icon-remove-row-bottom::before{
  content:""; }

.bp3-icon-remove-row-top::before{
  content:""; }

.bp3-icon-repeat::before{
  content:""; }

.bp3-icon-reset::before{
  content:""; }

.bp3-icon-resolve::before{
  content:""; }

.bp3-icon-rig::before{
  content:""; }

.bp3-icon-right-join::before{
  content:""; }

.bp3-icon-ring::before{
  content:""; }

.bp3-icon-rotate-document::before{
  content:""; }

.bp3-icon-rotate-page::before{
  content:""; }

.bp3-icon-satellite::before{
  content:""; }

.bp3-icon-saved::before{
  content:""; }

.bp3-icon-scatter-plot::before{
  content:""; }

.bp3-icon-search::before{
  content:""; }

.bp3-icon-search-around::before{
  content:""; }

.bp3-icon-search-template::before{
  content:""; }

.bp3-icon-search-text::before{
  content:""; }

.bp3-icon-segmented-control::before{
  content:""; }

.bp3-icon-select::before{
  content:""; }

.bp3-icon-selection::before{
  content:"⦿"; }

.bp3-icon-send-to::before{
  content:""; }

.bp3-icon-send-to-graph::before{
  content:""; }

.bp3-icon-send-to-map::before{
  content:""; }

.bp3-icon-series-add::before{
  content:""; }

.bp3-icon-series-configuration::before{
  content:""; }

.bp3-icon-series-derived::before{
  content:""; }

.bp3-icon-series-filtered::before{
  content:""; }

.bp3-icon-series-search::before{
  content:""; }

.bp3-icon-settings::before{
  content:""; }

.bp3-icon-share::before{
  content:""; }

.bp3-icon-shield::before{
  content:""; }

.bp3-icon-shop::before{
  content:""; }

.bp3-icon-shopping-cart::before{
  content:""; }

.bp3-icon-signal-search::before{
  content:""; }

.bp3-icon-sim-card::before{
  content:""; }

.bp3-icon-slash::before{
  content:""; }

.bp3-icon-small-cross::before{
  content:""; }

.bp3-icon-small-minus::before{
  content:""; }

.bp3-icon-small-plus::before{
  content:""; }

.bp3-icon-small-tick::before{
  content:""; }

.bp3-icon-snowflake::before{
  content:""; }

.bp3-icon-social-media::before{
  content:""; }

.bp3-icon-sort::before{
  content:""; }

.bp3-icon-sort-alphabetical::before{
  content:""; }

.bp3-icon-sort-alphabetical-desc::before{
  content:""; }

.bp3-icon-sort-asc::before{
  content:""; }

.bp3-icon-sort-desc::before{
  content:""; }

.bp3-icon-sort-numerical::before{
  content:""; }

.bp3-icon-sort-numerical-desc::before{
  content:""; }

.bp3-icon-split-columns::before{
  content:""; }

.bp3-icon-square::before{
  content:""; }

.bp3-icon-stacked-chart::before{
  content:""; }

.bp3-icon-star::before{
  content:"★"; }

.bp3-icon-star-empty::before{
  content:"☆"; }

.bp3-icon-step-backward::before{
  content:""; }

.bp3-icon-step-chart::before{
  content:""; }

.bp3-icon-step-forward::before{
  content:""; }

.bp3-icon-stop::before{
  content:""; }

.bp3-icon-stopwatch::before{
  content:""; }

.bp3-icon-strikethrough::before{
  content:""; }

.bp3-icon-style::before{
  content:""; }

.bp3-icon-swap-horizontal::before{
  content:""; }

.bp3-icon-swap-vertical::before{
  content:""; }

.bp3-icon-symbol-circle::before{
  content:""; }

.bp3-icon-symbol-cross::before{
  content:""; }

.bp3-icon-symbol-diamond::before{
  content:""; }

.bp3-icon-symbol-square::before{
  content:""; }

.bp3-icon-symbol-triangle-down::before{
  content:""; }

.bp3-icon-symbol-triangle-up::before{
  content:""; }

.bp3-icon-tag::before{
  content:""; }

.bp3-icon-take-action::before{
  content:""; }

.bp3-icon-taxi::before{
  content:""; }

.bp3-icon-text-highlight::before{
  content:""; }

.bp3-icon-th::before{
  content:""; }

.bp3-icon-th-derived::before{
  content:""; }

.bp3-icon-th-disconnect::before{
  content:""; }

.bp3-icon-th-filtered::before{
  content:""; }

.bp3-icon-th-list::before{
  content:""; }

.bp3-icon-thumbs-down::before{
  content:""; }

.bp3-icon-thumbs-up::before{
  content:""; }

.bp3-icon-tick::before{
  content:"✓"; }

.bp3-icon-tick-circle::before{
  content:""; }

.bp3-icon-time::before{
  content:"⏲"; }

.bp3-icon-timeline-area-chart::before{
  content:""; }

.bp3-icon-timeline-bar-chart::before{
  content:""; }

.bp3-icon-timeline-events::before{
  content:""; }

.bp3-icon-timeline-line-chart::before{
  content:""; }

.bp3-icon-tint::before{
  content:""; }

.bp3-icon-torch::before{
  content:""; }

.bp3-icon-tractor::before{
  content:""; }

.bp3-icon-train::before{
  content:""; }

.bp3-icon-translate::before{
  content:""; }

.bp3-icon-trash::before{
  content:""; }

.bp3-icon-tree::before{
  content:""; }

.bp3-icon-trending-down::before{
  content:""; }

.bp3-icon-trending-up::before{
  content:""; }

.bp3-icon-truck::before{
  content:""; }

.bp3-icon-two-columns::before{
  content:""; }

.bp3-icon-unarchive::before{
  content:""; }

.bp3-icon-underline::before{
  content:"⎁"; }

.bp3-icon-undo::before{
  content:"⎌"; }

.bp3-icon-ungroup-objects::before{
  content:""; }

.bp3-icon-unknown-vehicle::before{
  content:""; }

.bp3-icon-unlock::before{
  content:""; }

.bp3-icon-unpin::before{
  content:""; }

.bp3-icon-unresolve::before{
  content:""; }

.bp3-icon-updated::before{
  content:""; }

.bp3-icon-upload::before{
  content:""; }

.bp3-icon-user::before{
  content:""; }

.bp3-icon-variable::before{
  content:""; }

.bp3-icon-vertical-bar-chart-asc::before{
  content:""; }

.bp3-icon-vertical-bar-chart-desc::before{
  content:""; }

.bp3-icon-vertical-distribution::before{
  content:""; }

.bp3-icon-video::before{
  content:""; }

.bp3-icon-volume-down::before{
  content:""; }

.bp3-icon-volume-off::before{
  content:""; }

.bp3-icon-volume-up::before{
  content:""; }

.bp3-icon-walk::before{
  content:""; }

.bp3-icon-warning-sign::before{
  content:""; }

.bp3-icon-waterfall-chart::before{
  content:""; }

.bp3-icon-widget::before{
  content:""; }

.bp3-icon-widget-button::before{
  content:""; }

.bp3-icon-widget-footer::before{
  content:""; }

.bp3-icon-widget-header::before{
  content:""; }

.bp3-icon-wrench::before{
  content:""; }

.bp3-icon-zoom-in::before{
  content:""; }

.bp3-icon-zoom-out::before{
  content:""; }

.bp3-icon-zoom-to-fit::before{
  content:""; }
.bp3-submenu > .bp3-popover-wrapper{
  display:block; }

.bp3-submenu .bp3-popover-target{
  display:block; }
  .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{ }

.bp3-submenu.bp3-popover{
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0 5px; }
  .bp3-submenu.bp3-popover > .bp3-popover-content{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-submenu.bp3-popover, .bp3-submenu.bp3-popover.bp3-dark{
    -webkit-box-shadow:none;
            box-shadow:none; }
    .bp3-dark .bp3-submenu.bp3-popover > .bp3-popover-content, .bp3-submenu.bp3-popover.bp3-dark > .bp3-popover-content{
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
.bp3-menu{
  background:#ffffff;
  border-radius:3px;
  color:#182026;
  list-style:none;
  margin:0;
  min-width:180px;
  padding:5px;
  text-align:left; }

.bp3-menu-divider{
  border-top:1px solid rgba(16, 22, 26, 0.15);
  display:block;
  margin:5px; }
  .bp3-dark .bp3-menu-divider{
    border-top-color:rgba(255, 255, 255, 0.15); }

.bp3-menu-item{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  border-radius:2px;
  color:inherit;
  line-height:20px;
  padding:5px 7px;
  text-decoration:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-menu-item > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-menu-item > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-menu-item::before,
  .bp3-menu-item > *{
    margin-right:7px; }
  .bp3-menu-item:empty::before,
  .bp3-menu-item > :last-child{
    margin-right:0; }
  .bp3-menu-item > .bp3-fill{
    word-break:break-word; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    background-color:rgba(167, 182, 194, 0.3);
    cursor:pointer;
    text-decoration:none; }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-dark .bp3-menu-item{
    color:inherit; }
    .bp3-dark .bp3-menu-item:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
      background-color:rgba(138, 155, 168, 0.15);
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-disabled{
      background-color:inherit;
      color:rgba(167, 182, 194, 0.6); }
  .bp3-menu-item.bp3-intent-primary{
    color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-primary::before, .bp3-menu-item.bp3-intent-primary::after,
    .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-menu-item.bp3-intent-primary:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary:active, .bp3-menu-item.bp3-intent-primary:active::before, .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-success{
    color:#0d8050; }
    .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-success::before, .bp3-menu-item.bp3-intent-success::after,
    .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-menu-item.bp3-intent-success:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-menu-item.bp3-intent-success:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-menu-item.bp3-intent-success:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success:active, .bp3-menu-item.bp3-intent-success:active::before, .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-warning{
    color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-warning::before, .bp3-menu-item.bp3-intent-warning::after,
    .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-menu-item.bp3-intent-warning:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning:active, .bp3-menu-item.bp3-intent-warning:active::before, .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item.bp3-intent-danger{
    color:#c23030; }
    .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-menu-item.bp3-intent-danger::before, .bp3-menu-item.bp3-intent-danger::after,
    .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-menu-item.bp3-intent-danger:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger:active, .bp3-menu-item.bp3-intent-danger:active::before, .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-menu-item::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    margin-right:7px; }
  .bp3-menu-item::before,
  .bp3-menu-item > .bp3-icon{
    color:#5c7080;
    margin-top:2px; }
  .bp3-menu-item .bp3-menu-item-label{
    color:#5c7080; }
  .bp3-menu-item:hover, .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-menu-item{
    color:inherit; }
  .bp3-menu-item.bp3-active, .bp3-menu-item:active{
    background-color:rgba(115, 134, 148, 0.3); }
  .bp3-menu-item.bp3-disabled{
    background-color:inherit !important;
    color:rgba(92, 112, 128, 0.6) !important;
    cursor:not-allowed !important;
    outline:none !important; }
    .bp3-menu-item.bp3-disabled::before,
    .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(92, 112, 128, 0.6) !important; }
  .bp3-large .bp3-menu-item{
    font-size:16px;
    line-height:22px;
    padding:9px 7px; }
    .bp3-large .bp3-menu-item .bp3-icon{
      margin-top:3px; }
    .bp3-large .bp3-menu-item::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1;
      -moz-osx-font-smoothing:grayscale;
      -webkit-font-smoothing:antialiased;
      margin-right:10px;
      margin-top:1px; }

button.bp3-menu-item{
  background:none;
  border:none;
  text-align:left;
  width:100%; }
.bp3-menu-header{
  border-top:1px solid rgba(16, 22, 26, 0.15);
  display:block;
  margin:5px;
  cursor:default;
  padding-left:2px; }
  .bp3-dark .bp3-menu-header{
    border-top-color:rgba(255, 255, 255, 0.15); }
  .bp3-menu-header:first-of-type{
    border-top:none; }
  .bp3-menu-header > h6{
    color:#182026;
    font-weight:600;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    line-height:17px;
    margin:0;
    padding:10px 7px 0 1px; }
    .bp3-dark .bp3-menu-header > h6{
      color:#f5f8fa; }
  .bp3-menu-header:first-of-type > h6{
    padding-top:0; }
  .bp3-large .bp3-menu-header > h6{
    font-size:18px;
    padding-bottom:5px;
    padding-top:15px; }
  .bp3-large .bp3-menu-header:first-of-type > h6{
    padding-top:0; }

.bp3-dark .bp3-menu{
  background:#30404d;
  color:#f5f8fa; }

.bp3-dark .bp3-menu-item{ }
  .bp3-dark .bp3-menu-item.bp3-intent-primary{
    color:#48aff0; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary::before, .bp3-dark .bp3-menu-item.bp3-intent-primary::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary .bp3-menu-item-label{
      color:#48aff0; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active{
      background-color:#137cbd; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:active{
      background-color:#106ba3; }
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-primary.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary:active, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-primary.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-success{
    color:#3dcc91; }
    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-success::before, .bp3-dark .bp3-menu-item.bp3-intent-success::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success .bp3-menu-item-label{
      color:#3dcc91; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active{
      background-color:#0f9960; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:active{
      background-color:#0d8050; }
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-success:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-success.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success:active, .bp3-dark .bp3-menu-item.bp3-intent-success:active::before, .bp3-dark .bp3-menu-item.bp3-intent-success:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-success.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-warning{
    color:#ffb366; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning::before, .bp3-dark .bp3-menu-item.bp3-intent-warning::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning .bp3-menu-item-label{
      color:#ffb366; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active{
      background-color:#d9822b; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:active{
      background-color:#bf7326; }
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-warning.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning:active, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-warning.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item.bp3-intent-danger{
    color:#ff7373; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-icon{
      color:inherit; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger::before, .bp3-dark .bp3-menu-item.bp3-intent-danger::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger .bp3-menu-item-label{
      color:#ff7373; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active{
      background-color:#db3737; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:active{
      background-color:#c23030; }
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::before, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:hover::after, .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after, .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger:hover .bp3-menu-item-label,
    .bp3-dark .bp3-submenu .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label,
    .bp3-submenu .bp3-dark .bp3-popover-target.bp3-popover-open > .bp3-intent-danger.bp3-menu-item .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger:active, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger:active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger:active .bp3-menu-item-label, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::before, .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active::after,
    .bp3-dark .bp3-menu-item.bp3-intent-danger.bp3-active .bp3-menu-item-label{
      color:#ffffff; }
  .bp3-dark .bp3-menu-item::before,
  .bp3-dark .bp3-menu-item > .bp3-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-menu-item .bp3-menu-item-label{
    color:#a7b6c2; }
  .bp3-dark .bp3-menu-item.bp3-active, .bp3-dark .bp3-menu-item:active{
    background-color:rgba(138, 155, 168, 0.3); }
  .bp3-dark .bp3-menu-item.bp3-disabled{
    color:rgba(167, 182, 194, 0.6) !important; }
    .bp3-dark .bp3-menu-item.bp3-disabled::before,
    .bp3-dark .bp3-menu-item.bp3-disabled > .bp3-icon,
    .bp3-dark .bp3-menu-item.bp3-disabled .bp3-menu-item-label{
      color:rgba(167, 182, 194, 0.6) !important; }

.bp3-dark .bp3-menu-divider,
.bp3-dark .bp3-menu-header{
  border-color:rgba(255, 255, 255, 0.15); }

.bp3-dark .bp3-menu-header > h6{
  color:#f5f8fa; }

.bp3-label .bp3-menu{
  margin-top:5px; }
.bp3-navbar{
  background-color:#ffffff;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.2);
  height:50px;
  padding:0 15px;
  position:relative;
  width:100%;
  z-index:10; }
  .bp3-navbar.bp3-dark,
  .bp3-dark .bp3-navbar{
    background-color:#394b59; }
  .bp3-navbar.bp3-dark{
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-dark .bp3-navbar{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 1px 1px rgba(16, 22, 26, 0.4); }
  .bp3-navbar.bp3-fixed-top{
    left:0;
    position:fixed;
    right:0;
    top:0; }

.bp3-navbar-heading{
  font-size:16px;
  margin-right:15px; }

.bp3-navbar-group{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:50px; }
  .bp3-navbar-group.bp3-align-left{
    float:left; }
  .bp3-navbar-group.bp3-align-right{
    float:right; }

.bp3-navbar-divider{
  border-left:1px solid rgba(16, 22, 26, 0.15);
  height:20px;
  margin:0 10px; }
  .bp3-dark .bp3-navbar-divider{
    border-left-color:rgba(255, 255, 255, 0.15); }
.bp3-non-ideal-state{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  height:100%;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  text-align:center;
  width:100%; }
  .bp3-non-ideal-state > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-non-ideal-state > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-non-ideal-state::before,
  .bp3-non-ideal-state > *{
    margin-bottom:20px; }
  .bp3-non-ideal-state:empty::before,
  .bp3-non-ideal-state > :last-child{
    margin-bottom:0; }
  .bp3-non-ideal-state > *{
    max-width:400px; }

.bp3-non-ideal-state-visual{
  color:rgba(92, 112, 128, 0.6);
  font-size:60px; }
  .bp3-dark .bp3-non-ideal-state-visual{
    color:rgba(167, 182, 194, 0.6); }

.bp3-overflow-list{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-wrap:nowrap;
      flex-wrap:nowrap;
  min-width:0; }

.bp3-overflow-list-spacer{
  -ms-flex-negative:1;
      flex-shrink:1;
  width:1px; }

body.bp3-overlay-open{
  overflow:hidden; }

.bp3-overlay{
  bottom:0;
  left:0;
  position:static;
  right:0;
  top:0;
  z-index:20; }
  .bp3-overlay:not(.bp3-overlay-open){
    pointer-events:none; }
  .bp3-overlay.bp3-overlay-container{
    overflow:hidden;
    position:fixed; }
    .bp3-overlay.bp3-overlay-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-scroll-container{
    overflow:auto;
    position:fixed; }
    .bp3-overlay.bp3-overlay-scroll-container.bp3-overlay-inline{
      position:absolute; }
  .bp3-overlay.bp3-overlay-inline{
    display:inline;
    overflow:visible; }

.bp3-overlay-content{
  position:fixed;
  z-index:20; }
  .bp3-overlay-inline .bp3-overlay-content,
  .bp3-overlay-scroll-container .bp3-overlay-content{
    position:absolute; }

.bp3-overlay-backdrop{
  bottom:0;
  left:0;
  position:fixed;
  right:0;
  top:0;
  opacity:1;
  background-color:rgba(16, 22, 26, 0.7);
  overflow:auto;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none;
  z-index:20; }
  .bp3-overlay-backdrop.bp3-overlay-enter, .bp3-overlay-backdrop.bp3-overlay-appear{
    opacity:0; }
  .bp3-overlay-backdrop.bp3-overlay-enter-active, .bp3-overlay-backdrop.bp3-overlay-appear-active{
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-overlay-backdrop.bp3-overlay-exit{
    opacity:1; }
  .bp3-overlay-backdrop.bp3-overlay-exit-active{
    opacity:0;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-overlay-backdrop:focus{
    outline:none; }
  .bp3-overlay-inline .bp3-overlay-backdrop{
    position:absolute; }
.bp3-panel-stack{
  overflow:hidden;
  position:relative; }

.bp3-panel-stack-header{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  -webkit-box-shadow:0 1px rgba(16, 22, 26, 0.15);
          box-shadow:0 1px rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -ms-flex-negative:0;
      flex-shrink:0;
  height:30px;
  z-index:1; }
  .bp3-dark .bp3-panel-stack-header{
    -webkit-box-shadow:0 1px rgba(255, 255, 255, 0.15);
            box-shadow:0 1px rgba(255, 255, 255, 0.15); }
  .bp3-panel-stack-header > span{
    -webkit-box-align:stretch;
        -ms-flex-align:stretch;
            align-items:stretch;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-flex:1;
        -ms-flex:1;
            flex:1; }
  .bp3-panel-stack-header .bp3-heading{
    margin:0 5px; }

.bp3-button.bp3-panel-stack-header-back{
  margin-left:5px;
  padding-left:0;
  white-space:nowrap; }
  .bp3-button.bp3-panel-stack-header-back .bp3-icon{
    margin:0 2px; }

.bp3-panel-stack-view{
  bottom:0;
  left:0;
  position:absolute;
  right:0;
  top:0;
  background-color:#ffffff;
  border-right:1px solid rgba(16, 22, 26, 0.15);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  margin-right:-1px;
  overflow-y:auto;
  z-index:1; }
  .bp3-dark .bp3-panel-stack-view{
    background-color:#30404d; }
  .bp3-panel-stack-view:nth-last-child(n + 4){
    display:none; }

.bp3-panel-stack-push .bp3-panel-stack-enter, .bp3-panel-stack-push .bp3-panel-stack-appear{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0; }

.bp3-panel-stack-push .bp3-panel-stack-enter-active, .bp3-panel-stack-push .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-push .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-push .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-pop .bp3-panel-stack-enter, .bp3-panel-stack-pop .bp3-panel-stack-appear{
  -webkit-transform:translateX(-50%);
          transform:translateX(-50%);
  opacity:0; }

.bp3-panel-stack-pop .bp3-panel-stack-enter-active, .bp3-panel-stack-pop .bp3-panel-stack-appear-active{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }

.bp3-panel-stack-pop .bp3-panel-stack-exit{
  -webkit-transform:translate(0%);
          transform:translate(0%);
  opacity:1; }

.bp3-panel-stack-pop .bp3-panel-stack-exit-active{
  -webkit-transform:translateX(100%);
          transform:translateX(100%);
  opacity:0;
  -webkit-transition-delay:0;
          transition-delay:0;
  -webkit-transition-duration:400ms;
          transition-duration:400ms;
  -webkit-transition-property:opacity, -webkit-transform;
  transition-property:opacity, -webkit-transform;
  transition-property:transform, opacity;
  transition-property:transform, opacity, -webkit-transform;
  -webkit-transition-timing-function:ease;
          transition-timing-function:ease; }
.bp3-popover{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1);
  border-radius:3px;
  display:inline-block;
  z-index:20; }
  .bp3-popover .bp3-popover-arrow{
    height:30px;
    position:absolute;
    width:30px; }
    .bp3-popover .bp3-popover-arrow::before{
      height:20px;
      margin:5px;
      width:20px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover{
    margin-bottom:17px;
    margin-top:-17px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
      bottom:-11px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover{
    margin-left:17px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
      left:-11px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover{
    margin-top:17px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
      top:-11px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover{
    margin-left:-17px;
    margin-right:17px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
      right:-11px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-popover > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-popover > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-popover > .bp3-popover-arrow{
    top:-0.3934px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-popover > .bp3-popover-arrow{
    right:-0.3934px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-popover > .bp3-popover-arrow{
    left:-0.3934px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-popover > .bp3-popover-arrow{
    bottom:-0.3934px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-popover{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-popover{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-popover{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-popover .bp3-popover-content{
    background:#ffffff;
    color:inherit; }
  .bp3-popover .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-popover .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-popover .bp3-popover-arrow-fill{
    fill:#ffffff; }
  .bp3-popover-enter > .bp3-popover, .bp3-popover-appear > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3); }
  .bp3-popover-enter-active > .bp3-popover, .bp3-popover-appear-active > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-popover-exit > .bp3-popover{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-popover{
    -webkit-transform:scale(0.3);
            transform:scale(0.3);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-popover .bp3-popover-content{
    border-radius:3px;
    position:relative; }
  .bp3-popover.bp3-popover-content-sizing .bp3-popover-content{
    max-width:350px;
    padding:20px; }
  .bp3-popover-target + .bp3-overlay .bp3-popover.bp3-popover-content-sizing{
    width:350px; }
  .bp3-popover.bp3-minimal{
    margin:0 !important; }
    .bp3-popover.bp3-minimal .bp3-popover-arrow{
      display:none; }
    .bp3-popover.bp3-minimal.bp3-popover{
      -webkit-transform:scale(1);
              transform:scale(1); }
      .bp3-popover-enter > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-enter-active > .bp3-popover.bp3-minimal.bp3-popover, .bp3-popover-appear-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
      .bp3-popover-exit > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1); }
      .bp3-popover-exit-active > .bp3-popover.bp3-minimal.bp3-popover{
        -webkit-transform:scale(1);
                transform:scale(1);
        -webkit-transition-delay:0;
                transition-delay:0;
        -webkit-transition-duration:100ms;
                transition-duration:100ms;
        -webkit-transition-property:-webkit-transform;
        transition-property:-webkit-transform;
        transition-property:transform;
        transition-property:transform, -webkit-transform;
        -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
                transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-popover.bp3-dark,
  .bp3-dark .bp3-popover{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-popover .bp3-popover-content{
      background:#30404d;
      color:inherit; }
    .bp3-popover.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-popover .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-popover.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-popover .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-popover.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-popover .bp3-popover-arrow-fill{
      fill:#30404d; }

.bp3-popover-arrow::before{
  border-radius:2px;
  content:"";
  display:block;
  position:absolute;
  -webkit-transform:rotate(45deg);
          transform:rotate(45deg); }

.bp3-tether-pinned .bp3-popover-arrow{
  display:none; }

.bp3-popover-backdrop{
  background:rgba(255, 255, 255, 0); }

.bp3-transition-container{
  opacity:1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  z-index:20; }
  .bp3-transition-container.bp3-popover-enter, .bp3-transition-container.bp3-popover-appear{
    opacity:0; }
  .bp3-transition-container.bp3-popover-enter-active, .bp3-transition-container.bp3-popover-appear-active{
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-transition-container.bp3-popover-exit{
    opacity:1; }
  .bp3-transition-container.bp3-popover-exit-active{
    opacity:0;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:opacity;
    transition-property:opacity;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-transition-container:focus{
    outline:none; }
  .bp3-transition-container.bp3-popover-leave .bp3-popover-content{
    pointer-events:none; }
  .bp3-transition-container[data-x-out-of-boundaries]{
    display:none; }

span.bp3-popover-target{
  display:inline-block; }

.bp3-popover-wrapper.bp3-fill{
  width:100%; }

.bp3-portal{
  left:0;
  position:absolute;
  right:0;
  top:0; }
@-webkit-keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }
@keyframes linear-progress-bar-stripes{
  from{
    background-position:0 0; }
  to{
    background-position:30px 0; } }

.bp3-progress-bar{
  background:rgba(92, 112, 128, 0.2);
  border-radius:40px;
  display:block;
  height:8px;
  overflow:hidden;
  position:relative;
  width:100%; }
  .bp3-progress-bar .bp3-progress-meter{
    background:linear-gradient(-45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%);
    background-color:rgba(92, 112, 128, 0.8);
    background-size:30px 30px;
    border-radius:40px;
    height:100%;
    position:absolute;
    -webkit-transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:width 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    width:100%; }
  .bp3-progress-bar:not(.bp3-no-animation):not(.bp3-no-stripes) .bp3-progress-meter{
    animation:linear-progress-bar-stripes 300ms linear infinite reverse; }
  .bp3-progress-bar.bp3-no-stripes .bp3-progress-meter{
    background-image:none; }

.bp3-dark .bp3-progress-bar{
  background:rgba(16, 22, 26, 0.5); }
  .bp3-dark .bp3-progress-bar .bp3-progress-meter{
    background-color:#8a9ba8; }

.bp3-progress-bar.bp3-intent-primary .bp3-progress-meter{
  background-color:#137cbd; }

.bp3-progress-bar.bp3-intent-success .bp3-progress-meter{
  background-color:#0f9960; }

.bp3-progress-bar.bp3-intent-warning .bp3-progress-meter{
  background-color:#d9822b; }

.bp3-progress-bar.bp3-intent-danger .bp3-progress-meter{
  background-color:#db3737; }
@-webkit-keyframes skeleton-glow{
  from{
    background:rgba(206, 217, 224, 0.2);
    border-color:rgba(206, 217, 224, 0.2); }
  to{
    background:rgba(92, 112, 128, 0.2);
    border-color:rgba(92, 112, 128, 0.2); } }
@keyframes skeleton-glow{
  from{
    background:rgba(206, 217, 224, 0.2);
    border-color:rgba(206, 217, 224, 0.2); }
  to{
    background:rgba(92, 112, 128, 0.2);
    border-color:rgba(92, 112, 128, 0.2); } }
.bp3-skeleton{
  -webkit-animation:1000ms linear infinite alternate skeleton-glow;
          animation:1000ms linear infinite alternate skeleton-glow;
  background:rgba(206, 217, 224, 0.2);
  background-clip:padding-box !important;
  border-color:rgba(206, 217, 224, 0.2) !important;
  border-radius:2px;
  -webkit-box-shadow:none !important;
          box-shadow:none !important;
  color:transparent !important;
  cursor:default;
  pointer-events:none;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-skeleton::before, .bp3-skeleton::after,
  .bp3-skeleton *{
    visibility:hidden !important; }
.bp3-slider{
  height:40px;
  min-width:150px;
  width:100%;
  cursor:default;
  outline:none;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-slider:hover{
    cursor:pointer; }
  .bp3-slider:active{
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-slider.bp3-disabled{
    cursor:not-allowed;
    opacity:0.5; }
  .bp3-slider.bp3-slider-unlabeled{
    height:16px; }

.bp3-slider-track,
.bp3-slider-progress{
  height:6px;
  left:0;
  right:0;
  top:5px;
  position:absolute; }

.bp3-slider-track{
  border-radius:3px;
  overflow:hidden; }

.bp3-slider-progress{
  background:rgba(92, 112, 128, 0.2); }
  .bp3-dark .bp3-slider-progress{
    background:rgba(16, 22, 26, 0.5); }
  .bp3-slider-progress.bp3-intent-primary{
    background-color:#137cbd; }
  .bp3-slider-progress.bp3-intent-success{
    background-color:#0f9960; }
  .bp3-slider-progress.bp3-intent-warning{
    background-color:#d9822b; }
  .bp3-slider-progress.bp3-intent-danger{
    background-color:#db3737; }

.bp3-slider-handle{
  background-color:#f5f8fa;
  background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.8)), to(rgba(255, 255, 255, 0)));
  background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
  -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
          box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
  color:#182026;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
  cursor:pointer;
  height:16px;
  left:0;
  position:absolute;
  top:0;
  width:16px; }
  .bp3-slider-handle:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1); }
  .bp3-slider-handle:active, .bp3-slider-handle.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
  .bp3-slider-handle:disabled, .bp3-slider-handle.bp3-disabled{
    background-color:rgba(206, 217, 224, 0.5);
    background-image:none;
    -webkit-box-shadow:none;
            box-shadow:none;
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed;
    outline:none; }
    .bp3-slider-handle:disabled.bp3-active, .bp3-slider-handle:disabled.bp3-active:hover, .bp3-slider-handle.bp3-disabled.bp3-active, .bp3-slider-handle.bp3-disabled.bp3-active:hover{
      background:rgba(206, 217, 224, 0.7); }
  .bp3-slider-handle:focus{
    z-index:1; }
  .bp3-slider-handle:hover{
    background-clip:padding-box;
    background-color:#ebf1f5;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 -1px 0 rgba(16, 22, 26, 0.1);
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 1px 1px rgba(16, 22, 26, 0.2);
    cursor:-webkit-grab;
    cursor:grab;
    z-index:2; }
  .bp3-slider-handle.bp3-active{
    background-color:#d8e1e8;
    background-image:none;
    -webkit-box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
            box-shadow:inset 0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 2px rgba(16, 22, 26, 0.2);
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), inset 0 1px 1px rgba(16, 22, 26, 0.1);
    cursor:-webkit-grabbing;
    cursor:grabbing; }
  .bp3-disabled .bp3-slider-handle{
    background:#bfccd6;
    -webkit-box-shadow:none;
            box-shadow:none;
    pointer-events:none; }
  .bp3-dark .bp3-slider-handle{
    background-color:#394b59;
    background-image:-webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0.05)), to(rgba(255, 255, 255, 0)));
    background-image:linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0));
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
    color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover, .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      color:#f5f8fa; }
    .bp3-dark .bp3-slider-handle:hover{
      background-color:#30404d;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-slider-handle:active, .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#202b33;
      background-image:none;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.6), inset 0 1px 2px rgba(16, 22, 26, 0.2); }
    .bp3-dark .bp3-slider-handle:disabled, .bp3-dark .bp3-slider-handle.bp3-disabled{
      background-color:rgba(57, 75, 89, 0.5);
      background-image:none;
      -webkit-box-shadow:none;
              box-shadow:none;
      color:rgba(167, 182, 194, 0.6); }
      .bp3-dark .bp3-slider-handle:disabled.bp3-active, .bp3-dark .bp3-slider-handle.bp3-disabled.bp3-active{
        background:rgba(57, 75, 89, 0.7); }
    .bp3-dark .bp3-slider-handle .bp3-button-spinner .bp3-spinner-head{
      background:rgba(16, 22, 26, 0.5);
      stroke:#8a9ba8; }
    .bp3-dark .bp3-slider-handle, .bp3-dark .bp3-slider-handle:hover{
      background-color:#394b59; }
    .bp3-dark .bp3-slider-handle.bp3-active{
      background-color:#293742; }
  .bp3-dark .bp3-disabled .bp3-slider-handle{
    background:#5c7080;
    border-color:#5c7080;
    -webkit-box-shadow:none;
            box-shadow:none; }
  .bp3-slider-handle .bp3-slider-label{
    background:#394b59;
    border-radius:3px;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
    color:#f5f8fa;
    margin-left:8px; }
    .bp3-dark .bp3-slider-handle .bp3-slider-label{
      background:#e1e8ed;
      -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
      color:#394b59; }
    .bp3-disabled .bp3-slider-handle .bp3-slider-label{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-slider-handle.bp3-start, .bp3-slider-handle.bp3-end{
    width:8px; }
  .bp3-slider-handle.bp3-start{
    border-bottom-right-radius:0;
    border-top-right-radius:0; }
  .bp3-slider-handle.bp3-end{
    border-bottom-left-radius:0;
    border-top-left-radius:0;
    margin-left:8px; }
    .bp3-slider-handle.bp3-end .bp3-slider-label{
      margin-left:0; }

.bp3-slider-label{
  -webkit-transform:translate(-50%, 20px);
          transform:translate(-50%, 20px);
  display:inline-block;
  font-size:12px;
  line-height:1;
  padding:2px 5px;
  position:absolute;
  vertical-align:top; }

.bp3-slider.bp3-vertical{
  height:150px;
  min-width:40px;
  width:40px; }
  .bp3-slider.bp3-vertical .bp3-slider-track,
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    bottom:0;
    height:auto;
    left:5px;
    top:0;
    width:6px; }
  .bp3-slider.bp3-vertical .bp3-slider-progress{
    top:auto; }
  .bp3-slider.bp3-vertical .bp3-slider-label{
    -webkit-transform:translate(20px, 50%);
            transform:translate(20px, 50%); }
  .bp3-slider.bp3-vertical .bp3-slider-handle{
    top:auto; }
    .bp3-slider.bp3-vertical .bp3-slider-handle .bp3-slider-label{
      margin-left:0;
      margin-top:-8px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end, .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      height:8px;
      margin-left:0;
      width:16px; }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start{
      border-bottom-right-radius:3px;
      border-top-left-radius:0; }
      .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-start .bp3-slider-label{
        -webkit-transform:translate(20px);
                transform:translate(20px); }
    .bp3-slider.bp3-vertical .bp3-slider-handle.bp3-end{
      border-bottom-left-radius:0;
      border-bottom-right-radius:0;
      border-top-left-radius:3px;
      margin-bottom:8px; }

@-webkit-keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

@keyframes pt-spinner-animation{
  from{
    -webkit-transform:rotate(0deg);
            transform:rotate(0deg); }
  to{
    -webkit-transform:rotate(360deg);
            transform:rotate(360deg); } }

.bp3-spinner{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  overflow:visible;
  vertical-align:middle; }
  .bp3-spinner svg{
    display:block; }
  .bp3-spinner path{
    fill-opacity:0; }
  .bp3-spinner .bp3-spinner-head{
    stroke:rgba(92, 112, 128, 0.8);
    stroke-linecap:round;
    -webkit-transform-origin:center;
            transform-origin:center;
    -webkit-transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
    transition:stroke-dashoffset 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-spinner .bp3-spinner-track{
    stroke:rgba(92, 112, 128, 0.2); }

.bp3-spinner-animation{
  -webkit-animation:pt-spinner-animation 500ms linear infinite;
          animation:pt-spinner-animation 500ms linear infinite; }
  .bp3-no-spin > .bp3-spinner-animation{
    -webkit-animation:none;
            animation:none; }

.bp3-dark .bp3-spinner .bp3-spinner-head{
  stroke:#8a9ba8; }

.bp3-dark .bp3-spinner .bp3-spinner-track{
  stroke:rgba(16, 22, 26, 0.5); }

.bp3-spinner.bp3-intent-primary .bp3-spinner-head{
  stroke:#137cbd; }

.bp3-spinner.bp3-intent-success .bp3-spinner-head{
  stroke:#0f9960; }

.bp3-spinner.bp3-intent-warning .bp3-spinner-head{
  stroke:#d9822b; }

.bp3-spinner.bp3-intent-danger .bp3-spinner-head{
  stroke:#db3737; }
.bp3-tabs.bp3-vertical{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex; }
  .bp3-tabs.bp3-vertical > .bp3-tab-list{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start;
    -webkit-box-orient:vertical;
    -webkit-box-direction:normal;
        -ms-flex-direction:column;
            flex-direction:column; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab{
      border-radius:3px;
      padding:0 10px;
      width:100%; }
      .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab[aria-selected="true"]{
        background-color:rgba(19, 124, 189, 0.2);
        -webkit-box-shadow:none;
                box-shadow:none; }
    .bp3-tabs.bp3-vertical > .bp3-tab-list .bp3-tab-indicator-wrapper .bp3-tab-indicator{
      background-color:rgba(19, 124, 189, 0.2);
      border-radius:3px;
      bottom:0;
      height:auto;
      left:0;
      right:0;
      top:0; }
  .bp3-tabs.bp3-vertical > .bp3-tab-panel{
    margin-top:0;
    padding-left:20px; }

.bp3-tab-list{
  -webkit-box-align:end;
      -ms-flex-align:end;
          align-items:flex-end;
  border:none;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  list-style:none;
  margin:0;
  padding:0;
  position:relative; }
  .bp3-tab-list > *:not(:last-child){
    margin-right:20px; }

.bp3-tab{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  color:#182026;
  cursor:pointer;
  -webkit-box-flex:0;
      -ms-flex:0 0 auto;
          flex:0 0 auto;
  font-size:14px;
  line-height:30px;
  max-width:100%;
  position:relative;
  vertical-align:top; }
  .bp3-tab a{
    color:inherit;
    display:block;
    text-decoration:none; }
  .bp3-tab-indicator-wrapper ~ .bp3-tab{
    background-color:transparent !important;
    -webkit-box-shadow:none !important;
            box-shadow:none !important; }
  .bp3-tab[aria-disabled="true"]{
    color:rgba(92, 112, 128, 0.6);
    cursor:not-allowed; }
  .bp3-tab[aria-selected="true"]{
    border-radius:0;
    -webkit-box-shadow:inset 0 -3px 0 #106ba3;
            box-shadow:inset 0 -3px 0 #106ba3; }
  .bp3-tab[aria-selected="true"], .bp3-tab:not([aria-disabled="true"]):hover{
    color:#106ba3; }
  .bp3-tab:focus{
    -moz-outline-radius:0; }
  .bp3-large > .bp3-tab{
    font-size:16px;
    line-height:40px; }

.bp3-tab-panel{
  margin-top:20px; }
  .bp3-tab-panel[aria-hidden="true"]{
    display:none; }

.bp3-tab-indicator-wrapper{
  left:0;
  pointer-events:none;
  position:absolute;
  top:0;
  -webkit-transform:translateX(0), translateY(0);
          transform:translateX(0), translateY(0);
  -webkit-transition:height, width, -webkit-transform;
  transition:height, width, -webkit-transform;
  transition:height, transform, width;
  transition:height, transform, width, -webkit-transform;
  -webkit-transition-duration:200ms;
          transition-duration:200ms;
  -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
          transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tab-indicator-wrapper .bp3-tab-indicator{
    background-color:#106ba3;
    bottom:0;
    height:3px;
    left:0;
    position:absolute;
    right:0; }
  .bp3-tab-indicator-wrapper.bp3-no-animation{
    -webkit-transition:none;
    transition:none; }

.bp3-dark .bp3-tab{
  color:#f5f8fa; }
  .bp3-dark .bp3-tab[aria-disabled="true"]{
    color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tab[aria-selected="true"]{
    -webkit-box-shadow:inset 0 -3px 0 #48aff0;
            box-shadow:inset 0 -3px 0 #48aff0; }
  .bp3-dark .bp3-tab[aria-selected="true"], .bp3-dark .bp3-tab:not([aria-disabled="true"]):hover{
    color:#48aff0; }

.bp3-dark .bp3-tab-indicator{
  background-color:#48aff0; }

.bp3-flex-expander{
  -webkit-box-flex:1;
      -ms-flex:1 1;
          flex:1 1; }
.bp3-tag{
  display:-webkit-inline-box;
  display:-ms-inline-flexbox;
  display:inline-flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  background-color:#5c7080;
  border:none;
  border-radius:3px;
  -webkit-box-shadow:none;
          box-shadow:none;
  color:#f5f8fa;
  font-size:12px;
  line-height:16px;
  max-width:100%;
  min-height:20px;
  min-width:20px;
  padding:2px 6px;
  position:relative; }
  .bp3-tag.bp3-interactive{
    cursor:pointer; }
    .bp3-tag.bp3-interactive:hover{
      background-color:rgba(92, 112, 128, 0.85); }
    .bp3-tag.bp3-interactive.bp3-active, .bp3-tag.bp3-interactive:active{
      background-color:rgba(92, 112, 128, 0.7); }
  .bp3-tag > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag > .bp3-fill{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag::before,
  .bp3-tag > *{
    margin-right:4px; }
  .bp3-tag:empty::before,
  .bp3-tag > :last-child{
    margin-right:0; }
  .bp3-tag:focus{
    outline:rgba(19, 124, 189, 0.6) auto 2px;
    outline-offset:0;
    -moz-outline-radius:6px; }
  .bp3-tag.bp3-round{
    border-radius:30px;
    padding-left:8px;
    padding-right:8px; }
  .bp3-dark .bp3-tag{
    background-color:#bfccd6;
    color:#182026; }
    .bp3-dark .bp3-tag.bp3-interactive{
      cursor:pointer; }
      .bp3-dark .bp3-tag.bp3-interactive:hover{
        background-color:rgba(191, 204, 214, 0.85); }
      .bp3-dark .bp3-tag.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-interactive:active{
        background-color:rgba(191, 204, 214, 0.7); }
    .bp3-dark .bp3-tag > .bp3-icon, .bp3-dark .bp3-tag .bp3-icon-standard, .bp3-dark .bp3-tag .bp3-icon-large{
      fill:currentColor; }
  .bp3-tag > .bp3-icon, .bp3-tag .bp3-icon-standard, .bp3-tag .bp3-icon-large{
    fill:#ffffff; }
  .bp3-tag.bp3-large,
  .bp3-large .bp3-tag{
    font-size:14px;
    line-height:20px;
    min-height:30px;
    min-width:30px;
    padding:5px 10px; }
    .bp3-tag.bp3-large::before,
    .bp3-tag.bp3-large > *,
    .bp3-large .bp3-tag::before,
    .bp3-large .bp3-tag > *{
      margin-right:7px; }
    .bp3-tag.bp3-large:empty::before,
    .bp3-tag.bp3-large > :last-child,
    .bp3-large .bp3-tag:empty::before,
    .bp3-large .bp3-tag > :last-child{
      margin-right:0; }
    .bp3-tag.bp3-large.bp3-round,
    .bp3-large .bp3-tag.bp3-round{
      padding-left:12px;
      padding-right:12px; }
  .bp3-tag.bp3-intent-primary{
    background:#137cbd;
    color:#ffffff; }
    .bp3-tag.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.85); }
      .bp3-tag.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.7); }
  .bp3-tag.bp3-intent-success{
    background:#0f9960;
    color:#ffffff; }
    .bp3-tag.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.85); }
      .bp3-tag.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.7); }
  .bp3-tag.bp3-intent-warning{
    background:#d9822b;
    color:#ffffff; }
    .bp3-tag.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.85); }
      .bp3-tag.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.7); }
  .bp3-tag.bp3-intent-danger{
    background:#db3737;
    color:#ffffff; }
    .bp3-tag.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.85); }
      .bp3-tag.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.7); }
  .bp3-tag.bp3-fill{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    width:100%; }
  .bp3-tag.bp3-minimal > .bp3-icon, .bp3-tag.bp3-minimal .bp3-icon-standard, .bp3-tag.bp3-minimal .bp3-icon-large{
    fill:#5c7080; }
  .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
    background-color:rgba(138, 155, 168, 0.2);
    color:#182026; }
    .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
        background-color:rgba(92, 112, 128, 0.3); }
      .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
        background-color:rgba(92, 112, 128, 0.4); }
    .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]){
      color:#f5f8fa; }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:hover{
          background-color:rgba(191, 204, 214, 0.3); }
        .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]).bp3-interactive:active{
          background-color:rgba(191, 204, 214, 0.4); }
      .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) > .bp3-icon, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-standard, .bp3-dark .bp3-tag.bp3-minimal:not([class*="bp3-intent-"]) .bp3-icon-large{
        fill:#a7b6c2; }
  .bp3-tag.bp3-minimal.bp3-intent-primary{
    background-color:rgba(19, 124, 189, 0.15);
    color:#106ba3; }
    .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
        background-color:rgba(19, 124, 189, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
        background-color:rgba(19, 124, 189, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-primary > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-primary .bp3-icon-large{
      fill:#137cbd; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary{
      background-color:rgba(19, 124, 189, 0.25);
      color:#48aff0; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:hover{
          background-color:rgba(19, 124, 189, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-primary.bp3-interactive:active{
          background-color:rgba(19, 124, 189, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-success{
    background-color:rgba(15, 153, 96, 0.15);
    color:#0d8050; }
    .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
        background-color:rgba(15, 153, 96, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
        background-color:rgba(15, 153, 96, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-success > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-success .bp3-icon-large{
      fill:#0f9960; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success{
      background-color:rgba(15, 153, 96, 0.25);
      color:#3dcc91; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:hover{
          background-color:rgba(15, 153, 96, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-success.bp3-interactive:active{
          background-color:rgba(15, 153, 96, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-warning{
    background-color:rgba(217, 130, 43, 0.15);
    color:#bf7326; }
    .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
        background-color:rgba(217, 130, 43, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
        background-color:rgba(217, 130, 43, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-warning > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-warning .bp3-icon-large{
      fill:#d9822b; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning{
      background-color:rgba(217, 130, 43, 0.25);
      color:#ffb366; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:hover{
          background-color:rgba(217, 130, 43, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-warning.bp3-interactive:active{
          background-color:rgba(217, 130, 43, 0.45); }
  .bp3-tag.bp3-minimal.bp3-intent-danger{
    background-color:rgba(219, 55, 55, 0.15);
    color:#c23030; }
    .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
      cursor:pointer; }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
        background-color:rgba(219, 55, 55, 0.25); }
      .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
        background-color:rgba(219, 55, 55, 0.35); }
    .bp3-tag.bp3-minimal.bp3-intent-danger > .bp3-icon, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-standard, .bp3-tag.bp3-minimal.bp3-intent-danger .bp3-icon-large{
      fill:#db3737; }
    .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger{
      background-color:rgba(219, 55, 55, 0.25);
      color:#ff7373; }
      .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive{
        cursor:pointer; }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:hover{
          background-color:rgba(219, 55, 55, 0.35); }
        .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive.bp3-active, .bp3-dark .bp3-tag.bp3-minimal.bp3-intent-danger.bp3-interactive:active{
          background-color:rgba(219, 55, 55, 0.45); }

.bp3-tag-remove{
  background:none;
  border:none;
  color:inherit;
  cursor:pointer;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin-bottom:-2px;
  margin-right:-6px !important;
  margin-top:-2px;
  opacity:0.5;
  padding:2px;
  padding-left:0; }
  .bp3-tag-remove:hover{
    background:none;
    opacity:0.8;
    text-decoration:none; }
  .bp3-tag-remove:active{
    opacity:1; }
  .bp3-tag-remove:empty::before{
    font-family:"Icons16", sans-serif;
    font-size:16px;
    font-style:normal;
    font-weight:400;
    line-height:1;
    -moz-osx-font-smoothing:grayscale;
    -webkit-font-smoothing:antialiased;
    content:""; }
  .bp3-large .bp3-tag-remove{
    margin-right:-10px !important;
    padding:0 5px 0 0; }
    .bp3-large .bp3-tag-remove:empty::before{
      font-family:"Icons20", sans-serif;
      font-size:20px;
      font-style:normal;
      font-weight:400;
      line-height:1; }
.bp3-tag-input{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:horizontal;
  -webkit-box-direction:normal;
      -ms-flex-direction:row;
          flex-direction:row;
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  cursor:text;
  height:auto;
  line-height:inherit;
  min-height:30px;
  padding-left:5px;
  padding-right:0; }
  .bp3-tag-input > *{
    -webkit-box-flex:0;
        -ms-flex-positive:0;
            flex-grow:0;
    -ms-flex-negative:0;
        flex-shrink:0; }
  .bp3-tag-input > .bp3-tag-input-values{
    -webkit-box-flex:1;
        -ms-flex-positive:1;
            flex-grow:1;
    -ms-flex-negative:1;
        flex-shrink:1; }
  .bp3-tag-input .bp3-tag-input-icon{
    color:#5c7080;
    margin-left:2px;
    margin-right:7px;
    margin-top:7px; }
  .bp3-tag-input .bp3-tag-input-values{
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-orient:horizontal;
    -webkit-box-direction:normal;
        -ms-flex-direction:row;
            flex-direction:row;
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    -ms-flex-item-align:stretch;
        align-self:stretch;
    -ms-flex-wrap:wrap;
        flex-wrap:wrap;
    margin-right:7px;
    margin-top:5px;
    min-width:0; }
    .bp3-tag-input .bp3-tag-input-values > *{
      -webkit-box-flex:0;
          -ms-flex-positive:0;
              flex-grow:0;
      -ms-flex-negative:0;
          flex-shrink:0; }
    .bp3-tag-input .bp3-tag-input-values > .bp3-fill{
      -webkit-box-flex:1;
          -ms-flex-positive:1;
              flex-grow:1;
      -ms-flex-negative:1;
          flex-shrink:1; }
    .bp3-tag-input .bp3-tag-input-values::before,
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-right:5px; }
    .bp3-tag-input .bp3-tag-input-values:empty::before,
    .bp3-tag-input .bp3-tag-input-values > :last-child{
      margin-right:0; }
    .bp3-tag-input .bp3-tag-input-values:first-child .bp3-input-ghost:first-child{
      padding-left:5px; }
    .bp3-tag-input .bp3-tag-input-values > *{
      margin-bottom:5px; }
  .bp3-tag-input .bp3-tag{
    overflow-wrap:break-word; }
    .bp3-tag-input .bp3-tag.bp3-active{
      outline:rgba(19, 124, 189, 0.6) auto 2px;
      outline-offset:0;
      -moz-outline-radius:6px; }
  .bp3-tag-input .bp3-input-ghost{
    -webkit-box-flex:1;
        -ms-flex:1 1 auto;
            flex:1 1 auto;
    line-height:20px;
    width:80px; }
    .bp3-tag-input .bp3-input-ghost:disabled, .bp3-tag-input .bp3-input-ghost.bp3-disabled{
      cursor:not-allowed; }
  .bp3-tag-input .bp3-button,
  .bp3-tag-input .bp3-spinner{
    margin:3px;
    margin-left:0; }
  .bp3-tag-input .bp3-button{
    min-height:24px;
    min-width:24px;
    padding:0 7px; }
  .bp3-tag-input.bp3-large{
    height:auto;
    min-height:40px; }
    .bp3-tag-input.bp3-large::before,
    .bp3-tag-input.bp3-large > *{
      margin-right:10px; }
    .bp3-tag-input.bp3-large:empty::before,
    .bp3-tag-input.bp3-large > :last-child{
      margin-right:0; }
    .bp3-tag-input.bp3-large .bp3-tag-input-icon{
      margin-left:5px;
      margin-top:10px; }
    .bp3-tag-input.bp3-large .bp3-input-ghost{
      line-height:30px; }
    .bp3-tag-input.bp3-large .bp3-button{
      min-height:30px;
      min-width:30px;
      padding:5px 10px;
      margin:5px;
      margin-left:0; }
    .bp3-tag-input.bp3-large .bp3-spinner{
      margin:8px;
      margin-left:0; }
  .bp3-tag-input.bp3-active{
    background-color:#ffffff;
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
    .bp3-tag-input.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.2); }
  .bp3-dark .bp3-tag-input .bp3-tag-input-icon, .bp3-tag-input.bp3-dark .bp3-tag-input-icon{
    color:#a7b6c2; }
  .bp3-dark .bp3-tag-input .bp3-input-ghost, .bp3-tag-input.bp3-dark .bp3-input-ghost{
    color:#f5f8fa; }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-webkit-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-webkit-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-moz-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-moz-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost:-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost:-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::-ms-input-placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::-ms-input-placeholder{
      color:rgba(167, 182, 194, 0.6); }
    .bp3-dark .bp3-tag-input .bp3-input-ghost::placeholder, .bp3-tag-input.bp3-dark .bp3-input-ghost::placeholder{
      color:rgba(167, 182, 194, 0.6); }
  .bp3-dark .bp3-tag-input.bp3-active, .bp3-tag-input.bp3-dark.bp3-active{
    background-color:rgba(16, 22, 26, 0.3);
    -webkit-box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px #137cbd, 0 0 0 1px #137cbd, 0 0 0 3px rgba(19, 124, 189, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-primary, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-primary{
      -webkit-box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #106ba3, 0 0 0 3px rgba(16, 107, 163, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-success, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-success{
      -webkit-box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #0d8050, 0 0 0 3px rgba(13, 128, 80, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-warning, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-warning{
      -webkit-box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #bf7326, 0 0 0 3px rgba(191, 115, 38, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }
    .bp3-dark .bp3-tag-input.bp3-active.bp3-intent-danger, .bp3-tag-input.bp3-dark.bp3-active.bp3-intent-danger{
      -webkit-box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4);
              box-shadow:0 0 0 1px #c23030, 0 0 0 3px rgba(194, 48, 48, 0.3), inset 0 0 0 1px rgba(16, 22, 26, 0.3), inset 0 1px 1px rgba(16, 22, 26, 0.4); }

.bp3-input-ghost{
  background:none;
  border:none;
  -webkit-box-shadow:none;
          box-shadow:none;
  padding:0; }
  .bp3-input-ghost::-webkit-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::-moz-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost:-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::-ms-input-placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost::placeholder{
    color:rgba(92, 112, 128, 0.6);
    opacity:1; }
  .bp3-input-ghost:focus{
    outline:none !important; }
.bp3-toast{
  -webkit-box-align:start;
      -ms-flex-align:start;
          align-items:flex-start;
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  margin:20px 0 0;
  max-width:500px;
  min-width:300px;
  pointer-events:all;
  position:relative !important; }
  .bp3-toast.bp3-toast-enter, .bp3-toast.bp3-toast-appear{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active, .bp3-toast.bp3-toast-appear-active{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-toast.bp3-toast-enter ~ .bp3-toast, .bp3-toast.bp3-toast-appear ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px); }
  .bp3-toast.bp3-toast-enter-active ~ .bp3-toast, .bp3-toast.bp3-toast-appear-active ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11);
            transition-timing-function:cubic-bezier(0.54, 1.12, 0.38, 1.11); }
  .bp3-toast.bp3-toast-exit{
    opacity:1;
    -webkit-filter:blur(0);
            filter:blur(0); }
  .bp3-toast.bp3-toast-exit-active{
    opacity:0;
    -webkit-filter:blur(10px);
            filter:blur(10px);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:300ms;
            transition-duration:300ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:opacity, filter;
    transition-property:opacity, filter, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-toast.bp3-toast-exit ~ .bp3-toast{
    -webkit-transform:translateY(0);
            transform:translateY(0); }
  .bp3-toast.bp3-toast-exit-active ~ .bp3-toast{
    -webkit-transform:translateY(-40px);
            transform:translateY(-40px);
    -webkit-transition-delay:50ms;
            transition-delay:50ms;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-toast .bp3-button-group{
    -webkit-box-flex:0;
        -ms-flex:0 0 auto;
            flex:0 0 auto;
    padding:5px;
    padding-left:0; }
  .bp3-toast > .bp3-icon{
    color:#5c7080;
    margin:12px;
    margin-right:0; }
  .bp3-toast.bp3-dark,
  .bp3-dark .bp3-toast{
    background-color:#394b59;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-toast.bp3-dark > .bp3-icon,
    .bp3-dark .bp3-toast > .bp3-icon{
      color:#a7b6c2; }
  .bp3-toast[class*="bp3-intent-"] a{
    color:rgba(255, 255, 255, 0.7); }
    .bp3-toast[class*="bp3-intent-"] a:hover{
      color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] > .bp3-icon{
    color:#ffffff; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button, .bp3-toast[class*="bp3-intent-"] .bp3-button::before,
  .bp3-toast[class*="bp3-intent-"] .bp3-button .bp3-icon, .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    color:rgba(255, 255, 255, 0.7) !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:focus{
    outline-color:rgba(255, 255, 255, 0.5); }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:hover{
    background-color:rgba(255, 255, 255, 0.15) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button:active{
    background-color:rgba(255, 255, 255, 0.3) !important;
    color:#ffffff !important; }
  .bp3-toast[class*="bp3-intent-"] .bp3-button::after{
    background:rgba(255, 255, 255, 0.3) !important; }
  .bp3-toast.bp3-intent-primary{
    background-color:#137cbd;
    color:#ffffff; }
  .bp3-toast.bp3-intent-success{
    background-color:#0f9960;
    color:#ffffff; }
  .bp3-toast.bp3-intent-warning{
    background-color:#d9822b;
    color:#ffffff; }
  .bp3-toast.bp3-intent-danger{
    background-color:#db3737;
    color:#ffffff; }

.bp3-toast-message{
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  padding:11px;
  word-break:break-word; }

.bp3-toast-container{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box !important;
  display:-ms-flexbox !important;
  display:flex !important;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
      -ms-flex-direction:column;
          flex-direction:column;
  left:0;
  overflow:hidden;
  padding:0 20px 20px;
  pointer-events:none;
  position:fixed;
  right:0;
  z-index:40; }
  .bp3-toast-container.bp3-toast-container-top{
    top:0; }
  .bp3-toast-container.bp3-toast-container-bottom{
    bottom:0;
    -webkit-box-orient:vertical;
    -webkit-box-direction:reverse;
        -ms-flex-direction:column-reverse;
            flex-direction:column-reverse;
    top:auto; }
  .bp3-toast-container.bp3-toast-container-left{
    -webkit-box-align:start;
        -ms-flex-align:start;
            align-items:flex-start; }
  .bp3-toast-container.bp3-toast-container-right{
    -webkit-box-align:end;
        -ms-flex-align:end;
            align-items:flex-end; }

.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-enter:not(.bp3-toast-enter-active) ~ .bp3-toast, .bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active),
.bp3-toast-container-bottom .bp3-toast.bp3-toast-appear:not(.bp3-toast-appear-active) ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-exit-active ~ .bp3-toast,
.bp3-toast-container-bottom .bp3-toast.bp3-toast-leave-active ~ .bp3-toast{
  -webkit-transform:translateY(60px);
          transform:translateY(60px); }
.bp3-tooltip{
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  -webkit-transform:scale(1);
          transform:scale(1); }
  .bp3-tooltip .bp3-popover-arrow{
    height:22px;
    position:absolute;
    width:22px; }
    .bp3-tooltip .bp3-popover-arrow::before{
      height:14px;
      margin:4px;
      width:14px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip{
    margin-bottom:11px;
    margin-top:-11px; }
    .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
      bottom:-8px; }
      .bp3-tether-element-attached-bottom.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(-90deg);
                transform:rotate(-90deg); }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip{
    margin-left:11px; }
    .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
      left:-8px; }
      .bp3-tether-element-attached-left.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(0);
                transform:rotate(0); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip{
    margin-top:11px; }
    .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
      top:-8px; }
      .bp3-tether-element-attached-top.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(90deg);
                transform:rotate(90deg); }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip{
    margin-left:-11px;
    margin-right:11px; }
    .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
      right:-8px; }
      .bp3-tether-element-attached-right.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow svg{
        -webkit-transform:rotate(180deg);
                transform:rotate(180deg); }
  .bp3-tether-element-attached-middle > .bp3-tooltip > .bp3-popover-arrow{
    top:50%;
    -webkit-transform:translateY(-50%);
            transform:translateY(-50%); }
  .bp3-tether-element-attached-center > .bp3-tooltip > .bp3-popover-arrow{
    right:50%;
    -webkit-transform:translateX(50%);
            transform:translateX(50%); }
  .bp3-tether-element-attached-top.bp3-tether-target-attached-top > .bp3-tooltip > .bp3-popover-arrow{
    top:-0.22183px; }
  .bp3-tether-element-attached-right.bp3-tether-target-attached-right > .bp3-tooltip > .bp3-popover-arrow{
    right:-0.22183px; }
  .bp3-tether-element-attached-left.bp3-tether-target-attached-left > .bp3-tooltip > .bp3-popover-arrow{
    left:-0.22183px; }
  .bp3-tether-element-attached-bottom.bp3-tether-target-attached-bottom > .bp3-tooltip > .bp3-popover-arrow{
    bottom:-0.22183px; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:top left;
            transform-origin:top left; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:top center;
            transform-origin:top center; }
  .bp3-tether-element-attached-top.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:top right;
            transform-origin:top right; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:center left;
            transform-origin:center left; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:center center;
            transform-origin:center center; }
  .bp3-tether-element-attached-middle.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:center right;
            transform-origin:center right; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-left > .bp3-tooltip{
    -webkit-transform-origin:bottom left;
            transform-origin:bottom left; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-center > .bp3-tooltip{
    -webkit-transform-origin:bottom center;
            transform-origin:bottom center; }
  .bp3-tether-element-attached-bottom.bp3-tether-element-attached-right > .bp3-tooltip{
    -webkit-transform-origin:bottom right;
            transform-origin:bottom right; }
  .bp3-tooltip .bp3-popover-content{
    background:#394b59;
    color:#f5f8fa; }
  .bp3-tooltip .bp3-popover-arrow::before{
    -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2);
            box-shadow:1px 1px 6px rgba(16, 22, 26, 0.2); }
  .bp3-tooltip .bp3-popover-arrow-border{
    fill:#10161a;
    fill-opacity:0.1; }
  .bp3-tooltip .bp3-popover-arrow-fill{
    fill:#394b59; }
  .bp3-popover-enter > .bp3-tooltip, .bp3-popover-appear > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8); }
  .bp3-popover-enter-active > .bp3-tooltip, .bp3-popover-appear-active > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-popover-exit > .bp3-tooltip{
    -webkit-transform:scale(1);
            transform:scale(1); }
  .bp3-popover-exit-active > .bp3-tooltip{
    -webkit-transform:scale(0.8);
            transform:scale(0.8);
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:100ms;
            transition-duration:100ms;
    -webkit-transition-property:-webkit-transform;
    transition-property:-webkit-transform;
    transition-property:transform;
    transition-property:transform, -webkit-transform;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tooltip .bp3-popover-content{
    padding:10px 12px; }
  .bp3-tooltip.bp3-dark,
  .bp3-dark .bp3-tooltip{
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 2px 4px rgba(16, 22, 26, 0.4), 0 8px 24px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-content,
    .bp3-dark .bp3-tooltip .bp3-popover-content{
      background:#e1e8ed;
      color:#394b59; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow::before,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow::before{
      -webkit-box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4);
              box-shadow:1px 1px 6px rgba(16, 22, 26, 0.4); }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-border,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-border{
      fill:#10161a;
      fill-opacity:0.2; }
    .bp3-tooltip.bp3-dark .bp3-popover-arrow-fill,
    .bp3-dark .bp3-tooltip .bp3-popover-arrow-fill{
      fill:#e1e8ed; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-content{
    background:#137cbd;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-primary .bp3-popover-arrow-fill{
    fill:#137cbd; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-content{
    background:#0f9960;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-success .bp3-popover-arrow-fill{
    fill:#0f9960; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-content{
    background:#d9822b;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-warning .bp3-popover-arrow-fill{
    fill:#d9822b; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-content{
    background:#db3737;
    color:#ffffff; }
  .bp3-tooltip.bp3-intent-danger .bp3-popover-arrow-fill{
    fill:#db3737; }

.bp3-tooltip-indicator{
  border-bottom:dotted 1px;
  cursor:help; }
.bp3-tree .bp3-icon, .bp3-tree .bp3-icon-standard, .bp3-tree .bp3-icon-large{
  color:#5c7080; }
  .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-tree .bp3-icon.bp3-intent-success, .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-tree-node-list{
  list-style:none;
  margin:0;
  padding-left:0; }

.bp3-tree-root{
  background-color:transparent;
  cursor:default;
  padding-left:0;
  position:relative; }

.bp3-tree-node-content-0{
  padding-left:0px; }

.bp3-tree-node-content-1{
  padding-left:23px; }

.bp3-tree-node-content-2{
  padding-left:46px; }

.bp3-tree-node-content-3{
  padding-left:69px; }

.bp3-tree-node-content-4{
  padding-left:92px; }

.bp3-tree-node-content-5{
  padding-left:115px; }

.bp3-tree-node-content-6{
  padding-left:138px; }

.bp3-tree-node-content-7{
  padding-left:161px; }

.bp3-tree-node-content-8{
  padding-left:184px; }

.bp3-tree-node-content-9{
  padding-left:207px; }

.bp3-tree-node-content-10{
  padding-left:230px; }

.bp3-tree-node-content-11{
  padding-left:253px; }

.bp3-tree-node-content-12{
  padding-left:276px; }

.bp3-tree-node-content-13{
  padding-left:299px; }

.bp3-tree-node-content-14{
  padding-left:322px; }

.bp3-tree-node-content-15{
  padding-left:345px; }

.bp3-tree-node-content-16{
  padding-left:368px; }

.bp3-tree-node-content-17{
  padding-left:391px; }

.bp3-tree-node-content-18{
  padding-left:414px; }

.bp3-tree-node-content-19{
  padding-left:437px; }

.bp3-tree-node-content-20{
  padding-left:460px; }

.bp3-tree-node-content{
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  height:30px;
  padding-right:5px;
  width:100%; }
  .bp3-tree-node-content:hover{
    background-color:rgba(191, 204, 214, 0.4); }

.bp3-tree-node-caret,
.bp3-tree-node-caret-none{
  min-width:30px; }

.bp3-tree-node-caret{
  color:#5c7080;
  cursor:pointer;
  padding:7px;
  -webkit-transform:rotate(0deg);
          transform:rotate(0deg);
  -webkit-transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:-webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9);
  transition:transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9), -webkit-transform 200ms cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-tree-node-caret:hover{
    color:#182026; }
  .bp3-dark .bp3-tree-node-caret{
    color:#a7b6c2; }
    .bp3-dark .bp3-tree-node-caret:hover{
      color:#f5f8fa; }
  .bp3-tree-node-caret.bp3-tree-node-caret-open{
    -webkit-transform:rotate(90deg);
            transform:rotate(90deg); }
  .bp3-tree-node-caret.bp3-icon-standard::before{
    content:""; }

.bp3-tree-node-icon{
  margin-right:7px;
  position:relative; }

.bp3-tree-node-label{
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  word-wrap:normal;
  -webkit-box-flex:1;
      -ms-flex:1 1 auto;
          flex:1 1 auto;
  position:relative;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-label span{
    display:inline; }

.bp3-tree-node-secondary-label{
  padding:0 5px;
  -webkit-user-select:none;
     -moz-user-select:none;
      -ms-user-select:none;
          user-select:none; }
  .bp3-tree-node-secondary-label .bp3-popover-wrapper,
  .bp3-tree-node-secondary-label .bp3-popover-target{
    -webkit-box-align:center;
        -ms-flex-align:center;
            align-items:center;
    display:-webkit-box;
    display:-ms-flexbox;
    display:flex; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-content{
  background-color:inherit;
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-tree-node.bp3-disabled .bp3-tree-node-caret,
.bp3-tree-node.bp3-disabled .bp3-tree-node-icon{
  color:rgba(92, 112, 128, 0.6);
  cursor:not-allowed; }

.bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content,
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-standard, .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-icon-large{
    color:#ffffff; }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret::before{
    color:rgba(255, 255, 255, 0.7); }
  .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content .bp3-tree-node-caret:hover::before{
    color:#ffffff; }

.bp3-dark .bp3-tree-node-content:hover{
  background-color:rgba(92, 112, 128, 0.3); }

.bp3-dark .bp3-tree .bp3-icon, .bp3-dark .bp3-tree .bp3-icon-standard, .bp3-dark .bp3-tree .bp3-icon-large{
  color:#a7b6c2; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-primary, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-primary{
    color:#137cbd; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-success, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-success{
    color:#0f9960; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-warning, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-warning{
    color:#d9822b; }
  .bp3-dark .bp3-tree .bp3-icon.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-standard.bp3-intent-danger, .bp3-dark .bp3-tree .bp3-icon-large.bp3-intent-danger{
    color:#db3737; }

.bp3-dark .bp3-tree-node.bp3-tree-node-selected > .bp3-tree-node-content{
  background-color:#137cbd; }
.bp3-omnibar{
  -webkit-filter:blur(0);
          filter:blur(0);
  opacity:1;
  background-color:#ffffff;
  border-radius:3px;
  -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
          box-shadow:0 0 0 1px rgba(16, 22, 26, 0.1), 0 4px 8px rgba(16, 22, 26, 0.2), 0 18px 46px 6px rgba(16, 22, 26, 0.2);
  left:calc(50% - 250px);
  top:20vh;
  width:500px;
  z-index:21; }
  .bp3-omnibar.bp3-overlay-enter, .bp3-omnibar.bp3-overlay-appear{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2; }
  .bp3-omnibar.bp3-overlay-enter-active, .bp3-omnibar.bp3-overlay-appear-active{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-omnibar.bp3-overlay-exit{
    -webkit-filter:blur(0);
            filter:blur(0);
    opacity:1; }
  .bp3-omnibar.bp3-overlay-exit-active{
    -webkit-filter:blur(20px);
            filter:blur(20px);
    opacity:0.2;
    -webkit-transition-delay:0;
            transition-delay:0;
    -webkit-transition-duration:200ms;
            transition-duration:200ms;
    -webkit-transition-property:opacity, -webkit-filter;
    transition-property:opacity, -webkit-filter;
    transition-property:filter, opacity;
    transition-property:filter, opacity, -webkit-filter;
    -webkit-transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9);
            transition-timing-function:cubic-bezier(0.4, 1, 0.75, 0.9); }
  .bp3-omnibar .bp3-input{
    background-color:transparent;
    border-radius:0; }
    .bp3-omnibar .bp3-input, .bp3-omnibar .bp3-input:focus{
      -webkit-box-shadow:none;
              box-shadow:none; }
  .bp3-omnibar .bp3-menu{
    background-color:transparent;
    border-radius:0;
    -webkit-box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
            box-shadow:inset 0 1px 0 rgba(16, 22, 26, 0.15);
    max-height:calc(60vh - 40px);
    overflow:auto; }
    .bp3-omnibar .bp3-menu:empty{
      display:none; }
  .bp3-dark .bp3-omnibar, .bp3-omnibar.bp3-dark{
    background-color:#30404d;
    -webkit-box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4);
            box-shadow:0 0 0 1px rgba(16, 22, 26, 0.2), 0 4px 8px rgba(16, 22, 26, 0.4), 0 18px 46px 6px rgba(16, 22, 26, 0.4); }

.bp3-omnibar-overlay .bp3-overlay-backdrop{
  background-color:rgba(16, 22, 26, 0.2); }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }

.bp3-multi-select{
  min-width:150px; }

.bp3-multi-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto; }

.bp3-select-popover .bp3-popover-content{
  padding:5px; }

.bp3-select-popover .bp3-input-group{
  margin-bottom:0; }

.bp3-select-popover .bp3-menu{
  max-height:300px;
  max-width:400px;
  overflow:auto;
  padding:0; }
  .bp3-select-popover .bp3-menu:not(:first-child){
    padding-top:5px; }
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* This file was auto-generated by ensureUiComponents() in @jupyterlab/buildutils */

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

/* Icons urls */

:root {
  --jp-icon-add: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-bug: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDhoLTIuODFjLS40NS0uNzgtMS4wNy0xLjQ1LTEuODItMS45NkwxNyA0LjQxIDE1LjU5IDNsLTIuMTcgMi4xN0MxMi45NiA1LjA2IDEyLjQ5IDUgMTIgNWMtLjQ5IDAtLjk2LjA2LTEuNDEuMTdMOC40MSAzIDcgNC40MWwxLjYyIDEuNjNDNy44OCA2LjU1IDcuMjYgNy4yMiA2LjgxIDhINHYyaDIuMDljLS4wNS4zMy0uMDkuNjYtLjA5IDF2MUg0djJoMnYxYzAgLjM0LjA0LjY3LjA5IDFINHYyaDIuODFjMS4wNCAxLjc5IDIuOTcgMyA1LjE5IDNzNC4xNS0xLjIxIDUuMTktM0gyMHYtMmgtMi4wOWMuMDUtLjMzLjA5LS42Ni4wOS0xdi0xaDJ2LTJoLTJ2LTFjMC0uMzQtLjA0LS42Ny0uMDktMUgyMFY4em0tNiA4aC00di0yaDR2MnptMC00aC00di0yaDR2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-build: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE0LjkgMTcuNDVDMTYuMjUgMTcuNDUgMTcuMzUgMTYuMzUgMTcuMzUgMTVDMTcuMzUgMTMuNjUgMTYuMjUgMTIuNTUgMTQuOSAxMi41NUMxMy41NCAxMi41NSAxMi40NSAxMy42NSAxMi40NSAxNUMxMi40NSAxNi4zNSAxMy41NCAxNy40NSAxNC45IDE3LjQ1Wk0yMC4xIDE1LjY4TDIxLjU4IDE2Ljg0QzIxLjcxIDE2Ljk1IDIxLjc1IDE3LjEzIDIxLjY2IDE3LjI5TDIwLjI2IDE5LjcxQzIwLjE3IDE5Ljg2IDIwIDE5LjkyIDE5LjgzIDE5Ljg2TDE4LjA5IDE5LjE2QzE3LjczIDE5LjQ0IDE3LjMzIDE5LjY3IDE2LjkxIDE5Ljg1TDE2LjY0IDIxLjdDMTYuNjIgMjEuODcgMTYuNDcgMjIgMTYuMyAyMkgxMy41QzEzLjMyIDIyIDEzLjE4IDIxLjg3IDEzLjE1IDIxLjdMMTIuODkgMTkuODVDMTIuNDYgMTkuNjcgMTIuMDcgMTkuNDQgMTEuNzEgMTkuMTZMOS45NjAwMiAxOS44NkM5LjgxMDAyIDE5LjkyIDkuNjIwMDIgMTkuODYgOS41NDAwMiAxOS43MUw4LjE0MDAyIDE3LjI5QzguMDUwMDIgMTcuMTMgOC4wOTAwMiAxNi45NSA4LjIyMDAyIDE2Ljg0TDkuNzAwMDIgMTUuNjhMOS42NTAwMSAxNUw5LjcwMDAyIDE0LjMxTDguMjIwMDIgMTMuMTZDOC4wOTAwMiAxMy4wNSA4LjA1MDAyIDEyLjg2IDguMTQwMDIgMTIuNzFMOS41NDAwMiAxMC4yOUM5LjYyMDAyIDEwLjEzIDkuODEwMDIgMTAuMDcgOS45NjAwMiAxMC4xM0wxMS43MSAxMC44NEMxMi4wNyAxMC41NiAxMi40NiAxMC4zMiAxMi44OSAxMC4xNUwxMy4xNSA4LjI4OTk4QzEzLjE4IDguMTI5OTggMTMuMzIgNy45OTk5OCAxMy41IDcuOTk5OThIMTYuM0MxNi40NyA3Ljk5OTk4IDE2LjYyIDguMTI5OTggMTYuNjQgOC4yODk5OEwxNi45MSAxMC4xNUMxNy4zMyAxMC4zMiAxNy43MyAxMC41NiAxOC4wOSAxMC44NEwxOS44MyAxMC4xM0MyMCAxMC4wNyAyMC4xNyAxMC4xMyAyMC4yNiAxMC4yOUwyMS42NiAxMi43MUMyMS43NSAxMi44NiAyMS43MSAxMy4wNSAyMS41OCAxMy4xNkwyMC4xIDE0LjMxTDIwLjE1IDE1TDIwLjEgMTUuNjhaIi8+CiAgICA8cGF0aCBkPSJNNy4zMjk2NiA3LjQ0NDU0QzguMDgzMSA3LjAwOTU0IDguMzM5MzIgNi4wNTMzMiA3LjkwNDMyIDUuMjk5ODhDNy40NjkzMiA0LjU0NjQzIDYuNTA4MSA0LjI4MTU2IDUuNzU0NjYgNC43MTY1NkM1LjM5MTc2IDQuOTI2MDggNS4xMjY5NSA1LjI3MTE4IDUuMDE4NDkgNS42NzU5NEM0LjkxMDA0IDYuMDgwNzEgNC45NjY4MiA2LjUxMTk4IDUuMTc2MzQgNi44NzQ4OEM1LjYxMTM0IDcuNjI4MzIgNi41NzYyMiA3Ljg3OTU0IDcuMzI5NjYgNy40NDQ1NFpNOS42NTcxOCA0Ljc5NTkzTDEwLjg2NzIgNC45NTE3OUMxMC45NjI4IDQuOTc3NDEgMTEuMDQwMiA1LjA3MTMzIDExLjAzODIgNS4xODc5M0wxMS4wMzg4IDYuOTg4OTNDMTEuMDQ1NSA3LjEwMDU0IDEwLjk2MTYgNy4xOTUxOCAxMC44NTUgNy4yMTA1NEw5LjY2MDAxIDcuMzgwODNMOS4yMzkxNSA4LjEzMTg4TDkuNjY5NjEgOS4yNTc0NUM5LjcwNzI5IDkuMzYyNzEgOS42NjkzNCA5LjQ3Njk5IDkuNTc0MDggOS41MzE5OUw4LjAxNTIzIDEwLjQzMkM3LjkxMTMxIDEwLjQ5MiA3Ljc5MzM3IDEwLjQ2NzcgNy43MjEwNSAxMC4zODI0TDYuOTg3NDggOS40MzE4OEw2LjEwOTMxIDkuNDMwODNMNS4zNDcwNCAxMC4zOTA1QzUuMjg5MDkgMTAuNDcwMiA1LjE3MzgzIDEwLjQ5MDUgNS4wNzE4NyAxMC40MzM5TDMuNTEyNDUgOS41MzI5M0MzLjQxMDQ5IDkuNDc2MzMgMy4zNzY0NyA5LjM1NzQxIDMuNDEwNzUgOS4yNTY3OUwzLjg2MzQ3IDguMTQwOTNMMy42MTc0OSA3Ljc3NDg4TDMuNDIzNDcgNy4zNzg4M0wyLjIzMDc1IDcuMjEyOTdDMi4xMjY0NyA3LjE5MjM1IDIuMDQwNDkgNy4xMDM0MiAyLjA0MjQ1IDYuOTg2ODJMMi4wNDE4NyA1LjE4NTgyQzIuMDQzODMgNS4wNjkyMiAyLjExOTA5IDQuOTc5NTggMi4yMTcwNCA0Ljk2OTIyTDMuNDIwNjUgNC43OTM5M0wzLjg2NzQ5IDQuMDI3ODhMMy40MTEwNSAyLjkxNzMxQzMuMzczMzcgMi44MTIwNCAzLjQxMTMxIDIuNjk3NzYgMy41MTUyMyAyLjYzNzc2TDUuMDc0MDggMS43Mzc3NkM1LjE2OTM0IDEuNjgyNzYgNS4yODcyOSAxLjcwNzA0IDUuMzU5NjEgMS43OTIzMUw2LjExOTE1IDIuNzI3ODhMNi45ODAwMSAyLjczODkzTDcuNzI0OTYgMS43ODkyMkM3Ljc5MTU2IDEuNzA0NTggNy45MTU0OCAxLjY3OTIyIDguMDA4NzkgMS43NDA4Mkw5LjU2ODIxIDIuNjQxODJDOS42NzAxNyAyLjY5ODQyIDkuNzEyODUgMi44MTIzNCA5LjY4NzIzIDIuOTA3OTdMOS4yMTcxOCA0LjAzMzgzTDkuNDYzMTYgNC4zOTk4OEw5LjY1NzE4IDQuNzk1OTNaIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iOS45LDEzLjYgMy42LDcuNCA0LjQsNi42IDkuOSwxMi4yIDE1LjQsNi43IDE2LjEsNy40ICIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNS45TDksOS43bDMuOC0zLjhsMS4yLDEuMmwtNC45LDVsLTQuOS01TDUuMiw1Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-caret-down: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik01LjIsNy41TDksMTEuMmwzLjgtMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-left: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik0xMC44LDEyLjhMNy4xLDlsMy44LTMuOGwwLDcuNkgxMC44eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-right: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIj4KICAgIDxwYXRoIGQ9Ik03LjIsNS4yTDEwLjksOWwtMy44LDMuOFY1LjJINy4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-caret-up-empty-thin: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTUuNCwxMy4zIDkuOSw3LjcgNC40LDEzLjIgMy42LDEyLjUgOS45LDYuMyAxNi4xLDEyLjYgIi8+Cgk8L2c+Cjwvc3ZnPgo=);
  --jp-icon-caret-up: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iPgoJCTxwYXRoIGQ9Ik01LjIsMTAuNUw5LDYuOGwzLjgsMy44SDUuMnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-case-sensitive: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgogIDxnIGNsYXNzPSJqcC1pY29uLWFjY2VudDIiIGZpbGw9IiNGRkYiPgogICAgPHBhdGggZD0iTTcuNiw4aDAuOWwzLjUsOGgtMS4xTDEwLDE0SDZsLTAuOSwySDRMNy42LDh6IE04LDkuMUw2LjQsMTNoMy4yTDgsOS4xeiIvPgogICAgPHBhdGggZD0iTTE2LjYsOS44Yy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC4yLDAtMC40LTAuMS0wLjYtMC4yYy0wLjEtMC4xLTAuMi0wLjQtMC4yLTAuNyBjLTAuMywwLjMtMC42LDAuNS0wLjksMC43Yy0wLjMsMC4xLTAuNywwLjItMS4xLDAuMmMtMC4zLDAtMC41LDAtMC43LTAuMWMtMC4yLTAuMS0wLjQtMC4yLTAuNi0wLjNjLTAuMi0wLjEtMC4zLTAuMy0wLjQtMC41IGMtMC4xLTAuMi0wLjEtMC40LTAuMS0wLjdjMC0wLjMsMC4xLTAuNiwwLjItMC44YzAuMS0wLjIsMC4zLTAuNCwwLjQtMC41QzEyLDcsMTIuMiw2LjksMTIuNSw2LjhjMC4yLTAuMSwwLjUtMC4xLDAuNy0wLjIgYzAuMy0wLjEsMC41LTAuMSwwLjctMC4xYzAuMiwwLDAuNC0wLjEsMC42LTAuMWMwLjIsMCwwLjMtMC4xLDAuNC0wLjJjMC4xLTAuMSwwLjItMC4yLDAuMi0wLjRjMC0xLTEuMS0xLTEuMy0xIGMtMC40LDAtMS40LDAtMS40LDEuMmgtMC45YzAtMC40LDAuMS0wLjcsMC4yLTFjMC4xLTAuMiwwLjMtMC40LDAuNS0wLjZjMC4yLTAuMiwwLjUtMC4zLDAuOC0wLjNDMTMuMyw0LDEzLjYsNCwxMy45LDQgYzAuMywwLDAuNSwwLDAuOCwwLjFjMC4zLDAsMC41LDAuMSwwLjcsMC4yYzAuMiwwLjEsMC40LDAuMywwLjUsMC41QzE2LDUsMTYsNS4yLDE2LDUuNnYyLjljMCwwLjIsMCwwLjQsMCwwLjUgYzAsMC4xLDAuMSwwLjIsMC4zLDAuMmMwLjEsMCwwLjIsMCwwLjMsMFY5Ljh6IE0xNS4yLDYuOWMtMS4yLDAuNi0zLjEsMC4yLTMuMSwxLjRjMCwxLjQsMy4xLDEsMy4xLTAuNVY2Ljl6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-check: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle-empty: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-circle: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iOSIgY3k9IjkiIHI9IjgiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-clear: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8bWFzayBpZD0iZG9udXRIb2xlIj4KICAgIDxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIC8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiBmaWxsPSJibGFjayIvPgogIDwvbWFzaz4KCiAgPGcgY2xhc3M9ImpwLWljb24zIiBmaWxsPSIjNjE2MTYxIj4KICAgIDxyZWN0IGhlaWdodD0iMTgiIHdpZHRoPSIyIiB4PSIxMSIgeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1LCAxMiwgMTIpIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgbWFzaz0idXJsKCNkb251dEhvbGUpIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-close: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1ub25lIGpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIGpwLWljb24zLWhvdmVyIiBmaWxsPSJub25lIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjExIi8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIGpwLWljb24tYWNjZW50Mi1ob3ZlciIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyeiIvPgogIDwvZz4KCiAgPGcgY2xhc3M9ImpwLWljb24tbm9uZSBqcC1pY29uLWJ1c3kiIGZpbGw9Im5vbmUiPgogICAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-code: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTExLjQgMTguNkw2LjggMTRMMTEuNCA5LjRMMTAgOEw0IDE0TDEwIDIwTDExLjQgMTguNlpNMTYuNiAxOC42TDIxLjIgMTRMMTYuNiA5LjRMMTggOEwyNCAxNEwxOCAyMEwxNi42IDE4LjZWMTguNloiLz4KCTwvZz4KPC9zdmc+Cg==);
  --jp-icon-console: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwMCAyMDAiPgogIDxnIGNsYXNzPSJqcC1pY29uLWJyYW5kMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMjg4RDEiPgogICAgPHBhdGggZD0iTTIwIDE5LjhoMTYwdjE1OS45SDIweiIvPgogIDwvZz4KICA8ZyBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNmZmYiPgogICAgPHBhdGggZD0iTTEwNSAxMjcuM2g0MHYxMi44aC00MHpNNTEuMSA3N0w3NCA5OS45bC0yMy4zIDIzLjMgMTAuNSAxMC41IDIzLjMtMjMuM0w5NSA5OS45IDg0LjUgODkuNCA2MS42IDY2LjV6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-copy: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTExLjksMUgzLjJDMi40LDEsMS43LDEuNywxLjcsMi41djEwLjJoMS41VjIuNWg4LjdWMXogTTE0LjEsMy45aC04Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTAuMmMwLDAuOCwwLjcsMS41LDEuNSwxLjVoOCBjMC44LDAsMS41LTAuNywxLjUtMS41VjUuNEMxNS41LDQuNiwxNC45LDMuOSwxNC4xLDMuOXogTTE0LjEsMTUuNWgtOFY1LjRoOFYxNS41eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-cut: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkuNjQgNy42NGMuMjMtLjUuMzYtMS4wNS4zNi0xLjY0IDAtMi4yMS0xLjc5LTQtNC00UzIgMy43OSAyIDZzMS43OSA0IDQgNGMuNTkgMCAxLjE0LS4xMyAxLjY0LS4zNkwxMCAxMmwtMi4zNiAyLjM2QzcuMTQgMTQuMTMgNi41OSAxNCA2IDE0Yy0yLjIxIDAtNCAxLjc5LTQgNHMxLjc5IDQgNCA0IDQtMS43OSA0LTRjMC0uNTktLjEzLTEuMTQtLjM2LTEuNjRMMTIgMTRsNyA3aDN2LTFMOS42NCA3LjY0ek02IDhjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTAgMTJjLTEuMSAwLTItLjg5LTItMnMuOS0yIDItMiAyIC44OSAyIDItLjkgMi0yIDJ6bTYtNy41Yy0uMjggMC0uNS0uMjItLjUtLjVzLjIyLS41LjUtLjUuNS4yMi41LjUtLjIyLjUtLjUuNXpNMTkgM2wtNiA2IDIgMiA3LTdWM3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-download: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE5IDloLTRWM0g5djZINWw3IDcgNy03ek01IDE4djJoMTR2LTJINXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-edit: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMgMTcuMjVWMjFoMy43NUwxNy44MSA5Ljk0bC0zLjc1LTMuNzVMMyAxNy4yNXpNMjAuNzEgNy4wNGMuMzktLjM5LjM5LTEuMDIgMC0xLjQxbC0yLjM0LTIuMzRjLS4zOS0uMzktMS4wMi0uMzktMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3oiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-ellipses: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIyIi8+CiAgICA8Y2lyY2xlIGN4PSIxOSIgY3k9IjEyIiByPSIyIi8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-extension: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwLjUgMTFIMTlWN2MwLTEuMS0uOS0yLTItMmgtNFYzLjVDMTMgMi4xMiAxMS44OCAxIDEwLjUgMVM4IDIuMTIgOCAzLjVWNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAydjMuOEgzLjVjMS40OSAwIDIuNyAxLjIxIDIuNyAyLjdzLTEuMjEgMi43LTIuNyAyLjdIMlYyMGMwIDEuMS45IDIgMiAyaDMuOHYtMS41YzAtMS40OSAxLjIxLTIuNyAyLjctMi43IDEuNDkgMCAyLjcgMS4yMSAyLjcgMi43VjIySDE3YzEuMSAwIDItLjkgMi0ydi00aDEuNWMxLjM4IDAgMi41LTEuMTIgMi41LTIuNVMyMS44OCAxMSAyMC41IDExeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-fast-forward: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTQgMThsOC41LTZMNCA2djEyem05LTEydjEybDguNS02TDEzIDZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-file-upload: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTkgMTZoNnYtNmg0bC03LTctNyA3aDR6bS00IDJoMTR2Mkg1eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-file: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuMyA4LjJsLTUuNS01LjVjLS4zLS4zLS43LS41LTEuMi0uNUgzLjljLS44LjEtMS42LjktMS42IDEuOHYxNC4xYzAgLjkuNyAxLjYgMS42IDEuNmgxNC4yYy45IDAgMS42LS43IDEuNi0xLjZWOS40Yy4xLS41LS4xLS45LS40LTEuMnptLTUuOC0zLjNsMy40IDMuNmgtMy40VjQuOXptMy45IDEyLjdINC43Yy0uMSAwLS4yIDAtLjItLjJWNC43YzAtLjIuMS0uMy4yLS4zaDcuMnY0LjRzMCAuOC4zIDEuMWMuMy4zIDEuMS4zIDEuMS4zaDQuM3Y3LjJzLS4xLjItLjIuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-filter-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEwIDE4aDR2LTJoLTR2MnpNMyA2djJoMThWNkgzem0zIDdoMTJ2LTJINnYyeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY4YzAtMS4xLS45LTItMi0yaC04bC0yLTJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-html5: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiMwMDAiIGQ9Ik0xMDguNCAwaDIzdjIyLjhoMjEuMlYwaDIzdjY5aC0yM1Y0NmgtMjF2MjNoLTIzLjJNMjA2IDIzaC0yMC4zVjBoNjMuN3YyM0gyMjl2NDZoLTIzbTUzLjUtNjloMjQuMWwxNC44IDI0LjNMMzEzLjIgMGgyNC4xdjY5aC0yM1YzNC44bC0xNi4xIDI0LjgtMTYuMS0yNC44VjY5aC0yMi42bTg5LjItNjloMjN2NDYuMmgzMi42VjY5aC01NS42Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI2U0NGQyNiIgZD0iTTEwNy42IDQ3MWwtMzMtMzcwLjRoMzYyLjhsLTMzIDM3MC4yTDI1NS43IDUxMiIvPgogIDxwYXRoIGNsYXNzPSJqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNmMTY1MjkiIGQ9Ik0yNTYgNDgwLjVWMTMxaDE0OC4zTDM3NiA0NDciLz4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNlYmViZWIiIGQ9Ik0xNDIgMTc2LjNoMTE0djQ1LjRoLTY0LjJsNC4yIDQ2LjVoNjB2NDUuM0gxNTQuNG0yIDIyLjhIMjAybDMuMiAzNi4zIDUwLjggMTMuNnY0Ny40bC05My4yLTI2Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZS1pbnZlcnNlIiBmaWxsPSIjZmZmIiBkPSJNMzY5LjYgMTc2LjNIMjU1Ljh2NDUuNGgxMDkuNm0tNC4xIDQ2LjVIMjU1Ljh2NDUuNGg1NmwtNS4zIDU5LTUwLjcgMTMuNnY0Ny4ybDkzLTI1LjgiLz4KPC9zdmc+Cg==);
  --jp-icon-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1icmFuZDQganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGZpbGw9IiNGRkYiIGQ9Ik0yLjIgMi4yaDE3LjV2MTcuNUgyLjJ6Ii8+CiAgPHBhdGggY2xhc3M9ImpwLWljb24tYnJhbmQwIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzNGNTFCNSIgZD0iTTIuMiAyLjJ2MTcuNWgxNy41bC4xLTE3LjVIMi4yem0xMi4xIDIuMmMxLjIgMCAyLjIgMSAyLjIgMi4ycy0xIDIuMi0yLjIgMi4yLTIuMi0xLTIuMi0yLjIgMS0yLjIgMi4yLTIuMnpNNC40IDE3LjZsMy4zLTguOCAzLjMgNi42IDIuMi0zLjIgNC40IDUuNEg0LjR6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-inspector: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNEg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMThjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxNEg0di00aDExdjR6bTAtNUg0VjloMTF2NHptNSA1aC00VjloNHY5eiIvPgo8L3N2Zz4K);
  --jp-icon-json: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMSBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNGOUE4MjUiPgogICAgPHBhdGggZD0iTTIwLjIgMTEuOGMtMS42IDAtMS43LjUtMS43IDEgMCAuNC4xLjkuMSAxLjMuMS41LjEuOS4xIDEuMyAwIDEuNy0xLjQgMi4zLTMuNSAyLjNoLS45di0xLjloLjVjMS4xIDAgMS40IDAgMS40LS44IDAtLjMgMC0uNi0uMS0xIDAtLjQtLjEtLjgtLjEtMS4yIDAtMS4zIDAtMS44IDEuMy0yLTEuMy0uMi0xLjMtLjctMS4zLTIgMC0uNC4xLS44LjEtMS4yLjEtLjQuMS0uNy4xLTEgMC0uOC0uNC0uNy0xLjQtLjhoLS41VjQuMWguOWMyLjIgMCAzLjUuNyAzLjUgMi4zIDAgLjQtLjEuOS0uMSAxLjMtLjEuNS0uMS45LS4xIDEuMyAwIC41LjIgMSAxLjcgMXYxLjh6TTEuOCAxMC4xYzEuNiAwIDEuNy0uNSAxLjctMSAwLS40LS4xLS45LS4xLTEuMy0uMS0uNS0uMS0uOS0uMS0xLjMgMC0xLjYgMS40LTIuMyAzLjUtMi4zaC45djEuOWgtLjVjLTEgMC0xLjQgMC0xLjQuOCAwIC4zIDAgLjYuMSAxIDAgLjIuMS42LjEgMSAwIDEuMyAwIDEuOC0xLjMgMkM2IDExLjIgNiAxMS43IDYgMTNjMCAuNC0uMS44LS4xIDEuMi0uMS4zLS4xLjctLjEgMSAwIC44LjMuOCAxLjQuOGguNXYxLjloLS45Yy0yLjEgMC0zLjUtLjYtMy41LTIuMyAwLS40LjEtLjkuMS0xLjMuMS0uNS4xLS45LjEtMS4zIDAtLjUtLjItMS0xLjctMXYtMS45eiIvPgogICAgPGNpcmNsZSBjeD0iMTEiIGN5PSIxMy44IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY3g9IjExIiBjeT0iOC4yIiByPSIyLjEiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter-favicon: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE2NSIgdmlld0JveD0iMCAwIDE1MiAxNjUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA3ODk0NywgMTEwLjU4MjkyNykiIGQ9Ik03NS45NDIyODQyLDI5LjU4MDQ1NjEgQzQzLjMwMjM5NDcsMjkuNTgwNDU2MSAxNC43OTY3ODMyLDE3LjY1MzQ2MzQgMCwwIEM1LjUxMDgzMjExLDE1Ljg0MDY4MjkgMTUuNzgxNTM4OSwyOS41NjY3NzMyIDI5LjM5MDQ5NDcsMzkuMjc4NDE3MSBDNDIuOTk5Nyw0OC45ODk4NTM3IDU5LjI3MzcsNTQuMjA2NzgwNSA3NS45NjA1Nzg5LDU0LjIwNjc4MDUgQzkyLjY0NzQ1NzksNTQuMjA2NzgwNSAxMDguOTIxNDU4LDQ4Ljk4OTg1MzcgMTIyLjUzMDY2MywzOS4yNzg0MTcxIEMxMzYuMTM5NDUzLDI5LjU2Njc3MzIgMTQ2LjQxMDI4NCwxNS44NDA2ODI5IDE1MS45MjExNTgsMCBDMTM3LjA4Nzg2OCwxNy42NTM0NjM0IDEwOC41ODI1ODksMjkuNTgwNDU2MSA3NS45NDIyODQyLDI5LjU4MDQ1NjEgTDc1Ljk0MjI4NDIsMjkuNTgwNDU2MSBaIiAvPgogICAgPHBhdGggdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMzczNjgsIDAuNzA0ODc4KSIgZD0iTTc1Ljk3ODQ1NzksMjQuNjI2NDA3MyBDMTA4LjYxODc2MywyNC42MjY0MDczIDEzNy4xMjQ0NTgsMzYuNTUzNDQxNSAxNTEuOTIxMTU4LDU0LjIwNjc4MDUgQzE0Ni40MTAyODQsMzguMzY2MjIyIDEzNi4xMzk0NTMsMjQuNjQwMTMxNyAxMjIuNTMwNjYzLDE0LjkyODQ4NzggQzEwOC45MjE0NTgsNS4yMTY4NDM5IDkyLjY0NzQ1NzksMCA3NS45NjA1Nzg5LDAgQzU5LjI3MzcsMCA0Mi45OTk3LDUuMjE2ODQzOSAyOS4zOTA0OTQ3LDE0LjkyODQ4NzggQzE1Ljc4MTUzODksMjQuNjQwMTMxNyA1LjUxMDgzMjExLDM4LjM2NjIyMiAwLDU0LjIwNjc4MDUgQzE0LjgzMzA4MTYsMzYuNTg5OTI5MyA0My4zMzg1Njg0LDI0LjYyNjQwNzMgNzUuOTc4NDU3OSwyNC42MjY0MDczIEw3NS45Nzg0NTc5LDI0LjYyNjQwNzMgWiIgLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-jupyter: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzkiIGhlaWdodD0iNTEiIHZpZXdCb3g9IjAgMCAzOSA1MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzOCAtMjI4MSkiPgogICAgPGcgY2xhc3M9ImpwLWljb24td2FybjAiIGZpbGw9IiNGMzc3MjYiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5Ljc0IDIzMTEuOTgpIiBkPSJNIDE4LjI2NDYgNy4xMzQxMUMgMTAuNDE0NSA3LjEzNDExIDMuNTU4NzIgNC4yNTc2IDAgMEMgMS4zMjUzOSAzLjgyMDQgMy43OTU1NiA3LjEzMDgxIDcuMDY4NiA5LjQ3MzAzQyAxMC4zNDE3IDExLjgxNTIgMTQuMjU1NyAxMy4wNzM0IDE4LjI2OSAxMy4wNzM0QyAyMi4yODIzIDEzLjA3MzQgMjYuMTk2MyAxMS44MTUyIDI5LjQ2OTQgOS40NzMwM0MgMzIuNzQyNCA3LjEzMDgxIDM1LjIxMjYgMy44MjA0IDM2LjUzOCAwQyAzMi45NzA1IDQuMjU3NiAyNi4xMTQ4IDcuMTM0MTEgMTguMjY0NiA3LjEzNDExWiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM5LjczIDIyODUuNDgpIiBkPSJNIDE4LjI3MzMgNS45MzkzMUMgMjYuMTIzNSA1LjkzOTMxIDMyLjk3OTMgOC44MTU4MyAzNi41MzggMTMuMDczNEMgMzUuMjEyNiA5LjI1MzAzIDMyLjc0MjQgNS45NDI2MiAyOS40Njk0IDMuNjAwNEMgMjYuMTk2MyAxLjI1ODE4IDIyLjI4MjMgMCAxOC4yNjkgMEMgMTQuMjU1NyAwIDEwLjM0MTcgMS4yNTgxOCA3LjA2ODYgMy42MDA0QyAzLjc5NTU2IDUuOTQyNjIgMS4zMjUzOSA5LjI1MzAzIDAgMTMuMDczNEMgMy41Njc0NSA4LjgyNDYzIDEwLjQyMzIgNS45MzkzMSAxOC4yNzMzIDUuOTM5MzFaIi8+CiAgICA8L2c+CiAgICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjY5LjMgMjI4MS4zMSkiIGQ9Ik0gNS44OTM1MyAyLjg0NEMgNS45MTg4OSAzLjQzMTY1IDUuNzcwODUgNC4wMTM2NyA1LjQ2ODE1IDQuNTE2NDVDIDUuMTY1NDUgNS4wMTkyMiA0LjcyMTY4IDUuNDIwMTUgNC4xOTI5OSA1LjY2ODUxQyAzLjY2NDMgNS45MTY4OCAzLjA3NDQ0IDYuMDAxNTEgMi40OTgwNSA1LjkxMTcxQyAxLjkyMTY2IDUuODIxOSAxLjM4NDYzIDUuNTYxNyAwLjk1NDg5OCA1LjE2NDAxQyAwLjUyNTE3IDQuNzY2MzMgMC4yMjIwNTYgNC4yNDkwMyAwLjA4MzkwMzcgMy42Nzc1N0MgLTAuMDU0MjQ4MyAzLjEwNjExIC0wLjAyMTIzIDIuNTA2MTcgMC4xNzg3ODEgMS45NTM2NEMgMC4zNzg3OTMgMS40MDExIDAuNzM2ODA5IDAuOTIwODE3IDEuMjA3NTQgMC41NzM1MzhDIDEuNjc4MjYgMC4yMjYyNTkgMi4yNDA1NSAwLjAyNzU5MTkgMi44MjMyNiAwLjAwMjY3MjI5QyAzLjYwMzg5IC0wLjAzMDcxMTUgNC4zNjU3MyAwLjI0OTc4OSA0Ljk0MTQyIDAuNzgyNTUxQyA1LjUxNzExIDEuMzE1MzEgNS44NTk1NiAyLjA1Njc2IDUuODkzNTMgMi44NDRaIi8+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2MzkuOCAyMzIzLjgxKSIgZD0iTSA3LjQyNzg5IDMuNTgzMzhDIDcuNDYwMDggNC4zMjQzIDcuMjczNTUgNS4wNTgxOSA2Ljg5MTkzIDUuNjkyMTNDIDYuNTEwMzEgNi4zMjYwNyA1Ljk1MDc1IDYuODMxNTYgNS4yODQxMSA3LjE0NDZDIDQuNjE3NDcgNy40NTc2MyAzLjg3MzcxIDcuNTY0MTQgMy4xNDcwMiA3LjQ1MDYzQyAyLjQyMDMyIDcuMzM3MTIgMS43NDMzNiA3LjAwODcgMS4yMDE4NCA2LjUwNjk1QyAwLjY2MDMyOCA2LjAwNTIgMC4yNzg2MSA1LjM1MjY4IDAuMTA1MDE3IDQuNjMyMDJDIC0wLjA2ODU3NTcgMy45MTEzNSAtMC4wMjYyMzYxIDMuMTU0OTQgMC4yMjY2NzUgMi40NTg1NkMgMC40Nzk1ODcgMS43NjIxNyAwLjkzMTY5NyAxLjE1NzEzIDEuNTI1NzYgMC43MjAwMzNDIDIuMTE5ODMgMC4yODI5MzUgMi44MjkxNCAwLjAzMzQzOTUgMy41NjM4OSAwLjAwMzEzMzQ0QyA0LjU0NjY3IC0wLjAzNzQwMzMgNS41MDUyOSAwLjMxNjcwNiA2LjIyOTYxIDAuOTg3ODM1QyA2Ljk1MzkzIDEuNjU4OTYgNy4zODQ4NCAyLjU5MjM1IDcuNDI3ODkgMy41ODMzOEwgNy40Mjc4OSAzLjU4MzM4WiIvPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjM4LjM2IDIyODYuMDYpIiBkPSJNIDIuMjc0NzEgNC4zOTYyOUMgMS44NDM2MyA0LjQxNTA4IDEuNDE2NzEgNC4zMDQ0NSAxLjA0Nzk5IDQuMDc4NDNDIDAuNjc5MjY4IDMuODUyNCAwLjM4NTMyOCAzLjUyMTE0IDAuMjAzMzcxIDMuMTI2NTZDIDAuMDIxNDEzNiAyLjczMTk4IC0wLjA0MDM3OTggMi4yOTE4MyAwLjAyNTgxMTYgMS44NjE4MUMgMC4wOTIwMDMxIDEuNDMxOCAwLjI4MzIwNCAxLjAzMTI2IDAuNTc1MjEzIDAuNzEwODgzQyAwLjg2NzIyMiAwLjM5MDUxIDEuMjQ2OTEgMC4xNjQ3MDggMS42NjYyMiAwLjA2MjA1OTJDIDIuMDg1NTMgLTAuMDQwNTg5NyAyLjUyNTYxIC0wLjAxNTQ3MTQgMi45MzA3NiAwLjEzNDIzNUMgMy4zMzU5MSAwLjI4Mzk0MSAzLjY4NzkyIDAuNTUxNTA1IDMuOTQyMjIgMC45MDMwNkMgNC4xOTY1MiAxLjI1NDYyIDQuMzQxNjkgMS42NzQzNiA0LjM1OTM1IDIuMTA5MTZDIDQuMzgyOTkgMi42OTEwNyA0LjE3Njc4IDMuMjU4NjkgMy43ODU5NyAzLjY4NzQ2QyAzLjM5NTE2IDQuMTE2MjQgMi44NTE2NiA0LjM3MTE2IDIuMjc0NzEgNC4zOTYyOUwgMi4yNzQ3MSA0LjM5NjI5WiIvPgogICAgPC9nPgogIDwvZz4+Cjwvc3ZnPgo=);
  --jp-icon-jupyterlab-wordmark: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIHZpZXdCb3g9IjAgMCAxODYwLjggNDc1Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0RTRFNEUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ4MC4xMzY0MDEsIDY0LjI3MTQ5MykiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDU4Ljg3NTU2NikiPgogICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4NzYwMywgMC4xNDAyOTQpIj4KICAgICAgICA8cGF0aCBkPSJNLTQyNi45LDE2OS44YzAsNDguNy0zLjcsNjQuNy0xMy42LDc2LjRjLTEwLjgsMTAtMjUsMTUuNS0zOS43LDE1LjVsMy43LDI5IGMyMi44LDAuMyw0NC44LTcuOSw2MS45LTIzLjFjMTcuOC0xOC41LDI0LTQ0LjEsMjQtODMuM1YwSC00Mjd2MTcwLjFMLTQyNi45LDE2OS44TC00MjYuOSwxNjkuOHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTU1LjA0NTI5NiwgNTYuODM3MTA0KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuNTYyNDUzLCAxLjc5OTg0MikiPgogICAgICAgIDxwYXRoIGQ9Ik0tMzEyLDE0OGMwLDIxLDAsMzkuNSwxLjcsNTUuNGgtMzEuOGwtMi4xLTMzLjNoLTAuOGMtNi43LDExLjYtMTYuNCwyMS4zLTI4LDI3LjkgYy0xMS42LDYuNi0yNC44LDEwLTM4LjIsOS44Yy0zMS40LDAtNjktMTcuNy02OS04OVYwaDM2LjR2MTEyLjdjMCwzOC43LDExLjYsNjQuNyw0NC42LDY0LjdjMTAuMy0wLjIsMjAuNC0zLjUsMjguOS05LjQgYzguNS01LjksMTUuMS0xNC4zLDE4LjktMjMuOWMyLjItNi4xLDMuMy0xMi41LDMuMy0xOC45VjAuMmgzNi40VjE0OEgtMzEyTC0zMTIsMTQ4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTAuMDEzMzIyLCA1My40Nzk2MzgpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS43MDY0NTgsIDAuMjMxNDI1KSI+CiAgICAgICAgPHBhdGggZD0iTS00NzguNiw3MS40YzAtMjYtMC44LTQ3LTEuNy02Ni43aDMyLjdsMS43LDM0LjhoMC44YzcuMS0xMi41LDE3LjUtMjIuOCwzMC4xLTI5LjcgYzEyLjUtNywyNi43LTEwLjMsNDEtOS44YzQ4LjMsMCw4NC43LDQxLjcsODQuNywxMDMuM2MwLDczLjEtNDMuNywxMDkuMi05MSwxMDkuMmMtMTIuMSwwLjUtMjQuMi0yLjItMzUtNy44IGMtMTAuOC01LjYtMTkuOS0xMy45LTI2LjYtMjQuMmgtMC44VjI5MWgtMzZ2LTIyMEwtNDc4LjYsNzEuNEwtNDc4LjYsNzEuNHogTS00NDIuNiwxMjUuNmMwLjEsNS4xLDAuNiwxMC4xLDEuNywxNS4xIGMzLDEyLjMsOS45LDIzLjMsMTkuOCwzMS4xYzkuOSw3LjgsMjIuMSwxMi4xLDM0LjcsMTIuMWMzOC41LDAsNjAuNy0zMS45LDYwLjctNzguNWMwLTQwLjctMjEuMS03NS42LTU5LjUtNzUuNiBjLTEyLjksMC40LTI1LjMsNS4xLTM1LjMsMTMuNGMtOS45LDguMy0xNi45LDE5LjctMTkuNiwzMi40Yy0xLjUsNC45LTIuMywxMC0yLjUsMTUuMVYxMjUuNkwtNDQyLjYsMTI1LjZMLTQ0Mi42LDEyNS42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MDYuNzQwNzI2LCA1Ni44MzcxMDQpIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC43NTEyMjYsIDEuOTg5Mjk5KSI+CiAgICAgICAgPHBhdGggZD0iTS00NDAuOCwwbDQzLjcsMTIwLjFjNC41LDEzLjQsOS41LDI5LjQsMTIuOCw0MS43aDAuOGMzLjctMTIuMiw3LjktMjcuNywxMi44LTQyLjQgbDM5LjctMTE5LjJoMzguNUwtMzQ2LjksMTQ1Yy0yNiw2OS43LTQzLjcsMTA1LjQtNjguNiwxMjcuMmMtMTIuNSwxMS43LTI3LjksMjAtNDQuNiwyMy45bC05LjEtMzEuMSBjMTEuNy0zLjksMjIuNS0xMC4xLDMxLjgtMTguMWMxMy4yLTExLjEsMjMuNy0yNS4yLDMwLjYtNDEuMmMxLjUtMi44LDIuNS01LjcsMi45LTguOGMtMC4zLTMuMy0xLjItNi42LTIuNS05LjdMLTQ4MC4yLDAuMSBoMzkuN0wtNDQwLjgsMEwtNDQwLjgsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODIyLjc0ODEwNCwgMC4wMDAwMDApIj4KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMS40NjQwNTAsIDAuMzc4OTE0KSI+CiAgICAgICAgPHBhdGggZD0iTS00MTMuNywwdjU4LjNoNTJ2MjguMmgtNTJWMTk2YzAsMjUsNywzOS41LDI3LjMsMzkuNWM3LjEsMC4xLDE0LjItMC43LDIxLjEtMi41IGwxLjcsMjcuN2MtMTAuMywzLjctMjEuMyw1LjQtMzIuMiw1Yy03LjMsMC40LTE0LjYtMC43LTIxLjMtMy40Yy02LjgtMi43LTEyLjktNi44LTE3LjktMTIuMWMtMTAuMy0xMC45LTE0LjEtMjktMTQuMS01Mi45IFY4Ni41aC0zMVY1OC4zaDMxVjkuNkwtNDEzLjcsMEwtNDEzLjcsMHoiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTc0LjQzMzI4NiwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuOTkwMDM0LCAwLjYxMDMzOSkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDQ1LjgsMTEzYzAuOCw1MCwzMi4yLDcwLjYsNjguNiw3MC42YzE5LDAuNiwzNy45LTMsNTUuMy0xMC41bDYuMiwyNi40IGMtMjAuOSw4LjktNDMuNSwxMy4xLTY2LjIsMTIuNmMtNjEuNSwwLTk4LjMtNDEuMi05OC4zLTEwMi41Qy00ODAuMiw0OC4yLTQ0NC43LDAtMzg2LjUsMGM2NS4yLDAsODIuNyw1OC4zLDgyLjcsOTUuNyBjLTAuMSw1LjgtMC41LDExLjUtMS4yLDE3LjJoLTE0MC42SC00NDUuOEwtNDQ1LjgsMTEzeiBNLTMzOS4yLDg2LjZjMC40LTIzLjUtOS41LTYwLjEtNTAuNC02MC4xIGMtMzYuOCwwLTUyLjgsMzQuNC01NS43LDYwLjFILTMzOS4yTC0zMzkuMiw4Ni42TC0zMzkuMiw4Ni42eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjAxLjk2MTA1OCwgNTMuNDc5NjM4KSI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMTc5NjQwLCAwLjcwNTA2OCkiPgogICAgICAgIDxwYXRoIGQ9Ik0tNDc4LjYsNjhjMC0yMy45LTAuNC00NC41LTEuNy02My40aDMxLjhsMS4yLDM5LjloMS43YzkuMS0yNy4zLDMxLTQ0LjUsNTUuMy00NC41IGMzLjUtMC4xLDcsMC40LDEwLjMsMS4ydjM0LjhjLTQuMS0wLjktOC4yLTEuMy0xMi40LTEuMmMtMjUuNiwwLTQzLjcsMTkuNy00OC43LDQ3LjRjLTEsNS43LTEuNiwxMS41LTEuNywxNy4ydjEwOC4zaC0zNlY2OCBMLTQ3OC42LDY4eiIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCIgZmlsbD0iI0YzNzcyNiI+CiAgICA8cGF0aCBkPSJNMTM1Mi4zLDMyNi4yaDM3VjI4aC0zN1YzMjYuMnogTTE2MDQuOCwzMjYuMmMtMi41LTEzLjktMy40LTMxLjEtMy40LTQ4Ljd2LTc2IGMwLTQwLjctMTUuMS04My4xLTc3LjMtODMuMWMtMjUuNiwwLTUwLDcuMS02Ni44LDE4LjFsOC40LDI0LjRjMTQuMy05LjIsMzQtMTUuMSw1My0xNS4xYzQxLjYsMCw0Ni4yLDMwLjIsNDYuMiw0N3Y0LjIgYy03OC42LTAuNC0xMjIuMywyNi41LTEyMi4zLDc1LjZjMCwyOS40LDIxLDU4LjQsNjIuMiw1OC40YzI5LDAsNTAuOS0xNC4zLDYyLjItMzAuMmgxLjNsMi45LDI1LjZIMTYwNC44eiBNMTU2NS43LDI1Ny43IGMwLDMuOC0wLjgsOC0yLjEsMTEuOGMtNS45LDE3LjItMjIuNywzNC00OS4yLDM0Yy0xOC45LDAtMzQuOS0xMS4zLTM0LjktMzUuM2MwLTM5LjUsNDUuOC00Ni42LDg2LjItNDUuOFYyNTcuN3ogTTE2OTguNSwzMjYuMiBsMS43LTMzLjZoMS4zYzE1LjEsMjYuOSwzOC43LDM4LjIsNjguMSwzOC4yYzQ1LjQsMCw5MS4yLTM2LjEsOTEuMi0xMDguOGMwLjQtNjEuNy0zNS4zLTEwMy43LTg1LjctMTAzLjcgYy0zMi44LDAtNTYuMywxNC43LTY5LjMsMzcuNGgtMC44VjI4aC0zNi42djI0NS43YzAsMTguMS0wLjgsMzguNi0xLjcsNTIuNUgxNjk4LjV6IE0xNzA0LjgsMjA4LjJjMC01LjksMS4zLTEwLjksMi4xLTE1LjEgYzcuNi0yOC4xLDMxLjEtNDUuNCw1Ni4zLTQ1LjRjMzkuNSwwLDYwLjUsMzQuOSw2MC41LDc1LjZjMCw0Ni42LTIzLjEsNzguMS02MS44LDc4LjFjLTI2LjksMC00OC4zLTE3LjYtNTUuNS00My4zIGMtMC44LTQuMi0xLjctOC44LTEuNy0xMy40VjIwOC4yeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgZmlsbD0iIzYxNjE2MSIgZD0iTTE1IDlIOXY2aDZWOXptLTIgNGgtMnYtMmgydjJ6bTgtMlY5aC0yVjdjMC0xLjEtLjktMi0yLTJoLTJWM2gtMnYyaC0yVjNIOXYySDdjLTEuMSAwLTIgLjktMiAydjJIM3YyaDJ2MkgzdjJoMnYyYzAgMS4xLjkgMiAyIDJoMnYyaDJ2LTJoMnYyaDJ2LTJoMmMxLjEgMCAyLS45IDItMnYtMmgydi0yaC0ydi0yaDJ6bS00IDZIN1Y3aDEwdjEweiIvPgo8L3N2Zz4K);
  --jp-icon-keyboard: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMjAgNUg0Yy0xLjEgMC0xLjk5LjktMS45OSAyTDIgMTdjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0tOSAzaDJ2MmgtMlY4em0wIDNoMnYyaC0ydi0yek04IDhoMnYySDhWOHptMCAzaDJ2Mkg4di0yem0tMSAySDV2LTJoMnYyem0wLTNINVY4aDJ2MnptOSA3SDh2LTJoOHYyem0wLTRoLTJ2LTJoMnYyem0wLTNoLTJWOGgydjJ6bTMgM2gtMnYtMmgydjJ6bTAtM2gtMlY4aDJ2MnoiLz4KPC9zdmc+Cg==);
  --jp-icon-launcher: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkgMTlINVY1aDdWM0g1YTIgMiAwIDAwLTIgMnYxNGEyIDIgMCAwMDIgMmgxNGMxLjEgMCAyLS45IDItMnYtN2gtMnY3ek0xNCAzdjJoMy41OWwtOS44MyA5LjgzIDEuNDEgMS40MUwxOSA2LjQxVjEwaDJWM2gtN3oiLz4KPC9zdmc+Cg==);
  --jp-icon-line-form: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IndoaXRlIiBkPSJNNS44OCA0LjEyTDEzLjc2IDEybC03Ljg4IDcuODhMOCAyMmwxMC0xMEw4IDJ6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-link: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTMuOSAxMmMwLTEuNzEgMS4zOS0zLjEgMy4xLTMuMWg0VjdIN2MtMi43NiAwLTUgMi4yNC01IDVzMi4yNCA1IDUgNWg0di0xLjlIN2MtMS43MSAwLTMuMS0xLjM5LTMuMS0zLjF6TTggMTNoOHYtMkg4djJ6bTktNmgtNHYxLjloNGMxLjcxIDAgMy4xIDEuMzkgMy4xIDMuMXMtMS4zOSAzLjEtMy4xIDMuMWgtNFYxN2g0YzIuNzYgMCA1LTIuMjQgNS01cy0yLjI0LTUtNS01eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-list: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiM2MTYxNjEiIGQ9Ik0xOSA1djE0SDVWNWgxNG0xLjEtMkgzLjljLS41IDAtLjkuNC0uOS45djE2LjJjMCAuNC40LjkuOS45aDE2LjJjLjQgMCAuOS0uNS45LS45VjMuOWMwLS41LS41LS45LS45LS45ek0xMSA3aDZ2MmgtNlY3em0wIDRoNnYyaC02di0yem0wIDRoNnYyaC02ek03IDdoMnYySDd6bTAgNGgydjJIN3ptMCA0aDJ2Mkg3eiIvPgo8L3N2Zz4=);
  --jp-icon-listings-info: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTAuOTc4IDUwLjk3OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAuOTc4IDUwLjk3ODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik00My41Miw3LjQ1OEMzOC43MTEsMi42NDgsMzIuMzA3LDAsMjUuNDg5LDBDMTguNjcsMCwxMi4yNjYsMi42NDgsNy40NTgsNy40NTgNCgkJCQljLTkuOTQzLDkuOTQxLTkuOTQzLDI2LjExOSwwLDM2LjA2MmM0LjgwOSw0LjgwOSwxMS4yMTIsNy40NTYsMTguMDMxLDcuNDU4YzAsMCwwLjAwMSwwLDAuMDAyLDANCgkJCQljNi44MTYsMCwxMy4yMjEtMi42NDgsMTguMDI5LTcuNDU4YzQuODA5LTQuODA5LDcuNDU3LTExLjIxMiw3LjQ1Ny0xOC4wM0M1MC45NzcsMTguNjcsNDguMzI4LDEyLjI2Niw0My41Miw3LjQ1OHoNCgkJCQkgTTQyLjEwNiw0Mi4xMDVjLTQuNDMyLDQuNDMxLTEwLjMzMiw2Ljg3Mi0xNi42MTUsNi44NzJoLTAuMDAyYy02LjI4NS0wLjAwMS0xMi4xODctMi40NDEtMTYuNjE3LTYuODcyDQoJCQkJYy05LjE2Mi05LjE2My05LjE2Mi0yNC4wNzEsMC0zMy4yMzNDMTMuMzAzLDQuNDQsMTkuMjA0LDIsMjUuNDg5LDJjNi4yODQsMCwxMi4xODYsMi40NCwxNi42MTcsNi44NzINCgkJCQljNC40MzEsNC40MzEsNi44NzEsMTAuMzMyLDYuODcxLDE2LjYxN0M0OC45NzcsMzEuNzcyLDQ2LjUzNiwzNy42NzUsNDIuMTA2LDQyLjEwNXoiLz4NCgkJPC9nPg0KCQk8Zz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjMuNTc4LDMyLjIxOGMtMC4wMjMtMS43MzQsMC4xNDMtMy4wNTksMC40OTYtMy45NzJjMC4zNTMtMC45MTMsMS4xMS0xLjk5NywyLjI3Mi0zLjI1Mw0KCQkJCWMwLjQ2OC0wLjUzNiwwLjkyMy0xLjA2MiwxLjM2Ny0xLjU3NWMwLjYyNi0wLjc1MywxLjEwNC0xLjQ3OCwxLjQzNi0yLjE3NWMwLjMzMS0wLjcwNywwLjQ5NS0xLjU0MSwwLjQ5NS0yLjUNCgkJCQljMC0xLjA5Ni0wLjI2LTIuMDg4LTAuNzc5LTIuOTc5Yy0wLjU2NS0wLjg3OS0xLjUwMS0xLjMzNi0yLjgwNi0xLjM2OWMtMS44MDIsMC4wNTctMi45ODUsMC42NjctMy41NSwxLjgzMg0KCQkJCWMtMC4zMDEsMC41MzUtMC41MDMsMS4xNDEtMC42MDcsMS44MTRjLTAuMTM5LDAuNzA3LTAuMjA3LDEuNDMyLTAuMjA3LDIuMTc0aC0yLjkzN2MtMC4wOTEtMi4yMDgsMC40MDctNC4xMTQsMS40OTMtNS43MTkNCgkJCQljMS4wNjItMS42NCwyLjg1NS0yLjQ4MSw1LjM3OC0yLjUyN2MyLjE2LDAuMDIzLDMuODc0LDAuNjA4LDUuMTQxLDEuNzU4YzEuMjc4LDEuMTYsMS45MjksMi43NjQsMS45NSw0LjgxMQ0KCQkJCWMwLDEuMTQyLTAuMTM3LDIuMTExLTAuNDEsMi45MTFjLTAuMzA5LDAuODQ1LTAuNzMxLDEuNTkzLTEuMjY4LDIuMjQzYy0wLjQ5MiwwLjY1LTEuMDY4LDEuMzE4LTEuNzMsMi4wMDINCgkJCQljLTAuNjUsMC42OTctMS4zMTMsMS40NzktMS45ODcsMi4zNDZjLTAuMjM5LDAuMzc3LTAuNDI5LDAuNzc3LTAuNTY1LDEuMTk5Yy0wLjE2LDAuOTU5LTAuMjE3LDEuOTUxLTAuMTcxLDIuOTc5DQoJCQkJQzI2LjU4OSwzMi4yMTgsMjMuNTc4LDMyLjIxOCwyMy41NzgsMzIuMjE4eiBNMjMuNTc4LDM4LjIydi0zLjQ4NGgzLjA3NnYzLjQ4NEgyMy41Nzh6Ii8+DQoJCTwvZz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==);
  --jp-icon-markdown: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjN0IxRkEyIiBkPSJNNSAxNC45aDEybC02LjEgNnptOS40LTYuOGMwLTEuMy0uMS0yLjktLjEtNC41LS40IDEuNC0uOSAyLjktMS4zIDQuM2wtMS4zIDQuM2gtMkw4LjUgNy45Yy0uNC0xLjMtLjctMi45LTEtNC4zLS4xIDEuNi0uMSAzLjItLjIgNC42TDcgMTIuNEg0LjhsLjctMTFoMy4zTDEwIDVjLjQgMS4yLjcgMi43IDEgMy45LjMtMS4yLjctMi42IDEtMy45bDEuMi0zLjdoMy4zbC42IDExaC0yLjRsLS4zLTQuMnoiLz4KPC9zdmc+Cg==);
  --jp-icon-new-folder: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIwIDZoLThsLTItMkg0Yy0xLjExIDAtMS45OS44OS0xLjk5IDJMMiAxOGMwIDEuMTEuODkgMiAyIDJoMTZjMS4xMSAwIDItLjg5IDItMlY4YzAtMS4xMS0uODktMi0yLTJ6bS0xIDhoLTN2M2gtMnYtM2gtM3YtMmgzVjloMnYzaDN2MnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-not-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMTkgMTcuMTg0NCAyLjk2OTY4IDE0LjMwMzIgMS44NjA5NCAxMS40NDA5WiIvPgogICAgPHBhdGggY2xhc3M9ImpwLWljb24yIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zMTU5MiA5LjMyMDMxKSIgZD0iTTcuMzY4NDIgMEwwIDcuMzY0NzkiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMzE1OTIgMTYuNjgzNikgc2NhbGUoMSAtMSkiIGQ9Ik03LjM2ODQyIDBMMCA3LjM2NDc5Ii8+Cjwvc3ZnPgo=);
  --jp-icon-notebook: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi13YXJuMCBqcC1pY29uLXNlbGVjdGFibGUiIGZpbGw9IiNFRjZDMDAiPgogICAgPHBhdGggZD0iTTE4LjcgMy4zdjE1LjRIMy4zVjMuM2gxNS40bTEuNS0xLjVIMS44djE4LjNoMTguM2wuMS0xOC4zeiIvPgogICAgPHBhdGggZD0iTTE2LjUgMTYuNWwtNS40LTQuMy01LjYgNC4zdi0xMWgxMXoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-numbering: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyOCAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTQgMTlINlYxOS41SDVWMjAuNUg2VjIxSDRWMjJIN1YxOEg0VjE5Wk01IDEwSDZWNkg0VjdINVYxMFpNNCAxM0g1LjhMNCAxNS4xVjE2SDdWMTVINS4yTDcgMTIuOVYxMkg0VjEzWk05IDdWOUgyM1Y3SDlaTTkgMjFIMjNWMTlIOVYyMVpNOSAxNUgyM1YxM0g5VjE1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-offline-bolt: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyIDIuMDJjLTUuNTEgMC05Ljk4IDQuNDctOS45OCA5Ljk4czQuNDcgOS45OCA5Ljk4IDkuOTggOS45OC00LjQ3IDkuOTgtOS45OFMxNy41MSAyLjAyIDEyIDIuMDJ6TTExLjQ4IDIwdi02LjI2SDhMMTMgNHY2LjI2aDMuMzVMMTEuNDggMjB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-palette: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTE4IDEzVjIwSDRWNkg5LjAyQzkuMDcgNS4yOSA5LjI0IDQuNjIgOS41IDRINEMyLjkgNCAyIDQuOSAyIDZWMjBDMiAyMS4xIDIuOSAyMiA0IDIySDE4QzE5LjEgMjIgMjAgMjEuMSAyMCAyMFYxNUwxOCAxM1pNMTkuMyA4Ljg5QzE5Ljc0IDguMTkgMjAgNy4zOCAyMCA2LjVDMjAgNC4wMSAxNy45OSAyIDE1LjUgMkMxMy4wMSAyIDExIDQuMDEgMTEgNi41QzExIDguOTkgMTMuMDEgMTEgMTUuNDkgMTFDMTYuMzcgMTEgMTcuMTkgMTAuNzQgMTcuODggMTAuM0wyMSAxMy40MkwyMi40MiAxMkwxOS4zIDguODlaTTE1LjUgOUMxNC4xMiA5IDEzIDcuODggMTMgNi41QzEzIDUuMTIgMTQuMTIgNCAxNS41IDRDMTYuODggNCAxOCA1LjEyIDE4IDYuNUMxOCA3Ljg4IDE2Ljg4IDkgMTUuNSA5WiIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDZIOS4wMTg5NEM5LjAwNjM5IDYuMTY1MDIgOSA2LjMzMTc2IDkgNi41QzkgOC44MTU3NyAxMC4yMTEgMTAuODQ4NyAxMi4wMzQzIDEySDlWMTRIMTZWMTIuOTgxMUMxNi41NzAzIDEyLjkzNzcgMTcuMTIgMTIuODIwNyAxNy42Mzk2IDEyLjYzOTZMMTggMTNWMjBINFY2Wk04IDhINlYxMEg4VjhaTTYgMTJIOFYxNEg2VjEyWk04IDE2SDZWMThIOFYxNlpNOSAxNkgxNlYxOEg5VjE2WiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-paste: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE5IDJoLTQuMThDMTQuNC44NCAxMy4zIDAgMTIgMGMtMS4zIDAtMi40Ljg0LTIuODIgMkg1Yy0xLjEgMC0yIC45LTIgMnYxNmMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjRjMC0xLjEtLjktMi0yLTJ6bS03IDBjLjU1IDAgMSAuNDUgMSAxcy0uNDUgMS0xIDEtMS0uNDUtMS0xIC40NS0xIDEtMXptNyAxOEg1VjRoMnYzaDEwVjRoMnYxNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-pdf: url(data:image/svg+xml;base64,PHN2ZwogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMiAyMiIgd2lkdGg9IjE2Ij4KICAgIDxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDQ1KSIgY2xhc3M9ImpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iI0ZGMkEyQSIKICAgICAgIGQ9Im0gMjIuMzQ0MzY5LC0zLjAxNjM2NDIgaCA1LjYzODYwNCB2IDEuNTc5MjQzMyBoIC0zLjU0OTIyNyB2IDEuNTA4NjkyOTkgaCAzLjMzNzU3NiBWIDEuNjUwODE1NCBoIC0zLjMzNzU3NiB2IDMuNDM1MjYxMyBoIC0yLjA4OTM3NyB6IG0gLTcuMTM2NDQ0LDEuNTc5MjQzMyB2IDQuOTQzOTU0MyBoIDAuNzQ4OTIgcSAxLjI4MDc2MSwwIDEuOTUzNzAzLC0wLjYzNDk1MzUgMC42NzgzNjksLTAuNjM0OTUzNSAwLjY3ODM2OSwtMS44NDUxNjQxIDAsLTEuMjA0NzgzNTUgLTAuNjcyOTQyLC0xLjgzNDMxMDExIC0wLjY3Mjk0MiwtMC42Mjk1MjY1OSAtMS45NTkxMywtMC42Mjk1MjY1OSB6IG0gLTIuMDg5Mzc3LC0xLjU3OTI0MzMgaCAyLjIwMzM0MyBxIDEuODQ1MTY0LDAgMi43NDYwMzksMC4yNjU5MjA3IDAuOTA2MzAxLDAuMjYwNDkzNyAxLjU1MjEwOCwwLjg5MDAyMDMgMC41Njk4MywwLjU0ODEyMjMgMC44NDY2MDUsMS4yNjQ0ODAwNiAwLjI3Njc3NCwwLjcxNjM1NzgxIDAuMjc2Nzc0LDEuNjIyNjU4OTQgMCwwLjkxNzE1NTEgLTAuMjc2Nzc0LDEuNjM4OTM5OSAtMC4yNzY3NzUsMC43MTYzNTc4IC0wLjg0NjYwNSwxLjI2NDQ4IC0wLjY1MTIzNCwwLjYyOTUyNjYgLTEuNTYyOTYyLDAuODk1NDQ3MyAtMC45MTE3MjgsMC4yNjA0OTM3IC0yLjczNTE4NSwwLjI2MDQ5MzcgaCAtMi4yMDMzNDMgeiBtIC04LjE0NTg1NjUsMCBoIDMuNDY3ODIzIHEgMS41NDY2ODE2LDAgMi4zNzE1Nzg1LDAuNjg5MjIzIDAuODMwMzI0LDAuNjgzNzk2MSAwLjgzMDMyNCwxLjk1MzcwMzE0IDAsMS4yNzUzMzM5NyAtMC44MzAzMjQsMS45NjQ1NTcwNiBRIDkuOTg3MTk2MSwyLjI3NDkxNSA4LjQ0MDUxNDUsMi4yNzQ5MTUgSCA3LjA2MjA2ODQgViA1LjA4NjA3NjcgSCA0Ljk3MjY5MTUgWiBtIDIuMDg5Mzc2OSwxLjUxNDExOTkgdiAyLjI2MzAzOTQzIGggMS4xNTU5NDEgcSAwLjYwNzgxODgsMCAwLjkzODg2MjksLTAuMjkzMDU1NDcgMC4zMzEwNDQxLC0wLjI5ODQ4MjQxIDAuMzMxMDQ0MSwtMC44NDExNzc3MiAwLC0wLjU0MjY5NTMxIC0wLjMzMTA0NDEsLTAuODM1NzUwNzQgLTAuMzMxMDQ0MSwtMC4yOTMwNTU1IC0wLjkzODg2MjksLTAuMjkzMDU1NSB6IgovPgo8L3N2Zz4K);
  --jp-icon-python: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1icmFuZDAganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMEQ0N0ExIj4KICAgIDxwYXRoIGQ9Ik0xMS4xIDYuOVY1LjhINi45YzAtLjUgMC0xLjMuMi0xLjYuNC0uNy44LTEuMSAxLjctMS40IDEuNy0uMyAyLjUtLjMgMy45LS4xIDEgLjEgMS45LjkgMS45IDEuOXY0LjJjMCAuNS0uOSAxLjYtMiAxLjZIOC44Yy0xLjUgMC0yLjQgMS40LTIuNCAyLjh2Mi4ySDQuN0MzLjUgMTUuMSAzIDE0IDMgMTMuMVY5Yy0uMS0xIC42LTIgMS44LTIgMS41LS4xIDYuMy0uMSA2LjMtLjF6Ii8+CiAgICA8cGF0aCBkPSJNMTAuOSAxNS4xdjEuMWg0LjJjMCAuNSAwIDEuMy0uMiAxLjYtLjQuNy0uOCAxLjEtMS43IDEuNC0xLjcuMy0yLjUuMy0zLjkuMS0xLS4xLTEuOS0uOS0xLjktMS45di00LjJjMC0uNS45LTEuNiAyLTEuNmgzLjhjMS41IDAgMi40LTEuNCAyLjQtMi44VjYuNmgxLjdDMTguNSA2LjkgMTkgOCAxOSA4LjlWMTNjMCAxLS43IDIuMS0xLjkgMi4xaC02LjJ6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-r-kernel: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjE5NkYzIiBkPSJNNC40IDIuNWMxLjItLjEgMi45LS4zIDQuOS0uMyAyLjUgMCA0LjEuNCA1LjIgMS4zIDEgLjcgMS41IDEuOSAxLjUgMy41IDAgMi0xLjQgMy41LTIuOSA0LjEgMS4yLjQgMS43IDEuNiAyLjIgMyAuNiAxLjkgMSAzLjkgMS4zIDQuNmgtMy44Yy0uMy0uNC0uOC0xLjctMS4yLTMuN3MtMS4yLTIuNi0yLjYtMi42aC0uOXY2LjRINC40VjIuNXptMy43IDYuOWgxLjRjMS45IDAgMi45LS45IDIuOS0yLjNzLTEtMi4zLTIuOC0yLjNjLS43IDAtMS4zIDAtMS42LjJ2NC41aC4xdi0uMXoiLz4KPC9zdmc+Cg==);
  --jp-icon-react: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMTUwIDE1MCA1NDEuOSAyOTUuMyI+CiAgPGcgY2xhc3M9ImpwLWljb24tYnJhbmQyIGpwLWljb24tc2VsZWN0YWJsZSIgZmlsbD0iIzYxREFGQiI+CiAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgPGNpcmNsZSBjeD0iNDIwLjkiIGN5PSIyOTYuNSIgcj0iNDUuNyIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-redo: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjE2Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjQgMTAuNkMxNi41NSA4Ljk5IDE0LjE1IDggMTEuNSA4Yy00LjY1IDAtOC41OCAzLjAzLTkuOTYgNy4yMkwzLjkgMTZjMS4wNS0zLjE5IDQuMDUtNS41IDcuNi01LjUgMS45NSAwIDMuNzMuNzIgNS4xMiAxLjg4TDEzIDE2aDlWN2wtMy42IDMuNnoiLz4KICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-refresh: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTkgMTMuNWMtMi40OSAwLTQuNS0yLjAxLTQuNS00LjVTNi41MSA0LjUgOSA0LjVjMS4yNCAwIDIuMzYuNTIgMy4xNyAxLjMzTDEwIDhoNVYzbC0xLjc2IDEuNzZDMTIuMTUgMy42OCAxMC42NiAzIDkgMyA1LjY5IDMgMy4wMSA1LjY5IDMuMDEgOVM1LjY5IDE1IDkgMTVjMi45NyAwIDUuNDMtMi4xNiA1LjktNWgtMS41MmMtLjQ2IDItMi4yNCAzLjUtNC4zOCAzLjV6Ii8+CiAgICA8L2c+Cjwvc3ZnPgo=);
  --jp-icon-regex: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIwIDIwIj4KICA8ZyBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiM0MTQxNDEiPgogICAgPHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ii8+CiAgPC9nPgoKICA8ZyBjbGFzcz0ianAtaWNvbi1hY2NlbnQyIiBmaWxsPSIjRkZGIj4KICAgIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjUuNSIgY3k9IjE0LjUiIHI9IjEuNSIvPgogICAgPHJlY3QgeD0iMTIiIHk9IjQiIGNsYXNzPSJzdDIiIHdpZHRoPSIxIiBoZWlnaHQ9IjgiLz4KICAgIDxyZWN0IHg9IjguNSIgeT0iNy41IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjg2NiAtMC41IDAuNSAwLjg2NiAtMi4zMjU1IDcuMzIxOSkiIGNsYXNzPSJzdDIiIHdpZHRoPSI4IiBoZWlnaHQ9IjEiLz4KICAgIDxyZWN0IHg9IjEyIiB5PSI0IiB0cmFuc2Zvcm09Im1hdHJpeCgwLjUgLTAuODY2IDAuODY2IDAuNSAtMC42Nzc5IDE0LjgyNTIpIiBjbGFzcz0ic3QyIiB3aWR0aD0iMSIgaGVpZ2h0PSI4Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-run: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTggNXYxNGwxMS03eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-running: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPgogIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICA8cGF0aCBkPSJNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptOTYgMzI4YzAgOC44LTcuMiAxNi0xNiAxNkgxNzZjLTguOCAwLTE2LTcuMi0xNi0xNlYxNzZjMC04LjggNy4yLTE2IDE2LTE2aDE2MGM4LjggMCAxNiA3LjIgMTYgMTZ2MTYweiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-save: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTE3IDNINWMtMS4xMSAwLTIgLjktMiAydjE0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjdsLTQtNHptLTUgMTZjLTEuNjYgMC0zLTEuMzQtMy0zczEuMzQtMyAzLTMgMyAxLjM0IDMgMy0xLjM0IDMtMyAzem0zLTEwSDVWNWgxMHY0eiIvPgogICAgPC9nPgo8L3N2Zz4K);
  --jp-icon-search: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-settings: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTkuNDMgMTIuOThjLjA0LS4zMi4wNy0uNjQuMDctLjk4cy0uMDMtLjY2LS4wNy0uOThsMi4xMS0xLjY1Yy4xOS0uMTUuMjQtLjQyLjEyLS42NGwtMi0zLjQ2Yy0uMTItLjIyLS4zOS0uMy0uNjEtLjIybC0yLjQ5IDFjLS41Mi0uNC0xLjA4LS43My0xLjY5LS45OGwtLjM4LTIuNjVBLjQ4OC40ODggMCAwMDE0IDJoLTRjLS4yNSAwLS40Ni4xOC0uNDkuNDJsLS4zOCAyLjY1Yy0uNjEuMjUtMS4xNy41OS0xLjY5Ljk4bC0yLjQ5LTFjLS4yMy0uMDktLjQ5IDAtLjYxLjIybC0yIDMuNDZjLS4xMy4yMi0uMDcuNDkuMTIuNjRsMi4xMSAxLjY1Yy0uMDQuMzItLjA3LjY1LS4wNy45OHMuMDMuNjYuMDcuOThsLTIuMTEgMS42NWMtLjE5LjE1LS4yNC40Mi0uMTIuNjRsMiAzLjQ2Yy4xMi4yMi4zOS4zLjYxLjIybDIuNDktMWMuNTIuNCAxLjA4LjczIDEuNjkuOThsLjM4IDIuNjVjLjAzLjI0LjI0LjQyLjQ5LjQyaDRjLjI1IDAgLjQ2LS4xOC40OS0uNDJsLjM4LTIuNjVjLjYxLS4yNSAxLjE3LS41OSAxLjY5LS45OGwyLjQ5IDFjLjIzLjA5LjQ5IDAgLjYxLS4yMmwyLTMuNDZjLjEyLS4yMi4wNy0uNDktLjEyLS42NGwtMi4xMS0xLjY1ek0xMiAxNS41Yy0xLjkzIDAtMy41LTEuNTctMy41LTMuNXMxLjU3LTMuNSAzLjUtMy41IDMuNSAxLjU3IDMuNSAzLjUtMS41NyAzLjUtMy41IDMuNXoiLz4KPC9zdmc+Cg==);
  --jp-icon-spreadsheet: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8cGF0aCBjbGFzcz0ianAtaWNvbi1jb250cmFzdDEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNENBRjUwIiBkPSJNMi4yIDIuMnYxNy42aDE3LjZWMi4ySDIuMnptMTUuNCA3LjdoLTUuNVY0LjRoNS41djUuNXpNOS45IDQuNHY1LjVINC40VjQuNGg1LjV6bS01LjUgNy43aDUuNXY1LjVINC40di01LjV6bTcuNyA1LjV2LTUuNWg1LjV2NS41aC01LjV6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-stop: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik02IDZoMTJ2MTJINnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-tab: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTIxIDNIM2MtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxOGMxLjEgMCAyLS45IDItMlY1YzAtMS4xLS45LTItMi0yem0wIDE2SDNWNWgxMHY0aDh2MTB6Ii8+CiAgPC9nPgo8L3N2Zz4K);
  --jp-icon-table-rows: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMSw4SDNWNGgxOFY4eiBNMjEsMTBIM3Y0aDE4VjEweiBNMjEsMTZIM3Y0aDE4VjE2eiIvPgogICAgPC9nPgo8L3N2Zz4=);
  --jp-icon-tag: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCA0MyAyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CgkJPHBhdGggZD0iTTI4LjgzMzIgMTIuMzM0TDMyLjk5OTggMTYuNTAwN0wzNy4xNjY1IDEyLjMzNEgyOC44MzMyWiIvPgoJCTxwYXRoIGQ9Ik0xNi4yMDk1IDIxLjYxMDRDMTUuNjg3MyAyMi4xMjk5IDE0Ljg0NDMgMjIuMTI5OSAxNC4zMjQ4IDIxLjYxMDRMNi45ODI5IDE0LjcyNDVDNi41NzI0IDE0LjMzOTQgNi4wODMxMyAxMy42MDk4IDYuMDQ3ODYgMTMuMDQ4MkM1Ljk1MzQ3IDExLjUyODggNi4wMjAwMiA4LjYxOTQ0IDYuMDY2MjEgNy4wNzY5NUM2LjA4MjgxIDYuNTE0NzcgNi41NTU0OCA2LjA0MzQ3IDcuMTE4MDQgNi4wMzA1NUM5LjA4ODYzIDUuOTg0NzMgMTMuMjYzOCA1LjkzNTc5IDEzLjY1MTggNi4zMjQyNUwyMS43MzY5IDEzLjYzOUMyMi4yNTYgMTQuMTU4NSAyMS43ODUxIDE1LjQ3MjQgMjEuMjYyIDE1Ljk5NDZMMTYuMjA5NSAyMS42MTA0Wk05Ljc3NTg1IDguMjY1QzkuMzM1NTEgNy44MjU2NiA4LjYyMzUxIDcuODI1NjYgOC4xODI4IDguMjY1QzcuNzQzNDYgOC43MDU3MSA3Ljc0MzQ2IDkuNDE3MzMgOC4xODI4IDkuODU2NjdDOC42MjM4MiAxMC4yOTY0IDkuMzM1ODIgMTAuMjk2NCA5Ljc3NTg1IDkuODU2NjdDMTAuMjE1NiA5LjQxNzMzIDEwLjIxNTYgOC43MDUzMyA5Ljc3NTg1IDguMjY1WiIvPgoJPC9nPgo8L3N2Zz4K);
  --jp-icon-terminal: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiA+CiAgICA8cmVjdCBjbGFzcz0ianAtaWNvbjIganAtaWNvbi1zZWxlY3RhYmxlIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiIGZpbGw9IiMzMzMzMzMiLz4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uLWFjY2VudDIganAtaWNvbi1zZWxlY3RhYmxlLWludmVyc2UiIGQ9Ik01LjA1NjY0IDguNzYxNzJDNS4wNTY2NCA4LjU5NzY2IDUuMDMxMjUgOC40NTMxMiA0Ljk4MDQ3IDguMzI4MTJDNC45MzM1OSA4LjE5OTIyIDQuODU1NDcgOC4wODIwMyA0Ljc0NjA5IDcuOTc2NTZDNC42NDA2MiA3Ljg3MTA5IDQuNSA3Ljc3NTM5IDQuMzI0MjIgNy42ODk0NUM0LjE1MjM0IDcuNTk5NjEgMy45NDMzNiA3LjUxMTcyIDMuNjk3MjcgNy40MjU3OEMzLjMwMjczIDcuMjg1MTYgMi45NDMzNiA3LjEzNjcyIDIuNjE5MTQgNi45ODA0N0MyLjI5NDkyIDYuODI0MjIgMi4wMTc1OCA2LjY0MjU4IDEuNzg3MTEgNi40MzU1NUMxLjU2MDU1IDYuMjI4NTIgMS4zODQ3NyA1Ljk4ODI4IDEuMjU5NzcgNS43MTQ4NEMxLjEzNDc3IDUuNDM3NSAxLjA3MjI3IDUuMTA5MzggMS4wNzIyNyA0LjczMDQ3QzEuMDcyMjcgNC4zOTg0NCAxLjEyODkxIDQuMDk1NyAxLjI0MjE5IDMuODIyMjdDMS4zNTU0NyAzLjU0NDkyIDEuNTE1NjIgMy4zMDQ2OSAxLjcyMjY2IDMuMTAxNTZDMS45Mjk2OSAyLjg5ODQ0IDIuMTc5NjkgMi43MzQzNyAyLjQ3MjY2IDIuNjA5MzhDMi43NjU2MiAyLjQ4NDM4IDMuMDkxOCAyLjQwNDMgMy40NTExNyAyLjM2OTE0VjEuMTA5MzhINC4zODg2N1YyLjM4MDg2QzQuNzQwMjMgMi40Mjc3MyA1LjA1NjY0IDIuNTIzNDQgNS4zMzc4OSAyLjY2Nzk3QzUuNjE5MTQgMi44MTI1IDUuODU3NDIgMy4wMDE5NSA2LjA1MjczIDMuMjM2MzNDNi4yNTE5NSAzLjQ2NjggNi40MDQzIDMuNzQwMjMgNi41MDk3NyA0LjA1NjY0QzYuNjE5MTQgNC4zNjkxNCA2LjY3MzgzIDQuNzIwNyA2LjY3MzgzIDUuMTExMzNINS4wNDQ5MkM1LjA0NDkyIDQuNjM4NjcgNC45Mzc1IDQuMjgxMjUgNC43MjI2NiA0LjAzOTA2QzQuNTA3ODEgMy43OTI5NyA0LjIxNjggMy42Njk5MiAzLjg0OTYxIDMuNjY5OTJDMy42NTAzOSAzLjY2OTkyIDMuNDc2NTYgMy42OTcyNyAzLjMyODEyIDMuNzUxOTVDMy4xODM1OSAzLjgwMjczIDMuMDY0NDUgMy44NzY5NSAyLjk3MDcgMy45NzQ2MUMyLjg3Njk1IDQuMDY4MzYgMi44MDY2NCA0LjE3OTY5IDIuNzU5NzcgNC4zMDg1OUMyLjcxNjggNC40Mzc1IDIuNjk1MzEgNC41NzgxMiAyLjY5NTMxIDQuNzMwNDdDMi42OTUzMSA0Ljg4MjgxIDIuNzE2OCA1LjAxOTUzIDIuNzU5NzcgNS4xNDA2MkMyLjgwNjY0IDUuMjU3ODEgMi44ODI4MSA1LjM2NzE5IDIuOTg4MjggNS40Njg3NUMzLjA5NzY2IDUuNTcwMzEgMy4yNDAyMyA1LjY2Nzk3IDMuNDE2MDIgNS43NjE3MkMzLjU5MTggNS44NTE1NiAzLjgxMDU1IDUuOTQzMzYgNC4wNzIyNyA2LjAzNzExQzQuNDY2OCA2LjE4NTU1IDQuODI0MjIgNi4zMzk4NCA1LjE0NDUzIDYuNUM1LjQ2NDg0IDYuNjU2MjUgNS43MzgyOCA2LjgzOTg0IDUuOTY0ODQgNy4wNTA3OEM2LjE5NTMxIDcuMjU3ODEgNi4zNzEwOSA3LjUgNi40OTIxOSA3Ljc3NzM0QzYuNjE3MTkgOC4wNTA3OCA2LjY3OTY5IDguMzc1IDYuNjc5NjkgOC43NUM2LjY3OTY5IDkuMDkzNzUgNi42MjMwNSA5LjQwNDMgNi41MDk3NyA5LjY4MTY0QzYuMzk2NDggOS45NTUwOCA2LjIzNDM4IDEwLjE5MTQgNi4wMjM0NCAxMC4zOTA2QzUuODEyNSAxMC41ODk4IDUuNTU4NTkgMTAuNzUgNS4yNjE3MiAxMC44NzExQzQuOTY0ODQgMTAuOTg4MyA0LjYzMjgxIDExLjA2NDUgNC4yNjU2MiAxMS4wOTk2VjEyLjI0OEgzLjMzMzk4VjExLjA5OTZDMy4wMDE5NSAxMS4wNjg0IDIuNjc5NjkgMTAuOTk2MSAyLjM2NzE5IDEwLjg4MjhDMi4wNTQ2OSAxMC43NjU2IDEuNzc3MzQgMTAuNTk3NyAxLjUzNTE2IDEwLjM3ODlDMS4yOTY4OCAxMC4xNjAyIDEuMTA1NDcgOS44ODQ3NyAwLjk2MDkzOCA5LjU1MjczQzAuODE2NDA2IDkuMjE2OCAwLjc0NDE0MSA4LjgxNDQ1IDAuNzQ0MTQxIDguMzQ1N0gyLjM3ODkxQzIuMzc4OTEgOC42MjY5NSAyLjQxOTkyIDguODYzMjggMi41MDE5NSA5LjA1NDY5QzIuNTgzOTggOS4yNDIxOSAyLjY4OTQ1IDkuMzkyNTggMi44MTgzNiA5LjUwNTg2QzIuOTUxMTcgOS42MTUyMyAzLjEwMTU2IDkuNjkzMzYgMy4yNjk1MyA5Ljc0MDIzQzMuNDM3NSA5Ljc4NzExIDMuNjA5MzggOS44MTA1NSAzLjc4NTE2IDkuODEwNTVDNC4yMDMxMiA5LjgxMDU1IDQuNTE5NTMgOS43MTI4OSA0LjczNDM4IDkuNTE3NThDNC45NDkyMiA5LjMyMjI3IDUuMDU2NjQgOS4wNzAzMSA1LjA1NjY0IDguNzYxNzJaTTEzLjQxOCAxMi4yNzE1SDguMDc0MjJWMTFIMTMuNDE4VjEyLjI3MTVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzLjk1MjY0IDYpIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K);
  --jp-icon-text-editor: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBjbGFzcz0ianAtaWNvbjMganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjNjE2MTYxIiBkPSJNMTUgMTVIM3YyaDEydi0yem0wLThIM3YyaDEyVjd6TTMgMTNoMTh2LTJIM3Yyem0wIDhoMTh2LTJIM3Yyek0zIDN2MmgxOFYzSDN6Ii8+Cjwvc3ZnPgo=);
  --jp-icon-toc: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgoJPHBhdGggZD0iTTcsNUgyMVY3SDdWNU03LDEzVjExSDIxVjEzSDdNNCw0LjVBMS41LDEuNSAwIDAsMSA1LjUsNkExLjUsMS41IDAgMCwxIDQsNy41QTEuNSwxLjUgMCAwLDEgMi41LDZBMS41LDEuNSAwIDAsMSA0LDQuNU00LDEwLjVBMS41LDEuNSAwIDAsMSA1LjUsMTJBMS41LDEuNSAwIDAsMSA0LDEzLjVBMS41LDEuNSAwIDAsMSAyLjUsMTJBMS41LDEuNSAwIDAsMSA0LDEwLjVNNywxOVYxN0gyMVYxOUg3TTQsMTYuNUExLjUsMS41IDAgMCwxIDUuNSwxOEExLjUsMS41IDAgMCwxIDQsMTkuNUExLjUsMS41IDAgMCwxIDIuNSwxOEExLjUsMS41IDAgMCwxIDQsMTYuNVoiIC8+Cjwvc3ZnPgo=);
  --jp-icon-tree-view: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGNsYXNzPSJqcC1pY29uMyIgZmlsbD0iIzYxNjE2MSI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogICAgICAgIDxwYXRoIGQ9Ik0yMiAxMVYzaC03djNIOVYzSDJ2OGg3VjhoMnYxMGg0djNoN3YtOGgtN3YzaC0yVjhoMnYzeiIvPgogICAgPC9nPgo8L3N2Zz4=);
  --jp-icon-trusted: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDI0IDI1Ij4KICAgIDxwYXRoIGNsYXNzPSJqcC1pY29uMiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMykiIGQ9Ik0xLjg2MDk0IDExLjQ0MDlDMC44MjY0NDggOC43NzAyNyAwLjg2Mzc3OSA2LjA1NzY0IDEuMjQ5MDcgNC4xOTkzMkMyLjQ4MjA2IDMuOTMzNDcgNC4wODA2OCAzLjQwMzQ3IDUuNjAxMDIgMi44NDQ5QzcuMjM1NDkgMi4yNDQ0IDguODU2NjYgMS41ODE1IDkuOTg3NiAxLjA5NTM5QzExLjA1OTcgMS41ODM0MSAxMi42MDk0IDIuMjQ0NCAxNC4yMTggMi44NDMzOUMxNS43NTAzIDMuNDEzOTQgMTcuMzk5NSAzLjk1MjU4IDE4Ljc1MzkgNC4yMTM4NUMxOS4xMzY0IDYuMDcxNzcgMTkuMTcwOSA4Ljc3NzIyIDE4LjEzOSAxMS40NDA5QzE3LjAzMDMgMTQuMzAzMiAxNC42NjY4IDE3LjE4NDQgOS45OTk5OSAxOC45MzU0QzUuMzMzMiAxNy4xODQ0IDIuOTY5NjggMTQuMzAzMiAxLjg2MDk0IDExLjQ0MDlaIi8+CiAgICA8cGF0aCBjbGFzcz0ianAtaWNvbjIiIGZpbGw9IiMzMzMzMzMiIHN0cm9rZT0iIzMzMzMzMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOCA5Ljg2NzE5KSIgZD0iTTIuODYwMTUgNC44NjUzNUwwLjcyNjU0OSAyLjk5OTU5TDAgMy42MzA0NUwyLjg2MDE1IDYuMTMxNTdMOCAwLjYzMDg3Mkw3LjI3ODU3IDBMMi44NjAxNSA0Ljg2NTM1WiIvPgo8L3N2Zz4K);
  --jp-icon-undo: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjUgOGMtMi42NSAwLTUuMDUuOTktNi45IDIuNkwyIDd2OWg5bC0zLjYyLTMuNjJjMS4zOS0xLjE2IDMuMTYtMS44OCA1LjEyLTEuODggMy41NCAwIDYuNTUgMi4zMSA3LjYgNS41bDIuMzctLjc4QzIxLjA4IDExLjAzIDE3LjE1IDggMTIuNSA4eiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-vega: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbjEganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjMjEyMTIxIj4KICAgIDxwYXRoIGQ9Ik0xMC42IDUuNGwyLjItMy4ySDIuMnY3LjNsNC02LjZ6Ii8+CiAgICA8cGF0aCBkPSJNMTUuOCAyLjJsLTQuNCA2LjZMNyA2LjNsLTQuOCA4djUuNWgxNy42VjIuMmgtNHptLTcgMTUuNEg1LjV2LTQuNGgzLjN2NC40em00LjQgMEg5LjhWOS44aDMuNHY3Ljh6bTQuNCAwaC0zLjRWNi41aDMuNHYxMS4xeiIvPgogIDwvZz4KPC9zdmc+Cg==);
  --jp-icon-yaml: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgdmlld0JveD0iMCAwIDIyIDIyIj4KICA8ZyBjbGFzcz0ianAtaWNvbi1jb250cmFzdDIganAtaWNvbi1zZWxlY3RhYmxlIiBmaWxsPSIjRDgxQjYwIj4KICAgIDxwYXRoIGQ9Ik03LjIgMTguNnYtNS40TDMgNS42aDMuM2wxLjQgMy4xYy4zLjkuNiAxLjYgMSAyLjUuMy0uOC42LTEuNiAxLTIuNWwxLjQtMy4xaDMuNGwtNC40IDcuNnY1LjVsLTIuOS0uMXoiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxNi41IiByPSIyLjEiLz4KICAgIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE3LjYiIGN5PSIxMSIgcj0iMi4xIi8+CiAgPC9nPgo8L3N2Zz4K);
}

/* Icon CSS class declarations */

.jp-AddIcon {
  background-image: var(--jp-icon-add);
}
.jp-BugIcon {
  background-image: var(--jp-icon-bug);
}
.jp-BuildIcon {
  background-image: var(--jp-icon-build);
}
.jp-CaretDownEmptyIcon {
  background-image: var(--jp-icon-caret-down-empty);
}
.jp-CaretDownEmptyThinIcon {
  background-image: var(--jp-icon-caret-down-empty-thin);
}
.jp-CaretDownIcon {
  background-image: var(--jp-icon-caret-down);
}
.jp-CaretLeftIcon {
  background-image: var(--jp-icon-caret-left);
}
.jp-CaretRightIcon {
  background-image: var(--jp-icon-caret-right);
}
.jp-CaretUpEmptyThinIcon {
  background-image: var(--jp-icon-caret-up-empty-thin);
}
.jp-CaretUpIcon {
  background-image: var(--jp-icon-caret-up);
}
.jp-CaseSensitiveIcon {
  background-image: var(--jp-icon-case-sensitive);
}
.jp-CheckIcon {
  background-image: var(--jp-icon-check);
}
.jp-CircleEmptyIcon {
  background-image: var(--jp-icon-circle-empty);
}
.jp-CircleIcon {
  background-image: var(--jp-icon-circle);
}
.jp-ClearIcon {
  background-image: var(--jp-icon-clear);
}
.jp-CloseIcon {
  background-image: var(--jp-icon-close);
}
.jp-CodeIcon {
  background-image: var(--jp-icon-code);
}
.jp-ConsoleIcon {
  background-image: var(--jp-icon-console);
}
.jp-CopyIcon {
  background-image: var(--jp-icon-copy);
}
.jp-CutIcon {
  background-image: var(--jp-icon-cut);
}
.jp-DownloadIcon {
  background-image: var(--jp-icon-download);
}
.jp-EditIcon {
  background-image: var(--jp-icon-edit);
}
.jp-EllipsesIcon {
  background-image: var(--jp-icon-ellipses);
}
.jp-ExtensionIcon {
  background-image: var(--jp-icon-extension);
}
.jp-FastForwardIcon {
  background-image: var(--jp-icon-fast-forward);
}
.jp-FileIcon {
  background-image: var(--jp-icon-file);
}
.jp-FileUploadIcon {
  background-image: var(--jp-icon-file-upload);
}
.jp-FilterListIcon {
  background-image: var(--jp-icon-filter-list);
}
.jp-FolderIcon {
  background-image: var(--jp-icon-folder);
}
.jp-Html5Icon {
  background-image: var(--jp-icon-html5);
}
.jp-ImageIcon {
  background-image: var(--jp-icon-image);
}
.jp-InspectorIcon {
  background-image: var(--jp-icon-inspector);
}
.jp-JsonIcon {
  background-image: var(--jp-icon-json);
}
.jp-JupyterFaviconIcon {
  background-image: var(--jp-icon-jupyter-favicon);
}
.jp-JupyterIcon {
  background-image: var(--jp-icon-jupyter);
}
.jp-JupyterlabWordmarkIcon {
  background-image: var(--jp-icon-jupyterlab-wordmark);
}
.jp-KernelIcon {
  background-image: var(--jp-icon-kernel);
}
.jp-KeyboardIcon {
  background-image: var(--jp-icon-keyboard);
}
.jp-LauncherIcon {
  background-image: var(--jp-icon-launcher);
}
.jp-LineFormIcon {
  background-image: var(--jp-icon-line-form);
}
.jp-LinkIcon {
  background-image: var(--jp-icon-link);
}
.jp-ListIcon {
  background-image: var(--jp-icon-list);
}
.jp-ListingsInfoIcon {
  background-image: var(--jp-icon-listings-info);
}
.jp-MarkdownIcon {
  background-image: var(--jp-icon-markdown);
}
.jp-NewFolderIcon {
  background-image: var(--jp-icon-new-folder);
}
.jp-NotTrustedIcon {
  background-image: var(--jp-icon-not-trusted);
}
.jp-NotebookIcon {
  background-image: var(--jp-icon-notebook);
}
.jp-NumberingIcon {
  background-image: var(--jp-icon-numbering);
}
.jp-OfflineBoltIcon {
  background-image: var(--jp-icon-offline-bolt);
}
.jp-PaletteIcon {
  background-image: var(--jp-icon-palette);
}
.jp-PasteIcon {
  background-image: var(--jp-icon-paste);
}
.jp-PdfIcon {
  background-image: var(--jp-icon-pdf);
}
.jp-PythonIcon {
  background-image: var(--jp-icon-python);
}
.jp-RKernelIcon {
  background-image: var(--jp-icon-r-kernel);
}
.jp-ReactIcon {
  background-image: var(--jp-icon-react);
}
.jp-RedoIcon {
  background-image: var(--jp-icon-redo);
}
.jp-RefreshIcon {
  background-image: var(--jp-icon-refresh);
}
.jp-RegexIcon {
  background-image: var(--jp-icon-regex);
}
.jp-RunIcon {
  background-image: var(--jp-icon-run);
}
.jp-RunningIcon {
  background-image: var(--jp-icon-running);
}
.jp-SaveIcon {
  background-image: var(--jp-icon-save);
}
.jp-SearchIcon {
  background-image: var(--jp-icon-search);
}
.jp-SettingsIcon {
  background-image: var(--jp-icon-settings);
}
.jp-SpreadsheetIcon {
  background-image: var(--jp-icon-spreadsheet);
}
.jp-StopIcon {
  background-image: var(--jp-icon-stop);
}
.jp-TabIcon {
  background-image: var(--jp-icon-tab);
}
.jp-TableRowsIcon {
  background-image: var(--jp-icon-table-rows);
}
.jp-TagIcon {
  background-image: var(--jp-icon-tag);
}
.jp-TerminalIcon {
  background-image: var(--jp-icon-terminal);
}
.jp-TextEditorIcon {
  background-image: var(--jp-icon-text-editor);
}
.jp-TocIcon {
  background-image: var(--jp-icon-toc);
}
.jp-TreeViewIcon {
  background-image: var(--jp-icon-tree-view);
}
.jp-TrustedIcon {
  background-image: var(--jp-icon-trusted);
}
.jp-UndoIcon {
  background-image: var(--jp-icon-undo);
}
.jp-VegaIcon {
  background-image: var(--jp-icon-vega);
}
.jp-YamlIcon {
  background-image: var(--jp-icon-yaml);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * (DEPRECATED) Support for consuming icons as CSS background images
 */

:root {
  --jp-icon-search-white: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTggMTgiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGFzcz0ianAtaWNvbjMiIGZpbGw9IiM2MTYxNjEiPgogICAgPHBhdGggZD0iTTEyLjEsMTAuOWgtMC43bC0wLjItMC4yYzAuOC0wLjksMS4zLTIuMiwxLjMtMy41YzAtMy0yLjQtNS40LTUuNC01LjRTMS44LDQuMiwxLjgsNy4xczIuNCw1LjQsNS40LDUuNCBjMS4zLDAsMi41LTAuNSwzLjUtMS4zbDAuMiwwLjJ2MC43bDQuMSw0LjFsMS4yLTEuMkwxMi4xLDEwLjl6IE03LjEsMTAuOWMtMi4xLDAtMy43LTEuNy0zLjctMy43czEuNy0zLjcsMy43LTMuN3MzLjcsMS43LDMuNywzLjcgUzkuMiwxMC45LDcuMSwxMC45eiIvPgogIDwvZz4KPC9zdmc+Cg==);
}

.jp-Icon,
.jp-MaterialIcon {
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-cover {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/**
 * (DEPRECATED) Support for specific CSS icon sizes
 */

.jp-Icon-16 {
  background-size: 16px;
  min-width: 16px;
  min-height: 16px;
}

.jp-Icon-18 {
  background-size: 18px;
  min-width: 18px;
  min-height: 18px;
}

.jp-Icon-20 {
  background-size: 20px;
  min-width: 20px;
  min-height: 20px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for icons as inline SVG HTMLElements
 */

/* recolor the primary elements of an icon */
.jp-icon0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}
/* recolor the accent elements of an icon */
.jp-icon-accent0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-accent1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-accent2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-accent3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-accent4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-accent0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-accent1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-accent2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-accent3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-accent4[stroke] {
  stroke: var(--jp-layout-color4);
}
/* set the color of an icon to transparent */
.jp-icon-none[fill] {
  fill: none;
}

.jp-icon-none[stroke] {
  stroke: none;
}
/* brand icon colors. Same for light and dark */
.jp-icon-brand0[fill] {
  fill: var(--jp-brand-color0);
}
.jp-icon-brand1[fill] {
  fill: var(--jp-brand-color1);
}
.jp-icon-brand2[fill] {
  fill: var(--jp-brand-color2);
}
.jp-icon-brand3[fill] {
  fill: var(--jp-brand-color3);
}
.jp-icon-brand4[fill] {
  fill: var(--jp-brand-color4);
}

.jp-icon-brand0[stroke] {
  stroke: var(--jp-brand-color0);
}
.jp-icon-brand1[stroke] {
  stroke: var(--jp-brand-color1);
}
.jp-icon-brand2[stroke] {
  stroke: var(--jp-brand-color2);
}
.jp-icon-brand3[stroke] {
  stroke: var(--jp-brand-color3);
}
.jp-icon-brand4[stroke] {
  stroke: var(--jp-brand-color4);
}
/* warn icon colors. Same for light and dark */
.jp-icon-warn0[fill] {
  fill: var(--jp-warn-color0);
}
.jp-icon-warn1[fill] {
  fill: var(--jp-warn-color1);
}
.jp-icon-warn2[fill] {
  fill: var(--jp-warn-color2);
}
.jp-icon-warn3[fill] {
  fill: var(--jp-warn-color3);
}

.jp-icon-warn0[stroke] {
  stroke: var(--jp-warn-color0);
}
.jp-icon-warn1[stroke] {
  stroke: var(--jp-warn-color1);
}
.jp-icon-warn2[stroke] {
  stroke: var(--jp-warn-color2);
}
.jp-icon-warn3[stroke] {
  stroke: var(--jp-warn-color3);
}
/* icon colors that contrast well with each other and most backgrounds */
.jp-icon-contrast0[fill] {
  fill: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[fill] {
  fill: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[fill] {
  fill: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[fill] {
  fill: var(--jp-icon-contrast-color3);
}

.jp-icon-contrast0[stroke] {
  stroke: var(--jp-icon-contrast-color0);
}
.jp-icon-contrast1[stroke] {
  stroke: var(--jp-icon-contrast-color1);
}
.jp-icon-contrast2[stroke] {
  stroke: var(--jp-icon-contrast-color2);
}
.jp-icon-contrast3[stroke] {
  stroke: var(--jp-icon-contrast-color3);
}

/* CSS for icons in selected items in the settings editor */
#setting-editor .jp-PluginList .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
#setting-editor
  .jp-PluginList
  .jp-mod-selected
  .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected filebrowser listing items */
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}
.jp-DirListing-item.jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}

/* CSS for icons in selected tabs in the sidebar tab manager */
#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable[fill] {
  fill: #fff;
}

#tab-manager .lm-TabBar-tab.jp-mod-active .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable[fill] {
  fill: var(--jp-brand-color1);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-active
  .jp-icon-hover
  :hover
  .jp-icon-selectable-inverse[fill] {
  fill: #fff;
}

/**
 * TODO: come up with non css-hack solution for showing the busy icon on top
 *  of the close icon
 * CSS for complex behavior of close icon of tabs in the sidebar tab manager
 */
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
#tab-manager
  .lm-TabBar-tab.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

#tab-manager
  .lm-TabBar-tab.jp-mod-dirty.jp-mod-active
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: #fff;
}

/**
* TODO: come up with non css-hack solution for showing the busy icon on top
*  of the close icon
* CSS for complex behavior of close icon of tabs in the main area tabbar
*/
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon3[fill] {
  fill: none;
}
.lm-DockPanel-tabBar
  .lm-TabBar-tab.lm-mod-closable.jp-mod-dirty
  > .lm-TabBar-tabCloseIcon
  > :not(:hover)
  > .jp-icon-busy[fill] {
  fill: var(--jp-inverse-layout-color3);
}

/* CSS for icons in status bar */
#jp-main-statusbar .jp-mod-selected .jp-icon-selectable[fill] {
  fill: #fff;
}

#jp-main-statusbar .jp-mod-selected .jp-icon-selectable-inverse[fill] {
  fill: var(--jp-brand-color1);
}
/* special handling for splash icon CSS. While the theme CSS reloads during
   splash, the splash icon can loose theming. To prevent that, we set a
   default for its color variable */
:root {
  --jp-warn-color0: var(--md-orange-700);
}

/* not sure what to do with this one, used in filebrowser listing */
.jp-DragIcon {
  margin-right: 4px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * Support for alt colors for icons as inline SVG HTMLElements
 */

/* alt recolor the primary elements of an icon */
.jp-icon-alt .jp-icon0[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-alt .jp-icon0[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-alt .jp-icon1[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-alt .jp-icon2[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-alt .jp-icon3[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-alt .jp-icon4[stroke] {
  stroke: var(--jp-layout-color4);
}

/* alt recolor the accent elements of an icon */
.jp-icon-alt .jp-icon-accent0[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-alt .jp-icon-accent0[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-alt .jp-icon-accent1[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-alt .jp-icon-accent2[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-alt .jp-icon-accent3[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-alt .jp-icon-accent4[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-icon-hoverShow:not(:hover) svg {
  display: none !important;
}

/**
 * Support for hover colors for icons as inline SVG HTMLElements
 */

/**
 * regular colors
 */

/* recolor the primary elements of an icon */
.jp-icon-hover :hover .jp-icon0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/* recolor the accent elements of an icon */
.jp-icon-hover :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* set the color of an icon to transparent */
.jp-icon-hover :hover .jp-icon-none-hover[fill] {
  fill: none;
}

.jp-icon-hover :hover .jp-icon-none-hover[stroke] {
  stroke: none;
}

/**
 * inverse colors
 */

/* inverse recolor the primary elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[fill] {
  fill: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[fill] {
  fill: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[fill] {
  fill: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[fill] {
  fill: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[fill] {
  fill: var(--jp-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon0-hover[stroke] {
  stroke: var(--jp-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon1-hover[stroke] {
  stroke: var(--jp-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon2-hover[stroke] {
  stroke: var(--jp-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon3-hover[stroke] {
  stroke: var(--jp-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon4-hover[stroke] {
  stroke: var(--jp-layout-color4);
}

/* inverse recolor the accent elements of an icon */
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[fill] {
  fill: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[fill] {
  fill: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[fill] {
  fill: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[fill] {
  fill: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[fill] {
  fill: var(--jp-inverse-layout-color4);
}

.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent0-hover[stroke] {
  stroke: var(--jp-inverse-layout-color0);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent1-hover[stroke] {
  stroke: var(--jp-inverse-layout-color1);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent2-hover[stroke] {
  stroke: var(--jp-inverse-layout-color2);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent3-hover[stroke] {
  stroke: var(--jp-inverse-layout-color3);
}
.jp-icon-hover.jp-icon-alt :hover .jp-icon-accent4-hover[stroke] {
  stroke: var(--jp-inverse-layout-color4);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-switch {
  display: flex;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  font-size: var(--jp-ui-font-size1);
  background-color: transparent;
  color: var(--jp-ui-font-color1);
  border: none;
  height: 20px;
}

.jp-switch:hover {
  background-color: var(--jp-layout-color2);
}

.jp-switch-label {
  margin-right: 5px;
}

.jp-switch-track {
  cursor: pointer;
  background-color: var(--jp-border-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
  height: 16px;
  width: 35px;
  position: relative;
}

.jp-switch-track::before {
  content: '';
  position: absolute;
  height: 10px;
  width: 10px;
  margin: 3px;
  left: 0px;
  background-color: var(--jp-ui-inverse-font-color1);
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

.jp-switch[aria-checked='true'] .jp-switch-track {
  background-color: var(--jp-warn-color0);
}

.jp-switch[aria-checked='true'] .jp-switch-track::before {
  /* track width (35) - margins (3 + 3) - thumb width (10) */
  left: 19px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/* Sibling imports */

/* Override Blueprint's _reset.scss styles */
html {
  box-sizing: unset;
}

*,
*::before,
*::after {
  box-sizing: unset;
}

body {
  color: unset;
  font-family: var(--jp-ui-font-family);
}

p {
  margin-top: unset;
  margin-bottom: unset;
}

small {
  font-size: unset;
}

strong {
  font-weight: unset;
}

/* Override Blueprint's _typography.scss styles */
a {
  text-decoration: unset;
  color: unset;
}
a:hover {
  text-decoration: unset;
  color: unset;
}

/* Override Blueprint's _accessibility.scss styles */
:focus {
  outline: unset;
  outline-offset: unset;
  -moz-outline-radius: unset;
}

/* Styles for ui-components */
.jp-Button {
  border-radius: var(--jp-border-radius);
  padding: 0px 12px;
  font-size: var(--jp-ui-font-size1);
}

/* Use our own theme for hover styles */
button.jp-Button.bp3-button.bp3-minimal:hover {
  background-color: var(--jp-layout-color2);
}
.jp-Button.minimal {
  color: unset !important;
}

.jp-Button.jp-ToolbarButtonComponent {
  text-transform: none;
}

.jp-InputGroup input {
  box-sizing: border-box;
  border-radius: 0;
  background-color: transparent;
  color: var(--jp-ui-font-color0);
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.jp-InputGroup input:focus {
  box-shadow: inset 0 0 0 var(--jp-border-width)
      var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.jp-InputGroup input::placeholder,
input::placeholder {
  color: var(--jp-ui-font-color3);
}

.jp-BPIcon {
  display: inline-block;
  vertical-align: middle;
  margin: auto;
}

/* Stop blueprint futzing with our icon fills */
.bp3-icon.jp-BPIcon > svg:not([fill]) {
  fill: var(--jp-inverse-layout-color3);
}

.jp-InputGroupAction {
  padding: 6px;
}

.jp-HTMLSelect.jp-DefaultStyle select {
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: var(--jp-ui-font-color0);
  display: block;
  font-size: var(--jp-ui-font-size1);
  height: 24px;
  line-height: 14px;
  padding: 0 25px 0 10px;
  text-align: left;
  -moz-appearance: none;
  -webkit-appearance: none;
}

/* Use our own theme for hover and option styles */
.jp-HTMLSelect.jp-DefaultStyle select:hover,
.jp-HTMLSelect.jp-DefaultStyle select > option {
  background-color: var(--jp-layout-color2);
  color: var(--jp-ui-font-color0);
}
select {
  box-sizing: border-box;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapse {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border-top: 1px solid var(--jp-border-color2);
  border-bottom: 1px solid var(--jp-border-color2);
}

.jp-Collapse-header {
  padding: 1px 12px;
  color: var(--jp-ui-font-color1);
  background-color: var(--jp-layout-color1);
  font-size: var(--jp-ui-font-size2);
}

.jp-Collapse-header:hover {
  background-color: var(--jp-layout-color2);
}

.jp-Collapse-contents {
  padding: 0px 12px 0px 12px;
  background-color: var(--jp-layout-color1);
  color: var(--jp-ui-font-color1);
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-commandpalette-search-height: 28px;
}

/*-----------------------------------------------------------------------------
| Overall styles
|----------------------------------------------------------------------------*/

.lm-CommandPalette {
  padding-bottom: 0px;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Modal variant
|----------------------------------------------------------------------------*/

.jp-ModalCommandPalette {
  position: absolute;
  z-index: 10000;
  top: 38px;
  left: 30%;
  margin: 0;
  padding: 4px;
  width: 40%;
  box-shadow: var(--jp-elevation-z4);
  border-radius: 4px;
  background: var(--jp-layout-color0);
}

.jp-ModalCommandPalette .lm-CommandPalette {
  max-height: 40vh;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-close-icon::after {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-header {
  display: none;
}

.jp-ModalCommandPalette .lm-CommandPalette .lm-CommandPalette-item {
  margin-left: 4px;
  margin-right: 4px;
}

.jp-ModalCommandPalette
  .lm-CommandPalette
  .lm-CommandPalette-item.lm-mod-disabled {
  display: none;
}

/*-----------------------------------------------------------------------------
| Search
|----------------------------------------------------------------------------*/

.lm-CommandPalette-search {
  padding: 4px;
  background-color: var(--jp-layout-color1);
  z-index: 2;
}

.lm-CommandPalette-wrapper {
  overflow: overlay;
  padding: 0px 9px;
  background-color: var(--jp-input-active-background);
  height: 30px;
  box-shadow: inset 0 0 0 var(--jp-border-width) var(--jp-input-border-color);
}

.lm-CommandPalette.lm-mod-focused .lm-CommandPalette-wrapper {
  box-shadow: inset 0 0 0 1px var(--jp-input-active-box-shadow-color),
    inset 0 0 0 3px var(--jp-input-active-box-shadow-color);
}

.lm-CommandPalette-wrapper::after {
  content: ' ';
  color: white;
  background-color: var(--jp-brand-color1);
  position: absolute;
  top: 4px;
  right: 4px;
  height: 30px;
  width: 10px;
  padding: 0px 10px;
  background-image: var(--jp-icon-search-white);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;
}

.lm-CommandPalette-input {
  background: transparent;
  width: calc(100% - 18px);
  float: left;
  border: none;
  outline: none;
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  line-height: var(--jp-private-commandpalette-search-height);
}

.lm-CommandPalette-input::-webkit-input-placeholder,
.lm-CommandPalette-input::-moz-placeholder,
.lm-CommandPalette-input:-ms-input-placeholder {
  color: var(--jp-ui-font-color3);
  font-size: var(--jp-ui-font-size1);
}

/*-----------------------------------------------------------------------------
| Results
|----------------------------------------------------------------------------*/

.lm-CommandPalette-header:first-child {
  margin-top: 0px;
}

.lm-CommandPalette-header {
  border-bottom: solid var(--jp-border-width) var(--jp-border-color2);
  color: var(--jp-ui-font-color1);
  cursor: pointer;
  display: flex;
  font-size: var(--jp-ui-font-size0);
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 8px;
  padding: 8px 0 8px 12px;
  text-transform: uppercase;
}

.lm-CommandPalette-header.lm-mod-active {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-header > mark {
  background-color: transparent;
  font-weight: bold;
  color: var(--jp-ui-font-color1);
}

.lm-CommandPalette-item {
  padding: 4px 12px 4px 4px;
  color: var(--jp-ui-font-color1);
  font-size: var(--jp-ui-font-size1);
  font-weight: 400;
  display: flex;
}

.lm-CommandPalette-item.lm-mod-disabled {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item.lm-mod-active {
  background: var(--jp-layout-color3);
}

.lm-CommandPalette-item.lm-mod-active:hover:not(.lm-mod-disabled) {
  background: var(--jp-layout-color4);
}

.lm-CommandPalette-item:hover:not(.lm-mod-active):not(.lm-mod-disabled) {
  background: var(--jp-layout-color2);
}

.lm-CommandPalette-itemContent {
  overflow: hidden;
}

.lm-CommandPalette-itemLabel > mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

.lm-CommandPalette-item.lm-mod-disabled mark {
  color: var(--jp-ui-font-color3);
}

.lm-CommandPalette-item .lm-CommandPalette-itemIcon {
  margin: 0 4px 0 0;
  position: relative;
  width: 16px;
  top: 2px;
  flex: 0 0 auto;
}

.lm-CommandPalette-item.lm-mod-disabled .lm-CommandPalette-itemIcon {
  opacity: 0.4;
}

.lm-CommandPalette-item .lm-CommandPalette-itemShortcut {
  flex: 0 0 auto;
}

.lm-CommandPalette-itemCaption {
  display: none;
}

.lm-CommandPalette-content {
  background-color: var(--jp-layout-color1);
}

.lm-CommandPalette-content:empty:after {
  content: 'No results';
  margin: auto;
  margin-top: 20px;
  width: 100px;
  display: block;
  font-size: var(--jp-ui-font-size2);
  font-family: var(--jp-ui-font-family);
  font-weight: lighter;
}

.lm-CommandPalette-emptyMessage {
  text-align: center;
  margin-top: 24px;
  line-height: 1.32;
  padding: 0px 8px;
  color: var(--jp-content-font-color3);
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Dialog {
  position: absolute;
  z-index: 10000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0px;
  left: 0px;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-dialog-background);
}

.jp-Dialog-content {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background: var(--jp-layout-color1);
  padding: 24px;
  padding-bottom: 12px;
  min-width: 300px;
  min-height: 150px;
  max-width: 1000px;
  max-height: 500px;
  box-sizing: border-box;
  box-shadow: var(--jp-elevation-z20);
  word-wrap: break-word;
  border-radius: var(--jp-border-radius);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color1);
  resize: both;
}

.jp-Dialog-button {
  overflow: visible;
}

button.jp-Dialog-button:focus {
  outline: 1px solid var(--jp-brand-color1);
  outline-offset: 4px;
  -moz-outline-radius: 0px;
}

button.jp-Dialog-button:focus::-moz-focus-inner {
  border: 0;
}

button.jp-Dialog-close-button {
  padding: 0;
  height: 100%;
  min-width: unset;
  min-height: unset;
}

.jp-Dialog-header {
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  padding-bottom: 12px;
  font-size: var(--jp-ui-font-size3);
  font-weight: 400;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  font-size: var(--jp-ui-font-size1);
  background: var(--jp-layout-color1);
  overflow: auto;
}

.jp-Dialog-footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex: 0 0 auto;
  margin-left: -12px;
  margin-right: -12px;
  padding: 12px;
}

.jp-Dialog-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.jp-Dialog-body > .jp-select-wrapper {
  width: 100%;
}

.jp-Dialog-body > button {
  padding: 0px 16px;
}

.jp-Dialog-body > label {
  line-height: 1.4;
  color: var(--jp-ui-font-color0);
}

.jp-Dialog-button.jp-mod-styled:not(:last-child) {
  margin-right: 12px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-HoverBox {
  position: fixed;
}

.jp-HoverBox.jp-mod-outofview {
  display: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-IFrame {
  width: 100%;
  height: 100%;
}

.jp-IFrame > iframe {
  border: none;
}

/*
When drag events occur, `p-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-IFrame {
  position: relative;
}

body.lm-mod-override-cursor .jp-IFrame:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MainAreaWidget > :focus {
  outline: none;
}

/**
 * google-material-color v1.2.6
 * https://github.com/danlevan/google-material-color
 */
:root {
  --md-red-50: #ffebee;
  --md-red-100: #ffcdd2;
  --md-red-200: #ef9a9a;
  --md-red-300: #e57373;
  --md-red-400: #ef5350;
  --md-red-500: #f44336;
  --md-red-600: #e53935;
  --md-red-700: #d32f2f;
  --md-red-800: #c62828;
  --md-red-900: #b71c1c;
  --md-red-A100: #ff8a80;
  --md-red-A200: #ff5252;
  --md-red-A400: #ff1744;
  --md-red-A700: #d50000;

  --md-pink-50: #fce4ec;
  --md-pink-100: #f8bbd0;
  --md-pink-200: #f48fb1;
  --md-pink-300: #f06292;
  --md-pink-400: #ec407a;
  --md-pink-500: #e91e63;
  --md-pink-600: #d81b60;
  --md-pink-700: #c2185b;
  --md-pink-800: #ad1457;
  --md-pink-900: #880e4f;
  --md-pink-A100: #ff80ab;
  --md-pink-A200: #ff4081;
  --md-pink-A400: #f50057;
  --md-pink-A700: #c51162;

  --md-purple-50: #f3e5f5;
  --md-purple-100: #e1bee7;
  --md-purple-200: #ce93d8;
  --md-purple-300: #ba68c8;
  --md-purple-400: #ab47bc;
  --md-purple-500: #9c27b0;
  --md-purple-600: #8e24aa;
  --md-purple-700: #7b1fa2;
  --md-purple-800: #6a1b9a;
  --md-purple-900: #4a148c;
  --md-purple-A100: #ea80fc;
  --md-purple-A200: #e040fb;
  --md-purple-A400: #d500f9;
  --md-purple-A700: #aa00ff;

  --md-deep-purple-50: #ede7f6;
  --md-deep-purple-100: #d1c4e9;
  --md-deep-purple-200: #b39ddb;
  --md-deep-purple-300: #9575cd;
  --md-deep-purple-400: #7e57c2;
  --md-deep-purple-500: #673ab7;
  --md-deep-purple-600: #5e35b1;
  --md-deep-purple-700: #512da8;
  --md-deep-purple-800: #4527a0;
  --md-deep-purple-900: #311b92;
  --md-deep-purple-A100: #b388ff;
  --md-deep-purple-A200: #7c4dff;
  --md-deep-purple-A400: #651fff;
  --md-deep-purple-A700: #6200ea;

  --md-indigo-50: #e8eaf6;
  --md-indigo-100: #c5cae9;
  --md-indigo-200: #9fa8da;
  --md-indigo-300: #7986cb;
  --md-indigo-400: #5c6bc0;
  --md-indigo-500: #3f51b5;
  --md-indigo-600: #3949ab;
  --md-indigo-700: #303f9f;
  --md-indigo-800: #283593;
  --md-indigo-900: #1a237e;
  --md-indigo-A100: #8c9eff;
  --md-indigo-A200: #536dfe;
  --md-indigo-A400: #3d5afe;
  --md-indigo-A700: #304ffe;

  --md-blue-50: #e3f2fd;
  --md-blue-100: #bbdefb;
  --md-blue-200: #90caf9;
  --md-blue-300: #64b5f6;
  --md-blue-400: #42a5f5;
  --md-blue-500: #2196f3;
  --md-blue-600: #1e88e5;
  --md-blue-700: #1976d2;
  --md-blue-800: #1565c0;
  --md-blue-900: #0d47a1;
  --md-blue-A100: #82b1ff;
  --md-blue-A200: #448aff;
  --md-blue-A400: #2979ff;
  --md-blue-A700: #2962ff;

  --md-light-blue-50: #e1f5fe;
  --md-light-blue-100: #b3e5fc;
  --md-light-blue-200: #81d4fa;
  --md-light-blue-300: #4fc3f7;
  --md-light-blue-400: #29b6f6;
  --md-light-blue-500: #03a9f4;
  --md-light-blue-600: #039be5;
  --md-light-blue-700: #0288d1;
  --md-light-blue-800: #0277bd;
  --md-light-blue-900: #01579b;
  --md-light-blue-A100: #80d8ff;
  --md-light-blue-A200: #40c4ff;
  --md-light-blue-A400: #00b0ff;
  --md-light-blue-A700: #0091ea;

  --md-cyan-50: #e0f7fa;
  --md-cyan-100: #b2ebf2;
  --md-cyan-200: #80deea;
  --md-cyan-300: #4dd0e1;
  --md-cyan-400: #26c6da;
  --md-cyan-500: #00bcd4;
  --md-cyan-600: #00acc1;
  --md-cyan-700: #0097a7;
  --md-cyan-800: #00838f;
  --md-cyan-900: #006064;
  --md-cyan-A100: #84ffff;
  --md-cyan-A200: #18ffff;
  --md-cyan-A400: #00e5ff;
  --md-cyan-A700: #00b8d4;

  --md-teal-50: #e0f2f1;
  --md-teal-100: #b2dfdb;
  --md-teal-200: #80cbc4;
  --md-teal-300: #4db6ac;
  --md-teal-400: #26a69a;
  --md-teal-500: #009688;
  --md-teal-600: #00897b;
  --md-teal-700: #00796b;
  --md-teal-800: #00695c;
  --md-teal-900: #004d40;
  --md-teal-A100: #a7ffeb;
  --md-teal-A200: #64ffda;
  --md-teal-A400: #1de9b6;
  --md-teal-A700: #00bfa5;

  --md-green-50: #e8f5e9;
  --md-green-100: #c8e6c9;
  --md-green-200: #a5d6a7;
  --md-green-300: #81c784;
  --md-green-400: #66bb6a;
  --md-green-500: #4caf50;
  --md-green-600: #43a047;
  --md-green-700: #388e3c;
  --md-green-800: #2e7d32;
  --md-green-900: #1b5e20;
  --md-green-A100: #b9f6ca;
  --md-green-A200: #69f0ae;
  --md-green-A400: #00e676;
  --md-green-A700: #00c853;

  --md-light-green-50: #f1f8e9;
  --md-light-green-100: #dcedc8;
  --md-light-green-200: #c5e1a5;
  --md-light-green-300: #aed581;
  --md-light-green-400: #9ccc65;
  --md-light-green-500: #8bc34a;
  --md-light-green-600: #7cb342;
  --md-light-green-700: #689f38;
  --md-light-green-800: #558b2f;
  --md-light-green-900: #33691e;
  --md-light-green-A100: #ccff90;
  --md-light-green-A200: #b2ff59;
  --md-light-green-A400: #76ff03;
  --md-light-green-A700: #64dd17;

  --md-lime-50: #f9fbe7;
  --md-lime-100: #f0f4c3;
  --md-lime-200: #e6ee9c;
  --md-lime-300: #dce775;
  --md-lime-400: #d4e157;
  --md-lime-500: #cddc39;
  --md-lime-600: #c0ca33;
  --md-lime-700: #afb42b;
  --md-lime-800: #9e9d24;
  --md-lime-900: #827717;
  --md-lime-A100: #f4ff81;
  --md-lime-A200: #eeff41;
  --md-lime-A400: #c6ff00;
  --md-lime-A700: #aeea00;

  --md-yellow-50: #fffde7;
  --md-yellow-100: #fff9c4;
  --md-yellow-200: #fff59d;
  --md-yellow-300: #fff176;
  --md-yellow-400: #ffee58;
  --md-yellow-500: #ffeb3b;
  --md-yellow-600: #fdd835;
  --md-yellow-700: #fbc02d;
  --md-yellow-800: #f9a825;
  --md-yellow-900: #f57f17;
  --md-yellow-A100: #ffff8d;
  --md-yellow-A200: #ffff00;
  --md-yellow-A400: #ffea00;
  --md-yellow-A700: #ffd600;

  --md-amber-50: #fff8e1;
  --md-amber-100: #ffecb3;
  --md-amber-200: #ffe082;
  --md-amber-300: #ffd54f;
  --md-amber-400: #ffca28;
  --md-amber-500: #ffc107;
  --md-amber-600: #ffb300;
  --md-amber-700: #ffa000;
  --md-amber-800: #ff8f00;
  --md-amber-900: #ff6f00;
  --md-amber-A100: #ffe57f;
  --md-amber-A200: #ffd740;
  --md-amber-A400: #ffc400;
  --md-amber-A700: #ffab00;

  --md-orange-50: #fff3e0;
  --md-orange-100: #ffe0b2;
  --md-orange-200: #ffcc80;
  --md-orange-300: #ffb74d;
  --md-orange-400: #ffa726;
  --md-orange-500: #ff9800;
  --md-orange-600: #fb8c00;
  --md-orange-700: #f57c00;
  --md-orange-800: #ef6c00;
  --md-orange-900: #e65100;
  --md-orange-A100: #ffd180;
  --md-orange-A200: #ffab40;
  --md-orange-A400: #ff9100;
  --md-orange-A700: #ff6d00;

  --md-deep-orange-50: #fbe9e7;
  --md-deep-orange-100: #ffccbc;
  --md-deep-orange-200: #ffab91;
  --md-deep-orange-300: #ff8a65;
  --md-deep-orange-400: #ff7043;
  --md-deep-orange-500: #ff5722;
  --md-deep-orange-600: #f4511e;
  --md-deep-orange-700: #e64a19;
  --md-deep-orange-800: #d84315;
  --md-deep-orange-900: #bf360c;
  --md-deep-orange-A100: #ff9e80;
  --md-deep-orange-A200: #ff6e40;
  --md-deep-orange-A400: #ff3d00;
  --md-deep-orange-A700: #dd2c00;

  --md-brown-50: #efebe9;
  --md-brown-100: #d7ccc8;
  --md-brown-200: #bcaaa4;
  --md-brown-300: #a1887f;
  --md-brown-400: #8d6e63;
  --md-brown-500: #795548;
  --md-brown-600: #6d4c41;
  --md-brown-700: #5d4037;
  --md-brown-800: #4e342e;
  --md-brown-900: #3e2723;

  --md-grey-50: #fafafa;
  --md-grey-100: #f5f5f5;
  --md-grey-200: #eeeeee;
  --md-grey-300: #e0e0e0;
  --md-grey-400: #bdbdbd;
  --md-grey-500: #9e9e9e;
  --md-grey-600: #757575;
  --md-grey-700: #616161;
  --md-grey-800: #424242;
  --md-grey-900: #212121;

  --md-blue-grey-50: #eceff1;
  --md-blue-grey-100: #cfd8dc;
  --md-blue-grey-200: #b0bec5;
  --md-blue-grey-300: #90a4ae;
  --md-blue-grey-400: #78909c;
  --md-blue-grey-500: #607d8b;
  --md-blue-grey-600: #546e7a;
  --md-blue-grey-700: #455a64;
  --md-blue-grey-800: #37474f;
  --md-blue-grey-900: #263238;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--jp-layout-color0);
  outline: none;
}

.jp-SpinnerContent {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  background: var(--jp-brand-color3);
  background: linear-gradient(
    to right,
    #f37626 10%,
    rgba(255, 255, 255, 0) 42%
  );
  position: relative;
  animation: load3 1s infinite linear, fadeIn 1s;
}

.jp-SpinnerContent:before {
  width: 50%;
  height: 50%;
  background: #f37626;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}

.jp-SpinnerContent:after {
  background: var(--jp-layout-color0);
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes load3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

button.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: none;
  box-sizing: border-box;
  text-align: center;
  line-height: 32px;
  height: 32px;
  padding: 0px 12px;
  letter-spacing: 0.8px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled {
  background: var(--jp-input-background);
  height: 28px;
  box-sizing: border-box;
  border: var(--jp-border-width) solid var(--jp-border-color1);
  padding-left: 7px;
  padding-right: 7px;
  font-size: var(--jp-ui-font-size2);
  color: var(--jp-ui-font-color0);
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

input.jp-mod-styled:focus {
  border: var(--jp-border-width) solid var(--md-blue-500);
  box-shadow: inset 0 0 4px var(--md-blue-300);
}

.jp-select-wrapper {
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1px;
  background-color: var(--jp-layout-color1);
  height: 28px;
  box-sizing: border-box;
  margin-bottom: 12px;
}

.jp-select-wrapper.jp-mod-focused select.jp-mod-styled {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-input-active-background);
}

select.jp-mod-styled:hover {
  background-color: var(--jp-layout-color1);
  cursor: pointer;
  color: var(--jp-ui-font-color0);
  background-color: var(--jp-input-hover-background);
  box-shadow: inset 0 0px 1px rgba(0, 0, 0, 0.5);
}

select.jp-mod-styled {
  flex: 1 1 auto;
  height: 32px;
  width: 100%;
  font-size: var(--jp-ui-font-size2);
  background: var(--jp-input-background);
  color: var(--jp-ui-font-color0);
  padding: 0 25px 0 8px;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

:root {
  --jp-private-toolbar-height: calc(
    28px + var(--jp-border-width)
  ); /* leave 28px for content */
}

.jp-Toolbar {
  color: var(--jp-ui-font-color1);
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);
  box-shadow: var(--jp-toolbar-box-shadow);
  background: var(--jp-toolbar-background);
  min-height: var(--jp-toolbar-micro-height);
  padding: 2px;
  z-index: 1;
  overflow-x: hidden;
}

.jp-Toolbar:hover {
  overflow-x: auto;
}

/* Toolbar items */

.jp-Toolbar > .jp-Toolbar-item.jp-Toolbar-spacer {
  flex-grow: 1;
  flex-shrink: 1;
}

.jp-Toolbar-item.jp-Toolbar-kernelStatus {
  display: inline-block;
  width: 32px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
}

.jp-Toolbar > .jp-Toolbar-item {
  flex: 0 0 auto;
  display: flex;
  padding-left: 1px;
  padding-right: 1px;
  font-size: var(--jp-ui-font-size1);
  line-height: var(--jp-private-toolbar-height);
  height: 100%;
}

/* Toolbar buttons */

/* This is the div we use to wrap the react component into a Widget */
div.jp-ToolbarButton {
  color: transparent;
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px;
  margin: 0px;
}

button.jp-ToolbarButtonComponent {
  background: var(--jp-layout-color1);
  border: none;
  box-sizing: border-box;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 0px 6px;
  margin: 0px;
  height: 24px;
  border-radius: var(--jp-border-radius);
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  min-width: unset;
  min-height: unset;
}

button.jp-ToolbarButtonComponent:disabled {
  opacity: 0.4;
}

button.jp-ToolbarButtonComponent span {
  padding: 0px;
  flex: 0 0 auto;
}

button.jp-ToolbarButtonComponent .jp-ToolbarButtonComponent-label {
  font-size: var(--jp-ui-font-size1);
  line-height: 100%;
  padding-left: 2px;
  color: var(--jp-ui-font-color1);
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar.jp-Toolbar-micro {
  padding: 0;
  min-height: 0;
}

#jp-main-dock-panel[data-mode='single-document']
  .jp-MainAreaWidget
  > .jp-Toolbar {
  border: none;
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2017, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Copyright (c) 2014-2017, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/


/* <DEPRECATED> */ body.p-mod-override-cursor *, /* </DEPRECATED> */
body.lm-mod-override-cursor * {
  cursor: inherit !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2016, Jupyter Development Team.
|
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-JSONEditor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.jp-JSONEditor-host {
  flex: 1 1 auto;
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  border-radius: 0px;
  background: var(--jp-layout-color0);
  min-height: 50px;
  padding: 1px;
}

.jp-JSONEditor.jp-mod-error .jp-JSONEditor-host {
  border-color: red;
  outline-color: red;
}

.jp-JSONEditor-header {
  display: flex;
  flex: 1 0 auto;
  padding: 0 0 0 12px;
}

.jp-JSONEditor-header label {
  flex: 0 0 auto;
}

.jp-JSONEditor-commitButton {
  height: 16px;
  width: 16px;
  background-size: 18px;
  background-repeat: no-repeat;
  background-position: center;
}

.jp-JSONEditor-host.jp-mod-focused {
  background-color: var(--jp-input-active-background);
  border: 1px solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

.jp-Editor.jp-mod-dropTarget {
  border: var(--jp-border-width) solid var(--jp-input-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
}

/* BASICS */

.CodeMirror {
  /* Set height, width, borders, and global font properties here */
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;
}

/* PADDING */

.CodeMirror-lines {
  padding: 4px 0; /* Vertical padding around content */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  padding: 0 4px; /* Horizontal padding of content */
}

.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  background-color: white; /* The little square between H and V scrollbars */
}

/* GUTTER */

.CodeMirror-gutters {
  border-right: 1px solid #ddd;
  background-color: #f7f7f7;
  white-space: nowrap;
}
.CodeMirror-linenumbers {}
.CodeMirror-linenumber {
  padding: 0 3px 0 5px;
  min-width: 20px;
  text-align: right;
  color: #999;
  white-space: nowrap;
}

.CodeMirror-guttermarker { color: black; }
.CodeMirror-guttermarker-subtle { color: #999; }

/* CURSOR */

.CodeMirror-cursor {
  border-left: 1px solid black;
  border-right: none;
  width: 0;
}
/* Shown when moving in bi-directional text */
.CodeMirror div.CodeMirror-secondarycursor {
  border-left: 1px solid silver;
}
.cm-fat-cursor .CodeMirror-cursor {
  width: auto;
  border: 0 !important;
  background: #7e7;
}
.cm-fat-cursor div.CodeMirror-cursors {
  z-index: 1;
}
.cm-fat-cursor-mark {
  background-color: rgba(20, 255, 20, 0.5);
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
}
.cm-animate-fat-cursor {
  width: auto;
  border: 0;
  -webkit-animation: blink 1.06s steps(1) infinite;
  -moz-animation: blink 1.06s steps(1) infinite;
  animation: blink 1.06s steps(1) infinite;
  background-color: #7e7;
}
@-moz-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@-webkit-keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}
@keyframes blink {
  0% {}
  50% { background-color: transparent; }
  100% {}
}

/* Can style cursor different in overwrite (non-insert) mode */
.CodeMirror-overwrite .CodeMirror-cursor {}

.cm-tab { display: inline-block; text-decoration: inherit; }

.CodeMirror-rulers {
  position: absolute;
  left: 0; right: 0; top: -50px; bottom: 0;
  overflow: hidden;
}
.CodeMirror-ruler {
  border-left: 1px solid #ccc;
  top: 0; bottom: 0;
  position: absolute;
}

/* DEFAULT THEME */

.cm-s-default .cm-header {color: blue;}
.cm-s-default .cm-quote {color: #090;}
.cm-negative {color: #d44;}
.cm-positive {color: #292;}
.cm-header, .cm-strong {font-weight: bold;}
.cm-em {font-style: italic;}
.cm-link {text-decoration: underline;}
.cm-strikethrough {text-decoration: line-through;}

.cm-s-default .cm-keyword {color: #708;}
.cm-s-default .cm-atom {color: #219;}
.cm-s-default .cm-number {color: #164;}
.cm-s-default .cm-def {color: #00f;}
.cm-s-default .cm-variable,
.cm-s-default .cm-punctuation,
.cm-s-default .cm-property,
.cm-s-default .cm-operator {}
.cm-s-default .cm-variable-2 {color: #05a;}
.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}
.cm-s-default .cm-comment {color: #a50;}
.cm-s-default .cm-string {color: #a11;}
.cm-s-default .cm-string-2 {color: #f50;}
.cm-s-default .cm-meta {color: #555;}
.cm-s-default .cm-qualifier {color: #555;}
.cm-s-default .cm-builtin {color: #30a;}
.cm-s-default .cm-bracket {color: #997;}
.cm-s-default .cm-tag {color: #170;}
.cm-s-default .cm-attribute {color: #00c;}
.cm-s-default .cm-hr {color: #999;}
.cm-s-default .cm-link {color: #00c;}

.cm-s-default .cm-error {color: #f00;}
.cm-invalidchar {color: #f00;}

.CodeMirror-composing { border-bottom: 2px solid; }

/* Default styles for common addons */

div.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}
div.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}
.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }
.CodeMirror-activeline-background {background: #e8f2ff;}

/* STOP */

/* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
}

.CodeMirror-scroll {
  overflow: scroll !important; /* Things will break if this is overridden */
  /* 50px is the magic margin used to hide the element's real scrollbars */
  /* See overflow: hidden in .CodeMirror */
  margin-bottom: -50px; margin-right: -50px;
  padding-bottom: 50px;
  height: 100%;
  outline: none; /* Prevent dragging from highlighting the element */
  position: relative;
}
.CodeMirror-sizer {
  position: relative;
  border-right: 50px solid transparent;
}

/* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {
  position: absolute;
  z-index: 6;
  display: none;
}
.CodeMirror-vscrollbar {
  right: 0; top: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}
.CodeMirror-hscrollbar {
  bottom: 0; left: 0;
  overflow-y: hidden;
  overflow-x: scroll;
}
.CodeMirror-scrollbar-filler {
  right: 0; bottom: 0;
}
.CodeMirror-gutter-filler {
  left: 0; bottom: 0;
}

.CodeMirror-gutters {
  position: absolute; left: 0; top: 0;
  min-height: 100%;
  z-index: 3;
}
.CodeMirror-gutter {
  white-space: normal;
  height: 100%;
  display: inline-block;
  vertical-align: top;
  margin-bottom: -50px;
}
.CodeMirror-gutter-wrapper {
  position: absolute;
  z-index: 4;
  background: none !important;
  border: none !important;
}
.CodeMirror-gutter-background {
  position: absolute;
  top: 0; bottom: 0;
  z-index: 4;
}
.CodeMirror-gutter-elt {
  position: absolute;
  cursor: default;
  z-index: 4;
}
.CodeMirror-gutter-wrapper ::selection { background-color: transparent }
.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }

.CodeMirror-lines {
  cursor: text;
  min-height: 1px; /* prevents collapsing before first draw */
}
.CodeMirror pre.CodeMirror-line,
.CodeMirror pre.CodeMirror-line-like {
  /* Reset some styles that the rest of the page might have set */
  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;
  border-width: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  margin: 0;
  white-space: pre;
  word-wrap: normal;
  line-height: inherit;
  color: inherit;
  z-index: 2;
  position: relative;
  overflow: visible;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-variant-ligatures: contextual;
  font-variant-ligatures: contextual;
}
.CodeMirror-wrap pre.CodeMirror-line,
.CodeMirror-wrap pre.CodeMirror-line-like {
  word-wrap: break-word;
  white-space: pre-wrap;
  word-break: normal;
}

.CodeMirror-linebackground {
  position: absolute;
  left: 0; right: 0; top: 0; bottom: 0;
  z-index: 0;
}

.CodeMirror-linewidget {
  position: relative;
  z-index: 2;
  padding: 0.1px; /* Force widget margins to stay inside of the container */
}

.CodeMirror-widget {}

.CodeMirror-rtl pre { direction: rtl; }

.CodeMirror-code {
  outline: none;
}

/* Force content-box sizing for the elements where we expect it */
.CodeMirror-scroll,
.CodeMirror-sizer,
.CodeMirror-gutter,
.CodeMirror-gutters,
.CodeMirror-linenumber {
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.CodeMirror-measure {
  position: absolute;
  width: 100%;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}

.CodeMirror-cursor {
  position: absolute;
  pointer-events: none;
}
.CodeMirror-measure pre { position: static; }

div.CodeMirror-cursors {
  visibility: hidden;
  position: relative;
  z-index: 3;
}
div.CodeMirror-dragcursors {
  visibility: visible;
}

.CodeMirror-focused div.CodeMirror-cursors {
  visibility: visible;
}

.CodeMirror-selected { background: #d9d9d9; }
.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }
.CodeMirror-crosshair { cursor: crosshair; }
.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }
.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }

.cm-searching {
  background-color: #ffa;
  background-color: rgba(255, 255, 0, .4);
}

/* Used to force a border model for a node */
.cm-force-border { padding-right: .1px; }

@media print {
  /* Hide the cursor when printing */
  .CodeMirror div.CodeMirror-cursors {
    visibility: hidden;
  }
}

/* See issue #2901 */
.cm-tab-wrap-hack:after { content: ''; }

/* Help users use markselection to safely style text background */
span.CodeMirror-selectedtext { background: none; }

.CodeMirror-dialog {
  position: absolute;
  left: 0; right: 0;
  background: inherit;
  z-index: 15;
  padding: .1em .8em;
  overflow: hidden;
  color: inherit;
}

.CodeMirror-dialog-top {
  border-bottom: 1px solid #eee;
  top: 0;
}

.CodeMirror-dialog-bottom {
  border-top: 1px solid #eee;
  bottom: 0;
}

.CodeMirror-dialog input {
  border: none;
  outline: none;
  background: transparent;
  width: 20em;
  color: inherit;
  font-family: monospace;
}

.CodeMirror-dialog button {
  font-size: 70%;
}

.CodeMirror-foldmarker {
  color: blue;
  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;
  font-family: arial;
  line-height: .3;
  cursor: pointer;
}
.CodeMirror-foldgutter {
  width: .7em;
}
.CodeMirror-foldgutter-open,
.CodeMirror-foldgutter-folded {
  cursor: pointer;
}
.CodeMirror-foldgutter-open:after {
  content: "\25BE";
}
.CodeMirror-foldgutter-folded:after {
  content: "\25B8";
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.CodeMirror {
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  border: 0;
  border-radius: 0;
  height: auto;
  /* Changed to auto to autogrow */
}

.CodeMirror pre {
  padding: 0 var(--jp-code-padding);
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-dialog {
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* This causes https://github.com/jupyter/jupyterlab/issues/522 */
/* May not cause it not because we changed it! */
.CodeMirror-lines {
  padding: var(--jp-code-padding) 0;
}

.CodeMirror-linenumber {
  padding: 0 8px;
}

.jp-CodeMirrorEditor {
  cursor: text;
}

.jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}

/* When zoomed out 67% and 33% on a screen of 1440 width x 900 height */
@media screen and (min-width: 2138px) and (max-width: 4319px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width1) solid
      var(--jp-editor-cursor-color);
  }
}

/* When zoomed out less than 33% */
@media screen and (min-width: 4320px) {
  .jp-CodeMirrorEditor[data-type='inline'] .CodeMirror-cursor {
    border-left: var(--jp-code-cursor-width2) solid
      var(--jp-editor-cursor-color);
  }
}

.CodeMirror.jp-mod-readOnly .CodeMirror-cursor {
  display: none;
}

.CodeMirror-gutters {
  border-right: 1px solid var(--jp-border-color2);
  background-color: var(--jp-layout-color0);
}

.jp-CollaboratorCursor {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: none;
  border-bottom: 3px solid;
  background-clip: content-box;
  margin-left: -5px;
  margin-right: -5px;
}

.CodeMirror-selectedtext.cm-searching {
  background-color: var(--jp-search-selected-match-background-color) !important;
  color: var(--jp-search-selected-match-color) !important;
}

.cm-searching {
  background-color: var(
    --jp-search-unselected-match-background-color
  ) !important;
  color: var(--jp-search-unselected-match-color) !important;
}

.CodeMirror-focused .CodeMirror-selected {
  background-color: var(--jp-editor-selected-focused-background);
}

.CodeMirror-selected {
  background-color: var(--jp-editor-selected-background);
}

.jp-CollaboratorCursor-hover {
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  color: white;
  border-radius: 3px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  text-align: center;
  font-size: var(--jp-ui-font-size1);
  white-space: nowrap;
}

.jp-CodeMirror-ruler {
  border-left: 1px dashed var(--jp-border-color2);
}

/**
 * Here is our jupyter theme for CodeMirror syntax highlighting
 * This is used in our marked.js syntax highlighting and CodeMirror itself
 * The string "jupyter" is set in ../codemirror/widget.DEFAULT_CODEMIRROR_THEME
 * This came from the classic notebook, which came form highlight.js/GitHub
 */

/**
 * CodeMirror themes are handling the background/color in this way. This works
 * fine for CodeMirror editors outside the notebook, but the notebook styles
 * these things differently.
 */
.CodeMirror.cm-s-jupyter {
  background: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
}

/* In the notebook, we want this styling to be handled by its container */
.jp-CodeConsole .CodeMirror.cm-s-jupyter,
.jp-Notebook .CodeMirror.cm-s-jupyter {
  background: transparent;
}

.cm-s-jupyter .CodeMirror-cursor {
  border-left: var(--jp-code-cursor-width0) solid var(--jp-editor-cursor-color);
}
.cm-s-jupyter span.cm-keyword {
  color: var(--jp-mirror-editor-keyword-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-atom {
  color: var(--jp-mirror-editor-atom-color);
}
.cm-s-jupyter span.cm-number {
  color: var(--jp-mirror-editor-number-color);
}
.cm-s-jupyter span.cm-def {
  color: var(--jp-mirror-editor-def-color);
}
.cm-s-jupyter span.cm-variable {
  color: var(--jp-mirror-editor-variable-color);
}
.cm-s-jupyter span.cm-variable-2 {
  color: var(--jp-mirror-editor-variable-2-color);
}
.cm-s-jupyter span.cm-variable-3 {
  color: var(--jp-mirror-editor-variable-3-color);
}
.cm-s-jupyter span.cm-punctuation {
  color: var(--jp-mirror-editor-punctuation-color);
}
.cm-s-jupyter span.cm-property {
  color: var(--jp-mirror-editor-property-color);
}
.cm-s-jupyter span.cm-operator {
  color: var(--jp-mirror-editor-operator-color);
  font-weight: bold;
}
.cm-s-jupyter span.cm-comment {
  color: var(--jp-mirror-editor-comment-color);
  font-style: italic;
}
.cm-s-jupyter span.cm-string {
  color: var(--jp-mirror-editor-string-color);
}
.cm-s-jupyter span.cm-string-2 {
  color: var(--jp-mirror-editor-string-2-color);
}
.cm-s-jupyter span.cm-meta {
  color: var(--jp-mirror-editor-meta-color);
}
.cm-s-jupyter span.cm-qualifier {
  color: var(--jp-mirror-editor-qualifier-color);
}
.cm-s-jupyter span.cm-builtin {
  color: var(--jp-mirror-editor-builtin-color);
}
.cm-s-jupyter span.cm-bracket {
  color: var(--jp-mirror-editor-bracket-color);
}
.cm-s-jupyter span.cm-tag {
  color: var(--jp-mirror-editor-tag-color);
}
.cm-s-jupyter span.cm-attribute {
  color: var(--jp-mirror-editor-attribute-color);
}
.cm-s-jupyter span.cm-header {
  color: var(--jp-mirror-editor-header-color);
}
.cm-s-jupyter span.cm-quote {
  color: var(--jp-mirror-editor-quote-color);
}
.cm-s-jupyter span.cm-link {
  color: var(--jp-mirror-editor-link-color);
}
.cm-s-jupyter span.cm-error {
  color: var(--jp-mirror-editor-error-color);
}
.cm-s-jupyter span.cm-hr {
  color: #999;
}

.cm-s-jupyter span.cm-tab {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAMCAYAAAAkuj5RAAAAAXNSR0IArs4c6QAAAGFJREFUSMft1LsRQFAQheHPowAKoACx3IgEKtaEHujDjORSgWTH/ZOdnZOcM/sgk/kFFWY0qV8foQwS4MKBCS3qR6ixBJvElOobYAtivseIE120FaowJPN75GMu8j/LfMwNjh4HUpwg4LUAAAAASUVORK5CYII=);
  background-position: right;
  background-repeat: no-repeat;
}

.cm-s-jupyter .CodeMirror-activeline-background,
.cm-s-jupyter .CodeMirror-gutter {
  background-color: var(--jp-layout-color2);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| RenderedText
|----------------------------------------------------------------------------*/

:root {
  /* This is the padding value to fill the gaps between lines containing spans with background color. */
  --jp-private-code-span-padding: calc(
    (var(--jp-code-line-height) - 1) * var(--jp-code-font-size) / 2
  );
}

.jp-RenderedText {
  text-align: left;
  padding-left: var(--jp-code-padding);
  line-height: var(--jp-code-line-height);
  font-family: var(--jp-code-font-family);
}

.jp-RenderedText pre,
.jp-RenderedJavaScript pre,
.jp-RenderedHTMLCommon pre {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-code-font-size);
  border: none;
  margin: 0px;
  padding: 0px;
}

.jp-RenderedText pre a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}
.jp-RenderedText pre a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* console foregrounds and backgrounds */
.jp-RenderedText pre .ansi-black-fg {
  color: #3e424d;
}
.jp-RenderedText pre .ansi-red-fg {
  color: #e75c58;
}
.jp-RenderedText pre .ansi-green-fg {
  color: #00a250;
}
.jp-RenderedText pre .ansi-yellow-fg {
  color: #ddb62b;
}
.jp-RenderedText pre .ansi-blue-fg {
  color: #208ffb;
}
.jp-RenderedText pre .ansi-magenta-fg {
  color: #d160c4;
}
.jp-RenderedText pre .ansi-cyan-fg {
  color: #60c6c8;
}
.jp-RenderedText pre .ansi-white-fg {
  color: #c5c1b4;
}

.jp-RenderedText pre .ansi-black-bg {
  background-color: #3e424d;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-red-bg {
  background-color: #e75c58;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-green-bg {
  background-color: #00a250;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-yellow-bg {
  background-color: #ddb62b;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-blue-bg {
  background-color: #208ffb;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-magenta-bg {
  background-color: #d160c4;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-cyan-bg {
  background-color: #60c6c8;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-white-bg {
  background-color: #c5c1b4;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-black-intense-fg {
  color: #282c36;
}
.jp-RenderedText pre .ansi-red-intense-fg {
  color: #b22b31;
}
.jp-RenderedText pre .ansi-green-intense-fg {
  color: #007427;
}
.jp-RenderedText pre .ansi-yellow-intense-fg {
  color: #b27d12;
}
.jp-RenderedText pre .ansi-blue-intense-fg {
  color: #0065ca;
}
.jp-RenderedText pre .ansi-magenta-intense-fg {
  color: #a03196;
}
.jp-RenderedText pre .ansi-cyan-intense-fg {
  color: #258f8f;
}
.jp-RenderedText pre .ansi-white-intense-fg {
  color: #a1a6b2;
}

.jp-RenderedText pre .ansi-black-intense-bg {
  background-color: #282c36;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-red-intense-bg {
  background-color: #b22b31;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-green-intense-bg {
  background-color: #007427;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-yellow-intense-bg {
  background-color: #b27d12;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-blue-intense-bg {
  background-color: #0065ca;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-magenta-intense-bg {
  background-color: #a03196;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-cyan-intense-bg {
  background-color: #258f8f;
  padding: var(--jp-private-code-span-padding) 0;
}
.jp-RenderedText pre .ansi-white-intense-bg {
  background-color: #a1a6b2;
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-default-inverse-fg {
  color: var(--jp-ui-inverse-font-color0);
}
.jp-RenderedText pre .ansi-default-inverse-bg {
  background-color: var(--jp-inverse-layout-color0);
  padding: var(--jp-private-code-span-padding) 0;
}

.jp-RenderedText pre .ansi-bold {
  font-weight: bold;
}
.jp-RenderedText pre .ansi-underline {
  text-decoration: underline;
}

.jp-RenderedText[data-mime-type='application/vnd.jupyter.stderr'] {
  background: var(--jp-rendermime-error-background);
  padding-top: var(--jp-code-padding);
}

/*-----------------------------------------------------------------------------
| RenderedLatex
|----------------------------------------------------------------------------*/

.jp-RenderedLatex {
  color: var(--jp-content-font-color1);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
}

/* Left-justify outputs.*/
.jp-OutputArea-output.jp-RenderedLatex {
  padding: var(--jp-code-padding);
  text-align: left;
}

/*-----------------------------------------------------------------------------
| RenderedHTML
|----------------------------------------------------------------------------*/

.jp-RenderedHTMLCommon {
  color: var(--jp-content-font-color1);
  font-family: var(--jp-content-font-family);
  font-size: var(--jp-content-font-size1);
  line-height: var(--jp-content-line-height);
  /* Give a bit more R padding on Markdown text to keep line lengths reasonable */
  padding-right: 20px;
}

.jp-RenderedHTMLCommon em {
  font-style: italic;
}

.jp-RenderedHTMLCommon strong {
  font-weight: bold;
}

.jp-RenderedHTMLCommon u {
  text-decoration: underline;
}

.jp-RenderedHTMLCommon a:link {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:hover {
  text-decoration: underline;
  color: var(--jp-content-link-color);
}

.jp-RenderedHTMLCommon a:visited {
  text-decoration: none;
  color: var(--jp-content-link-color);
}

/* Headings */

.jp-RenderedHTMLCommon h1,
.jp-RenderedHTMLCommon h2,
.jp-RenderedHTMLCommon h3,
.jp-RenderedHTMLCommon h4,
.jp-RenderedHTMLCommon h5,
.jp-RenderedHTMLCommon h6 {
  line-height: var(--jp-content-heading-line-height);
  font-weight: var(--jp-content-heading-font-weight);
  font-style: normal;
  margin: var(--jp-content-heading-margin-top) 0
    var(--jp-content-heading-margin-bottom) 0;
}

.jp-RenderedHTMLCommon h1:first-child,
.jp-RenderedHTMLCommon h2:first-child,
.jp-RenderedHTMLCommon h3:first-child,
.jp-RenderedHTMLCommon h4:first-child,
.jp-RenderedHTMLCommon h5:first-child,
.jp-RenderedHTMLCommon h6:first-child {
  margin-top: calc(0.5 * var(--jp-content-heading-margin-top));
}

.jp-RenderedHTMLCommon h1:last-child,
.jp-RenderedHTMLCommon h2:last-child,
.jp-RenderedHTMLCommon h3:last-child,
.jp-RenderedHTMLCommon h4:last-child,
.jp-RenderedHTMLCommon h5:last-child,
.jp-RenderedHTMLCommon h6:last-child {
  margin-bottom: calc(0.5 * var(--jp-content-heading-margin-bottom));
}

.jp-RenderedHTMLCommon h1 {
  font-size: var(--jp-content-font-size5);
}

.jp-RenderedHTMLCommon h2 {
  font-size: var(--jp-content-font-size4);
}

.jp-RenderedHTMLCommon h3 {
  font-size: var(--jp-content-font-size3);
}

.jp-RenderedHTMLCommon h4 {
  font-size: var(--jp-content-font-size2);
}

.jp-RenderedHTMLCommon h5 {
  font-size: var(--jp-content-font-size1);
}

.jp-RenderedHTMLCommon h6 {
  font-size: var(--jp-content-font-size0);
}

/* Lists */

.jp-RenderedHTMLCommon ul:not(.list-inline),
.jp-RenderedHTMLCommon ol:not(.list-inline) {
  padding-left: 2em;
}

.jp-RenderedHTMLCommon ul {
  list-style: disc;
}

.jp-RenderedHTMLCommon ul ul {
  list-style: square;
}

.jp-RenderedHTMLCommon ul ul ul {
  list-style: circle;
}

.jp-RenderedHTMLCommon ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol ol {
  list-style: upper-alpha;
}

.jp-RenderedHTMLCommon ol ol ol {
  list-style: lower-alpha;
}

.jp-RenderedHTMLCommon ol ol ol ol {
  list-style: lower-roman;
}

.jp-RenderedHTMLCommon ol ol ol ol ol {
  list-style: decimal;
}

.jp-RenderedHTMLCommon ol,
.jp-RenderedHTMLCommon ul {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon ul ul,
.jp-RenderedHTMLCommon ul ol,
.jp-RenderedHTMLCommon ol ul,
.jp-RenderedHTMLCommon ol ol {
  margin-bottom: 0em;
}

.jp-RenderedHTMLCommon hr {
  color: var(--jp-border-color2);
  background-color: var(--jp-border-color1);
  margin-top: 1em;
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon > pre {
  margin: 1.5em 2em;
}

.jp-RenderedHTMLCommon pre,
.jp-RenderedHTMLCommon code {
  border: 0;
  background-color: var(--jp-layout-color0);
  color: var(--jp-content-font-color1);
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  line-height: var(--jp-code-line-height);
  padding: 0;
  white-space: pre-wrap;
}

.jp-RenderedHTMLCommon :not(pre) > code {
  background-color: var(--jp-layout-color2);
  padding: 1px 5px;
}

/* Tables */

.jp-RenderedHTMLCommon table {
  border-collapse: collapse;
  border-spacing: 0;
  border: none;
  color: var(--jp-ui-font-color1);
  font-size: 12px;
  table-layout: fixed;
  margin-left: auto;
  margin-right: auto;
}

.jp-RenderedHTMLCommon thead {
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  vertical-align: bottom;
}

.jp-RenderedHTMLCommon td,
.jp-RenderedHTMLCommon th,
.jp-RenderedHTMLCommon tr {
  vertical-align: middle;
  padding: 0.5em 0.5em;
  line-height: normal;
  white-space: normal;
  max-width: none;
  border: none;
}

.jp-RenderedMarkdown.jp-RenderedHTMLCommon td,
.jp-RenderedMarkdown.jp-RenderedHTMLCommon th {
  max-width: none;
}

:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon td,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon th,
:not(.jp-RenderedMarkdown).jp-RenderedHTMLCommon tr {
  text-align: right;
}

.jp-RenderedHTMLCommon th {
  font-weight: bold;
}

.jp-RenderedHTMLCommon tbody tr:nth-child(odd) {
  background: var(--jp-layout-color0);
}

.jp-RenderedHTMLCommon tbody tr:nth-child(even) {
  background: var(--jp-rendermime-table-row-background);
}

.jp-RenderedHTMLCommon tbody tr:hover {
  background: var(--jp-rendermime-table-row-hover-background);
}

.jp-RenderedHTMLCommon table {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon p {
  text-align: left;
  margin: 0px;
}

.jp-RenderedHTMLCommon p {
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon img {
  -moz-force-broken-image-icon: 1;
}

/* Restrict to direct children as other images could be nested in other content. */
.jp-RenderedHTMLCommon > img {
  display: block;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1em;
}

/* Change color behind transparent images if they need it... */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-light-background {
  background-color: var(--jp-inverse-layout-color1);
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-dark-background {
  background-color: var(--jp-inverse-layout-color1);
}
/* ...or leave it untouched if they don't */
[data-jp-theme-light='false'] .jp-RenderedImage img.jp-needs-dark-background {
}
[data-jp-theme-light='true'] .jp-RenderedImage img.jp-needs-light-background {
}

.jp-RenderedHTMLCommon img,
.jp-RenderedImage img,
.jp-RenderedHTMLCommon svg,
.jp-RenderedSVG svg {
  max-width: 100%;
  height: auto;
}

.jp-RenderedHTMLCommon img.jp-mod-unconfined,
.jp-RenderedImage img.jp-mod-unconfined,
.jp-RenderedHTMLCommon svg.jp-mod-unconfined,
.jp-RenderedSVG svg.jp-mod-unconfined {
  max-width: none;
}

.jp-RenderedHTMLCommon .alert {
  padding: var(--jp-notebook-padding);
  border: var(--jp-border-width) solid transparent;
  border-radius: var(--jp-border-radius);
  margin-bottom: 1em;
}

.jp-RenderedHTMLCommon .alert-info {
  color: var(--jp-info-color0);
  background-color: var(--jp-info-color3);
  border-color: var(--jp-info-color2);
}
.jp-RenderedHTMLCommon .alert-info hr {
  border-color: var(--jp-info-color3);
}
.jp-RenderedHTMLCommon .alert-info > p:last-child,
.jp-RenderedHTMLCommon .alert-info > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-warning {
  color: var(--jp-warn-color0);
  background-color: var(--jp-warn-color3);
  border-color: var(--jp-warn-color2);
}
.jp-RenderedHTMLCommon .alert-warning hr {
  border-color: var(--jp-warn-color3);
}
.jp-RenderedHTMLCommon .alert-warning > p:last-child,
.jp-RenderedHTMLCommon .alert-warning > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-success {
  color: var(--jp-success-color0);
  background-color: var(--jp-success-color3);
  border-color: var(--jp-success-color2);
}
.jp-RenderedHTMLCommon .alert-success hr {
  border-color: var(--jp-success-color3);
}
.jp-RenderedHTMLCommon .alert-success > p:last-child,
.jp-RenderedHTMLCommon .alert-success > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon .alert-danger {
  color: var(--jp-error-color0);
  background-color: var(--jp-error-color3);
  border-color: var(--jp-error-color2);
}
.jp-RenderedHTMLCommon .alert-danger hr {
  border-color: var(--jp-error-color3);
}
.jp-RenderedHTMLCommon .alert-danger > p:last-child,
.jp-RenderedHTMLCommon .alert-danger > ul:last-child {
  margin-bottom: 0;
}

.jp-RenderedHTMLCommon blockquote {
  margin: 1em 2em;
  padding: 0 1em;
  border-left: 5px solid var(--jp-border-color2);
}

a.jp-InternalAnchorLink {
  visibility: hidden;
  margin-left: 8px;
  color: var(--md-blue-800);
}

h1:hover .jp-InternalAnchorLink,
h2:hover .jp-InternalAnchorLink,
h3:hover .jp-InternalAnchorLink,
h4:hover .jp-InternalAnchorLink,
h5:hover .jp-InternalAnchorLink,
h6:hover .jp-InternalAnchorLink {
  visibility: visible;
}

.jp-RenderedHTMLCommon kbd {
  background-color: var(--jp-rendermime-table-row-background);
  border: 1px solid var(--jp-border-color0);
  border-bottom-color: var(--jp-border-color2);
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 0.8em;
  line-height: 1em;
  padding: 0.2em 0.5em;
}

/* Most direct children of .jp-RenderedHTMLCommon have a margin-bottom of 1.0.
 * At the bottom of cells this is a bit too much as there is also spacing
 * between cells. Going all the way to 0 gets too tight between markdown and
 * code cells.
 */
.jp-RenderedHTMLCommon > *:last-child {
  margin-bottom: 0.5em;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-MimeDocument {
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-filebrowser-button-height: 28px;
  --jp-private-filebrowser-button-width: 48px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-FileBrowser {
  display: flex;
  flex-direction: column;
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
   * relative to this base size */
  font-size: var(--jp-ui-font-size1);
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  border-bottom: none;
  height: auto;
  margin: var(--jp-toolbar-header-margin);
  box-shadow: none;
}

.jp-BreadCrumbs {
  flex: 0 0 auto;
  margin: 8px 12px 8px 12px;
}

.jp-BreadCrumbs-item {
  margin: 0px 2px;
  padding: 0px 2px;
  border-radius: var(--jp-border-radius);
  cursor: pointer;
}

.jp-BreadCrumbs-item:hover {
  background-color: var(--jp-layout-color2);
}

.jp-BreadCrumbs-item:first-child {
  margin-left: 0px;
}

.jp-BreadCrumbs-item.jp-mod-dropTarget {
  background-color: var(--jp-brand-color2);
  opacity: 0.7;
}

/*-----------------------------------------------------------------------------
| Buttons
|----------------------------------------------------------------------------*/

.jp-FileBrowser-toolbar.jp-Toolbar {
  padding: 0px;
  margin: 8px 12px 0px 12px;
}

.jp-FileBrowser-toolbar.jp-Toolbar {
  justify-content: flex-start;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-Toolbar-item {
  flex: 0 0 auto;
  padding-left: 0px;
  padding-right: 2px;
}

.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {
  width: 40px;
}

.jp-FileBrowser-toolbar.jp-Toolbar
  .jp-Toolbar-item:first-child
  .jp-ToolbarButtonComponent {
  width: 72px;
  background: var(--jp-brand-color1);
}

.jp-FileBrowser-toolbar.jp-Toolbar
  .jp-Toolbar-item:first-child
  .jp-ToolbarButtonComponent
  .jp-icon3 {
  fill: white;
}

/*-----------------------------------------------------------------------------
| Other styles
|----------------------------------------------------------------------------*/

.jp-FileDialog.jp-mod-conflict input {
  color: red;
}

.jp-FileDialog .jp-new-name-title {
  margin-top: 12px;
}

.jp-LastModified-hidden {
  display: none;
}

.jp-FileBrowser-filterBox {
  padding: 0px;
  flex: 0 0 auto;
  margin: 8px 12px 0px 12px;
}

/*-----------------------------------------------------------------------------
| DirListing
|----------------------------------------------------------------------------*/

.jp-DirListing {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  outline: 0;
}

.jp-DirListing-header {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  border-top: var(--jp-border-width) solid var(--jp-border-color2);
  border-bottom: var(--jp-border-width) solid var(--jp-border-color1);
  box-shadow: var(--jp-toolbar-box-shadow);
  z-index: 2;
}

.jp-DirListing-headerItem {
  padding: 4px 12px 2px 12px;
  font-weight: 500;
}

.jp-DirListing-headerItem:hover {
  background: var(--jp-layout-color2);
}

.jp-DirListing-headerItem.jp-id-name {
  flex: 1 0 84px;
}

.jp-DirListing-headerItem.jp-id-modified {
  flex: 0 0 112px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
}

.jp-id-narrow {
  display: none;
  flex: 0 0 5px;
  padding: 4px 4px;
  border-left: var(--jp-border-width) solid var(--jp-border-color2);
  text-align: right;
  color: var(--jp-border-color2);
}

.jp-DirListing-narrow .jp-id-narrow {
  display: block;
}

.jp-DirListing-narrow .jp-id-modified,
.jp-DirListing-narrow .jp-DirListing-itemModified {
  display: none;
}

.jp-DirListing-headerItem.jp-mod-selected {
  font-weight: 600;
}

/* increase specificity to override bundled default */
.jp-DirListing-content {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-DirListing-content mark {
  color: var(--jp-ui-font-color0);
  background-color: transparent;
  font-weight: bold;
}

/* Style the directory listing content when a user drops a file to upload */
.jp-DirListing.jp-mod-native-drop .jp-DirListing-content {
  outline: 5px dashed rgba(128, 128, 128, 0.5);
  outline-offset: -10px;
  cursor: copy;
}

.jp-DirListing-item {
  display: flex;
  flex-direction: row;
  padding: 4px 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-DirListing-item[data-is-dot] {
  opacity: 75%;
}

.jp-DirListing-item.jp-mod-selected {
  color: white;
  background: var(--jp-brand-color1);
}

.jp-DirListing-item.jp-mod-dropTarget {
  background: var(--jp-brand-color3);
}

.jp-DirListing-item:hover:not(.jp-mod-selected) {
  background: var(--jp-layout-color2);
}

.jp-DirListing-itemIcon {
  flex: 0 0 20px;
  margin-right: 4px;
}

.jp-DirListing-itemText {
  flex: 1 0 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
}

.jp-DirListing-itemModified {
  flex: 0 0 125px;
  text-align: right;
}

.jp-DirListing-editor {
  flex: 1 0 64px;
  outline: none;
  border: none;
}

.jp-DirListing-item.jp-mod-running .jp-DirListing-itemIcon:before {
  color: limegreen;
  content: '\25CF';
  font-size: 8px;
  position: absolute;
  left: -8px;
}

.jp-DirListing-item.lm-mod-drag-image,
.jp-DirListing-item.jp-mod-selected.lm-mod-drag-image {
  font-size: var(--jp-ui-font-size1);
  padding-left: 4px;
  margin-left: 4px;
  width: 160px;
  background-color: var(--jp-ui-inverse-font-color2);
  box-shadow: var(--jp-elevation-z2);
  border-radius: 0px;
  color: var(--jp-ui-font-color1);
  transform: translateX(-40%) translateY(-58%);
}

.jp-DirListing-deadSpace {
  flex: 1 1 auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: auto;
  background-color: var(--jp-layout-color1);
}

.jp-Document {
  min-width: 120px;
  min-height: 120px;
  outline: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
}

/*-----------------------------------------------------------------------------
| Main OutputArea
| OutputArea has a list of Outputs
|----------------------------------------------------------------------------*/

.jp-OutputArea {
  overflow-y: auto;
}

.jp-OutputArea-child {
  display: flex;
  flex-direction: row;
}

.jp-OutputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-outprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.jp-OutputArea-output {
  height: auto;
  overflow: auto;
  user-select: text;
  -moz-user-select: text;
  -webkit-user-select: text;
  -ms-user-select: text;
}

.jp-OutputArea-child .jp-OutputArea-output {
  flex-grow: 1;
  flex-shrink: 1;
}

/**
 * Isolated output.
 */
.jp-OutputArea-output.jp-mod-isolated {
  width: 100%;
  display: block;
}

/*
When drag events occur, `p-mod-override-cursor` is added to the body.
Because iframes steal all cursor events, the following two rules are necessary
to suppress pointer events while resize drags are occurring. There may be a
better solution to this problem.
*/
body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated {
  position: relative;
}

body.lm-mod-override-cursor .jp-OutputArea-output.jp-mod-isolated:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
}

/* pre */

.jp-OutputArea-output pre {
  border: none;
  margin: 0px;
  padding: 0px;
  overflow-x: auto;
  overflow-y: auto;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* tables */

.jp-OutputArea-output.jp-RenderedHTMLCommon table {
  margin-left: 0;
  margin-right: 0;
}

/* description lists */

.jp-OutputArea-output dl,
.jp-OutputArea-output dt,
.jp-OutputArea-output dd {
  display: block;
}

.jp-OutputArea-output dl {
  width: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dt {
  font-weight: bold;
  float: left;
  width: 20%;
  padding: 0;
  margin: 0;
}

.jp-OutputArea-output dd {
  float: left;
  width: 80%;
  padding: 0;
  margin: 0;
}

/* Hide the gutter in case of
 *  - nested output areas (e.g. in the case of output widgets)
 *  - mirrored output areas
 */
.jp-OutputArea .jp-OutputArea .jp-OutputArea-prompt {
  display: none;
}

/*-----------------------------------------------------------------------------
| executeResult is added to any Output-result for the display of the object
| returned by a cell
|----------------------------------------------------------------------------*/

.jp-OutputArea-output.jp-OutputArea-executeResult {
  margin-left: 0px;
  flex: 1 1 auto;
}

/* Text output with the Out[] prompt needs a top padding to match the
 * alignment of the Out[] prompt itself.
 */
.jp-OutputArea-executeResult .jp-RenderedText.jp-OutputArea-output {
  padding-top: var(--jp-code-padding);
  border-top: var(--jp-border-width) solid transparent;
}

/*-----------------------------------------------------------------------------
| The Stdin output
|----------------------------------------------------------------------------*/

.jp-OutputArea-stdin {
  line-height: var(--jp-code-line-height);
  padding-top: var(--jp-code-padding);
  display: flex;
}

.jp-Stdin-prompt {
  color: var(--jp-content-font-color0);
  padding-right: var(--jp-code-padding);
  vertical-align: baseline;
  flex: 0 0 auto;
}

.jp-Stdin-input {
  font-family: var(--jp-code-font-family);
  font-size: inherit;
  color: inherit;
  background-color: inherit;
  width: 42%;
  min-width: 200px;
  /* make sure input baseline aligns with prompt */
  vertical-align: baseline;
  /* padding + margin = 0.5em between prompt and cursor */
  padding: 0em 0.25em;
  margin: 0em 0.25em;
  flex: 0 0 70%;
}

.jp-Stdin-input:focus {
  box-shadow: none;
}

/*-----------------------------------------------------------------------------
| Output Area View
|----------------------------------------------------------------------------*/

.jp-LinkedOutputView .jp-OutputArea {
  height: 100%;
  display: block;
}

.jp-LinkedOutputView .jp-OutputArea-output:only-child {
  height: 100%;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

.jp-Collapser {
  flex: 0 0 var(--jp-cell-collapser-width);
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
  border-radius: var(--jp-border-radius);
  opacity: 1;
}

.jp-Collapser-child {
  display: block;
  width: 100%;
  box-sizing: border-box;
  /* height: 100% doesn't work because the height of its parent is computed from content */
  position: absolute;
  top: 0px;
  bottom: 0px;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Header/Footer
|----------------------------------------------------------------------------*/

/* Hidden by zero height by default */
.jp-CellHeader,
.jp-CellFooter {
  height: 0px;
  width: 100%;
  padding: 0px;
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Input
|----------------------------------------------------------------------------*/

/* All input areas */
.jp-InputArea {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.jp-InputArea-editor {
  flex: 1 1 auto;
  overflow: hidden;
}

.jp-InputArea-editor {
  /* This is the non-active, default styling */
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  border-radius: 0px;
  background: var(--jp-cell-editor-background);
}

.jp-InputPrompt {
  flex: 0 0 var(--jp-cell-prompt-width);
  color: var(--jp-cell-inprompt-font-color);
  font-family: var(--jp-cell-prompt-font-family);
  padding: var(--jp-code-padding);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  opacity: var(--jp-cell-prompt-opacity);
  line-height: var(--jp-code-line-height);
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
  opacity: var(--jp-cell-prompt-opacity);
  /* Right align prompt text, don't wrap to handle large prompt numbers */
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Disable text selection */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Placeholder
|----------------------------------------------------------------------------*/

.jp-Placeholder {
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
}

.jp-Placeholder-prompt {
  box-sizing: border-box;
}

.jp-Placeholder-content {
  flex: 1 1 auto;
  border: none;
  background: transparent;
  height: 20px;
  box-sizing: border-box;
}

.jp-Placeholder-content .jp-MoreHorizIcon {
  width: 32px;
  height: 16px;
  border: 1px solid transparent;
  border-radius: var(--jp-border-radius);
}

.jp-Placeholder-content .jp-MoreHorizIcon:hover {
  border: 1px solid var(--jp-border-color1);
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: var(--jp-layout-color0);
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-cell-scrolling-output-offset: 5px;
}

/*-----------------------------------------------------------------------------
| Cell
|----------------------------------------------------------------------------*/

.jp-Cell {
  padding: var(--jp-cell-padding);
  margin: 0px;
  border: none;
  outline: none;
  background: transparent;
}

/*-----------------------------------------------------------------------------
| Common input/output
|----------------------------------------------------------------------------*/

.jp-Cell-inputWrapper,
.jp-Cell-outputWrapper {
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin: 0px;
  /* Added to reveal the box-shadow on the input and output collapsers. */
  overflow: visible;
}

/* Only input/output areas inside cells */
.jp-Cell-inputArea,
.jp-Cell-outputArea {
  flex: 1 1 auto;
}

/*-----------------------------------------------------------------------------
| Collapser
|----------------------------------------------------------------------------*/

/* Make the output collapser disappear when there is not output, but do so
 * in a manner that leaves it in the layout and preserves its width.
 */
.jp-Cell.jp-mod-noOutputs .jp-Cell-outputCollapser {
  border: none !important;
  background: transparent !important;
}

.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputCollapser {
  min-height: var(--jp-cell-collapser-min-height);
}

/*-----------------------------------------------------------------------------
| Output
|----------------------------------------------------------------------------*/

/* Put a space between input and output when there IS output */
.jp-Cell:not(.jp-mod-noOutputs) .jp-Cell-outputWrapper {
  margin-top: 5px;
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-Cell-outputArea {
  overflow-y: auto;
  max-height: 200px;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, 0.3);
  margin-left: var(--jp-private-cell-scrolling-output-offset);
}

.jp-CodeCell.jp-mod-outputsScrolled .jp-OutputArea-prompt {
  flex: 0 0
    calc(
      var(--jp-cell-prompt-width) -
        var(--jp-private-cell-scrolling-output-offset)
    );
}

/*-----------------------------------------------------------------------------
| CodeCell
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| MarkdownCell
|----------------------------------------------------------------------------*/

.jp-MarkdownOutput {
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: var(--jp-code-padding);
}

.jp-MarkdownOutput.jp-RenderedHTMLCommon {
  overflow: auto;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Variables
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------

/*-----------------------------------------------------------------------------
| Styles
|----------------------------------------------------------------------------*/

.jp-NotebookPanel-toolbar {
  padding: 2px;
}

.jp-Toolbar-item.jp-Notebook-toolbarCellType .jp-select-wrapper.jp-mod-focused {
  border: none;
  box-shadow: none;
}

.jp-Notebook-toolbarCellTypeDropdown select {
  height: 24px;
  font-size: var(--jp-ui-font-size1);
  line-height: 14px;
  border-radius: 0;
  display: block;
}

.jp-Notebook-toolbarCellTypeDropdown span {
  top: 5px !important;
}

/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Private CSS variables
|----------------------------------------------------------------------------*/

:root {
  --jp-private-notebook-dragImage-width: 304px;
  --jp-private-notebook-dragImage-height: 36px;
  --jp-private-notebook-selected-color: var(--md-blue-400);
  --jp-private-notebook-active-color: var(--md-green-400);
}

/*-----------------------------------------------------------------------------
| Imports
|----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
| Notebook
|----------------------------------------------------------------------------*/

.jp-NotebookPanel {
  display: block;
  height: 100%;
}

.jp-NotebookPanel.jp-Document {
  min-width: 240px;
  min-height: 120px;
}

.jp-Notebook {
  padding: var(--jp-notebook-padding);
  outline: none;
  overflow: auto;
  background: var(--jp-layout-color0);
}

.jp-Notebook.jp-mod-scrollPastEnd::after {
  display: block;
  content: '';
  min-height: var(--jp-notebook-scroll-padding);
}

.jp-Notebook .jp-Cell {
  overflow: visible;
}

.jp-Notebook .jp-Cell .jp-InputPrompt {
  cursor: move;
}

/*-----------------------------------------------------------------------------
| Notebook state related styling
|
| The notebook and cells each have states, here are the possibilities:
|
| - Notebook
|   - Command
|   - Edit
| - Cell
|   - None
|   - Active (only one can be active)
|   - Selected (the cells actions are applied to)
|   - Multiselected (when multiple selected, the cursor)
|   - No outputs
|----------------------------------------------------------------------------*/

/* Command or edit modes */

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-InputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

.jp-Notebook .jp-Cell:not(.jp-mod-active) .jp-OutputPrompt {
  opacity: var(--jp-cell-prompt-not-active-opacity);
  color: var(--jp-cell-prompt-not-active-font-color);
}

/* cell is active */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser {
  background: var(--jp-brand-color1);
}

/* collapser is hovered */
.jp-Notebook .jp-Cell .jp-Collapser:hover {
  box-shadow: var(--jp-elevation-z2);
  background: var(--jp-brand-color1);
  opacity: var(--jp-cell-collapser-not-active-hover-opacity);
}

/* cell is active and collapser is hovered */
.jp-Notebook .jp-Cell.jp-mod-active .jp-Collapser:hover {
  background: var(--jp-brand-color0);
  opacity: 1;
}

/* Command mode */

.jp-Notebook.jp-mod-commandMode .jp-Cell.jp-mod-selected {
  background: var(--jp-notebook-multiselected-color);
}

.jp-Notebook.jp-mod-commandMode
  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {
  background: transparent;
}

/* Edit mode */

.jp-Notebook.jp-mod-editMode .jp-Cell.jp-mod-active .jp-InputArea-editor {
  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);
  box-shadow: var(--jp-input-box-shadow);
  background-color: var(--jp-cell-editor-active-background);
}

/*-----------------------------------------------------------------------------
| Notebook drag and drop
|----------------------------------------------------------------------------*/

.jp-Notebook-cell.jp-mod-dropSource {
  opacity: 0.5;
}

.jp-Notebook-cell.jp-mod-dropTarget,
.jp-Notebook.jp-mod-commandMode
  .jp-Notebook-cell.jp-mod-active.jp-mod-selected.jp-mod-dropTarget {
  border-top-color: var(--jp-private-notebook-selected-color);
  border-top-style: solid;
  border-top-width: 2px;
}

.jp-dragImage {
  display: flex;
  flex-direction: row;
  width: var(--jp-private-notebook-dragImage-width);
  height: var(--jp-private-notebook-dragImage-height);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background);
  overflow: visible;
}

.jp-dragImage-singlePrompt {
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

.jp-dragImage .jp-dragImage-content {
  flex: 1 1 auto;
  z-index: 2;
  font-size: var(--jp-code-font-size);
  font-family: var(--jp-code-font-family);
  line-height: var(--jp-code-line-height);
  padding: var(--jp-code-padding);
  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);
  background: var(--jp-cell-editor-background-color);
  color: var(--jp-content-font-color3);
  text-align: left;
  margin: 4px 4px 4px 0px;
}

.jp-dragImage .jp-dragImage-prompt {
  flex: 0 0 auto;
  min-width: 36px;
  color: var(--jp-cell-inprompt-font-color);
  padding: var(--jp-code-padding);
  padding-left: 12px;
  font-family: var(--jp-cell-prompt-font-family);
  letter-spacing: var(--jp-cell-prompt-letter-spacing);
  line-height: 1.9;
  font-size: var(--jp-code-font-size);
  border: var(--jp-border-width) solid transparent;
}

.jp-dragImage-multipleBack {
  z-index: -1;
  position: absolute;
  height: 32px;
  width: 300px;
  top: 8px;
  left: 8px;
  background: var(--jp-layout-color2);
  border: var(--jp-border-width) solid var(--jp-input-border-color);
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
}

/*-----------------------------------------------------------------------------
| Cell toolbar
|----------------------------------------------------------------------------*/

.jp-NotebookTools {
  display: block;
  min-width: var(--jp-sidebar-min-width);
  color: var(--jp-ui-font-color1);
  background: var(--jp-layout-color1);
  /* This is needed so that all font sizing of children done in ems is
    * relative to this base size */
  font-size: var(--jp-ui-font-size1);
  overflow: auto;
}

.jp-NotebookTools-tool {
  padding: 0px 12px 0 12px;
}

.jp-ActiveCellTool {
  padding: 12px;
  background-color: var(--jp-layout-color1);
  border-top: none !important;
}

.jp-ActiveCellTool .jp-InputArea-prompt {
  flex: 0 0 auto;
  padding-left: 0px;
}

.jp-ActiveCellTool .jp-InputArea-editor {
  flex: 1 1 auto;
  background: var(--jp-cell-editor-background);
  border-color: var(--jp-cell-editor-border-color);
}

.jp-ActiveCellTool .jp-InputArea-editor .CodeMirror {
  background: transparent;
}

.jp-MetadataEditorTool {
  flex-direction: column;
  padding: 12px 0px 12px 0px;
}

.jp-RankedPanel > :not(:first-child) {
  margin-top: 12px;
}

.jp-KeySelector select.jp-mod-styled {
  font-size: var(--jp-ui-font-size1);
  color: var(--jp-ui-font-color0);
  border: var(--jp-border-width) solid var(--jp-border-color1);
}

.jp-KeySelector label,
.jp-MetadataEditorTool label {
  line-height: 1.4;
}

.jp-NotebookTools .jp-select-wrapper {
  margin-top: 4px;
  margin-bottom: 0px;
}

.jp-NotebookTools .jp-Collapse {
  margin-top: 16px;
}

/*-----------------------------------------------------------------------------
| Presentation Mode (.jp-mod-presentationMode)
|----------------------------------------------------------------------------*/

.jp-mod-presentationMode .jp-Notebook {
  --jp-content-font-size1: var(--jp-content-presentation-font-size1);
  --jp-code-font-size: var(--jp-code-presentation-font-size);
}

.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-InputPrompt,
.jp-mod-presentationMode .jp-Notebook .jp-Cell .jp-OutputPrompt {
  flex: 0 0 110px;
}

</style>

    <style type="text/css">
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/*
The following CSS variables define the main, public API for styling JupyterLab.
These variables should be used by all plugins wherever possible. In other
words, plugins should not define custom colors, sizes, etc unless absolutely
necessary. This enables users to change the visual theme of JupyterLab
by changing these variables.

Many variables appear in an ordered sequence (0,1,2,3). These sequences
are designed to work well together, so for example, `--jp-border-color1` should
be used with `--jp-layout-color1`. The numbers have the following meanings:

* 0: super-primary, reserved for special emphasis
* 1: primary, most important under normal situations
* 2: secondary, next most important under normal situations
* 3: tertiary, next most important under normal situations

Throughout JupyterLab, we are mostly following principles from Google's
Material Design when selecting colors. We are not, however, following
all of MD as it is not optimized for dense, information rich UIs.
*/

:root {
  /* Elevation
   *
   * We style box-shadows using Material Design's idea of elevation. These particular numbers are taken from here:
   *
   * https://github.com/material-components/material-components-web
   * https://material-components-web.appspot.com/elevation.html
   */

  --jp-shadow-base-lightness: 0;
  --jp-shadow-umbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.2
  );
  --jp-shadow-penumbra-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.14
  );
  --jp-shadow-ambient-color: rgba(
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    var(--jp-shadow-base-lightness),
    0.12
  );
  --jp-elevation-z0: none;
  --jp-elevation-z1: 0px 2px 1px -1px var(--jp-shadow-umbra-color),
    0px 1px 1px 0px var(--jp-shadow-penumbra-color),
    0px 1px 3px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z2: 0px 3px 1px -2px var(--jp-shadow-umbra-color),
    0px 2px 2px 0px var(--jp-shadow-penumbra-color),
    0px 1px 5px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z4: 0px 2px 4px -1px var(--jp-shadow-umbra-color),
    0px 4px 5px 0px var(--jp-shadow-penumbra-color),
    0px 1px 10px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z6: 0px 3px 5px -1px var(--jp-shadow-umbra-color),
    0px 6px 10px 0px var(--jp-shadow-penumbra-color),
    0px 1px 18px 0px var(--jp-shadow-ambient-color);
  --jp-elevation-z8: 0px 5px 5px -3px var(--jp-shadow-umbra-color),
    0px 8px 10px 1px var(--jp-shadow-penumbra-color),
    0px 3px 14px 2px var(--jp-shadow-ambient-color);
  --jp-elevation-z12: 0px 7px 8px -4px var(--jp-shadow-umbra-color),
    0px 12px 17px 2px var(--jp-shadow-penumbra-color),
    0px 5px 22px 4px var(--jp-shadow-ambient-color);
  --jp-elevation-z16: 0px 8px 10px -5px var(--jp-shadow-umbra-color),
    0px 16px 24px 2px var(--jp-shadow-penumbra-color),
    0px 6px 30px 5px var(--jp-shadow-ambient-color);
  --jp-elevation-z20: 0px 10px 13px -6px var(--jp-shadow-umbra-color),
    0px 20px 31px 3px var(--jp-shadow-penumbra-color),
    0px 8px 38px 7px var(--jp-shadow-ambient-color);
  --jp-elevation-z24: 0px 11px 15px -7px var(--jp-shadow-umbra-color),
    0px 24px 38px 3px var(--jp-shadow-penumbra-color),
    0px 9px 46px 8px var(--jp-shadow-ambient-color);

  /* Borders
   *
   * The following variables, specify the visual styling of borders in JupyterLab.
   */

  --jp-border-width: 1px;
  --jp-border-color0: var(--md-grey-400);
  --jp-border-color1: var(--md-grey-400);
  --jp-border-color2: var(--md-grey-300);
  --jp-border-color3: var(--md-grey-200);
  --jp-border-radius: 2px;

  /* UI Fonts
   *
   * The UI font CSS variables are used for the typography all of the JupyterLab
   * user interface elements that are not directly user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-ui-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-ui-font-scale-factor: 1.2;
  --jp-ui-font-size0: 0.83333em;
  --jp-ui-font-size1: 13px; /* Base font size */
  --jp-ui-font-size2: 1.2em;
  --jp-ui-font-size3: 1.44em;

  --jp-ui-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
    Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  /*
   * Use these font colors against the corresponding main layout colors.
   * In a light theme, these go from dark to light.
   */

  /* Defaults use Material Design specification */
  --jp-ui-font-color0: rgba(0, 0, 0, 1);
  --jp-ui-font-color1: rgba(0, 0, 0, 0.87);
  --jp-ui-font-color2: rgba(0, 0, 0, 0.54);
  --jp-ui-font-color3: rgba(0, 0, 0, 0.38);

  /*
   * Use these against the brand/accent/warn/error colors.
   * These will typically go from light to darker, in both a dark and light theme.
   */

  --jp-ui-inverse-font-color0: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color1: rgba(255, 255, 255, 1);
  --jp-ui-inverse-font-color2: rgba(255, 255, 255, 0.7);
  --jp-ui-inverse-font-color3: rgba(255, 255, 255, 0.5);

  /* Content Fonts
   *
   * Content font variables are used for typography of user generated content.
   *
   * The font sizing here is done assuming that the body font size of --jp-content-font-size1
   * is applied to a parent element. When children elements, such as headings, are sized
   * in em all things will be computed relative to that body size.
   */

  --jp-content-line-height: 1.6;
  --jp-content-font-scale-factor: 1.2;
  --jp-content-font-size0: 0.83333em;
  --jp-content-font-size1: 14px; /* Base font size */
  --jp-content-font-size2: 1.2em;
  --jp-content-font-size3: 1.44em;
  --jp-content-font-size4: 1.728em;
  --jp-content-font-size5: 2.0736em;

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-content-presentation-font-size1: 17px;

  --jp-content-heading-line-height: 1;
  --jp-content-heading-margin-top: 1.2em;
  --jp-content-heading-margin-bottom: 0.8em;
  --jp-content-heading-font-weight: 500;

  /* Defaults use Material Design specification */
  --jp-content-font-color0: rgba(0, 0, 0, 1);
  --jp-content-font-color1: rgba(0, 0, 0, 0.87);
  --jp-content-font-color2: rgba(0, 0, 0, 0.54);
  --jp-content-font-color3: rgba(0, 0, 0, 0.38);

  --jp-content-link-color: var(--md-blue-700);

  --jp-content-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';

  /*
   * Code Fonts
   *
   * Code font variables are used for typography of code and other monospaces content.
   */

  --jp-code-font-size: 13px;
  --jp-code-line-height: 1.3077; /* 17px for 13px base */
  --jp-code-padding: 5px; /* 5px for 13px base, codemirror highlighting needs integer px value */
  --jp-code-font-family-default: Menlo, Consolas, 'DejaVu Sans Mono', monospace;
  --jp-code-font-family: var(--jp-code-font-family-default);

  /* This gives a magnification of about 125% in presentation mode over normal. */
  --jp-code-presentation-font-size: 16px;

  /* may need to tweak cursor width if you change font size */
  --jp-code-cursor-width0: 1.4px;
  --jp-code-cursor-width1: 2px;
  --jp-code-cursor-width2: 4px;

  /* Layout
   *
   * The following are the main layout colors use in JupyterLab. In a light
   * theme these would go from light to dark.
   */

  --jp-layout-color0: white;
  --jp-layout-color1: white;
  --jp-layout-color2: var(--md-grey-200);
  --jp-layout-color3: var(--md-grey-400);
  --jp-layout-color4: var(--md-grey-600);

  /* Inverse Layout
   *
   * The following are the inverse layout colors use in JupyterLab. In a light
   * theme these would go from dark to light.
   */

  --jp-inverse-layout-color0: #111111;
  --jp-inverse-layout-color1: var(--md-grey-900);
  --jp-inverse-layout-color2: var(--md-grey-800);
  --jp-inverse-layout-color3: var(--md-grey-700);
  --jp-inverse-layout-color4: var(--md-grey-600);

  /* Brand/accent */

  --jp-brand-color0: var(--md-blue-700);
  --jp-brand-color1: var(--md-blue-500);
  --jp-brand-color2: var(--md-blue-300);
  --jp-brand-color3: var(--md-blue-100);
  --jp-brand-color4: var(--md-blue-50);

  --jp-accent-color0: var(--md-green-700);
  --jp-accent-color1: var(--md-green-500);
  --jp-accent-color2: var(--md-green-300);
  --jp-accent-color3: var(--md-green-100);

  /* State colors (warn, error, success, info) */

  --jp-warn-color0: var(--md-orange-700);
  --jp-warn-color1: var(--md-orange-500);
  --jp-warn-color2: var(--md-orange-300);
  --jp-warn-color3: var(--md-orange-100);

  --jp-error-color0: var(--md-red-700);
  --jp-error-color1: var(--md-red-500);
  --jp-error-color2: var(--md-red-300);
  --jp-error-color3: var(--md-red-100);

  --jp-success-color0: var(--md-green-700);
  --jp-success-color1: var(--md-green-500);
  --jp-success-color2: var(--md-green-300);
  --jp-success-color3: var(--md-green-100);

  --jp-info-color0: var(--md-cyan-700);
  --jp-info-color1: var(--md-cyan-500);
  --jp-info-color2: var(--md-cyan-300);
  --jp-info-color3: var(--md-cyan-100);

  /* Cell specific styles */

  --jp-cell-padding: 5px;

  --jp-cell-collapser-width: 8px;
  --jp-cell-collapser-min-height: 20px;
  --jp-cell-collapser-not-active-hover-opacity: 0.6;

  --jp-cell-editor-background: var(--md-grey-100);
  --jp-cell-editor-border-color: var(--md-grey-300);
  --jp-cell-editor-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-cell-editor-active-background: var(--jp-layout-color0);
  --jp-cell-editor-active-border-color: var(--jp-brand-color1);

  --jp-cell-prompt-width: 64px;
  --jp-cell-prompt-font-family: var(--jp-code-font-family-default);
  --jp-cell-prompt-letter-spacing: 0px;
  --jp-cell-prompt-opacity: 1;
  --jp-cell-prompt-not-active-opacity: 0.5;
  --jp-cell-prompt-not-active-font-color: var(--md-grey-700);
  /* A custom blend of MD grey and blue 600
   * See https://meyerweb.com/eric/tools/color-blend/#546E7A:1E88E5:5:hex */
  --jp-cell-inprompt-font-color: #307fc1;
  /* A custom blend of MD grey and orange 600
   * https://meyerweb.com/eric/tools/color-blend/#546E7A:F4511E:5:hex */
  --jp-cell-outprompt-font-color: #bf5b3d;

  /* Notebook specific styles */

  --jp-notebook-padding: 10px;
  --jp-notebook-select-background: var(--jp-layout-color1);
  --jp-notebook-multiselected-color: var(--md-blue-50);

  /* The scroll padding is calculated to fill enough space at the bottom of the
  notebook to show one single-line cell (with appropriate padding) at the top
  when the notebook is scrolled all the way to the bottom. We also subtract one
  pixel so that no scrollbar appears if we have just one single-line cell in the
  notebook. This padding is to enable a 'scroll past end' feature in a notebook.
  */
  --jp-notebook-scroll-padding: calc(
    100% - var(--jp-code-font-size) * var(--jp-code-line-height) -
      var(--jp-code-padding) - var(--jp-cell-padding) - 1px
  );

  /* Rendermime styles */

  --jp-rendermime-error-background: #fdd;
  --jp-rendermime-table-row-background: var(--md-grey-100);
  --jp-rendermime-table-row-hover-background: var(--md-light-blue-50);

  /* Dialog specific styles */

  --jp-dialog-background: rgba(0, 0, 0, 0.25);

  /* Console specific styles */

  --jp-console-padding: 10px;

  /* Toolbar specific styles */

  --jp-toolbar-border-color: var(--jp-border-color1);
  --jp-toolbar-micro-height: 8px;
  --jp-toolbar-background: var(--jp-layout-color1);
  --jp-toolbar-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.24);
  --jp-toolbar-header-margin: 4px 4px 0px 4px;
  --jp-toolbar-active-background: var(--md-grey-300);

  /* Input field styles */

  --jp-input-box-shadow: inset 0 0 2px var(--md-blue-300);
  --jp-input-active-background: var(--jp-layout-color1);
  --jp-input-hover-background: var(--jp-layout-color1);
  --jp-input-background: var(--md-grey-100);
  --jp-input-border-color: var(--jp-border-color1);
  --jp-input-active-border-color: var(--jp-brand-color1);
  --jp-input-active-box-shadow-color: rgba(19, 124, 189, 0.3);

  /* General editor styles */

  --jp-editor-selected-background: #d9d9d9;
  --jp-editor-selected-focused-background: #d7d4f0;
  --jp-editor-cursor-color: var(--jp-ui-font-color0);

  /* Code mirror specific styles */

  --jp-mirror-editor-keyword-color: #008000;
  --jp-mirror-editor-atom-color: #88f;
  --jp-mirror-editor-number-color: #080;
  --jp-mirror-editor-def-color: #00f;
  --jp-mirror-editor-variable-color: var(--md-grey-900);
  --jp-mirror-editor-variable-2-color: #05a;
  --jp-mirror-editor-variable-3-color: #085;
  --jp-mirror-editor-punctuation-color: #05a;
  --jp-mirror-editor-property-color: #05a;
  --jp-mirror-editor-operator-color: #aa22ff;
  --jp-mirror-editor-comment-color: #408080;
  --jp-mirror-editor-string-color: #ba2121;
  --jp-mirror-editor-string-2-color: #708;
  --jp-mirror-editor-meta-color: #aa22ff;
  --jp-mirror-editor-qualifier-color: #555;
  --jp-mirror-editor-builtin-color: #008000;
  --jp-mirror-editor-bracket-color: #997;
  --jp-mirror-editor-tag-color: #170;
  --jp-mirror-editor-attribute-color: #00c;
  --jp-mirror-editor-header-color: blue;
  --jp-mirror-editor-quote-color: #090;
  --jp-mirror-editor-link-color: #00c;
  --jp-mirror-editor-error-color: #f00;
  --jp-mirror-editor-hr-color: #999;

  /* Vega extension styles */

  --jp-vega-background: white;

  /* Sidebar-related styles */

  --jp-sidebar-min-width: 250px;

  /* Search-related styles */

  --jp-search-toggle-off-opacity: 0.5;
  --jp-search-toggle-hover-opacity: 0.8;
  --jp-search-toggle-on-opacity: 1;
  --jp-search-selected-match-background-color: rgb(245, 200, 0);
  --jp-search-selected-match-color: black;
  --jp-search-unselected-match-background-color: var(
    --jp-inverse-layout-color0
  );
  --jp-search-unselected-match-color: var(--jp-ui-inverse-font-color0);

  /* Icon colors that work well with light or dark backgrounds */
  --jp-icon-contrast-color0: var(--md-purple-600);
  --jp-icon-contrast-color1: var(--md-green-600);
  --jp-icon-contrast-color2: var(--md-pink-600);
  --jp-icon-contrast-color3: var(--md-blue-600);
}
</style>

<style type="text/css">
a.anchor-link {
   display: none;
}
.highlight  {
    margin: 0.4em;
}

/* Input area styling */
.jp-InputArea {
    overflow: hidden;
}

.jp-InputArea-editor {
    overflow: hidden;
}

@media print {
  body {
    margin: 0;
  }
}
</style>

<!-- Load mathjax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-MML-AM_CHTML-full,Safe"> </script>
    <!-- MathJax configuration -->
    <script type="text/x-mathjax-config">
    init_mathjax = function() {
        if (window.MathJax) {
        // MathJax loaded
            MathJax.Hub.Config({
                TeX: {
                    equationNumbers: {
                    autoNumber: "AMS",
                    useLabelIds: true
                    }
                },
                tex2jax: {
                    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
                    displayMath: [ ['$$','$$'], ["\\[","\\]"] ],
                    processEscapes: true,
                    processEnvironments: true
                },
                displayAlign: 'center',
                CommonHTML: {
                    linebreaks: { 
                    automatic: true 
                    }
                },
                "HTML-CSS": {
                    linebreaks: { 
                    automatic: true 
                    }
                }
            });
        
            MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
        }
    }
    init_mathjax();
    </script>
    <!-- End of mathjax configuration --></head>
<body class="jp-Notebook" data-jp-theme-light="true" data-jp-theme-name="JupyterLab Light">

<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Lecture-3-:-Scientific-computing-with-Python">Lecture 3 : Scientific computing with Python<a class="anchor-link" href="#Lecture-3-:-Scientific-computing-with-Python">&#182;</a></h1><p><em>November, 2021 - François HU</em></p>
<p><em>Master of Science in Artificial Intelligence Systems - EPITA</em></p>
<p><em>This lecture is available here: <a href="https://curiousml.github.io/">https://curiousml.github.io/</a></em></p>
<p><img src="data:image/png;base64,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" alt="image.png"></p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Table-of-contents">Table of contents<a class="anchor-link" href="#Table-of-contents">&#182;</a></h1><p><a href="#I">Introduction</a></p>
<ol>
<li><a href="#1">Introduction to NumPy</a></li>
<li><a href="#2">Python List VS NumPy Array</a></li>
<li><a href="#3">Array creation</a></li>
<li><a href="#4">Array modification</a></li>
<li><a href="#5">Indexing and slicing</a></li>
<li><a href="#6">Operation on arrays</a></li>
<li><a href="#7">Basic mathematics/statistics</a></li>
<li><a href="#8">[optional] Basic linear algebra</a></li>
</ol>
<p><a href="#E">Exercices</a></p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Introduction-">Introduction <a name="I" /><a class="anchor-link" href="#Introduction-">&#182;</a></h1><p>So far we have seen (almost) only built-in python objects. Let us now study some <strong>external packages</strong>: by providing additional tools, these packages can be seen as an "extention" of Python to specific domains such as software engineering, scientific computing, statistics or data science.</p>
<p>The present lecture is about scientific computing with python. In a nutshell, this course is centered on exploring the package <a href="https://numpy.org/">NumPy</a> that provides both array manipulation tools for python and a collection of modules for various mathematical purposes.</p>
<p><strong>How to install a python package in <a href="https://curiousml.github.io/teaching/install_python.html">Ananconda</a>?</strong> You have access to pip and conda for installing packages from <a href="https://pypi.org/">The Python Package Index</a> (PyPI) a repository of software for the Python programming language. For example let us install the package <code>NumPy</code>:</p>
<ol>
<li>Open the anaconda prompt</li>
<li>the following command can be used to install any Python package from <a href="https://pypi.org/">PyPI</a> in Anaconda :
<pre><code>pip install package_name</code></pre>
In order to install numpy, replace <code>package_name</code> by <code>numpy</code></li>
</ol>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="1.-Introduction-to-NumPy-">1. Introduction to NumPy <a name="1" /><a class="anchor-link" href="#1.-Introduction-to-NumPy-">&#182;</a></h2><p>NumPy (can be written as numpy) is the core library for scientific computing in Python. This package provides</p>
<ul>
<li>a high-performance multidimensional array object, </li>
<li>tools for working with these arrays, including some fast operations on arrays</li>
<li>and some (basic) mathematical functions such as <code>cos</code>, <code>sin</code>, <code>exp</code>, ...</li>
</ul>
<p>A numpy array is a collection of items, all of the same type. As a recall, the Python core library provided Lists. A list is the Python equivalent of an array, but is resizeable and can contain elements of different types. We can find some similiraties with these two data types:</p>
<ul>
<li><p>Both are <strong>ordered</strong> collection of items (although in numpy array items must have the same data types);</p>
</li>
<li><p>Both are enclosed in <strong>[] brackets</strong>;</p>
</li>
<li><p>Both are <strong>mutable</strong>;</p>
</li>
<li><p>Both can be used for <strong>indexing</strong> and <strong>slicing</strong> operations;</p>
</li>
</ul>
<p><strong>Then why do we need bother studying numpy array ? Why not using the list instead ?</strong> The answer is performance.</p>
<h2 id="2.-Python-List-VS-NumPy-Array-">2. Python List VS NumPy Array <a name="2" /><a class="anchor-link" href="#2.-Python-List-VS-NumPy-Array-">&#182;</a></h2><ul>
<li><p>Numpy array outperform the lists in terms of <strong>time</strong> (faster) and <strong>memory</strong> (take up less space) <strong>complexity</strong>;</p>
</li>
<li><p>the package numpy has optimized functions such as <strong>linear algebra operations</strong> built in;</p>
</li>
<li><p>an array has a fixed size (definition at creation) while a list can grow dynamically;</p>
</li>
<li><p>convenient to use for scientists as methods for arrays are <strong>scientific oriented</strong>;</p>
</li>
<li><p>For <strong>appending an item</strong> into the collection, Python List is however faster than NumPy Array (O(1) VS O(N))</p>
</li>
</ul>
<p><strong>Remark:</strong> NumPy Arrays are recommended when working with longer sequences of homogenous data.</p>
<p>The following sections provide an introduction to NumPy.</p>
<p>Let us first import the package numpy and let us rename it as <code>np</code></p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="3.-Array-creation-">3. Array creation <a name="3" /><a class="anchor-link" href="#3.-Array-creation-">&#182;</a></h2><h3 id="From-an-existing-list">From an existing list<a class="anchor-link" href="#From-an-existing-list">&#182;</a></h3><p>you can transform a <strong>list into an array</strong> (and vice-versa) thanks to the function <code>array</code> of numpy.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[2]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># a list of lists</span>
<span class="n">lst</span> <span class="o">=</span> <span class="p">[[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">],</span> 
       <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">20</span><span class="p">],</span> 
       <span class="p">[</span><span class="mi">100</span><span class="p">,</span> <span class="mi">1</span><span class="p">]]</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[3]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">(</span><span class="n">lst</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[  1   1]
 [  2  20]
 [100   1]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[4]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># also true for empty list</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([]))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="From-numpy-routines">From numpy routines<a class="anchor-link" href="#From-numpy-routines">&#182;</a></h3><p>One can also use some numy functions to create a numpy array with existing items (these items could be modified later). see the documentation for further details on the parameters.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>function <code>arange</code> which is quite similar to the built-in iterator <code>range</code>;</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[5]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">15</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[5]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>function <code>zeros</code> or <code>ones</code></li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[6]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">zeros</span><span class="p">((</span><span class="mi">5</span><span class="p">,</span> <span class="mi">2</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[6]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[0., 0.],
       [0., 0.],
       [0., 0.],
       [0., 0.],
       [0., 0.]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[7]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">ones</span><span class="p">((</span><span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[7]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[1., 1., 1., 1., 1.],
       [1., 1., 1., 1., 1.]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>other useful functions</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[8]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">eye</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[8]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[1., 0., 0., 0.],
       [0., 1., 0., 0.],
       [0., 0., 1., 0.],
       [0., 0., 0., 1.]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[9]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">diag</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">0</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[9]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 0]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[10]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">num</span><span class="o">=</span><span class="mi">9</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[10]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.   , 0.125, 0.25 , 0.375, 0.5  , 0.625, 0.75 , 0.875, 1.   ])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can also generate random values (of an array) with the sub module <code>random</code> of numpy:</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[11]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">type</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[11]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>module</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>random number between 0 (included) and 1 (excluded)</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[12]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">rand</span><span class="p">()</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[12]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>0.7949203786952924</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>multidimensional array with random values (all between 0 and 1):</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[13]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">rand</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[13]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([0.16332313, 0.37710931, 0.84774113])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[14]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">rand</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[14]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[0.78032709, 0.7271365 ],
       [0.34825408, 0.69350509],
       [0.97139169, 0.223825  ]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[15]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">rand</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[15]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[[0.3268954 , 0.39457184],
        [0.02758824, 0.8967342 ]],

       [[0.2443677 , 0.94021388],
        [0.97782996, 0.6786243 ]],

       [[0.40892151, 0.05205611],
        [0.87319043, 0.60872028]]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>multidimensional array with random integers betweeen <code>low</code> (inclusive) and <code>high</code> (exclusive)</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[16]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="n">low</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="n">high</span><span class="o">=</span><span class="mi">10</span><span class="p">,</span> <span class="n">size</span><span class="o">=</span><span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[16]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[1, 9, 9],
       [9, 0, 3]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[17]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># an alternative way</span>
<span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[17]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[9, 3, 7],
       [7, 4, 3]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>If we want to regenerate the same random values, we have to set the random seed of the numpy pseudo-random number generator.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[18]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># without setting the seed</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[8 3 7 3 8]
[4 1 9 0 0]
[8 8 5 2 1]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[19]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># with constant seed</span>
<span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">seed</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span> <span class="c1"># we can use other number</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>

<span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">seed</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>

<span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">seed</span><span class="p">(</span><span class="mi">4</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">5</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[7 5 1 8 7]
[7 5 1 8 7]
[7 5 1 8 7]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Information-about-an-array-object">Information about an array object<a class="anchor-link" href="#Information-about-an-array-object">&#182;</a></h3><p>These functions create an array object. After its initialization, it has some useful attributes</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>ndim</code>, the number of dimensions</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[20]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="o">.</span><span class="n">ndim</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[20]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>2</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>shape</code>, the shape (or dimension)</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[21]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="o">.</span><span class="n">shape</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[21]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>(3, 2)</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>size</code>, total number of items</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[22]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="o">.</span><span class="n">size</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[22]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>6</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p><code>dtype</code> the type of items</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[23]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="o">.</span><span class="n">dtype</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[23]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>dtype(&#39;int64&#39;)</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="4.-Array-modification-">4. Array modification <a name="4" /><a class="anchor-link" href="#4.-Array-modification-">&#182;</a></h2><h3 id="Shape-modification">Shape modification<a class="anchor-link" href="#Shape-modification">&#182;</a></h3><p>After its creation, you can <strong>modify its shape</strong> with many methods of array. One of the most popular is <code>resize</code>.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[24]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">A</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">12</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ 0  1  2  3  4  5  6  7  8  9 10 11]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[25]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">A</span><span class="o">.</span><span class="n">resize</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="mi">3</span><span class="p">)</span> <span class="c1"># inplace operation</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[26]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[27]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">A</span><span class="o">.</span><span class="n">ravel</span><span class="p">()</span>  <span class="c1"># not inplace operation</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[27]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[28]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">A</span><span class="o">.</span><span class="n">resize</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span><span class="mi">3</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>if one want to "resize" or "ravel" an array object without modifying it but creating a copy, there are methods <code>reshape</code> and <code>flatten</code>.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[29]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># our toy example</span>
<span class="n">B</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">15</span><span class="p">)</span>
<span class="n">B</span><span class="o">.</span><span class="n">resize</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[30]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span><span class="mi">3</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]
 [12 13 14]]
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[31]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="o">.</span><span class="n">flatten</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14]
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>Note that when we <code>reshape</code> an array object, we can omit one dimension (and replace the value by <code>-1</code>) and let the method compute the value of it.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[32]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">3</span><span class="p">))</span> <span class="c1"># instead of B.reshape(5,3)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]
 [12 13 14]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can also transpose an array using the attribute <code>T</code></p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[33]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="o">.</span><span class="n">T</span><span class="p">)</span> <span class="c1"># instead of B.reshape(-1,3)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
[[ 0  5 10]
 [ 1  6 11]
 [ 2  7 12]
 [ 3  8 13]
 [ 4  9 14]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Repetition-and-concatenation">Repetition and concatenation<a class="anchor-link" href="#Repetition-and-concatenation">&#182;</a></h3><p>Arrays can also be <strong>repeated</strong> and <strong>concatenated</strong>. Let us recall <code>A</code> and <code>B</code> previously created</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[34]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="nb">print</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0  1  2]
 [ 3  4  5]
 [ 6  7  8]
 [ 9 10 11]]
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[35]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="n">C1</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">ones</span><span class="p">((</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span>
<span class="n">C2</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">ones</span><span class="p">((</span><span class="mi">3</span><span class="p">,</span> <span class="mi">2</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">C1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">C2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[1. 1. 1.]
 [1. 1. 1.]]
[[1. 1.]
 [1. 1.]
 [1. 1.]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[36]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">tile</span><span class="p">(</span><span class="n">A</span><span class="p">,</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span>  <span class="c1"># 2 repetitions in line, 3 in column</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[36]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ 0,  1,  2,  0,  1,  2,  0,  1,  2],
       [ 3,  4,  5,  3,  4,  5,  3,  4,  5],
       [ 6,  7,  8,  6,  7,  8,  6,  7,  8],
       [ 9, 10, 11,  9, 10, 11,  9, 10, 11],
       [ 0,  1,  2,  0,  1,  2,  0,  1,  2],
       [ 3,  4,  5,  3,  4,  5,  3,  4,  5],
       [ 6,  7,  8,  6,  7,  8,  6,  7,  8],
       [ 9, 10, 11,  9, 10, 11,  9, 10, 11]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[37]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">concatenate</span><span class="p">((</span><span class="n">A</span><span class="p">,</span> <span class="n">C1</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[37]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ 0.,  1.,  2.],
       [ 3.,  4.,  5.],
       [ 6.,  7.,  8.],
       [ 9., 10., 11.],
       [ 1.,  1.,  1.],
       [ 1.,  1.,  1.]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[38]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">concatenate</span><span class="p">((</span><span class="n">B</span><span class="p">,</span> <span class="n">C2</span><span class="p">),</span> <span class="n">axis</span> <span class="o">=</span> <span class="mi">1</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[38]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ 0.,  1.,  2.,  3.,  4.,  1.,  1.],
       [ 5.,  6.,  7.,  8.,  9.,  1.,  1.],
       [10., 11., 12., 13., 14.,  1.,  1.]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>These last two operations can also be done by stacking arrays vertically or horizontally.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[39]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">vstack</span><span class="p">((</span><span class="n">A</span><span class="p">,</span> <span class="n">C1</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[39]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ 0.,  1.,  2.],
       [ 3.,  4.,  5.],
       [ 6.,  7.,  8.],
       [ 9., 10., 11.],
       [ 1.,  1.,  1.],
       [ 1.,  1.,  1.]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[40]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">np</span><span class="o">.</span><span class="n">hstack</span><span class="p">((</span><span class="n">B</span><span class="p">,</span> <span class="n">C2</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[40]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ 0.,  1.,  2.,  3.,  4.,  1.,  1.],
       [ 5.,  6.,  7.,  8.,  9.,  1.,  1.],
       [10., 11., 12., 13., 14.,  1.,  1.]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="5.-Indexing-and-slicing-">5. Indexing and slicing <a name="5" /><a class="anchor-link" href="#5.-Indexing-and-slicing-">&#182;</a></h2><p>As a list, array object can be indexed, sliced and iterated over.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Basic-indexing,-slicing-and-iterating">Basic indexing, slicing and iterating<a class="anchor-link" href="#Basic-indexing,-slicing-and-iterating">&#182;</a></h3>
</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>In 1D array</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[41]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="mi">10</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[72 50  9 58 94 55 55 57 36 50]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[42]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># indexing</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">])</span> <span class="c1"># print the first item (index 0) of the array</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span> <span class="c1"># print the last item of the array</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">4</span><span class="p">])</span> <span class="c1"># print the 5th item (index 4) of the array</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>72
50
94
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[43]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># slicing</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">:</span><span class="mi">6</span><span class="p">])</span> <span class="c1"># print the items between index 1 and index 6 (excluded) of the list l</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">:])</span> <span class="c1"># print the items beginning at index 1 till the last items of the list l</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">:</span><span class="mi">6</span><span class="p">:</span><span class="mi">2</span><span class="p">])</span> <span class="c1"># print the items between index 1 and index 6 (excluded) of the list l spaced by the 2 steps</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[::</span><span class="o">-</span><span class="mi">1</span><span class="p">])</span> <span class="c1"># reverse the list</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[50  9 58 94 55]
[50  9 58 94 55 55 57 36 50]
[50 58 55]
[50 36 57 55 55 94 58  9 50 72]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[44]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># assign some items by specifying the indices</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span> <span class="c1"># old list</span>
<span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span> <span class="c1"># new list</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[72 50  9 58 94 55 55 57 36 50]
[-1 50  9 58 94 55 55 57 36 50]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[45]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="p">[</span><span class="mi">3</span><span class="p">:</span><span class="mi">5</span><span class="p">]</span> <span class="o">=</span> <span class="p">[</span><span class="o">-</span><span class="mi">2</span><span class="p">,</span> <span class="o">-</span><span class="mi">3</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[-1 50  9 -2 -3 55 55 57 36 50]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[46]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># iterate over the array</span>
<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="n">num</span><span class="o">=</span><span class="mi">5</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="n">i</span><span class="o">**</span><span class="mi">2</span><span class="p">,</span> <span class="n">end</span><span class="o">=</span><span class="s2">&quot;</span><span class="se">\t</span><span class="s2">&quot;</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>0.0	0.0625	0.25	0.5625	1.0	</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>In 2D array or more</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[47]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[44 38 52  3]
 [ 0 55 21 21]
 [73 38 56 66]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>like lists, the first item of the array corresponds to the first row</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[48]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[48]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([44, 38, 52,  3])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>like lists, the items in the grid can be accessed by</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[49]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">]</span> <span class="c1"># item in the first row (index 0) and second column (index 1)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[49]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>38</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>alternatively, in numpy arrays we can use</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[50]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">]</span> <span class="c1"># recommended for arrays!</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[50]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>38</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[51]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># indexing in 2D</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">1</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="o">-</span><span class="mi">1</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>38
21
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[52]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># slicing in 2D</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[:</span><span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">:</span><span class="mi">3</span><span class="p">])</span> <span class="c1"># `:2` all items from the first index (0) to index 2</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">:,</span> <span class="p">:</span><span class="mi">2</span><span class="p">])</span>  <span class="c1">#`1:` all items from index 1 to the last index; </span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="mi">1</span><span class="p">:</span><span class="mi">6</span><span class="p">:</span><span class="mi">2</span><span class="p">,</span> <span class="p">:])</span> <span class="c1"># `:` means all</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[::</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="p">:</span><span class="mi">2</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[38 52]
 [55 21]]
[[ 0 55]
 [73 38]]
[[ 0 55 21 21]]
[[73 38]
 [ 0 55]
 [44 38]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Advanced-indexing-with-Arrays">Advanced indexing with Arrays<a class="anchor-link" href="#Advanced-indexing-with-Arrays">&#182;</a></h3><p>There are two fancy way to index/slice your numpy array:</p>
<ol>
<li>specify the wanted indices <strong>with lists (or arrays)</strong></li>
<li>request the wanted indices <strong>with booleans (in this context a.k.a masks)</strong></li>
</ol>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[53]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[46 30  8 49 66 58]
 [87 32 40 42 45 33]
 [32 28  3 79 98 95]
 [57 50 17 81 89 73]
 [59 48 76 23 94 22]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol>
<li><strong>with lists</strong></li>
</ol>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[54]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">ind_row</span> <span class="o">=</span> <span class="p">[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">]</span>
<span class="n">ind_col</span> <span class="o">=</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">1</span><span class="p">]</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;first extract:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="n">ind_row</span><span class="p">,</span> <span class="p">:])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;second extract:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[:,</span> <span class="n">ind_col</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;third extract:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="n">ind_row</span><span class="p">,</span> <span class="n">ind_col</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>first extract:
[[46 30  8 49 66 58]
 [32 28  3 79 98 95]
 [59 48 76 23 94 22]]
second extract:
[[ 8 58 30]
 [40 33 32]
 [ 3 95 28]
 [17 73 50]
 [76 22 48]]
third extract:
[ 8 95 48]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[55]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># same as arr[ind_row, ind_col]</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[[</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">],</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">1</span><span class="p">]])</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">0</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">4</span><span class="p">]),</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">2</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">1</span><span class="p">])])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ 8 95 48]
[ 8 95 48]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ol>
<li><strong>with booleans</strong></li>
</ol>
<p>In numpy array, it is possible to compare a numpy array with a scalar (integer for example).</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[56]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span> <span class="o">&gt;</span> <span class="mi">30</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[56]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ True, False, False,  True,  True,  True],
       [ True,  True,  True,  True,  True,  True],
       [ True, False, False,  True,  True,  True],
       [ True,  True, False,  True,  True,  True],
       [ True,  True,  True, False,  True, False]])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>We can consider these values as a mask:</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[57]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># let&#39;s save it as indexes</span>
<span class="n">ind</span> <span class="o">=</span> <span class="p">(</span><span class="n">arr</span> <span class="o">&gt;</span> <span class="mi">30</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[58]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># extract items with values &gt; 30</span>
<span class="n">arr</span><span class="p">[</span><span class="n">ind</span><span class="p">]</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[58]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([46, 49, 66, 58, 87, 32, 40, 42, 45, 33, 32, 79, 98, 95, 57, 50, 81,
       89, 73, 59, 48, 76, 94])</pre>
</div>

</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>This method is quite useful for assignments</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[59]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">arr</span> <span class="o">&gt;</span> <span class="mi">30</span> 
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt">Out[59]:</div>




<div class="jp-RenderedText jp-OutputArea-output jp-OutputArea-executeResult" data-mime-type="text/plain">
<pre>array([[ True, False, False,  True,  True,  True],
       [ True,  True,  True,  True,  True,  True],
       [ True, False, False,  True,  True,  True],
       [ True,  True, False,  True,  True,  True],
       [ True,  True,  True, False,  True, False]])</pre>
</div>

</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[60]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
<span class="n">arr</span><span class="p">[</span><span class="n">arr</span> <span class="o">&gt;</span> <span class="mi">30</span><span class="p">]</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[46 30  8 49 66 58]
 [87 32 40 42 45 33]
 [32 28  3 79 98 95]
 [57 50 17 81 89 73]
 [59 48 76 23 94 22]]
[[-1 30  8 -1 -1 -1]
 [-1 -1 -1 -1 -1 -1]
 [-1 28  3 -1 -1 -1]
 [-1 -1 17 -1 -1 -1]
 [-1 -1 -1 23 -1 22]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p><strong>Useful numpy methods:</strong> <code>where</code>, <code>any</code> all <code>all</code></p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[87]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">100</span><span class="p">,</span> <span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">6</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[96 67 53 22 17 27]
 [97 60 43 86 15 13]
 [ 0 10  7 63 79 59]
 [52 52 64 87 97 46]
 [42 49 31 35 30 65]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[92]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Test if a line has at least one value less than 15</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">any</span><span class="p">(</span><span class="n">arr</span> <span class="o">&lt;</span> <span class="mi">15</span><span class="p">,</span> <span class="n">axis</span><span class="o">=</span><span class="mi">0</span><span class="p">))</span>  
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ True  True  True False False  True]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[93]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Indices where arr is less than 15</span>
<span class="n">indx</span><span class="p">,</span> <span class="n">indy</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">where</span><span class="p">(</span><span class="n">arr</span> <span class="o">&lt;</span> <span class="mi">15</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">indx</span><span class="p">,</span> <span class="n">indy</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[1 2 2 2] [5 0 1 2]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[94]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">[</span><span class="n">indx</span><span class="p">,</span> <span class="n">indy</span><span class="p">])</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[13  0 10  7]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="6.-Operation-on-arrays-">6. Operation on arrays <a name="6" /><a class="anchor-link" href="#6.-Operation-on-arrays-">&#182;</a></h2><p>In numpy, operations on arrays are elementwise. The result is returned in a new array.</p>
<h3 id="Basic-operations">Basic operations<a class="anchor-link" href="#Basic-operations">&#182;</a></h3>
</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>between two arrays (of same size)</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[64]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="c1"># arr1 and arr2 must be the same size</span>
<span class="n">arr1</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>
<span class="n">arr2</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;operations:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">+</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">*</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">**</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">/</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">%</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">&lt;=</span> <span class="n">arr2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ 1  4  7 10 13]
[1 3 5 7 9]
operations:
[ 2  7 12 17 22]
[  1  12  35  70 117]
[          1          64       16807    10000000 10604499373]
[1.         1.33333333 1.4        1.42857143 1.44444444]
[0 1 2 3 4]
[ True False False False False]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>between an array and a value</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[65]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">15</span><span class="p">,</span> <span class="mi">3</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;operations:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">+</span> <span class="mi">2</span><span class="p">)</span> <span class="c1"># different from list ! for a list we have an ERROR</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">*</span> <span class="mi">2</span><span class="p">)</span> <span class="c1"># different from list ! for a list we duplicate the list</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">**</span> <span class="mi">2</span><span class="p">)</span> <span class="c1"># different from list ! for a list we have an ERROR</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">/</span> <span class="mi">2</span><span class="p">)</span> <span class="c1"># different from list ! for a list we have an ERROR</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">%</span> <span class="mi">2</span><span class="p">)</span> <span class="c1"># different from list ! for a list we have an ERROR</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span> <span class="o">&lt;=</span> <span class="mi">5</span><span class="p">)</span> <span class="c1"># different from list ! for a list we have an ERROR</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[ 1  4  7 10 13]
operations:
[ 3  6  9 12 15]
[ 2  8 14 20 26]
[  1  16  49 100 169]
[0.5 2.  3.5 5.  6.5]
[1 0 1 0 1]
[ True  True False False False]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<p>This approach is called <strong>broadcasting</strong>.</p>

</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Broadcasting">Broadcasting<a class="anchor-link" href="#Broadcasting">&#182;</a></h3><p>One of the most advanced feature of numpy array is <strong>broadcasting</strong>: the possibilty to do operations with arrays of different shapes with fast implementations.</p>
<p>The main rule of broadcasting is that the dimensions of two arrays are compatible when:</p>
<ol>
<li>they are equal;</li>
<li>one of them is 1;</li>
<li>one of them is a value/scalar (see above).
In the second case, numpy operates as though the items in the axis of dimension 1 were identically repeated to meet the dimension of the other array.</li>
</ol>
<p><strong>Example for the following arrays:</strong></p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[66]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="n">arr1</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">randint</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="mi">10</span><span class="p">,</span> <span class="p">(</span><span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">))</span> <span class="c1"># two dimensions</span>
<span class="n">arr2</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span> <span class="c1"># one dimension</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[3 7 8]
 [2 6 7]]
[1 2 3]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[67]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;brodcasting:&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">+</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">-</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">*</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">**</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">/</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">%</span> <span class="n">arr2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr1</span> <span class="o">&lt;=</span> <span class="n">arr2</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>brodcasting:
[[ 4  9 11]
 [ 3  8 10]]
[[2 5 5]
 [1 4 4]]
[[ 3 14 24]
 [ 2 12 21]]
[[  3  49 512]
 [  2  36 343]]
[[3.         3.5        2.66666667]
 [2.         3.         2.33333333]]
[[0 1 2]
 [0 0 1]]
[[False False False]
 [False False False]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="7.-Basic-mathematics/statistics-">7. Basic mathematics/statistics <a name="7" /><a class="anchor-link" href="#7.-Basic-mathematics/statistics-">&#182;</a></h2><p>As stated in the introduction, a major feature of numpy is to provide mathematical methods with fast implementations.</p>
<h3 id="Operations">Operations<a class="anchor-link" href="#Operations">&#182;</a></h3>
</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[68]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[1 2 3 4]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>basic operations: <code>sum</code>, <code>prod</code>and <code>cumsum</code></li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[69]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">sum</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">prod</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">cumsum</span><span class="p">())</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>10
24
[ 1  3  6 10]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>mean</code> and <code>std</code></li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[70]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">mean</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">std</span><span class="p">())</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>2.5
1.118033988749895
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>min</code> and <code>max</code></li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[71]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">min</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">max</span><span class="p">())</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>1
4
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li><code>argmin</code> and <code>argmax</code></li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[72]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">argmin</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">argmax</span><span class="p">())</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>0
3
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>useful tip: sorting is simple with python</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[73]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">u</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">array</span><span class="p">([</span><span class="mi">4</span><span class="p">,</span> <span class="mi">3</span><span class="p">,</span> <span class="mi">6</span><span class="p">,</span> <span class="mi">5</span><span class="p">,</span> <span class="mi">9</span><span class="p">])</span>
<span class="n">u</span><span class="o">.</span><span class="n">sort</span><span class="p">()</span>  <span class="c1"># Sorting is an inplace operation</span>
<span class="nb">print</span><span class="p">(</span><span class="n">u</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[3 4 5 6 9]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<ul>
<li>We note that for multidimensional array, we can specify the axis of operation</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[74]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy example</span>
<span class="n">arr</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="mi">13</span><span class="p">)</span><span class="o">.</span><span class="n">reshape</span><span class="p">(</span><span class="mi">3</span><span class="p">,</span> <span class="mi">4</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 1  2  3  4]
 [ 5  6  7  8]
 [ 9 10 11 12]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[75]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;operations for axis 0&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">sum</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">0</span><span class="p">))</span> <span class="c1"># Axis or axes along which a sum is performed.</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">prod</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">0</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">cumsum</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">0</span><span class="p">),</span> <span class="n">end</span><span class="o">=</span><span class="s2">&quot;</span><span class="se">\n\n</span><span class="s2">&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;operations for axis 1&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">mean</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">std</span><span class="p">(</span><span class="n">axis</span><span class="o">=</span><span class="mi">1</span><span class="p">),</span> <span class="n">end</span><span class="o">=</span><span class="s2">&quot;</span><span class="se">\n\n</span><span class="s2">&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;operations on all items of the array&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">min</span><span class="p">())</span>
<span class="nb">print</span><span class="p">(</span><span class="n">arr</span><span class="o">.</span><span class="n">max</span><span class="p">())</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>operations for axis 0
[15 18 21 24]
[ 45 120 231 384]
[[ 1  2  3  4]
 [ 6  8 10 12]
 [15 18 21 24]]

operations for axis 1
[ 2.5  6.5 10.5]
[1.11803399 1.11803399 1.11803399]

operations on all items of the array
1
12
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h3 id="Mathematical-functions">Mathematical functions<a class="anchor-link" href="#Mathematical-functions">&#182;</a></h3><p>Numpy provides some functions like <code>cos</code>, <code>sin</code>, <code>exp</code> or <code>log</code> (see <a href="https://numpy.org/doc/stable/reference/ufuncs.html#ufunc">Universal functions</a> for more built-in functions). It also provides constants such as $\pi$.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[76]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">x</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linspace</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="n">np</span><span class="o">.</span><span class="n">pi</span><span class="o">/</span><span class="mi">2</span><span class="p">,</span> <span class="n">num</span><span class="o">=</span><span class="mi">4</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">x</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">cos</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">sin</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">exp</span><span class="p">(</span><span class="n">x</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[0.         0.52359878 1.04719755 1.57079633]
[1.00000000e+00 8.66025404e-01 5.00000000e-01 6.12323400e-17]
[0.        0.5       0.8660254 1.       ]
[1.         1.68809179 2.84965391 4.81047738]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="8.-%5Boptional%5D-Basic-linear-algebra-">8. [optional] Basic linear algebra <a name="8" /><a class="anchor-link" href="#8.-%5Boptional%5D-Basic-linear-algebra-">&#182;</a></h2><p>As stated before, numpy provides many efficient <a href="https://numpy.org/doc/stable/reference/routines.linalg.html">linear algebra</a> operations. <strong>Fun fact</strong>: numpy has built-in Matrix object but users generally prefer to handle arrays with routines from linear algebra. Some examples are provided below:</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[77]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># toy examples</span>
<span class="n">u</span> <span class="o">=</span> <span class="mi">2</span> <span class="o">*</span> <span class="n">np</span><span class="o">.</span><span class="n">ones</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>
<span class="n">v</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">arange</span><span class="p">(</span><span class="mi">5</span><span class="p">)</span>
<span class="n">A</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">diag</span><span class="p">([</span><span class="mf">0.3</span><span class="p">,</span> <span class="o">-</span><span class="mf">0.3</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="n">u</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">v</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">A</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[2. 2. 2. 2. 2.]
[0 1 2 3 4]
[[ 0.3  0.   0.   0.   0. ]
 [ 0.  -0.3  0.   0.   0. ]
 [ 0.   0.   1.   0.   0. ]
 [ 0.   0.   0.   2.   0. ]
 [ 0.   0.   0.   0.   3. ]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[78]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># dot product</span>
<span class="nb">print</span><span class="p">(</span><span class="n">u</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">v</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>20.0
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[79]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># outer product</span>
<span class="n">B</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">outer</span><span class="p">(</span><span class="n">u</span><span class="p">,</span> <span class="n">v</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[0. 2. 4. 6. 8.]
 [0. 2. 4. 6. 8.]
 [0. 2. 4. 6. 8.]
 [0. 2. 4. 6. 8.]
 [0. 2. 4. 6. 8.]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[80]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Matrix product, different from A*B !</span>
<span class="n">C</span> <span class="o">=</span> <span class="n">A</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">B</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">C</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0.   0.6  1.2  1.8  2.4]
 [ 0.  -0.6 -1.2 -1.8 -2.4]
 [ 0.   2.   4.   6.   8. ]
 [ 0.   4.   8.  12.  16. ]
 [ 0.   6.  12.  18.  24. ]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[81]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># transpose of C</span>
<span class="nb">print</span><span class="p">(</span><span class="n">C</span><span class="o">.</span><span class="n">T</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[ 0.   0.   0.   0.   0. ]
 [ 0.6 -0.6  2.   4.   6. ]
 [ 1.2 -1.2  4.   8.  12. ]
 [ 1.8 -1.8  6.  12.  18. ]
 [ 2.4 -2.4  8.  16.  24. ]]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[82]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Toy example C</span>
<span class="n">C</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">random</span><span class="o">.</span><span class="n">rand</span><span class="p">(</span><span class="mi">5</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
<span class="n">C</span> <span class="o">=</span> <span class="n">C</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">C</span><span class="o">.</span><span class="n">T</span><span class="p">)</span> <span class="c1"># for the sake of the lecture we include this step in order to ensure that the inverse exist</span>
</pre></div>

     </div>
</div>
</div>
</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[83]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># Eigenvalues of C</span>
<span class="nb">print</span><span class="p">(</span><span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">eigvals</span><span class="p">(</span><span class="n">C</span><span class="p">))</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[7.08705859e+00 8.73156145e-01 5.05139841e-01 4.36313066e-03
 2.61068922e-02]
</pre>
</div>
</div>

</div>

</div>

</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell   ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[84]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># inverse of C</span>
<span class="n">invC</span> <span class="o">=</span> <span class="n">np</span><span class="o">.</span><span class="n">linalg</span><span class="o">.</span><span class="n">inv</span><span class="p">(</span><span class="n">C</span><span class="p">)</span>
<span class="n">I</span> <span class="o">=</span> <span class="n">invC</span><span class="o">.</span><span class="n">dot</span><span class="p">(</span><span class="n">C</span><span class="p">)</span>
<span class="n">I</span><span class="p">[</span><span class="n">I</span> <span class="o">&lt;</span> <span class="mf">1e-10</span><span class="p">]</span> <span class="o">=</span> <span class="mi">0</span>  <span class="c1"># Erase numerical errors before printing</span>

<span class="nb">print</span><span class="p">(</span><span class="n">I</span><span class="p">)</span>
</pre></div>

     </div>
</div>
</div>
</div>

<div class="jp-Cell-outputWrapper">


<div class="jp-OutputArea jp-Cell-outputArea">

<div class="jp-OutputArea-child">

    
    <div class="jp-OutputPrompt jp-OutputArea-prompt"></div>


<div class="jp-RenderedText jp-OutputArea-output" data-mime-type="text/plain">
<pre>[[1. 0. 0. 0. 0.]
 [0. 1. 0. 0. 0.]
 [0. 0. 1. 0. 0.]
 [0. 0. 0. 1. 0.]
 [0. 0. 0. 0. 1.]]
</pre>
</div>
</div>

</div>

</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h1 id="Exercices-">Exercices <a name="E" /><a class="anchor-link" href="#Exercices-">&#182;</a></h1>
</div>
</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Exercice-1.">Exercice 1.<a class="anchor-link" href="#Exercice-1.">&#182;</a></h2><p>Generate the following arrays thanks to numpy methods and <strong>without explicit loops</strong> and <strong>without manually fill in all the numbers</strong> (let us name them respectively <code>arr1</code>, <code>arr2</code> and <code>arr3</code>):</p>

<pre><code>[[ 0  4  8 12 16]
 [ 1  5  9 13 17]
 [ 2  6 10 14 18]
 [ 3  7 11 15 19]]</code></pre>

<pre><code>[[ 0  1  4  9 16]
 [ 1  4  9 16 25]
 [ 4  9 16 25 36]
 [ 9 16 25 36 49]]</code></pre>

<pre><code>[[0 1 0 1 0 1]
 [1 0 1 0 1 0]
 [0 1 0 1 0 1]
 [1 0 1 0 1 0]
 [0 1 0 1 0 1]
 [1 0 1 0 1 0]]</code></pre>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="%5Boptional%5D-Exercice-2.">[optional] Exercice 2.<a class="anchor-link" href="#%5Boptional%5D-Exercice-2.">&#182;</a></h2><p>Standardize each array (<code>arr1</code>, <code>arr2</code> and <code>arr3</code>) such that for each array:</p>
<ul>
<li>the mean of each column is $0$ </li>
<li>and the standard deviation of each column is $1$.</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Exercice-3.">Exercice 3.<a class="anchor-link" href="#Exercice-3.">&#182;</a></h2><p>From <code>arr1</code> extract the submatrix:</p>

<pre><code>[[ 6 18 10]
 [ 7 19 11]
 [ 5 17 9]]</code></pre>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Exercice-4.">Exercice 4.<a class="anchor-link" href="#Exercice-4.">&#182;</a></h2><p>Replace all the items with value 0 of <code>arr3</code> by -1</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="Exercice-4-bis">Exercice 4 bis<a class="anchor-link" href="#Exercice-4-bis">&#182;</a></h2><p>Create a random vector of size 20 (all values between $[0, 1)$) and replace:</p>
<ul>
<li>the maximum value by $-1$ </li>
<li>and the second maximum value by $-2$</li>
</ul>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
<div class="jp-Cell-inputWrapper"><div class="jp-InputPrompt jp-InputArea-prompt">
</div><div class="jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput " data-mime-type="text/markdown">
<h2 id="%5Boptional%5D-Exercice-5.">[optional] Exercice 5.<a class="anchor-link" href="#%5Boptional%5D-Exercice-5.">&#182;</a></h2><p>Let $A$ be a matrix and $b$ be a vector defined by:</p>

<pre><code>&gt;&gt;&gt; V = np.random.rand(3, 3)
&gt;&gt;&gt; A = V + V.T
&gt;&gt;&gt; b = np.random.rand(3)

</code></pre>
<p>Solve the linear system $Ax = b$.</p>

</div>
</div><div class="jp-Cell jp-CodeCell jp-Notebook-cell jp-mod-noOutputs  ">
<div class="jp-Cell-inputWrapper">
<div class="jp-InputArea jp-Cell-inputArea">
<div class="jp-InputPrompt jp-InputArea-prompt">In&nbsp;[&nbsp;]:</div>
<div class="jp-CodeMirrorEditor jp-Editor jp-InputArea-editor" data-type="inline">
     <div class="CodeMirror cm-s-jupyter">
<div class=" highlight hl-ipython3"><pre><span></span> 
</pre></div>

     </div>
</div>
</div>
</div>

</div>
</body>







</html>
