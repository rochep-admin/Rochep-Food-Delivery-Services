FROM node:14 AS builder

WORKDIR /usr/src/backend
COPY src src/

# COPY node_modules src/api/node_modules
COPY package*.json ./
COPY tsconfig.json ./ 

RUN npm install
RUN npm run build

FROM node:14-alpine
WORKDIR /usr/src/api
COPY package*.json ./
# COPY .npmrc ./

COPY --from=builder /usr/src/backend/dist ./dist/ 
RUN ls -lahS dist/

#  add libraries; sudo so non-root user added downstream can get sudo
# RUN apk add --no-cache \
#     sudo \
#     curl \
#     build-base \
#     g++ \
#     libpng \
#     libpng-dev \
#     jpeg-dev \
#     pango-dev \
#     cairo-dev \
#     giflib-dev \
#     python;

# #  add glibc and install canvas
# RUN apk --no-cache add ca-certificates wget  && \
#     wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
#     wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.29-r0/glibc-2.29-r0.apk && \
#     apk add glibc-2.29-r0.apk
# # RUN npm i canvas
RUN npm install
# --production
# ENV AWS_REGION=us-east-2
# ENV AWS_ID=AKIAX2WSCMATQYZ3ILSF
# ENV AWS_ACCESS_KEY="ifmcvU6RUJqJsX3bzZ9/X/aVP1O/U5V+J+BE+htb"
# ENV AWS_BUCKET=vlolr-dev
# ENV MONGO_URI="mongodb://localhost:27017/?readPreference=primary&ssl=false"
# ENV MONGO_DB_NAME=core
# ENV REDIS_HOST=cache
# ENV REDIS_PORT=6379
# ENV APP_PORT=5000
# ENV DEFAULT_CHUNK_SIZE=4194304
# ENV MAX_PARTS_PER_VIDEO=100
# ENV MAX_PAYLOAD_SIZE=4194304
# ENV NODE_ENV=dev
EXPOSE 4000
CMD [ "node" ,"./dist/index.js" ]
