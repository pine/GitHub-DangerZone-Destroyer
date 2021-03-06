'use strict'

function refresh() {
  const snapshot = document.evaluate(
    '//*[@class="Subhead-heading"][contains(text(), "Danger Zone")]',
    document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  )
  for (let i = 0; i < snapshot.snapshotLength; i++) {
    snapshot.snapshotItem(i).style.display = 'none'
  }
}

document.addEventListener('pjax:end', refresh, false)
document.addEventListener('DOMContentLoaded', refresh, false)
