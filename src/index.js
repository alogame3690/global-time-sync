export default {
  async fetch(request, env, ctx) {
    const now = new Date();                       // Thời gian hiện tại UTC
    const iso = now.toISOString();                // Định dạng UTC ISO
    const timestamp = now.getTime();              // Epoch milliseconds

    // ✅ Thêm 7 tiếng = 7 * 60 * 60 * 1000 ms
    const gmt7 = new Date(timestamp + 7 * 60 * 60 * 1000);

    return new Response(
      JSON.stringify({
        utc: iso,
        timestamp: timestamp,
        gmt7: gmt7.toISOString()                  // ISO UTC+7
      }),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }
};
