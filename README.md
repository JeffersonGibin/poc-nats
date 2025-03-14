
### poc-nats

The repository is only simple exemple of pub/sub with NATs where 3 consumers subscribed in the channel, and one producer create messages to channel.
* [What is it NATS ?](https://docs.nats.io/nats-concepts/what-is-nats)
  
![image](https://github.com/user-attachments/assets/874889b5-7338-4632-b6d1-2ec2e6064d1a)


### Nats Port.

- 4222, 4223, 4224 are clients.
- 8222 is an HTTP management port for information reporting.
- 6222 is a routing port for clustering.

### Notes:

The application is running with Docker following you can find instructions to start project

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

### nats.conf

The file nats.conf is exclusive to settings NATs and is inject inside container. 
* You can find more informations about this [here](https://docs.nats.io/running-a-nats-service/configuration)
