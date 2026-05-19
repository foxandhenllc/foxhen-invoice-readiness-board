export const sample = {
  "repoName": "foxhen-invoice-readiness-board",
  "title": "Invoice Readiness Board",
  "subtitle": "Finance ops closeout sample",
  "serviceLine": "Invoice and closeout operations",
  "heroTitle": "Know which work is ready to invoice before month-end.",
  "heroCopy": "A fictional finance ops board that checks deliverables, approvals, payment path, blockers, and receipt reconciliation notes.",
  "primaryAction": "Check readiness",
  "secondaryAction": "Review blockers",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-invoice-readiness-board",
  "liveDemoUrl": "https://foxhen-invoice-readiness-board.vercel.app",
  "theme": {
    "accent": "#465a32",
    "accent2": "#e2b55f",
    "ink": "#101708",
    "soft": "#f2f8e9",
    "warm": "#fff3dc",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Ready invoices",
      "value": "11",
      "note": "sample accounts"
    },
    {
      "label": "Approval gaps",
      "value": "4",
      "note": "needs decision"
    },
    {
      "label": "Cash timing",
      "value": "6 days",
      "note": "median path"
    }
  ],
  "stages": [
    {
      "label": "Deliverables",
      "detail": "Match completed work to acceptance proof and project terms.",
      "status": "ready",
      "owner": "Ops",
      "index": 1
    },
    {
      "label": "Approval",
      "detail": "Surface missing signatures, unanswered questions, and scope deltas.",
      "status": "active",
      "owner": "Owner",
      "index": 2
    },
    {
      "label": "Invoice",
      "detail": "Preview invoice readiness, payment method, and expected timing.",
      "status": "waiting",
      "owner": "Finance",
      "index": 3
    },
    {
      "label": "Receipt",
      "detail": "Reconcile paid status and closeout notes.",
      "status": "queued",
      "owner": "Studio",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Design sprint",
      "detail": "Deliverables accepted, ready to bill",
      "status": "ready"
    },
    {
      "title": "Dashboard cleanup",
      "detail": "Pending final approval note",
      "status": "active"
    },
    {
      "title": "AI workflow",
      "detail": "Waiting on payment-path choice",
      "status": "waiting"
    },
    {
      "title": "Maintenance memo",
      "detail": "Queued for next cycle",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Readiness board",
      "detail": "A clear state model for billable work."
    },
    {
      "title": "Blocker report",
      "detail": "Exactly what prevents payment from moving."
    },
    {
      "title": "Closeout notes",
      "detail": "Receipt and follow-up tracking for repeat work."
    }
  ],
  "timeline": [
    {
      "time": "0-2 hrs",
      "detail": "Inventory billable work and proof"
    },
    {
      "time": "2-8 hrs",
      "detail": "Map blockers and readiness logic"
    },
    {
      "time": "8-12 hrs",
      "detail": "Package closeout and follow-up report"
    }
  ],
  "proof": [
    "Supports cashflow-focused ops engagements.",
    "Ties directly to the fastest-first-payout operating goal.",
    "Uses only fictional finance records."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
