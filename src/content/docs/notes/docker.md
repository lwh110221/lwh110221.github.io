---
title: Docker🐳容器入门
description: Docker🐳容器入门
---


# 1️⃣

## 创建一个名为 `Dockerfile` 的文件

```dockerfile
FROM alpine:latest
# 设置容器内的工作目录为 /app
WORKDIR /app

# 将当前目录下的所有文件复制到容器的 /app 目录下
COPY . /app

# 创建一个包含自己姓名全拼的文本文件并写入一些内容
RUN echo "罗文浩的docker容器，实验用，" > luowenhao.txt

WORKDIR dir-robots
ADD https://www.aliyun.com/robots.txt robots.txt

# 设置容器启动时执行的命令，保持容器运行
CMD ["sleep", "infinity"]

```



## 构建 Docker 镜像

image+名字全拼

```bash
docker build -t image_luowenhao .
```

## 创建并运行容器

```bash
docker run -d --name container_luowenhao image_luowenhao
```

## 查看容器的文件列表

```bash
docker exec container_luowenhao ls /app
```

## 查看文件内容

```bash
docker exec container_luowenhao cat /app/luowenhao.txt
```





# 2️⃣

## 拉取busybox镜像

```bash
docker pull busybox
```

## 创建一个名为 `network_luowenhao` 的自定义网络

```bash
docker network create network_luowenhao
```

## 创建并运行第一个容器（`busybox1_luowenhao`）并加入自定义网络

运行一个 `busybox` 容器并将其加入 `network_luowenhao`

```bash
docker run -dit --name busybox1_luowenhao --network network_luowenhao busybox
```

## 创建并运行第二个容器（`busybox2_luowenhao`）

```bash
docker run -dit --name busybox2_luowenhao busybox
```

## 将第二个容器加入自定义网络

将 `busybox2_luowenhao` 加入自定义网络 `network_luowenhao`：

```bash
docker network connect network_luowenhao busybox2_luowenhao
```

## 进入任意一个容器， `busybox1_luowenhao`尝试 ping `busybox2_luowenhao`：

```bash
docker exec -it busybox1_luowenhao sh
ping busybox2_luowenhao
```



# 3️⃣容器文件系统挂载

## 拉取nginx

```bash
docker pull nginx
```

## 创建网页文件

```bash
mkdir -p ./webfile
echo '修改默认网页 //luowenhao' >> ./webfile/index.html
echo '添加Host页面 //luowenhao' > ./webfile/host.html
```

## 运行容器并挂载

```bash
docker run -d --name webserver_luowenhao -p 8000:80 -v $(pwd)/webfile:/usr/share/nginx/html nginx
```

## 查看

```bash
curl 127.0.0.1:8000
curl 127.0.0.1:8000/host.html
```

