
### poc-nats

The repository is only simple exemple with NATs where 3 consumers subscribed in the channel, and one producer create messages to channel.


### Nats Port.

- 4222, 4223, 4224 are clients.
- 8222 is an HTTP management port for information reporting.
- 6222 is a routing port for clustering.

### Notes:

```shell
# You can start application with:
docker-compose up

# You can view logs of consumer with:
docker logs consumer-1 -f
docker logs consumer-2 -f
docker logs consumer-3 -f


# You can producer message with:
curl -X POST http://localhost:5001/v1/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john.doe@example.com"}'
```
