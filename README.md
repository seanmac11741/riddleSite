# riddleSite

## A website where you must speak to enter 
- [x] proof of concept 
- [x] deploy to AWS 
- [ ] Get ssl working and setup 
- [ ] Fix aws env file load in docker-compose 
- [ ] setup CI/CD all the way to AWS with Jenkins I think?
- [ ] create rest api for storing riddles 
- [ ] mongo db on the backend for storing riddles 


### Development notes 
- To run project in dev, no nginx, for development, run: 
```bash 
docker-compose -f docker-compose-dev.yml up -d --build
```
dev website will then be available at: http://www.localhost:3000

- To run production build and test locally run:
```bash 
docker-compose -f docker-compose-prodLocal.yml up --build -d
```
prod test website will then be available at: http://www.localhost

- To hard reset all things docker... 
```bash 
docker system prune -a --volumes
```

- To tail logs from docker-compose containers: 
```bash 
docker-compose logs -f -t
```

### Deploy to AWS ECS 
- Login to AWS instance of linux machine 
```bash 
cd riddleSite/
sudo ./init-letsencrypt.sh
```
-Output should say that it is up and running