THIS IS SIMPLE RECRUITMENT TASK FOR SOFT BLUE COMPANY

to run app locally get into frontend folder and run:

- npm i
- npm run start

to run backend you need mongoDb Database, then you need to add it into env files f.e:
{
"env": {
"DB_USER": "username",
"DB_PASSWORD": "password",
"PORT": this is backend port,
"DOMAIN": ["frontend url"] //these are domains accepted by cors,
"MONGODB_URL": "mongodb url from cloud or local db"
}
}

You can also run the app remotely from the server using docker and trusted ssl container(steven)
To do this you need an domain adress, concrete routing and adjust these data in docker-compose.yml file
