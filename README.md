# riddleSite

## A website where you must speak to enter 
- [x] proof of concept 
- [ ] setup CI/CD all the way to AWS 
- [ ] create rest api for storing riddles 
- [ ] mongo db on the backend for storing riddles 


### Development notes 
- To run project in dev, run: 
```bash 
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
```
- To create docker image for production build, run: 
```bash 
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up -d --build
```