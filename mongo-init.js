conn = new Mongo();
db = conn.getDB("admin");

db.auth('admin', 'admin')

db = db.getSiblingDB('admin')

db.createUser(
    {
        user: "cubo",
        pwd: "cubo",
        roles: [
            {
                role: "readWriteAnyDatabase",
                db: "admin"
            },
            {
                role: "userAdminAnyDatabase",
                db: "admin"
            },
            {
                role: "dbAdminAnyDatabase",
                db: "admin"
            },
            {
                role: "dbAdminAnyDatabase",
                db: "admin"
            }
        ]
    })
db.rols.insertMany([
    { 
        "options" : [
            {
                "path" : "/user", 
                "method" : "POST"
            }, 
            {
                "path" : "/pokemon/all", 
                "method" : "POST"
            }
        ], 
        "name" : "Register User"
    },
    { 
        
        "options" : [
            {
                "path" : "/pokemon", 
                "method" : "POST"
            }, 
            {
                "path" : "/pokemon", 
                "method" : "PUT"
            }, 
            {
                "path" : "/pokemon", 
                "method" : "DELETE"
            },
            {
                "path" : "/user/all", 
                "method" : "POST"
            }
        ], 
        "_id" : ObjectId("60df84b6ecb70e61f8bed74e"),
        "name" : "Admin User"
    }
    
]);
db.pokemons.insertMany([
    { 
        "name" : "Bulbasaur", 
        "type" : "Semilla", 
        "powerLevel" : NumberInt(200), 
    },
    { 
        "name" : "Charmander", 
        "type" : "Lagartija", 
        "powerLevel" : NumberInt(100), 
    },
    { 
        "name" : "Wartortle", 
        "type" : "Tortuga", 
        "powerLevel" : NumberInt(300), 
    }
]);
db.users.insertMany([
    { 
        "firstName" : "Stefhanie", 
        "lastName" : "Rizo", 
        "username" : "srizo", 
        "password" : "$2b$10$p3QVLq16WGKKmp5eEMMYwuOR5EycXTYt7yEBtj7hTTAG1j9YIgOkK", 
        "email" : "stefhanie.rizo@gmail.com", 
        "rol" : ObjectId("60df84b6ecb70e61f8bed74e"), 
    }
    
])