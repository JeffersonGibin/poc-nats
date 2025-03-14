import { connect, StringCodec } from "nats";

(async () => {
    const nc = await connect({
        servers: [
            process.env.SERVER_NATS_URL_1 ?? '',
            process.env.SERVER_NATS_URL_2 ?? '',
            process.env.SERVER_NATS_URL_3 ?? '',
        ],
        user: process.env.USER_NATS,
        pass: process.env.PASS_NATS,
    });

    console.log("[Consumer 3]: connected to NATS!");

    const sc = StringCodec();
    const channel = process.env.CHANNEL_NATS ?? '';
    const sub = nc.subscribe(channel);

    for await (const m of sub) {
        const data = <unknown>JSON.parse(sc.decode(m.data));
        if (!data) continue;

        console.log(data);
    }

    await nc.drain();
})();
