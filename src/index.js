export default {
  async fetch(request, env, ctx) {
    const now = new Date();
    const iso = now.toISOString();
    const timestamp = now.getTime();
    const gmt7 = new Date(now.getTime() + 7 * 60 * 60 * 1000);

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
