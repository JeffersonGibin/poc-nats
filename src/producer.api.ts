

import express from "express";
import { connect, StringCodec } from "nats";

const app = express();
app.use(express.json());
const port = process.env.API_PORT || 3000;

const publisher = async (input: { channel: string, message: string }) => {
    const nc = await connect({
        servers: [
            process.env.SERVER_NATS_URL_1 ?? '',
            process.env.SERVER_NATS_URL_2 ?? '',
            process.env.SERVER_NATS_URL_3 ?? '',
        ],
        user: process.env.USER_NATS,
        pass: process.env.PASS_NATS,
    });

    const sc = StringCodec();
    nc.publish(input.channel, sc.encode(input.message));
}

app.post("/v1/users", async (req, res) => {
    try {
        await publisher({
            channel: process.env.CHANNEL_NATS ?? '',
            message: JSON.stringify(req.body)
        });

        res.status(200).send({ message: "User created" });
    } catch (err) {
        res.status(500).send({ error: "Fail on create user" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});