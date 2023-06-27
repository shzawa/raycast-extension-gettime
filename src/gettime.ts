#!/usr/bin/env node

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Test
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.packageName Test

// Documentation:
// @raycast.author Shotaro Ozawa

import { Clipboard, closeMainWindow, popToRoot } from "@raycast/api";

(async () => {
  await Clipboard.copy(new Date().getTime())
  await closeMainWindow({clearRootSearch: true});
  await popToRoot({ clearSearchBar: true });
})()
