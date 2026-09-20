CREATE TABLE IF NOT EXISTS recovery_batches (
    id TEXT PRIMARY KEY,
    filename TEXT NOT NULL,
    total_accounts INTEGER NOT NULL,
    total_amount TEXT NOT NULL,
    use_case TEXT NOT NULL,
    executed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recovery_audit_logs (
    id TEXT PRIMARY KEY,
    batch_id TEXT NOT NULL,
    invoice_id TEXT NOT NULL,
    client_name TEXT NOT NULL,
    amount TEXT NOT NULL,
    risk_tier TEXT NOT NULL,
    email_status TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
