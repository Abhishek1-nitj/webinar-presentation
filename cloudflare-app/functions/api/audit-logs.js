export async function onRequestGet(context) {
  const { env } = context;

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  try {
    if (!env.DB) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Cloudflare D1 binding DB is not configured',
          batches: [],
          recentLogs: [],
        }),
        { headers, status: 200 }
      );
    }

    const batchesQuery = await env.DB.prepare(
      `SELECT * FROM recovery_batches ORDER BY executed_at DESC LIMIT 10`
    ).all();

    const logsQuery = await env.DB.prepare(
      `SELECT * FROM recovery_audit_logs ORDER BY created_at DESC LIMIT 20`
    ).all();

    return new Response(
      JSON.stringify({
        success: true,
        batches: batchesQuery.results || [],
        recentLogs: logsQuery.results || [],
      }),
      { headers, status: 200 }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message,
        batches: [],
        recentLogs: [],
      }),
      { headers, status: 500 }
    );
  }
}
