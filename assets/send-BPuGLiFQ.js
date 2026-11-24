import{il as o,b as r}from"./index-CWAvRbZo.js";function s(e){return e.repo.toLowerCase().endsWith("-site")}function a(e){if(s(e))throw new Error(`Refusing to write feedback to ${e.owner}/${e.repo}: it is a public site repository.`)}function p(e,t,n){const i=n!==void 0&&n.pts!==t.pts?[o(n.pts,t.pts),e.trim()].filter(Boolean).join(`

`):e;return r(i,t)}async function c(e){return a(e.repo),{commentId:(await e.client.createIssueComment(e.repo,e.issueNumber,e.feedback.trimEnd())).id}}export{a,p as g,s as i,c as s};
