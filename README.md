#### 前言

在项目的开发中,免不了打包和部署等过程,而这些过程都是机械式的,非常浪费时间,对于一些市面上的 CI/CD 工具,大部分都是要收费的. GitHub Actions 对于开源项目是完全 free 的,私有项目也有一定的免费福利.这对于自己搞一搞的项目就可以实现持续集成,解放自己的双手.

#### GitHub Actions 是什么?

持续集成一般由很多操作组成，像拉取代码、登录远程服务器、打包部署等，GitHub 把这些称作 action。

很多操作在各个项目中的是相似的，基本可以共享，GitHub 基于这一点相出了个很 awesome 的电子，允许开发者吧每个操作写成独立的脚本文件，存放到 repository 中，其他的开发者可以使用。

如果其他人需要某个 action 只引用他人的 action 就可以了，这样整个持续集成就变成了 actions 的组合。

GitHub 还做了一个官方市场，可以搜索到他人提交的 actions

#### 基本概念

GitHub Actions 有自己的一些术语。

1. Workflows（工作流程）：一个完整的持续集成工作流。
2. Events（事件）：一个事件可以是 push 代码，可以是一个 issue 被打开，GitHub actions 提供了很多这样的 event hook。
3. Jobs（任务）：一个 workflows 由一个或多个 jobs 组成，每个 jobs 就是一个持续集成的任务。
4. Steps（步骤）：一个 jobs 由一个或多个 steps 组成，每个 steps 就是任务的一个步骤，任务一步步完成。
5. Actions（动作）：每个 steps 执行一个或多个命令（action）。

#### Workflows 文件

GitHub Actions 的配置文件叫做 `workflows` 文件。存放在 repository 的 `.github/workflows` 目录。

workflows 文件采用 `YAML` 格式，文件名可以任意取，后缀名统一为 `.yml`。一个 repository 可以有多个 workflows 文件。GitHub Actions 只要发现 `.github/workflows` 目录下有 `.yml` 文件，就会自动执行。

workflows 文件有很多配置项，详情可见 [官方文档](https://docs.github.com/en/actions)。下面是一些基本。

1. `name`
   `name` 字段是该 workflows 的名称。如果省略该字段，默认为当前 workflows 文件名。

2. `on`
   `on` 字段代表该 workflows 触发的时机。

   ```yaml
   on:
     - push
   ```

   上面配置代表 push 代码时 执行 workflows。  
   完整的事件列表请查看[官方文档](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)。除了 repository 的事件，还可以是一些外部事件，或者定时运行。

3. `on.<push|pull_requests>.<branches|tags|paths>`
   `on` 字段还可以指定分支、标记或者路径。

   ```yaml
   on:
     push:
       - main
   ```

   上文代码表示 `main` 分支发生 `push` 时触发。

4. `jobs.<job_id>.name`
   workflows 文件的主体是 `jobs` 字段，表示要执行的一项或多谢任务。
   `jobs` 字段里需要写出每一项任务的 `job_id`，`job_id` 的 `name` 是任务的说明。

   ```yaml
   jobs:
     my_first_job:
       name: My first job
     my_second_job:
       name: My second job
   ```

   上文代码的 `jobs` 字段包含了两项任务，`job_id` 分别是 `my_first_job` 和 `my_second_job` 。

5. `jobs.<job_id>.needs`
   `needs` 字段指定当前任务的依赖关系，既运行顺序。默认所有的 `jobs` 都是并行运行的。

   ```yaml
   jobs:
     job1:
     job2:
       needs: job1
     job3:
       needs:
         - job1
         - job2
   ```

   上文代码指定 `job2` 需在 `job1` 执行完成之后执行，而 `job3` 则需要 `job1` 和 `job2` 都执行完成之后执行。

6. `jobs.<job_id>.runs-on`
   `runs-on` 指定运行所需的虚拟机环境，他是必填字段。目前可用的虚拟机如下：

   - windows：`windows-latest`，`windows-2022`，`windows-2019`
   - ubuntu：`ubuntu-latest`，`ubuntu-20.04`，`ubuntu-18.04`
   - mac：`macos-latest`，`macos-11`，`macos-10.15`

   下面的代码指定在虚拟机 `ubuntu-20.04` 中运行。

   ```yaml
   jobs:
     job1:
       runs-on: ubuntu-20.04
   ```

7. `jobs.<job_id>.if`
   `if` 字段以条件的形式控制当前 `job` 是否允许。

   ```yaml
   jobs:
     job1:
       if: github.ref_name == 'main'
   ```

   上文代码指定 `job1` 只在触发分支为 `main` 时允许。

8. `jobs.<job_id>.steps`
   `steps` 字段指定 `job` 的允许步骤，可以包含一个或多个步骤，每个步骤都可以指定以下几个字段：

   - `jobs.<job_id>.steps.if` 条件语句
   - `jobs.<job_id>.steps.name` 步骤名称
   - `jobs.<job_id>.steps.run` 步骤允许的命令或 action
   - `jobs.<job_id>.steps.env` 步骤所需的环境变量
   - `jobs.<job_id>.steps.uses` 引用他人写好的 action

   下面是一个完整的 workflows 文件：

   ```yaml
   name: learn-github-actions
   on:
     - push
   jobs:
     check-bats-version:
       runs-on: ubuntu-latest
       steps:
         - name: Fetch code
           uses: actions/checkout@v3
         - if: github.ref_name == 'main'
           name: Step up Node environment
           uses: actions/setup-node@v3
           with:
             node-version: '14'
         - env:

           run: npm install
   ```

#### 示例

将实现 react 应用持续集成，项目自动化部署到云服务器。
步骤分析：

- 拉取代码
- 打包代码
- 构建 docker 镜像
- 发布 docker 镜像
- 连接云服务器
- 删除原 docker 容器和镜像
- 拉去新 docker 镜像
- 运行 docker 容器

1.  编写 `Dockerfile` 和 `nginx.conf`
    在项目 `config` 目录，创建 `Dockerfile` 和 `nginx.conf` 两个文件，内容分别是。

        ```dockerfile
        # config/Dockerfile
        FROM nginx:1.15.2-alpine
        COPY ./dist /var/www
        COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
        EXPOSE 80
        CMD nginx -g "daemon off;"
        ```

        ```nginx
        # config/nginx.conf
        server {
          listen 80;
          root /var/www;
          index index.html index.htm;

          location / {
            try_files $uri $uri/ /index.html;
          }

          location /api {
            proxy_pass http://localhost:3000;
          }

          location ~ ^.+\..+$ {
            try_files $uri =404;
          }
        }
        ```

2.  编写 `workflows`
    在项目 `.github/workflows` 目录，创建 `workflows` 配置文件 `main.yml` 。文件名可以随意取。

        ```yaml
        # .github/workflows/main.yml
        name: CI
        on:
          - push
        env:
          PRO_NAME: test
        jobs:
          test:
            runs-on: ubuntu-latest
            steps:
              - run: |
                  echo "$PRO_NAME"
        ```

3.  在 github 创建 repository 并 push 代码。
    TODO 截图
    GitHub Actions 将自动执行

4.  编写 workflows
    将镜像托管在 docker hub 中，那么就需要登录 docker hub 。明文存放密码肯定不行，在 GitHub repository 中的 `Settings -> secrets -> action -> new action secrets` 中创建密钥。密钥名分别为 `DOCKER_USERNAME` 和 `DOCKER_TOKEN。` > 名字可以随意取，但配置中用到的变量名需相同！

        ```yaml
        # .github/workflows/main.yml
        name: CI
        on:
          - push
        env:
          # 构建的镜像名
          IMAGE_NAME: test
          # docker 容器访问端口
          PROT: 8091
        jobs:
          build:
            # 选择运行虚拟机环境
            runs-on: ubuntu-latest
            steps:
              # 拉去代码
              - name: Fetch branch code
                uses: actions/checkout@v3
              # Setup node 环境
              - name: Use Node.js
                uses: actions/setup-node@v3.1.1
                with:
                  # 选择 node 版本
                  node-version: 16.x
                  # 缓存 yarn
                  cache: yarn
              # 打包项目
              - name: Build Front
                run: |
                  yarn
                  yarn build
              - uses: actions/upload-artifact@v3
                with:
                  name: dist
                  path: ./dist
              - if: env.REF == 'dev'
                run: echo "PRO_ENV=dev" >> $GITHUB_ENV
              - if: env.REF == 'main'
                run: echo "PRO_ENV=prod" >> $GITHUB_ENV
              - uses: actions/checkout@v3
              - uses: actions/download-artifact@v3
                with:
                  name: dist
                  path: ./dist
              - uses: docker/setup-buildx-action@v1
              - uses: docker/login-action@v1
                with:
                  username: ${{ secrets.DOCKERHUB_USERNAME }}
                  password: ${{ secrets.DOCKERHUB_TOKEN }}
              - uses: docker/build-push-action@v2
                env:
                  DOCKER_IMAGE: ${{ secrets.DOCKERHUB_USERNAME }}/${{ env.IMAGE_NAME }}_${{ env.PRO_ENV }}
                with:
                  context: .
                  file: config/Dockerfile
                  push: true
                  tags: ${{ env.DOCKER_IMAGE }}:${{ github.sha }},${{ env.DOCKER_IMAGE }}:latest
              - if: env.REF == 'dev'
                run: echo "PRO_PORT=$PORT_DEV" >> $GITHUB_ENV
              - if: env.REF == 'main'
                run: echo "PRO_PROT=$PORT_PROD" >> $GITHUB_ENV
              - uses: appleboy/ssh-action@master
                env:
                  DOCKER_CONTAINER: ${{ secrets.DOCKERHUB_USERNAME }}_${{ env.IMAGE_NAME }}_${{ env.PRO_ENV }}
                  DOCKER_IMAGE: ${{ secrets.DOCKERHUB_USERNAME }}/${{ env.IMAGE_NAME }}_${{ env.PRO_ENV }}
                with:
                  host: ${{ secrets.REMOTE_HOST }}
                  key: ${{ secrets.REMOTE_PRIVATE_KEY }}
                  username: ${{ secrets.REMOTE_USERNAME }}
                  script: |
                    docker rm -f ${{ env.DOCKER_CONTAINER }}
                    docker rmi -f ${{ env.DOCKER_IMAGE }}
                    docker pull ${{ env.DOCKER_IMAGE }}
                    docker run --name ${{ env.DOCKER_CONTAINER }} -p ${{ env.PRO_PORT }}:80 -dit ${{ env.DOCKER_IMAGE }}
        ```
