FROM node:23-alpine as build
WORKDIR /app
RUN ls
COPY ./package*.json ./
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src

RUN npm install && npm run build

FROM build

WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package*.json /app/
COPY --from=build /app/node_modules /app/node_modules


EXPOSE 3000