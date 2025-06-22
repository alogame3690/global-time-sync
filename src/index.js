export default {
  async fetch(request, env, ctx) {
    const now = new Date();
    const iso = now.toISOString();
    const timestamp = now.getTime();

    // ✅ Cộng 7 tiếng để ra giờ Việt Nam
    const utc7 = new Date(timestamp + 7 * 60 * 60 * 1000);

    return new Response(
      JSON.stringify({
        utc: iso,
        timestamp,
        gmt7: gmt7.toISOString()
      }),
      {
        headers: {
          'content-type': 'application/json'
        }
      }
    );
  }
};
